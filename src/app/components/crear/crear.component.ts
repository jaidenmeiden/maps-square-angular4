import { Component, OnInit } from '@angular/core';
import {Lugar} from "../../models/lugar";
import {LugaresService} from "../../services/lugares.service";
import {Observable} from "rxjs";
import {switchMap, map, debounceTime} from "rxjs/operators";
import {FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public lugar: Lugar;
  private results: Observable<any[]>;
  private searchField: FormControl;

  constructor(
    private _lugaresServices: LugaresService,
    public http: HttpClient
  ) {
    this.lugar = new Lugar(
      0,
      '',
      '',
      '',
      true,
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    );

    this.searchField = new FormControl();
    const URL = 'https://maps.google.com/maps/api/geocode/json?key='+this._lugaresServices.MAP_KEY;

    this.results = this.searchField.valueChanges.pipe(
      debounceTime(500),
      switchMap(
        (query)=>{
          if(query) {
            return  http.get(`${URL}&address=${query}`);
          } else {
            return null;
          }
        }
      ),
      map(
        (response: any)=>{
          return response.results;
        }
      )
    );
  }

  ngOnInit() {
  }

  seleccionarDireccion(result) {
    const addressComponents = result.address_components
    const adrressParams: any = {};
    for (let i = 0, len = addressComponents.length; i < len; i++) {
      const type = addressComponents[i].types[0].toString();
      switch (type) {
        case'street_number':
          adrressParams.street_number = addressComponents[i].long_name
          break
        case'route':
          adrressParams.route = addressComponents[i].long_name
          break
        case'locality':
          adrressParams.locality = addressComponents[i].long_name
          break
        case'country':
          adrressParams.country = addressComponents[i].long_name
          break
      }
    }
    this.lugar.calle = `${adrressParams.route}${adrressParams.street_number}`
    this.lugar.ciudad = adrressParams.locality
    this.lugar.pais = adrressParams.country
  }

  guardarLugar() {
    var direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
    this._lugaresServices.obtenerGeoData(direccion)
      .subscribe((response: any) => {
        if(typeof response.results[0] !== "undefined") {
          this.lugar.lat = response.results[0].geometry.location.lat;
          this.lugar.lng = response.results[0].geometry.location.lng;

          this.lugar.id = Date.now();
          this._lugaresServices.guardarLugarSockets(this.lugar);
          alert("Información almacenada con exito!");
          this.lugar = new Lugar(
            0,
            '',
            '',
            '',
            true,
            '',
            '',
            '',
            '',
            '',
            '',
            ''
          );
        }
      });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  title = 'Platzi Square';
  a = 3;
  b = 7;
  listo = false;
  nombre:string = '';

  lugares:any = [
    {plan: 'gratuito', cercania: 1, distancia: 1, active: true, nombre:'Florería la Gardenia'},
    {plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Donas la pasadita'},
    {plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Veterinaria Huellitas Felices'},
    {plan: 'gratuito', cercania: 2, distancia: 10, active: false, nombre:'Sushi Suhiroll'},
    {plan: 'gratuito', cercania: 3, distancia: 35, active: true, nombre:'Hotel la Gracia'},
    {plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre:'Zapatería el Clavo'},
    {plan: 'pagado', cercania: 1, distancia: 3, active: true, nombre:'Panadería de Chía'},
    {plan: 'pagado', cercania: 3, distancia: 90, active: true, nombre:'Bizcochería'}
  ];
  lat:number = 4.6560663;//(Google Maps)
  lng:number = -74.0595918;//(Google Maps)
  constructor(){
    setTimeout(() => {
      this.listo = true;
    }, 3000);
  }

  hacerAlgo() {
    alert("Hola mundo!");
  }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  lugares:any = [
    {id: 1 ,plan: 'gratuito', cercania: 1, distancia: 1, active: true, nombre:'Florería la Gardenia', descripcion: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'},
    {id: 2 ,plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Donas la pasadita', descripcion: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'},
    {id: 3 ,plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Veterinaria Huellitas Felices', descripcion: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'},
    {id: 4 ,plan: 'gratuito', cercania: 2, distancia: 10, active: false, nombre:'Sushi Suhiroll', descripcion: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'},
    {id: 5 ,plan: 'gratuito', cercania: 3, distancia: 35, active: true, nombre:'Hotel la Gracia', descripcion: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'},
    {id: 6 ,plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre:'Zapatería el Clavo', descripcion: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'},
    {id: 7 ,plan: 'pagado', cercania: 1, distancia: 3, active: true, nombre:'Panadería de Chía', descripcion: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'},
    {id: 8 ,plan: 'pagado', cercania: 3, distancia: 90, active: true, nombre:'Bizcochería', descripcion: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}
  ];

  constructor(
    private afDB: AngularFireDatabase
  ) { }

  getLugares() {
    return this.lugares;
  }

  buscarLugar(id) {
    return this.lugares.filter((lugar) => { return lugar.id = id})[0] || null;
  }

  guardarLugar(lugar) {
    console.log(lugar);
    this.afDB.database.ref('lugares/1').set(lugar);
  }
}

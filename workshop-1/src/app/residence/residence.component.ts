import { Component } from '@angular/core';
import { Residence } from '../core/model/residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  searchItem:string='';
  visiblity = false
  selectedResidence: Residence | null = null;
  alert=false
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpeg", status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpg", status:
    "Disponible" },
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg", status:
    "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"../../assets/images/R4.jpg", status: "En Construction"}
    ];
    showLocation(residence: any){
      this.alert=false
      this.visiblity=true
      this.selectedResidence = residence;
      if(residence.address=='inconnu'){
this.alert=true
      }
    }
    get filteredResidences(): Residence[] {
      // Filtre les résidences en fonction de l'adresse
      return this.listResidences.filter((residence) =>
        residence.address.toLowerCase().includes(this.searchItem.toLowerCase())
      );
    }
  

}

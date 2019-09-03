import { Injectable } from '@angular/core';
import { Item } from './item';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

items: Item[] = [
	{ id: 0,
  	title: "Liste2 / Item 1",
  	image: "assets/img/danger/A1a.png",
    categorie: "danger",
  	coment: "Virage a droite" },
	{ id: 1,
  	title: "Liste2 / Item 2",
  	image: "assets/img/danger/A1b.png",
    categorie: "danger",
  	coment: "Virage a gauche" },
    { id: 2,
  	title: "Liste2 / Item 2",
  	image: "assets/img/intersection/AB1.png",
    categorie: "intersection",
  	coment: "Ceder le passage a droite" },
     { id: 3,
  	title: "Liste2 / Item 2",
  	image: "assets/img/intersection/AB2.png",
    categorie: "intersection",
  	coment: "Ceder le passage" },
  ];

  constructor() { }
  
   getAll() {
	return this.items;
  }
  
   get(id: number) {
	if (id < 0 || id >= this.items.length) {
  	return null;
	}
	return this.items[id];
  }
  
  getbyCategorie(categorie: string){
  let tab: Item[] = []
  for( var i=0 ;i<this.items.length;i++){
    if(categorie == this.items[i].categorie)
    tab.push(this.items[i])
  }
  return tab
  }
}

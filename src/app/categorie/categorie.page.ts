import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import{ Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  categories = [
    "danger" , "intersection" ,  
    ]
  
  constructor( private router: Router) { }

  ngOnInit() {
  }
  
   onClickCategorie(categorie) {
	let navigationExtras: NavigationExtras = {
  	queryParams: { categorie: categorie }
	}
	this.router.navigate(['list-by-categorie'], navigationExtras)
  }

}

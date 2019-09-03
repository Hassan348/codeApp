import { Component, OnInit } from '@angular/core';
import{ Router,ActivatedRoute,NavigationExtras } from '@angular/router';
import { ItemService } from '../services/item.service';
import { Item } from '../services/item';

@Component({
  selector: 'app-list-by-categorie',
  templateUrl: './list-by-categorie.page.html',
  styleUrls: ['./list-by-categorie.page.scss'],
})
export class ListByCategoriePage implements OnInit {

items = null;

  constructor(private route: ActivatedRoute, private itemService: ItemService,private router: Router) {
  
  this.route.queryParams.subscribe(params => {
  	if (params && params.categorie) {
    	this.items = this.itemService.getbyCategorie(params.categorie)
  	}
	})
  
}
  ngOnInit() {
  }
  
  onClickItem(itemId) {
	let navigationExtras: NavigationExtras = {
  	queryParams: { id: itemId }
	}
	this.router.navigate(['detail'], navigationExtras)
  }

}

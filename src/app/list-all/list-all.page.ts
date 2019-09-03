import { Component, OnInit } from '@angular/core';
import{ Router, NavigationExtras } from '@angular/router';
import { ItemService } from '../services/item.service';
import { Item } from '../services/item';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.page.html',
  styleUrls: ['./list-all.page.scss'],
})
export class ListAllPage implements OnInit {
   
   items: Item[] = null

  constructor(private itemService: ItemService , private router: Router) { 
    this.getItems()
  }

  ngOnInit() {
  }
  
  getItems() {
	this.items = this.itemService.getAll();
  }
  
   onClickItem(itemId) {
	let navigationExtras: NavigationExtras = {
  	queryParams: { id: itemId }
	}
	this.router.navigate(['detail'], navigationExtras)
  }
}

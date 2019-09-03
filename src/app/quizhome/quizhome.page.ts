import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-quizhome',
  templateUrl: './quizhome.page.html',
  styleUrls: ['./quizhome.page.scss'],
})
export class QuizhomePage implements OnInit {
lastQuiz=0;
  constructor(private storage: Storage) { 
  //recuperer le resultat du dernier quizz
  storage.get('lastquizz').then((val)=>{
  this.lastQuiz=val
  })
  }

  ngOnInit() {
  }
  
    test() {
	this.storage.set('lastQuiz', 9);

	this.storage.get('lastQuiz').then( (val) => {
  	this.lastQuiz = val
	})
  }


}

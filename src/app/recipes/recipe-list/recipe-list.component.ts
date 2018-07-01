import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('This a Test', 'This Simply a Test', 'http://www.arihanthospital.org/wp-content/uploads/2014/10/Balanced-Diet.jpg'),
    new Recipe('This a Test', 'This Simply a Test', 'http://www.arihanthospital.org/wp-content/uploads/2014/10/Balanced-Diet.jpg')
  ];
  

  constructor() { }

  ngOnInit() {
  }

}

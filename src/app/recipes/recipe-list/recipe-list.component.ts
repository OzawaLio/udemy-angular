import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe','test','https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200-1024x683.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}

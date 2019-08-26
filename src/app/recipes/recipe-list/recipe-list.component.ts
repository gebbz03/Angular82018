import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('Test Recipe','Test Desc','https://shipkarta.com/wp-content/uploads/2019/06/logo_180_80.png'),
    new Recipe('Test Recipe 2','Test Desc 2','https://shipkarta.com/wp-content/uploads/2019/06/logo_180_80.png'),
    new Recipe('Test Recipe 3','Test Desc 3','https://shipkarta.com/wp-content/uploads/2019/06/logo_180_80.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}

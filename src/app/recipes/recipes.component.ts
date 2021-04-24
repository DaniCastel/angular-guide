import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  mode = new FormControl('over');
  selectedRecipe: Recipe;
  constructor() {}

  ngOnInit(): void {}
}

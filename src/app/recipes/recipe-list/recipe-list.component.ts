import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Test recipe 1',
      'descr',
      'https://images-na.ssl-images-amazon.com/images/I/A1xYts-p%2BEL.png'
    ),
    new Recipe(
      'Test recipe 2',
      'descr',
      'https://images-na.ssl-images-amazon.com/images/I/A1xYts-p%2BEL.png'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe): void {
    console.log(recipe, '1');
    this.recipeWasSelected.emit(recipe);
  }
}

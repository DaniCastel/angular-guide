import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingList } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe 1',
      'descr',
      'https://images-na.ssl-images-amazon.com/images/I/A1xYts-p%2BEL.png',
      [new Ingredient('french fries', 20), new Ingredient('meat', 1)]
    ),
    new Recipe(
      'Test recipe 2',
      'descr',
      'https://images-na.ssl-images-amazon.com/images/I/A1xYts-p%2BEL.png',
      [new Ingredient('buns', 2), new Ingredient('fish', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingList) {}

  getRecipes() {
    //   without parameters this function returns a copy
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}

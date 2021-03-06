import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular-material modules
import { MaterialModule } from './material.module';

import { MatToolbarModule } from '@angular/material/toolbar';

import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingList } from './shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerComponent,
    ServersComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MaterialModule,
  ],
  providers: [ShoppingList],
  bootstrap: [AppComponent],
})
export class AppModule {}

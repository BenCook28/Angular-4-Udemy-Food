import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Brown Rice', 'Mix of Long and Sweet Rice', 'https://images.pexels.com/photos/461326/pexels-photo-461326.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'),
    new Recipe('Brown Rice', 'Mix of Long and Sweet Rice', 'https://images.pexels.com/photos/461326/pexels-photo-461326.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb')

  ];
    
  constructor() { }

  ngOnInit() {
  }

}

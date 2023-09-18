import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipe.model';
import { ReceipesService } from './receipes.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css'],
  providers: [ReceipesService],
})
export class ReceipesComponent {
  selectedReceipe: Receipe;

  constructor() {}
}

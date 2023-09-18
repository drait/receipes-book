import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ReceipesService } from '../receipes.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css'],
})
export class ReceipeListComponent implements OnInit {
  receipes: Receipe[];
  @Output() receipeWasSelected = new EventEmitter<Receipe>();

  constructor(private receipesService: ReceipesService) {}

  ngOnInit(): void {
    this.receipes = this.receipesService.getReceipes();
  }

  onReceipeSelected(receipe: Receipe) {
    this.receipeWasSelected.emit(receipe);
  }
}

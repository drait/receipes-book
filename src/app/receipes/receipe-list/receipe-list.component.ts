import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {

  @Output() receipeWasSelected = new EventEmitter<Receipe>();

  receipes: Receipe[] = [
    new Receipe("test receipe", "test description", "https://www.americanafoods.com/wp-content/uploads/2016/12/receipe-img1.jpg"),
    new Receipe("another test receipe", "another test description", "https://www.americanafoods.com/wp-content/uploads/2016/12/receipe-img1.jpg"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onReceipeSelected(receipe: Receipe) {
    this.receipeWasSelected.emit(receipe);

  }

}

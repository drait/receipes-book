import { Receipe } from './receipe.model';

export class ReceipesService {
  private receipes: Receipe[] = [
    new Receipe(
      'test receipe',
      'test description',
      'https://www.americanafoods.com/wp-content/uploads/2016/12/receipe-img1.jpg',
    ),
    new Receipe(
      'another test receipe',
      'another test description',
      'https://www.americanafoods.com/wp-content/uploads/2016/12/receipe-img1.jpg',
    ),
  ];

  getReceipes() {
    return this.receipes.slice();
  }
}

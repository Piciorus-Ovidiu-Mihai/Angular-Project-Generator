import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-review-stars',
  templateUrl: './review-stars.component.html',
  styleUrls: ['./review-stars.component.scss'],
})
export class ReviewStarsComponent {
  stars: number[] = [1, 2, 3, 4, 5];
  @Input()
  selectedValue: number;
  @Output() selectedValueEvent = new EventEmitter<number>();

  countStar(star) {
    this.selectedValue = star;
    this.selectedValueEvent.emit(this.selectedValue);
  }
}

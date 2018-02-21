import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent {
  @Input() commits: any;
  @Input() currentPage: number;
  @Input() showLoader: boolean;
  @Output('pagination') paginationData = new EventEmitter<number>();
  length: number = 0;

  public movePage(num) {
    this.paginationData.emit(num);
  }
}

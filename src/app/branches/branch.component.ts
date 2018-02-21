import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent {
  @Input() branches: any;
  @Input() currentBranch: string;
  @Output('selectedBranch') selectedBranch = new EventEmitter<string>();
  branchUrl: string = '';

  public getBranchCommits(branch: any) {
    this.selectedBranch.emit(branch);
  }
}

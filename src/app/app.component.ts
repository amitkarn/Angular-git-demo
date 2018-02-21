import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url: string = 'https://api.github.com/repos/angular/angular/branches';
  commitsUrl: string = 'https://api.github.com/repos/angular/angular/commits?per_page=15&&sha=';
  branches: any = [];
  selectedBranch: any;
  selectedPage: number = 1;
  currentBranch: string = 'master';
  commits: any;
  loading: boolean = true;

  constructor(private httpClient: HttpClient) {
    this.getMasterBranch();
    this.getBranches();
  }

  getBranches() {
    this.httpClient.get(this.url)
      .subscribe(
        (data: any[]) => {
          this.branches = data;

        }
      )
  }

  getMasterBranch() {
    this.httpClient.get(this.url + "/master")
      .subscribe(
        (data: any[]) => {
          console.log("Master Data", data);
          this.selectedBranch = data;
          this.getBranchCommits(this.selectedBranch.commit.sha, this.selectedPage);
        }
      )
  }

  getBranchCommits(branchSha, pageNum) {
    console.log("Url sent", this.commitsUrl + branchSha + '&page=' + pageNum);
    this.httpClient.get(this.commitsUrl + branchSha + '&page=' + pageNum)
      .subscribe(
        (data: any[]) => {
          this.loading = false;
          console.log(data);
          this.commits = data;
        }
      )
  }

  public handleEvent(selectedBranch: any) {
    console.log("Recieved data from branch", JSON.stringify(selectedBranch));
    this.loading = true;
    this.selectedBranch = selectedBranch;
    this.currentBranch = selectedBranch.name;
    this.getBranchCommits(selectedBranch.commit.sha, this.selectedPage);
  }

  public handlePaginationData(status: number) {
    console.log("Move ", status);
    if (status == 0 && this.selectedPage != 1) {
      this.getBranchCommits(this.selectedBranch.commit.sha, --this.selectedPage)
    } else {
      this.getBranchCommits(this.selectedBranch.commit.sha, ++this.selectedPage)
    }
  }
}

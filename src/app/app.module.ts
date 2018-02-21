import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {CommitComponent} from './commits/commit.component';
import {BranchComponent} from './branches/branch.component';
import {MomentModule} from 'angular2-moment';

@NgModule({
  declarations: [
    AppComponent, CommitComponent, BranchComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

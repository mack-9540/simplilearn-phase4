import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MainComponent } from './main/main.component';
import { QuestionComponent } from './question/question.component';
import { ReviewComponent } from './review/review.component';
import { DisplayComponent } from './display/display.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { applicationRoutes } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule} from "@angular/forms";
import { QuestionService } from './model/question.service';

@NgModule({
  declarations: [
    
    MainComponent,
    
    QuestionComponent,
    
    ReviewComponent,
    
    DisplayComponent,
    
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(applicationRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [QuestionService],
  bootstrap: [MainComponent]
})
export class AppModule { }

import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { QuestionService } from "../model/question.service";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"],
})
export class QuestionComponent implements OnInit {
  questionList: any;
  score: number;
  answers: string[];
  constructor(
    private _httpClient: HttpClient,
    private _questionService: QuestionService
  ) {}

  ngOnInit(): void {
    //   this._httpClient.get("http://localhost:3000/questions")
    //   .subscribe((result)=>{
    //     this.questionList = result;
    //     console.log(this.questionList);
    //   },
    //   (errors)=>{console.log('The error is'+ errors);})

    // }

    this._questionService.getAllQuestions().subscribe(
      (result) => {
        this.questionList = result;
        
        this._questionService.setQuestionList(this.questionList);
        this.answers = new Array(result.length);
        this.answers.fill("", 0, this.answers.length);
        this._questionService.setArray(this.answers);
      },
      (errors) => {
        console.log(errors);
      }
    );
  }

  
  

  onChangeHandler(selected: string, i: number) {
    this.answers[i] = selected.trim();
    
    this._questionService.setArray(this.answers);
    
  }
}

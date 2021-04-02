import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";
import { QuestionService } from "../model/question.service";
import { Review } from "../model/review";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.css"],
})
export class ReviewComponent implements OnInit {
  reviewArray: string[];
  qList: any;
  ansObj: Review[] = [];

  constructor(
    private _questService: QuestionService,
    private _httpClient: HttpClient
  ) {
    this.qList = this._questService.getQuestionList();
  }

  ngOnInit(): void {
    this.reviewArray = this._questService.getArray();
    this.ansObj = [];

    for (var i in this.qList) {
      let revObj: Review = new Review();
      revObj.flag = this.qList[i].correct.trim() === this.reviewArray[i].trim();
      revObj.correctAnswer = this.qList[i].correct.trim();
      revObj.selectedAnswer = this.reviewArray[i];
      this.ansObj.push(revObj);
    }
    //   const raOf=of(this.reviewArray);
    //   raOf.subscribe((result)=>{
    //     this.reviewArray=result;

    //   },
    //   (errors)=>{console.log(errors)})

    this._questService.setAnsObj(this.ansObj);
  }
}

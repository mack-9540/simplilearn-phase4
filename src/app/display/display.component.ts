import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../model/question.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  displayList:any;
  ctr:number=0;

  constructor(private _questService:QuestionService) { }

  ngOnInit(): void {

    console.log(this._questService.ansObj);

    this.displayList=this._questService.getAnsObj();
    this.ctr=0;
    for(let disp of this.displayList){

      if(disp.flag===true){
        this.ctr++;
      }

    }

  }

}

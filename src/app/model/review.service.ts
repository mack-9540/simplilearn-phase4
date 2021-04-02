import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";



@Injectable()
export class ReviewService{
    constructor(private _httpClient: HttpClient){

    }

    getReview():Observable<String[]>{
        return this._httpClient.get<String[]>("http://localhost:3000/review");
    }
}
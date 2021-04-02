import {Routes} from "@angular/router";
import { DisplayComponent } from "./display/display.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { QuestionComponent } from "./question/question.component";
import { ReviewComponent } from "./review/review.component";

export const applicationRoutes:Routes = [

    {path:'',redirectTo:'questions', pathMatch: 'full' },
    {path:'questions',component:QuestionComponent},
    {path:'review',component:ReviewComponent},
    {path:'display',component:DisplayComponent},
    {path:'**',component:PageNotFoundComponent}
]
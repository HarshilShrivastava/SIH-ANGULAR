import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { MarketingComponent } from './marketing/marketing.component';
import { TechnicalComponent } from './technical/technical.component';
import { LoginComponent } from './login/login.component';
import { CreateviewComponent } from './createview/createview.component';
import { JobsComponent } from './jobs/jobs.component';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
import { SignupComponent } from './user/signup/signup.component';
import { CandidateComponent } from './user/candidate/candidate.component';
import { OrcreateComponent } from './orcreate/orcreate.component';
import { JobformComponent } from './jobform/jobform.component';
import { OrviewComponent } from './orview/orview.component';
import { JobviewComponent } from './jobview/jobview.component';
import { CandiviewComponent } from './candiview/candiview.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: 'quiz' , component: QuizComponent},
  {path: 'tech' , component: TechnicalComponent},
  {path: 'mark' , component: MarketingComponent},
  {path: 'create', component: CreateviewComponent},
  {path: 'organ', component: OrcreateComponent},
  {path: 'job', component: JobsComponent},
  {path: 'level1', component: Level1Component},
  {path: 'level2', component: Level2Component},
 //  {path: 'candidate', component: CandidateComponent},
  {path: 'jobForm', component: JobformComponent},
  {path: 'orview', component: OrviewComponent},
  {path: 'jobview', component: JobviewComponent},
   // {path: 'signup', component: SignupComponent},
  {path: 'canview', component: CandiviewComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'candidate', component: UserComponent,
    children: [{ path: '', component: CandidateComponent }]
},
{
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignupComponent }]
},
  {path: '', redirectTo: '/quiz' , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

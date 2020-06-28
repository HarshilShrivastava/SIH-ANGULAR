import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MarketingComponent } from './marketing/marketing.component';
import { TechnicalComponent } from './technical/technical.component';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { QuizService } from './shared/quiz.service';
import { CreateviewComponent } from './createview/createview.component';
import { OrgcreateComponent } from './orgcreate/orgcreate.component';
import { JobsComponent } from './jobs/jobs.component';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
import { SignupComponent } from './signup/signup.component';
import { CandidateComponent } from './candidate/candidate.component';
import { OrcreateComponent } from './orcreate/orcreate.component';
import { JobformComponent } from './jobform/jobform.component';
import { OrviewComponent } from './orview/orview.component';
import { JobviewComponent } from './jobview/jobview.component';
import { ResumeComponent } from './resume/resume.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SelectProfileComponent } from './select-profile/select-profile.component';
import { FooterComponent } from './footer/footer.component';
import { CandiviewComponent } from './candiview/candiview.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { UniversityComponent } from './university/university.component';
import { UniversityReadComponent } from './university-read/university-read.component';
import { User } from './shared/user.model';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { JobApplyDialogComponent } from './dialogs/job-apply-dialog/job-apply-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { JobSearchComponent } from './job-search/job-search.component';
import { MatFormFieldModule, MatInputModule, MatSidenav, MatSidenavContainer, MatIconModule, MatToolbarModule, MatListModule, MatSidenavModule } from '@angular/material';
import { MatMenuModule} from '@angular/material/menu';
import { JobsAppliedComponent } from './candidate-ops/jobs-applied/jobs-applied.component';
import { ApplicantListComponent } from './organization-ops/applicant-list/applicant-list.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ErrorDialogComponent } from './shared/error-dialog/error-dialog.component';
import { QuizResultsComponent } from './quiz-ops/quiz-results/quiz-results.component';
import { RoundThreeComponent } from './quiz-ops/round-three/round-three.component';
import {MatTabsModule} from '@angular/material/tabs';
import { RecommendedJobsComponent } from './job-ops/recommended-jobs/recommended-jobs.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { GeneralDialogBoxComponent } from './dialogs/general-dialog-box/general-dialog-box.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { InstructionsPageComponent } from './quiz-ops/instructions-page/instructions-page.component';
import { FaqPageComponent } from './shared/faq-page/faq-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    NavbarComponent,
    MarketingComponent,
    TechnicalComponent,
    RegisterComponent,
    LoginComponent,
    CreateviewComponent,
    OrgcreateComponent,
    JobsComponent,
    Level1Component,
    Level2Component,
    SignupComponent,
    SignupPageComponent,
    CandidateComponent,
    OrcreateComponent,
    JobformComponent,
    OrviewComponent,
    JobviewComponent,
    ResumeComponent,
    CandiviewComponent,
    MultiselectComponent,
    LandingPageComponent,
    SelectProfileComponent,
    FooterComponent,
    CandiviewComponent,
    MultiselectComponent,
    UserComponent,
    UniversityComponent,
    UniversityReadComponent,
    JobApplyComponent,
    JobApplyDialogComponent,
    JobSearchComponent,
    JobsAppliedComponent,
    ApplicantListComponent,
    ErrorDialogComponent,
    QuizResultsComponent,
    RoundThreeComponent,
    RecommendedJobsComponent,
    GeneralDialogBoxComponent,
    InstructionsPageComponent,
    FaqPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
    PasswordStrengthMeterModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatTooltipModule,
    MatCheckboxModule,
    PdfViewerModule,
    MatExpansionModule,
    MatStepperModule,
    ReactiveFormsModule
  ],
  providers: [QuizService, User],
  bootstrap: [AppComponent],
  entryComponents: [JobApplyDialogComponent, ErrorDialogComponent, GeneralDialogBoxComponent]

})
export class AppModule { }

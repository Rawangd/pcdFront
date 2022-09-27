import { StudentService } from './pages/services/student/student.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatSidenavModule } from '@angular/material/sidenav';
import{MatListModule} from '@angular/material/list'
import{MatDividerModule} from '@angular/material/divider'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ClipboardModule} from '@angular/cdk/clipboard';

import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from'@angular/material/tooltip'

import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';

import{MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './sharepages/header/header.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import{MatChipsModule}from'@angular/material/chips'

import { CoursesComponent } from './pages/courses/courses.component';
import { ThirdofComponent } from './pages/thirdof/thirdof.component';
import { RegistercenterComponent } from './pages/registercenter/registercenter.component';
import { RegisterstudentComponent } from './pages/registerstudent/registerstudent.component';
import { RegisterformerComponent } from './pages/registerformer/registerformer.component';
import { AllprofComponent } from './pages/allprof/allprof.component';
import { AllcenterComponent } from './pages/allcenter/allcenter.component';
import { LoginstudentComponent } from './pages/loginstudent/loginstudent.component';
import { StudenthomeComponent } from './pages/studenthome/studenthome.component';
import { LoginformerComponent } from './pages/loginformer/loginformer.component';
import { LogincenterComponent } from './pages/logincenter/logincenter.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { AuthInterceptor } from './pages/_auth/auth.interceptor';
import { AuthGuard } from './pages/_auth/auth.guard';
import { HomeFormerComponent } from './pages/home-former/home-former.component';

import { StudentprofileComponent } from './pages/studentprofile/studentprofile.component';
import { BillingComponent } from './pages/billing/billing.component';
import{MessagesComponent}  from './pages/messages/messages.component';

import { UpdateprofileComponent } from './pages/updateprofile/updateprofile.component';
import { FormerService } from './pages/services/former/former.service';
import { FormerprofileComponent } from './pages/formerprofile/formerprofile.component';
import { UpdateformerprofileComponent } from './pages/updateformerprofile/updateformerprofile.component';
import { MessagesFormerComponent } from './pages/messages-former/messages-former.component';
import { FavoritesFormerComponent } from './pages/favorites-former/favorites-former.component';
import { PlanningStudentComponent } from './pages/planning-student/planning-student.component';
import { FavoritesStudentComponent } from './pages/favorites-student/favorites-student.component';
import { BillingFormerComponent } from './pages/billing-former/billing-former.component';
import { PlanningFormerComponent } from './pages/planning-former/planning-former.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormerChatComponent } from './pages/former-chat/former-chat.component';
import { HomeCenterComponent } from './pages/home-center/home-center.component';
import { ImageComponent } from './pages/image/image.component';
import { MycoursesComponent } from './pages/mycourses/mycourses.component';
import { InformatiqueComponent } from './pages/category/informatique/informatique.component';
import { MathematiqueComponent } from './pages/category/mathematique/mathematique.component';
import { AllstudentComponent } from './pages/allstudenttable/allstudent.component';
import { AllformertableComponent } from './pages/allformertable/allformertable.component';
import { AllcentertableComponent } from './pages/allcentertable/allcentertable.component';
import { AlladmintableComponent } from './pages/alladmintable/alladmintable.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import {MatPaginatorIntl,MatPaginatorModule} from '@angular/material/paginator';
import { LanguageComponent } from './pages/category/language/language.component';
import { PhysiquesComponent } from './pages/category/physiques/physiques.component';
import { DanceComponent } from './pages/category/dance/dance.component';
import { MusicComponent } from './pages/category/music/music.component';
import { SportsComponent } from './pages/category/sports/sports.component';
import { ChemistryComponent } from './pages/category/chemistry/chemistry.component';
import { HomeStudentComponent } from './pages/home-student/home-student.component';
import { AfficheProfileComponent } from './pages/affiche-profile/affiche-profile.component';
import { CityComponent } from './pages/city/city.component';
import { CenterFormerComponent } from './pages/center-former/center-former.component';
import { CenterCategoryComponent } from './pages/center-category/center-category.component';
import { CenterCoursesComponent } from './pages/center-courses/center-courses.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { RechercheProfCenterComponent } from './pages/recherche-prof-center/recherche-prof-center.component';
import { CvComponent } from './pages/cv/cv.component';
import { FormerCoursesComponent } from './pages/former-courses/former-courses.component';
import { CentertrainingsComponent } from './pages/centertrainings/centertrainings.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { CandidatureComponent } from './pages/candidature/candidature.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent,
    AboutComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,
    ThirdofComponent,
    RegistercenterComponent,
    RegisterstudentComponent,
    RegisterformerComponent,
    AllprofComponent,
    AllcenterComponent,
    LoginstudentComponent,
    StudenthomeComponent,
    LoginformerComponent,
    LogincenterComponent,
    ForbiddenComponent,
    AdminComponent,
    UserComponent,
    HomeFormerComponent,

    StudentprofileComponent,
    BillingComponent,
    MessagesComponent,
    UpdateprofileComponent,
    FormerprofileComponent,
    UpdateformerprofileComponent,
    MessagesFormerComponent,
    FavoritesFormerComponent,
    PlanningStudentComponent,
         FavoritesStudentComponent,
         BillingFormerComponent,
         PlanningFormerComponent,
         FormerChatComponent,
         HomeCenterComponent,
         ImageComponent,
         MycoursesComponent,
         InformatiqueComponent,
         MathematiqueComponent,
         AllstudentComponent,
         AllformertableComponent,
         AllcentertableComponent,
         AlladmintableComponent,
         LanguageComponent,
         PhysiquesComponent,
         DanceComponent,
         MusicComponent,
         SportsComponent,
         ChemistryComponent,
    HomeStudentComponent,
    AfficheProfileComponent,
    CityComponent,
    CenterFormerComponent,
    CenterCategoryComponent,
    CenterCoursesComponent,
    TeamsComponent,
    RechercheProfCenterComponent,
    CvComponent,
    FormerCoursesComponent,
    CentertrainingsComponent,
    AnnouncementsComponent,
    CandidatureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
    HttpClientModule,
  
    BrowserAnimationsModule,
  
    MatPaginatorModule,
    NgbModule ,
    NbEvaIconsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatBadgeModule,
    MatCardModule,
    ClipboardModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    NgMultiSelectDropDownModule



   
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    {provide: MatPaginatorIntl, useClass: AlladmintableComponent},
    {provide: MatPaginatorIntl, useClass: AllformertableComponent},
    {provide: MatPaginatorIntl, useClass: AllcentertableComponent},
    {provide: MatPaginatorIntl, useClass: AllstudentComponent},
    StudentService,
    FormerService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

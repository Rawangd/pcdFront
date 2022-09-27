import { CentertrainingsComponent } from './pages/centertrainings/centertrainings.component';
import { FormerCoursesComponent } from './pages/former-courses/former-courses.component';
import { CenterCoursesComponent } from './pages/center-courses/center-courses.component';
import { CenterCategoryComponent } from './pages/center-category/center-category.component';
import { CenterFormerComponent } from './pages/center-former/center-former.component';

import { MusicComponent } from './pages/category/music/music.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { AdminComponent } from './pages/admin/admin.component';
//import { StudentGuard } from './pages/guard/student.guard';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { StudenthomeComponent } from './pages/studenthome/studenthome.component';
import { LoginstudentComponent } from './pages/loginstudent/loginstudent.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcenterComponent } from './pages/allcenter/allcenter.component';
import { AboutComponent } from './pages/about/about.component';
import { AllprofComponent } from './pages/allprof/allprof.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegistercenterComponent } from './pages/registercenter/registercenter.component';
import { RegisterformerComponent } from './pages/registerformer/registerformer.component';
import { RegisterstudentComponent } from './pages/registerstudent/registerstudent.component';
import { ThirdofComponent } from './pages/thirdof/thirdof.component';
import { AuthGuard } from './pages/_auth/auth.guard';
import { UserComponent } from './pages/user/user.component';
import { HomeFormerComponent } from './pages/home-former/home-former.component';

import { StudentprofileComponent } from './pages/studentprofile/studentprofile.component';
import { BillingComponent } from './pages/billing/billing.component';
import { UpdateprofileComponent } from './pages/updateprofile/updateprofile.component';
import { MessagesFormerComponent } from './pages/messages-former/messages-former.component';
import { FavoritesFormerComponent } from './pages/favorites-former/favorites-former.component';
import { PlanningFormerComponent } from './pages/planning-former/planning-former.component';
import { FormerprofileComponent } from './pages/formerprofile/formerprofile.component';
import { UpdateformerprofileComponent } from './pages/updateformerprofile/updateformerprofile.component';
import { BillingFormerComponent } from './pages/billing-former/billing-former.component';
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
import { ChemistryComponent } from './pages/category/chemistry/chemistry.component';
import { DanceComponent } from './pages/category/dance/dance.component';
import { LanguageComponent } from './pages/category/language/language.component';
import { PhysiquesComponent } from './pages/category/physiques/physiques.component';
import { SportsComponent } from './pages/category/sports/sports.component';
import { HomeStudentComponent } from './pages/home-student/home-student.component';
import { AfficheProfileComponent } from './pages/affiche-profile/affiche-profile.component';
import { FavoritesStudentComponent } from './pages/favorites-student/favorites-student.component';
import { CityComponent } from './pages/city/city.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { RechercheProfCenterComponent } from './pages/recherche-prof-center/recherche-prof-center.component';
import { CvComponent } from './pages/cv/cv.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { CandidatureComponent } from './pages/candidature/candidature.component';


const routes: Routes = [{path:"",component:HomeComponent   },
{path:"home",component:HomeComponent   },
{path:"login",component:LoginComponent   },
{path:"about",component:AboutComponent   },
{path:"register",component:RegisterComponent   },
{path:"contact",component:ContactComponent  },
{path:"courses",component:CoursesComponent  },
{path:"center-former",component:CenterFormerComponent  },
{path:"home/courses",component:CoursesComponent},
{path:"home/register",component:RegisterComponent},
{path:"thirdof",component:ThirdofComponent},
{path:"home/thirdof",component:ThirdofComponent},
{path:"thirdof/registerstudent",component:RegisterstudentComponent},
{path:"thirdof/registerformer",component:RegisterformerComponent},
{path:"thirdof/registercenter",component:RegistercenterComponent},
{path:"courses/allprof",component:AllprofComponent},
{path:"home/courses/allprof",component:AllprofComponent},
{path:"allcenter",component:AllcenterComponent },
{path:"loginstudent", component:StudenthomeComponent},
{ path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
{ path: 'user', component: UserComponent ,  canActivate:[AuthGuard], data:{roles:['Student']} },
{ path: 'studentprofile', component: StudentprofileComponent,  canActivate:[AuthGuard], data:{roles:['Student']} },
{ path: 'billing', component: BillingComponent,  canActivate:[AuthGuard], data:{roles:['Student']} },
{ path: 'messages', component: MessagesComponent,  canActivate:[AuthGuard], data:{roles:['Student']} },
{ path: 'updateprofile', component: UpdateprofileComponent,  canActivate:[AuthGuard], data:{roles:['Student']} },
{path:"home-student/billing",component:BillingComponent,  canActivate:[AuthGuard], data:{roles:['Student']} },
{path:"studentprofile/updateprofile",component:UpdateprofileComponent,  canActivate:[AuthGuard], data:{roles:['Student']} },
{path:"home-student/studentprofile/updateprofile",component:UpdateprofileComponent,  canActivate:[AuthGuard], data:{roles:['Student']} },

{ path: 'home-center', component: HomeCenterComponent ,  canActivate:[AuthGuard], data:{roles:['Center']} },
{ path: 'home-student', component: HomeStudentComponent ,  canActivate:[AuthGuard], data:{roles:['Student']} },
{ path: 'favoriteStudent', component: FavoritesStudentComponent,  canActivate:[AuthGuard], data:{roles:['Student']} },

{path: "center-former/center-category/center-courses/:category", component: CenterCoursesComponent},
{path: "center-former/center-category/center-courses", component: CenterCoursesComponent},
{path: "center-category", component: CenterCategoryComponent},
{path: "center-former/center-category", component: CenterCategoryComponent},
{path: "center-former/courses", component: CoursesComponent},
{path: "forbidden", component: ForbiddenComponent},
{path: "login", component: LoginComponent},
{ path: 'admin', component: AdminComponent ,  canActivate:[AuthGuard], data:{roles:['Admin']} },
{ path: 'studenthome', component: StudenthomeComponent },
{path:"home-former", component:HomeFormerComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"home-former/messages-former", component:MessagesFormerComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"home-former/favorites-former", component:FavoritesFormerComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"home-former/planning-former", component:PlanningFormerComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"formerprofile", component:FormerprofileComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"updateformerprofile", component:UpdateformerprofileComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"home-former/billing-former", component:BillingFormerComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"billing-former", component:BillingFormerComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"messages-former", component:MessagesFormerComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"formerprofile/updateformerprofile", component:UpdateformerprofileComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },

{path:"former-chat", component:FormerChatComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"mycourses", component:MycoursesComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{ path: 'teams', component: TeamsComponent},
{ path: 'home-center/teams', component: TeamsComponent},
{ path: 'informatique', component: InformatiqueComponent},
{path:"center-former/courses/informatique", component:InformatiqueComponent},
{path:"home/center-former", component:CenterFormerComponent},

{ path: 'mathematique', component: MathematiqueComponent},
{ path: 'center-former/courses/mathematique', component: MathematiqueComponent},
{path:"center-former/courses/chemistry", component:ChemistryComponent},
{path:"chemistry", component:ChemistryComponent},
{path:"center-former/courses/dance", component:DanceComponent},
{path:"dance", component:DanceComponent},
{path:"center-former/courses/language", component:LanguageComponent},

{path:"language", component:LanguageComponent},
{path:"center-former/courses/language", component:LanguageComponent},
{path:"physiques", component:PhysiquesComponent},
{path:"sports", component:SportsComponent},

{path:"center-former/courses/physiques", component:PhysiquesComponent},
{path:"center-former/courses/sports", component:SportsComponent},
{path:"center-former/courses/music", component:MusicComponent},
{path:"music", component:MusicComponent},

{path:"afficheprofile", component:AfficheProfileComponent},
{path:"afficheprofile/:formerEmail/:courseName/:id", component:AfficheProfileComponent},
{path:"coursecity/:city",component:CityComponent},




{path:"home/afficheprofile", component:AfficheProfileComponent},
{path:"courses/chemistry/afficheprofile", component:AfficheProfileComponent},

{ path: 'image', component: ImageComponent},
{ path: 'admin/allstudenttable', component: AllstudentComponent},
{ path: 'admin/allformertable', component: AllformertableComponent},
{ path: 'admin/allcentertable', component: AllcentertableComponent},
{ path: 'admin/alladmintable', component: AlladmintableComponent},
{ path: 'recherche-prof-center', component: RechercheProfCenterComponent},
{ path: 'home-center/recherche-prof-center', component: RechercheProfCenterComponent},
{path:"cv", component:CvComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"home-center/cv", component:CvComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"home-student/studentprofile", component:StudentprofileComponent,  canActivate:[AuthGuard], data:{roles:['Student']} },
{path:"home-student/favoriteStudent", component:FavoritesStudentComponent,  canActivate:[AuthGuard], data:{roles:['Student']} },
{ path: 'home-student/formerCourses', component: FormerCoursesComponent},
{ path: 'formerCourses', component: FormerCoursesComponent},
{ path: 'home-student/centertrainings', component: CentertrainingsComponent},
{ path: 'centertrainings', component: CentertrainingsComponent},
{ path: 'announcement', component: AnnouncementsComponent},
{ path: 'home-former/announcement', component: AnnouncementsComponent},
{ path: 'home-center/candidature', component: CandidatureComponent},
{ path: 'candidature', component: CandidatureComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

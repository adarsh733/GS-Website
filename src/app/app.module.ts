import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CoursesComponent } from './courses/courses.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StaffComponent } from './staff/staff.component';
import { SchemesComponent } from './schemes/schemes.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LabComponent } from './lab/lab.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { AcademicComponent } from './academic/academic.component';
import { SupervisorsComponent } from './supervisors/supervisors.component';
import { PhdComponent } from './phd/phd.component';
import { PlacementsComponent } from './placements/placements.component';
import { ResearchScholarsComponent } from './research-scholars/research-scholars.component';
import { ResearchProjectsComponent } from './research-projects/research-projects.component';
import { PatentsComponent } from './patents/patents.component';
import { PublicationsComponent } from './publications/publications.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AlumniComponent } from './alumni/alumni.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    CoursesComponent,
    FacultyComponent,
    StaffComponent,
    SchemesComponent,
    NewsComponent,
    ContactComponent,
    HomeComponent,
    LabComponent,
    AchievementsComponent,
    AcademicComponent,
    SupervisorsComponent,
    PhdComponent,
    PlacementsComponent,
    ResearchScholarsComponent,
    ResearchProjectsComponent,
    PatentsComponent,
    PublicationsComponent,
    GalleryComponent,
    AlumniComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
       
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
       
      },
    
      {
        path: 'academic',
        component: AcademicComponent,
       
      },
      {
        path: 'achievements',
        component: AchievementsComponent,
       
      },
      {
        path: 'alumni',
        component: AlumniComponent,
       
      },
      
      {
        path: 'contact',
        component: ContactComponent,
       
      },
      {
        path: 'courses',
        component: CoursesComponent,
       
      },
      {
        path: 'faculty',
        component: FacultyComponent,
       
      },
      {
        path: 'gallery',
        component: GalleryComponent,
       
      },
      {
        path: 'lab',
        component: LabComponent,
       
      },
      {
        path: 'news',
        component: NewsComponent,
       
      },
      {
        path: 'patents',
        component: PatentsComponent,
       
      },
      {
        path: 'phd',
        component: PhdComponent,
       
      },
      {
        path: 'placements',
        component: PlacementsComponent,
       
      },
      {
        path: 'publications',
        component: PublicationsComponent,
       
      },
      {
        path: 'research-projects',
        component: ResearchProjectsComponent,
       
      },
      {
        path: 'research-scholars',
        component: ResearchScholarsComponent,
       
      },
      {
        path: 'schemes',
        component: SchemesComponent,
       
      },
      {
        path: 'staff',
        component: StaffComponent,
       
      },
      
      {
        path: 'suggestions',
        component: SuggestionsComponent,
       
      },
      {
        path: 'supervisors',
        component: SupervisorsComponent,
       
      }  
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

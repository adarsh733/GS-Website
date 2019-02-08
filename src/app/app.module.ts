import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CoursesComponent } from './courses/courses.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StaffComponent } from './staff/staff.component';
import { SchemesComponent } from './schemes/schemes.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { ActivitiesComponent } from './activities/activities.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { AluminusComponent } from './aluminus/aluminus.component';
import { ContactComponent } from './contact/contact.component';
import { TestConsulComponent } from './test-consul/test-consul.component';
import { StudentsComponent } from './students/students.component';
import { ClubComponent } from './club/club.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    CoursesComponent,
    FacultyComponent,
    StaffComponent,
    SchemesComponent,
    SyllabusComponent,
    ActivitiesComponent,
    NewsComponent,
    EventsComponent,
    AluminusComponent,
    ContactComponent,
    TestConsulComponent,
    StudentsComponent,
    ClubComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

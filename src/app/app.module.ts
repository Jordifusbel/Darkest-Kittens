import { ResourcesService } from './components/resources/resources.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScienceComponent } from './components/science/science.component';
import { BuildingsComponent } from './components/buildings/buildings.component';
import { KittensComponent } from './components/kittens/kittens.component';
import { ResourcesComponent } from './components/resources/resources.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { QuestsComponent } from './components/quests/quests.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { HomeComponent } from './components/home/home.component';
import { ScienceTimeComponent } from './components/science/science-time/science-time.component';
import { QuestTimeComponent } from './components/quests/quest-time/quest-time.component';

@NgModule({
  declarations: [
    AppComponent,
    ScienceComponent,
    BuildingsComponent,
    KittensComponent,
    ResourcesComponent,
    UserProfileComponent,
    QuestsComponent,
    WorkshopComponent,
    HomeComponent,
    ScienceTimeComponent,
    QuestTimeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFirestoreModule,
     AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [ResourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

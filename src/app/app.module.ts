import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { DevelopmentComponent } from './development/development.component';
import { NewsService } from './services/news.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { UsersService } from './servivces/users.service';
import { ItshareUsersTableComponent } from './itshare-users-table/itshare-users-table.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItshareInstructorComponent } from './itshare-instructor/itshare-instructor.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule } from '@angular/material';
import { UserDeailsComponent } from './user-deails/user-deails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    DevelopmentComponent,
    ItshareUsersTableComponent,
    AddUserComponent,
    ItshareInstructorComponent,
    UserDeailsComponent,
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,    
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  providers: [NewsService , UsersService],
  bootstrap: [AppComponent],
  entryComponents : [AddUserComponent,ItshareInstructorComponent,UserDeailsComponent]
})
export class AppModule { }

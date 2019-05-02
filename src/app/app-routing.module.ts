import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopmentComponent } from './development/development.component';
import { ItshareUsersTableComponent } from './itshare-users-table/itshare-users-table.component';

const routes: Routes = [
   { path : 'dev' , component: DevelopmentComponent} ,
   { path : 'users' , component: ItshareUsersTableComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

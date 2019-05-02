import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { UsersService } from './../servivces/users.service';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { Iuser } from '../servivces/user';
import { AddUserComponent } from './../add-user/add-user.component';
import { ItshareInstructorComponent } from '../itshare-instructor/itshare-instructor.component';
import { UserDeailsComponent } from '../user-deails/user-deails.component';
import { element } from 'protractor';

@Component({
  selector: 'app-itshare-users-table',
  templateUrl: './itshare-users-table.component.html',
  styleUrls: ['./itshare-users-table.component.css']
})
export class ItshareUsersTableComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) pager: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selectedRow;
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'city','customDataColumn'];
  mydataSource;
  subscribe: Subscription;
  constructor(private services: UsersService, private dialog: MatDialog) { }
   showDataOfChildComponent;
  ngOnInit() {
    this.subscribe = this.services.getusers().subscribe(data => {
      this.mydataSource = new MatTableDataSource<Iuser>(data);
      this.mydataSource.paginator = this.pager;
      this.mydataSource.sort = this.sort;
    })
  }
  findUserByName(name: HTMLInputElement) {
    this.applyFilter(name.value);
  }
  onRowClicked(row) {
    this.selectedRow = row;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.mydataSource.filter = filterValue;
  }
  openuserDialog() {
    const dialogRef = this.dialog.open(ItshareInstructorComponent, {
      width: '500px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.showDataOfChildComponent = result;
      console.log(` here's the data result ${result} `)
    })
  }
  openUserDetailsDialog() {
    const dialogRef = this.dialog.open(UserDeailsComponent, {
      width: '500px',
      data: { 
         name :this.selectedRow.name ,
          email : this.selectedRow.email ,
          city : this.selectedRow.address.city
        }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.showDataOfChildComponent = result;
      //console.log(` here's the data result ${result} `)
    })
  }
  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItshareUsersTableComponent } from '../itshare-users-table/itshare-users-table.component';
@Component({
  selector: 'app-user-deails',
  templateUrl: './user-deails.component.html',
  styleUrls: ['./user-deails.component.css']
})
export class UserDeailsComponent implements OnInit {
  recievedRow;
  constructor(public dialogRef: MatDialogRef<ItshareUsersTableComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.recievedRow = data;
  }
  ngOnInit() {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  mySoucres: Array<any>;
  @Output() sidenvaClose = new EventEmitter();
  constructor(private newsApi: NewsService) { }

  onSidenavClose() {
    this.sidenvaClose.emit();
  }
  ngOnInit() {
    this.newsApi.providerSources()
      .subscribe(data => {
        this.mySoucres = data['sources'];
      }
      )
  }

}

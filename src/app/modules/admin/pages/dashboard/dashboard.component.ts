import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/shared/services/app.breadcrumb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Dashboard', routerLink: ['/'] }
    ]);
   }

  ngOnInit(): void {
  }

}

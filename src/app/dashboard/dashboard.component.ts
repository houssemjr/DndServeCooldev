import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css',"../../assets/plugins/fontawesome-free/css/all.min.css",
  "../../assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css",
  "../../assets/cs/adminlte.min.css"]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

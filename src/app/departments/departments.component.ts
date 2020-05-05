import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments=
  [
    { "id":1,"name":"HTML"},
    { "id":2,"name":"CSS"},
    { "id":3,"name":"JS"},
    { "id":4,"name":"TS"},
    { "id":5,"name":"SCSS"},
  ]
  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  onselect(dp)
  {
    this.router.navigate(['/navbar/routing/departments',dp.id]);
  }

}

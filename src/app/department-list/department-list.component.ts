import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  public departmentId;
  constructor(private route:ActivatedRoute,private router :Router) { }

  ngOnInit(): void {
    let id =parseInt(this.route.snapshot.paramMap.get('id'))
    this.departmentId= id
  }

  showoverview()
  {
    this.router.navigate(['overview'],{relativeTo:this.route})
  }
  showcontact()
  {
    this.router.navigate(['contact'],{relativeTo:this.route})
  }

}

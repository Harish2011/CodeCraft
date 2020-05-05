import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-httpexample',
  templateUrl: './httpexample.component.html',
  styleUrls: ['./httpexample.component.css']
})
export class HttpexampleComponent implements OnInit {

  public employees=[];

  constructor(private _searchService :SearchService) { }

  ngOnInit(): void {
    this._searchService.getEmployees()
    .subscribe(data => this.employees=data);
  }

}

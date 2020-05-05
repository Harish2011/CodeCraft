import { Component, OnInit } from '@angular/core';
import { PcconceptService } from '../pcconcept.service';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  Sname
  constructor(private service: PcconceptService) {
    this.Sname=service.value
  }
  ngOnInit(): void {
  }


}

import { Component, OnInit } from '@angular/core';
import { PcconceptService } from '../pcconcept.service';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  Sname
  constructor(private service: PcconceptService) {
    this.Sname=service.value
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fact-detail',
  templateUrl: './fact-detail.component.html',
  styleUrls: ['./fact-detail.component.css']
})
export class FactDetailComponent implements OnInit {

  constructor() { }

  factDetail: any;

  ngOnInit(): void {
    this.factDetail = history.state.data;
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Route, Router } from '@angular/router';
import { merge, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { FactsService } from 'src/app/services/facts.service';

@Component({
  selector: 'app-fact-list',
  templateUrl: './fact-list.component.html',
  styleUrls: ['./fact-list.component.css']
})
export class FactListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  totalLength = 0;
  limit = 10;
  pageSize = 1;
  itemsxPage = 0;
  page = 0;
  allFacts = [];
  displayedColumns: string[] = [];
  dataSource= [];
  srcImage: string;
  constructor(
    private factService: FactsService, private router: Router
  ) { }


  ngOnInit(): void {
    this.getAllFacts();
    this.getImages();
  }

  getAllFacts(){
    let observable = {
      next: x => {
        this.allFacts = x.data;
        this.displayedColumns = Object.keys(this.allFacts[0]);
        this.displayedColumns.unshift('image');
        this.dataSource = this.allFacts;
        this.totalLength = x.total;
        this.pageSize = x.per_page;
        this.paginator.pageIndex = 1;
      },
      error: err => console.error('An error occurred :', err),  
      complete: () => {}  
    }
    this.factService.getAllFacts(this.page).subscribe(observable);
  }

  onPagination(e:any){
    this.page = e.pageIndex++;
    this.dataSource = [];
    let observable = {
      next: x => {
        this.allFacts = x.data;
        this.dataSource = this.allFacts;
        this.totalLength = x.total;
        this.pageSize = x.per_page;
      },
      error: err => console.error('An error occurred :', err),  
      complete: () => {}
    }
    this.factService.getAllFacts(this.page).subscribe(observable);
  }


  getImages(){
    this.srcImage = 'https://placekitten.com/70/';
  }

  openDetail(data:Object){
    this.router.navigateByUrl('fact-detail',
    {
      state: {data}
    });
  }
}

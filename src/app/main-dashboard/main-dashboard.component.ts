import { Component, inject, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss',
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    DashboardComponent
  ]
})
export class MainDashboardComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver){
  }

  destroyed = new Subject<void>();
  currentScreenSize!: string;
  column!:number;

  ngOnInit() {
    this.breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ])
    .pipe(takeUntil(this.destroyed))
    .subscribe(result => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.XSmall]) {
            this.currentScreenSize = 'XSmall';
            this.column=1;
            console.log("merda");
          }
          if (result.breakpoints[Breakpoints.Small]) {
            this.currentScreenSize = 'Small';
            this.column=1;
            console.log("merda");
          }
          if (result.breakpoints[Breakpoints.Medium]) {
            this.column=2;
            this.currentScreenSize = 'Medium';console.log("merda");
          }
          if (result.breakpoints[Breakpoints.Large]) {
            this.column=2;
            this.currentScreenSize = 'Large';console.log("merda");
          }
          if (result.breakpoints[Breakpoints.XLarge]) {
            this.column=2;
            this.currentScreenSize = 'XLarge';console.log("merda");
          }
        }
      });
  }

  /** Based on the screen size, switch from standard to one column per row */
  /*cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );*/
}

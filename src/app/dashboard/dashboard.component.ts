import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
    ]
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Web).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', description: '9,847.69', footer: 'points', cols: 1, rows: 1 },
          { title: 'Card 2', description: 'fodasefodase', footer: 'points', cols: 1, rows: 1 },
          { title: 'Card 3', description: 'fodasefodase', footer: 'members', cols: 1, rows: 1 },
          { title: 'Card 4', description: 'fodasefodase', footer: 'members', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', description: '9,847.69', footer: 'points', cols: 1, rows: 1 },
        { title: 'Card 2', description: 'fodasefodase', footer: 'points', cols: 1, rows: 1 },
        { title: 'Card 3', description: 'fodasefodase', footer: 'members', cols: 1, rows: 1 },
        { title: 'Card 4', description: 'fodasefodase', footer: 'members', cols: 1, rows: 1 }
      ];
    })
  );
}

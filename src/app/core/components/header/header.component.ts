import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { debounceTime, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
    <div class="responsive top-margin">
      <header
        class="fixed responsive "
        id="app-header"
      >
        <nav>
          <a (click)="clear()">
            <img
              src="assets/logo.png"
              alt="logo"
            />
          </a>

          <div class="field max round border fill small margin ">
            <input
              type="text"
              placeholder="Find a character"
              [(ngModel)]="searchQuery"
              (ngModelChange)="onSearchChange()"
            />
            @if (searchQuery.length > 0) {
              <i
                style="z-index: 999"
                (click)="clear()"
                >close</i
              >
            }
          </div>

          <button class="circle extra transparent">
            <i class="extra">account_circle</i>
          </button>
        </nav>
      </header>
    </div>
  `,
})
export class HeaderComponent implements OnInit {
  @Input() searchQuery: string = '';
  private searchQuerySubject = new Subject<string>();

  constructor(private router: Router) {
    this.searchQuerySubject
      .pipe(
        debounceTime(300),
        switchMap((query) => {
          const trimmedQuery = query.trim();

          if (trimmedQuery.length >= 3) {
            this.router.navigate(['/search', trimmedQuery]);
          } else if (trimmedQuery.length === 0) {
            this.router.navigate(['/']);
          }

          return [];
        }),
      )
      .subscribe();
  }

  ngOnInit() {}

  onSearchChange() {
    this.searchQuerySubject.next(this.searchQuery);
  }

  clear() {
    this.searchQuery = '';
    this.router.navigate(['/']);
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer/footer.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  private routerSubscription: Subscription = new Subscription();
  searchQuery: string = '';
  title: string = 'disney-edition';
  showLoading: boolean = false;

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showLoading = true;
      }

      if (event instanceof NavigationEnd) {
        const routeParams = this.activatedRoute.snapshot.firstChild?.params;
        if (routeParams && routeParams['name']) {
          this.searchQuery = routeParams['name'];
        }
        this.showLoading = false;
      }
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}

import { Component, HostListener, inject } from '@angular/core';
import { bootstrapCloudRain } from '@ng-icons/bootstrap-icons';
import { provideIcons, NgIcon } from '@ng-icons/core';
import { InputCommonComponent } from '@components/input-common/input-common.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [NgIcon, InputCommonComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  viewProviders: [provideIcons({ bootstrapCloudRain})]
})
export class HeaderComponent {
  router: Router = inject(Router);
  searchParams: string = "";
  headerMenu : {
    name: string,
    url: string
    }[] = [
      {
        name: "Home",
        url: "/"
      },
      {
        name: "About",
        url: "/about"
      },
      {
        name: "Contact",
        url: "/contact"
      }
    ]

  isActive(url: string): boolean {
    return this.router.url === url;
  }
  handleSearchChange (event: string) {
    // doing smth
  }


  classNames = {
    container: true,
    fixedHeader: false
  }

  @HostListener('window:scroll', ['$event']) 
  handleScroll() {
    this.classNames = {
      ...this.classNames,
      fixedHeader: window.scrollY > 83
    }    
  }
}

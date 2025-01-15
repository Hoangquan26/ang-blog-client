import { Component } from '@angular/core';
import { BannerComponent } from '../../components/home/banner/banner.component';
import { BlogContentComponent } from '@components/home/blog-content/blog-content.component';
@Component({
  selector: 'app-home',
  imports: [BannerComponent, BlogContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

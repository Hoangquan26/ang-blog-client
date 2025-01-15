import { Component } from '@angular/core';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonCommonComponent } from '@components/button-common/button-common.component';
import { blogList } from './bannerConstant';
import { BlogCommonComponent } from '@components/blog-common/blog-common.component';
@Component({
  selector: 'app-banner',
  imports: [BlogTagComponent, ButtonCommonComponent, BlogCommonComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  blogList = blogList;
  constructor() {

  }
}

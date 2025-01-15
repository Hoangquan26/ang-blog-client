import { Component, Input } from '@angular/core';
import { IBlog } from '../../interface/blog-constant';
import { BlogCardType } from './constants/blogCommonConstant'
@Component({
  selector: 'app-blog-common',
  imports: [],
  templateUrl: './blog-common.component.html',
  styleUrl: './blog-common.component.scss'
})
export class BlogCommonComponent {
  @Input() blog: IBlog | null = null;
  @Input() blogType: BlogCardType = BlogCardType.MINIMAL;
  classNames = {
    container: true,
    [this.blogType]: true
  }

  constructor() {
    console.log(this.blogType < BlogCardType.MINIMAL)
  }
}

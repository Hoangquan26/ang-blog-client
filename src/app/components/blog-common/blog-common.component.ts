import { Component, Input } from '@angular/core';
import { IBlog } from '../../interface/blog-constant';
import { BlogCardType } from './constants/blogCommonConstant'
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-blog-common',

  templateUrl: './blog-common.component.html',
  styleUrl: './blog-common.component.scss'
})
export class BlogCommonComponent {
  @Input() blog: IBlog | null = null;
  @Input() blogType: BlogCardType = BlogCardType.MEDIUM;
  classNames = {
    container: true,
    [this.blogType]: true
  }

  showImage = this.blogType > BlogCardType.MINIMAL;
  ngOnInit() {
    
  }
}

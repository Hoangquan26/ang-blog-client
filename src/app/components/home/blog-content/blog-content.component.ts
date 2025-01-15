import { Component } from '@angular/core';
import { BlogListComponent } from '@components/blog-list/blog-list.component';
import { blogListConstant } from './constants/blogContent.constant';

@Component({
  selector: 'app-blog-content',
  imports: [BlogListComponent],
  templateUrl: './blog-content.component.html',
  styleUrl: './blog-content.component.scss'
})
export class BlogContentComponent {
  blogLists = blogListConstant;
  constructor() {
    console.log(this.blogLists)
  }
}

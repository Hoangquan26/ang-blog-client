import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { SingleCategoryComponent } from '@pages/single-category/single-category.component';
import { SinglePostComponent } from '@pages/single-post/single-post.component';
import { TermsAndConditionComponent } from '@pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from '@pages/contact-us/contact-us.component'

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Homepage' },
    { path: 'category', component: SingleCategoryComponent, title: 'Category' },
    { path: 'post', component: SinglePostComponent, title: 'Post' },

    { path: 'contact', component: ContactUsComponent, title: 'About us' },
    { path: 'term-condition', component: TermsAndConditionComponent, title: 'Term and condition' },
];

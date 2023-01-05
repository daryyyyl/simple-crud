import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogItemComponent } from './blog/components/blog-item/blog-item.component';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';
import { BookItemComponent } from './book/components/book-item/book-item.component';
import { BookListComponent } from './book/pages/book-list/book-list.component';
import { FormComponent } from './user/components/form/form.component';
import { ProfileComponent } from './user/pages/profile/profile.component';

const routes: Routes = [
  {
    path: 'form',
    component: FormComponent

  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'blog-item',
    component: BlogItemComponent

  },
  {
    path: 'blog-list',
    component: BlogListComponent

  },
  {
    path: 'book-item',
    component: BookItemComponent

  },
  {
    path: 'book-list',
    component: BookListComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

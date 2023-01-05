import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { UserInterfaceComponent } from './models/user-interface/user-interface.component';



@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    UserInterfaceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { UserInterfaceComponent } from './models/user-interface/user-interface.component';



@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    UserInterfaceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookModule { }

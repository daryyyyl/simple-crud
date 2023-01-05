import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormComponent } from './components/form/form.component';
import { UserInterfaceComponent } from './models/user-interface/user-interface.component';



@NgModule({
  declarations: [
    ProfileComponent,
    FormComponent,
    UserInterfaceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { 
  
}

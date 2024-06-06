import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AddStudentComponent } from './add-student/add-student.component';
 import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
  {path:'getstudent', component:StudentlistComponent},
  {path:'addstudent', component:AddStudentComponent},
  {path:'editstudent/:id', component:EditStudentComponent},
  {path:'', redirectTo:'getstudent',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

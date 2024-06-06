import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from "./student/student.component";
import { StudentService } from './student/student.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { EditStudentComponent } from './edit-student/edit-student.component';

@NgModule({
    declarations: [
        AppComponent,
        StudentlistComponent,
        AddStudentComponent,
        EditStudentComponent
    ],
    providers: [
        
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ]
})
export class AppModule { }

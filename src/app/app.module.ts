import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SampleComponent } from './sample/sample.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodoComponent } from './todo/todo.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { NameeditorComponent } from './nameeditor/nameeditor.component'



@NgModule({
  declarations: [
    AppComponent,
    
    SampleComponent,
    CalculatorComponent,
    TodoComponent,
    LoginComponent,
    ProductComponent,
    NameeditorComponent,
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

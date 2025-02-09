import { MyserviceService } from './myservice.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// import các module và các component cần thiết cho project
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { ChangeTextDirective } from './change-text.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SqrtPipe } from './app.sqrt';
import { computeMsgId } from '@angular/compiler';

@NgModule({
  // một mảng chứa các khai báo của các component
  declarations: [
    AppComponent,
    NewComponentComponent,
    ChangeTextDirective,
    SqrtPipe
  ],
  // import một mảng các module sử dụng trong ứng dụng hoặc sử dụng trong các component
  imports: [
    BrowserModule,
    AppRoutingModule,
    // khai báo Http module
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'new-component',
        component: NewComponentComponent
      }
    ]),
    FormsModule
  ],
  // chứa các service mà chúng ta tạo ra
  providers: [MyserviceService],
  // chứa component chính để thực thi chương trình
  bootstrap: [AppComponent]
})
export class AppModule { }

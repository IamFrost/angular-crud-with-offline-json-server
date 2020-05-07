import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

// import this
import { HttpClientModule } from '@angular/common/http';

//
import { Routes, RouterModule } from '@angular/router';

// for html input
import { FormsModule } from '@angular/forms';
import { PostOneComponent } from './post-one/post-one.component';
import { DeleteOneComponent } from './delete-one/delete-one.component';
import { CreateOneComponent } from './create-one/create-one.component';
import { UpdateOneComponent } from './update-one/update-one.component';





@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostOneComponent,
    DeleteOneComponent,
    CreateOneComponent,
    UpdateOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import here
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

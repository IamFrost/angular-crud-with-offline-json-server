import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostOneComponent } from './post-one/post-one.component';
import { DeleteOneComponent } from './delete-one/delete-one.component';
import { CreateOneComponent } from './create-one/create-one.component';
import { UpdateOneComponent } from './update-one/update-one.component';


const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'postOne',
    component: PostOneComponent
  },
  {
    path: 'deleteOne',
    component: DeleteOneComponent
  },
  {
    path: 'createOne',
    component: CreateOneComponent
  },
  {
    path: 'updateOne',
    component: UpdateOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { RequestRouting } from './request-routing.module';
import { PostService } from './services/post.service';



@NgModule({
  declarations: [
    PostListComponent,
    PostItemComponent,
  ],
  imports: [
    CommonModule,
    RequestRouting,
    HttpClientModule,
  ],
  providers: [PostService]
})
export class RequestModule { }

import { Injectable } from '@angular/core';
import { posts } from '../mock';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts: any[];
  constructor() {
    this.posts = posts;
  }

  getAllPosts() {
    return this.posts;
  }
  getPostById(id: string) {
    return this.posts.find((el) => el.id === id);
  }
  addLike(id: string) {
    const post = this.posts.find((el) => el.id === id);
    post.likes += 1;
  }
}

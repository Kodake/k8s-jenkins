import { Post, IPost } from '../models/post.model';

class PostRepository {
  async create(post: Partial<IPost>): Promise<IPost> {
    const newPost = new Post(post);
    return await newPost.save();
  }

  async findById(id: string): Promise<IPost | null> {
    return await Post.findById(id).exec();
  }

  async findAll(): Promise<IPost[]> {
    return await Post.find().exec();
  }

  async update(id: string, post: Partial<IPost>): Promise<IPost | null> {
    return await Post.findByIdAndUpdate(id, post, { new: true }).exec();
  }

  async delete(id: string): Promise<IPost | null> {
    return await Post.findByIdAndDelete(id).exec();
  }
}

export default new PostRepository();

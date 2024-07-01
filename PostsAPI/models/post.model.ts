import { Schema, model, Document } from 'mongoose';

interface IPost extends Document {
  title: string;
  content: string;
}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

// Customize toJSON method to exclude __v
PostSchema.set('toJSON', {
  transform: (_, ret) => {
    delete ret.__v;
    return ret;
  }
});

// const PostSchema: Schema = new Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
// });

const Post = model<IPost>('Post', PostSchema);

export { Post, IPost };

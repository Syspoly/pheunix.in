import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, default: 'Pheunix Editorial Team' },
    readTime: { type: String, default: '5 min read' },
    category: { type: String, default: 'Business & Tech' },
    coverImage: { type: String, required: true },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model('BlogPost', blogPostSchema);

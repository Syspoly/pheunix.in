import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: {
      type: String,
      enum: ['Websites', 'Business Applications', 'E-commerce', 'Mobile Apps', 'Digital Marketing'],
      required: true,
    },
    summary: { type: String, required: true },
    clientType: { type: String, required: true },
    challenge: { type: String, required: true },
    solution: { type: String, required: true },
    outcome: { type: String, required: true },
    thumbnail: { type: String, required: true },
    tags: [{ type: String }],
    demoUrl: { type: String, default: '' },
    isFeatured: { type: Boolean, default: false },
    isDemo: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);

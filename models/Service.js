import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, default: 'Development' },
    shortDesc: { type: String, required: true },
    fullDesc: { type: String, required: true },
    icon: { type: String, default: 'Code' },
    image: { type: String, required: true },
    benefits: [{ type: String }],
    whoNeedsIt: [{ type: String }],
    problemsSolved: [{ type: String }],
    deliverables: [{ type: String }],
    processSteps: [
      {
        step: Number,
        title: String,
        desc: String,
      },
    ],
    faqs: [
      {
        question: String,
        answer: String,
      },
    ],
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model('Service', serviceSchema);

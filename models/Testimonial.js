import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
  {
    clientName: { type: String, required: true },
    roleOrBusiness: { type: String, required: true },
    quote: { type: String, required: true },
    rating: { type: Number, default: 5 },
    avatar: { type: String, default: '' },
    isSample: { type: Boolean, default: true },
    approved: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model('Testimonial', testimonialSchema);

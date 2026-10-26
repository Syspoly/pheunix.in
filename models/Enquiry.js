import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    businessName: { type: String, trim: true, default: '' },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    businessType: { type: String, trim: true, default: 'Other' },
    serviceRequired: { type: String, required: true, trim: true },
    projectDescription: { type: String, required: true, trim: true },
    budgetRange: { type: String, default: 'Not decided' },
    preferredTimeline: { type: String, default: 'Flexible' },
    consent: { type: Boolean, required: true },
    status: {
      type: String,
      enum: ['New', 'In-Progress', 'Contacted', 'Completed', 'Archived'],
      default: 'New',
    },
    internalNotes: { type: String, default: '' },
  },
  { timestamps: true }
);

export default mongoose.model('Enquiry', enquirySchema);

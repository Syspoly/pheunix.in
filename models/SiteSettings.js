import mongoose from 'mongoose';

const siteSettingsSchema = new mongoose.Schema(
  {
    companyName: { type: String, default: 'Pheunix' },
    tagline: { type: String, default: 'Your Digital Growth Partner' },
    email: { type: String, default: 'hello@pheunix.in' },
    phone: { type: String, default: '+91 98765 43210' },
    whatsappNumber: { type: String, default: '+919876543210' },
    address: { type: String, default: '32, Gajendra Nagar, Shobhawato ki Dhani, Opp. Victorian palace, Pal road, Jodhpur, Rajasthan, 342001, India' },
    socialLinks: {
      linkedin: { type: String, default: 'https://linkedin.com' },
      twitter: { type: String, default: 'https://twitter.com' },
      instagram: { type: String, default: 'https://instagram.com' },
      github: { type: String, default: 'https://github.com' },
    },
  },
  { timestamps: true }
);

export default mongoose.model('SiteSettings', siteSettingsSchema);

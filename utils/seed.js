import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import Service from '../models/Service.js';
import Project from '../models/Project.js';
import BlogPost from '../models/BlogPost.js';
import Testimonial from '../models/Testimonial.js';
import SiteSettings from '../models/SiteSettings.js';
import AdminUser from '../models/AdminUser.js';
import {
  defaultServices,
  defaultProjects,
  defaultBlogs,
  defaultTestimonials,
  defaultSettings,
} from '../data/defaultData.js';

dotenv.config();

const seed = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pheunix';
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB for seeding...');

    // Clear existing data
    await Service.deleteMany({});
    await Project.deleteMany({});
    await BlogPost.deleteMany({});
    await Testimonial.deleteMany({});
    await SiteSettings.deleteMany({});
    await AdminUser.deleteMany({});

    // Insert Services
    await Service.insertMany(defaultServices);
    console.log(`✅ Seeded ${defaultServices.length} services`);

    // Insert Projects
    await Project.insertMany(defaultProjects);
    console.log(`✅ Seeded ${defaultProjects.length} projects`);

    // Insert Blogs
    await BlogPost.insertMany(defaultBlogs);
    console.log(`✅ Seeded ${defaultBlogs.length} blog posts`);

    // Insert Testimonials
    await Testimonial.insertMany(defaultTestimonials);
    console.log(`✅ Seeded ${defaultTestimonials.length} testimonials`);

    // Insert Site Settings
    await SiteSettings.create(defaultSettings);
    console.log('✅ Seeded site settings');

    // Create Admin User
    const hashedPassword = await bcrypt.hash('pheunix123', 10);
    await AdminUser.create({
      username: 'admin',
      email: 'admin@pheunix.in',
      password: hashedPassword,
      role: 'superadmin',
    });
    console.log('✅ Seeded admin user: admin / pheunix123');

    console.log('🎉 Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error.message);
    process.exit(1);
  }
};

seed();

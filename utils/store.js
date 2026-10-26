import { getDbStatus } from '../config/db.js';
import Enquiry from '../models/Enquiry.js';
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

// In-memory fallback stores
let memoryEnquiries = [
  {
    _id: 'enq-sample-1',
    fullName: 'Ananya Sharma',
    businessName: 'Organic Harvest Market',
    email: 'ananya@organicharvest.in',
    phone: '+91 98765 12345',
    businessType: 'Shop or retail business',
    serviceRequired: 'E-commerce Solutions',
    projectDescription: 'We want to sell organic groceries and cold-pressed oils online with local home delivery in Bangalore.',
    budgetRange: '₹75,000–₹2,00,00',
    preferredTimeline: 'Within one month',
    consent: true,
    status: 'New',
    internalNotes: 'Initial contact via website solution finder.',
    createdAt: new Date(Date.now() - 3600000 * 4),
  },
  {
    _id: 'enq-sample-2',
    fullName: 'Karthik Raja',
    businessName: 'Veloce Logistics',
    email: 'karthik@velocelogistics.com',
    phone: '+91 94432 98765',
    businessType: 'Service provider or consultancy',
    serviceRequired: 'Web Applications',
    projectDescription: 'Need a dispatch tracking portal for 30 field vehicles with client SMS updates.',
    budgetRange: 'Above ₹2,00,000',
    preferredTimeline: 'Within three months',
    consent: true,
    status: 'In-Progress',
    internalNotes: 'Called on Oct 22. Scope doc shared for review.',
    createdAt: new Date(Date.now() - 3600000 * 24),
  },
];

let memoryServices = [...defaultServices];
let memoryProjects = [...defaultProjects];
let memoryBlogs = [...defaultBlogs];
let memoryTestimonials = [...defaultTestimonials];
let memorySettings = { ...defaultSettings };

export const store = {
  // Enquiries
  async getEnquiries(filter = {}) {
    if (getDbStatus()) {
      return await Enquiry.find(filter).sort({ createdAt: -1 });
    }
    return memoryEnquiries.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },

  async createEnquiry(data) {
    if (getDbStatus()) {
      return await Enquiry.create(data);
    }
    const newEnquiry = {
      _id: 'enq-' + Date.now(),
      ...data,
      status: 'New',
      internalNotes: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    memoryEnquiries.unshift(newEnquiry);
    return newEnquiry;
  },

  async updateEnquiry(id, updateData) {
    if (getDbStatus()) {
      return await Enquiry.findByIdAndUpdate(id, updateData, { new: true });
    }
    const index = memoryEnquiries.findIndex((e) => e._id === id);
    if (index !== -1) {
      memoryEnquiries[index] = { ...memoryEnquiries[index], ...updateData, updatedAt: new Date() };
      return memoryEnquiries[index];
    }
    return null;
  },

  async deleteEnquiry(id) {
    if (getDbStatus()) {
      return await Enquiry.findByIdAndDelete(id);
    }
    const index = memoryEnquiries.findIndex((e) => e._id === id);
    if (index !== -1) {
      return memoryEnquiries.splice(index, 1)[0];
    }
    return null;
  },

  // Services
  async getServices(includeInactive = false) {
    if (getDbStatus()) {
      const filter = includeInactive ? {} : { isActive: true };
      const list = await Service.find(filter).sort({ order: 1 });
      if (list.length > 0) return list;
    }
    return memoryServices;
  },

  async getServiceBySlug(slug) {
    if (getDbStatus()) {
      const s = await Service.findOne({ slug });
      if (s) return s;
    }
    return memoryServices.find((s) => s.slug === slug || s._id === slug);
  },

  async createService(data) {
    if (getDbStatus()) {
      return await Service.create(data);
    }
    const newService = {
      _id: 'srv-' + Date.now(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    memoryServices.push(newService);
    return newService;
  },

  async updateService(id, data) {
    if (getDbStatus()) {
      return await Service.findByIdAndUpdate(id, data, { new: true });
    }
    const index = memoryServices.findIndex((s) => s._id === id || s.slug === id);
    if (index !== -1) {
      memoryServices[index] = { ...memoryServices[index], ...data, updatedAt: new Date() };
      return memoryServices[index];
    }
    return null;
  },

  async deleteService(id) {
    if (getDbStatus()) {
      return await Service.findByIdAndDelete(id);
    }
    const index = memoryServices.findIndex((s) => s._id === id || s.slug === id);
    if (index !== -1) {
      return memoryServices.splice(index, 1)[0];
    }
    return null;
  },

  // Projects
  async getProjects(category) {
    if (getDbStatus()) {
      const filter = category && category !== 'All' ? { category } : {};
      const list = await Project.find(filter).sort({ createdAt: -1 });
      if (list.length > 0) return list;
    }
    if (category && category !== 'All') {
      return memoryProjects.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }
    return memoryProjects;
  },

  async getProjectBySlug(slug) {
    if (getDbStatus()) {
      const p = await Project.findOne({ slug });
      if (p) return p;
    }
    return memoryProjects.find((p) => p.slug === slug || p._id === slug);
  },

  async createProject(data) {
    if (getDbStatus()) {
      return await Project.create(data);
    }
    const newProject = {
      _id: 'prj-' + Date.now(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    memoryProjects.unshift(newProject);
    return newProject;
  },

  async updateProject(id, data) {
    if (getDbStatus()) {
      return await Project.findByIdAndUpdate(id, data, { new: true });
    }
    const index = memoryProjects.findIndex((p) => p._id === id || p.slug === id);
    if (index !== -1) {
      memoryProjects[index] = { ...memoryProjects[index], ...data, updatedAt: new Date() };
      return memoryProjects[index];
    }
    return null;
  },

  async deleteProject(id) {
    if (getDbStatus()) {
      return await Project.findByIdAndDelete(id);
    }
    const index = memoryProjects.findIndex((p) => p._id === id || p.slug === id);
    if (index !== -1) {
      return memoryProjects.splice(index, 1)[0];
    }
    return null;
  },

  // Blogs
  async getBlogs() {
    if (getDbStatus()) {
      const list = await BlogPost.find().sort({ publishedAt: -1 });
      if (list.length > 0) return list;
    }
    return memoryBlogs;
  },

  async getBlogBySlug(slug) {
    if (getDbStatus()) {
      const b = await BlogPost.findOne({ slug });
      if (b) return b;
    }
    return memoryBlogs.find((b) => b.slug === slug || b._id === slug);
  },

  async createBlog(data) {
    if (getDbStatus()) {
      return await BlogPost.create(data);
    }
    const newBlog = {
      _id: 'blg-' + Date.now(),
      ...data,
      publishedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    memoryBlogs.unshift(newBlog);
    return newBlog;
  },

  async updateBlog(id, data) {
    if (getDbStatus()) {
      return await BlogPost.findByIdAndUpdate(id, data, { new: true });
    }
    const index = memoryBlogs.findIndex((b) => b._id === id || b.slug === id);
    if (index !== -1) {
      memoryBlogs[index] = { ...memoryBlogs[index], ...data, updatedAt: new Date() };
      return memoryBlogs[index];
    }
    return null;
  },

  async deleteBlog(id) {
    if (getDbStatus()) {
      return await BlogPost.findByIdAndDelete(id);
    }
    const index = memoryBlogs.findIndex((b) => b._id === id || b.slug === id);
    if (index !== -1) {
      return memoryBlogs.splice(index, 1)[0];
    }
    return null;
  },

  // Testimonials
  async getTestimonials(all = false) {
    if (getDbStatus()) {
      const filter = all ? {} : { approved: true };
      const list = await Testimonial.find(filter).sort({ createdAt: -1 });
      if (list.length > 0) return list;
    }
    return all ? memoryTestimonials : memoryTestimonials.filter((t) => t.approved);
  },

  async createTestimonial(data) {
    if (getDbStatus()) {
      return await Testimonial.create(data);
    }
    const newTestimonial = {
      _id: 'tst-' + Date.now(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    memoryTestimonials.unshift(newTestimonial);
    return newTestimonial;
  },

  async updateTestimonial(id, data) {
    if (getDbStatus()) {
      return await Testimonial.findByIdAndUpdate(id, data, { new: true });
    }
    const index = memoryTestimonials.findIndex((t) => t._id === id);
    if (index !== -1) {
      memoryTestimonials[index] = { ...memoryTestimonials[index], ...data, updatedAt: new Date() };
      return memoryTestimonials[index];
    }
    return null;
  },

  async deleteTestimonial(id) {
    if (getDbStatus()) {
      return await Testimonial.findByIdAndDelete(id);
    }
    const index = memoryTestimonials.findIndex((t) => t._id === id);
    if (index !== -1) {
      return memoryTestimonials.splice(index, 1)[0];
    }
    return null;
  },

  // Settings
  async getSettings() {
    if (getDbStatus()) {
      const s = await SiteSettings.findOne();
      if (s) return s;
    }
    return memorySettings;
  },

  async updateSettings(newSettings) {
    if (getDbStatus()) {
      return await SiteSettings.findOneAndUpdate({}, newSettings, { new: true, upsert: true });
    }
    memorySettings = { ...memorySettings, ...newSettings };
    return memorySettings;
  },
};

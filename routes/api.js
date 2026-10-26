import express from 'express';
import {
  createEnquiry,
  getAllEnquiries,
  updateEnquiry,
  deleteEnquiry,
} from '../controllers/enquiryController.js';
import {
  getServices,
  getServiceBySlug,
  getAdminServices,
  createService,
  updateService,
  deleteService,
} from '../controllers/serviceController.js';
import {
  getProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js';
import {
  getBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController.js';
import { login, getMe } from '../controllers/authController.js';
import {
  getSettings,
  updateSettings,
  getTestimonials,
  getAdminTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from '../controllers/settingsController.js';
import { protectAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/enquiries', createEnquiry);
router.get('/services', getServices);
router.get('/services/:slug', getServiceBySlug);
router.get('/projects', getProjects);
router.get('/projects/:slug', getProjectBySlug);
router.get('/blog', getBlogs);
router.get('/blog/:slug', getBlogBySlug);
router.get('/testimonials', getTestimonials);
router.get('/settings', getSettings);

// Auth routes
router.post('/auth/login', login);
router.get('/auth/me', protectAdmin, getMe);

// Protected Admin routes
// Enquiries
router.get('/admin/enquiries', protectAdmin, getAllEnquiries);
router.patch('/admin/enquiries/:id', protectAdmin, updateEnquiry);
router.delete('/admin/enquiries/:id', protectAdmin, deleteEnquiry);

// Services
router.get('/admin/services', protectAdmin, getAdminServices);
router.post('/admin/services', protectAdmin, createService);
router.put('/admin/services/:id', protectAdmin, updateService);
router.delete('/admin/services/:id', protectAdmin, deleteService);

// Projects
router.post('/admin/projects', protectAdmin, createProject);
router.put('/admin/projects/:id', protectAdmin, updateProject);
router.delete('/admin/projects/:id', protectAdmin, deleteProject);

// Blogs
router.post('/admin/blogs', protectAdmin, createBlog);
router.put('/admin/blogs/:id', protectAdmin, updateBlog);
router.delete('/admin/blogs/:id', protectAdmin, deleteBlog);

// Testimonials
router.get('/admin/testimonials', protectAdmin, getAdminTestimonials);
router.post('/admin/testimonials', protectAdmin, createTestimonial);
router.put('/admin/testimonials/:id', protectAdmin, updateTestimonial);
router.delete('/admin/testimonials/:id', protectAdmin, deleteTestimonial);

// Settings
router.put('/admin/settings', protectAdmin, updateSettings);

export default router;

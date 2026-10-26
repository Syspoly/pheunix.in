import { store } from '../utils/store.js';

export const getBlogs = async (req, res) => {
  try {
    const blogs = await store.getBlogs();
    return res.status(200).json({ success: true, count: blogs.length, data: blogs });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch blogs.' });
  }
};

export const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await store.getBlogBySlug(slug);
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Article not found.' });
    }
    return res.status(200).json({ success: true, data: blog });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch article.' });
  }
};

export const createBlog = async (req, res) => {
  try {
    const data = { ...req.body };
    if (!data.slug && data.title) {
      data.slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }
    const created = await store.createBlog(data);
    return res.status(201).json({ success: true, message: 'Blog article created successfully.', data: created });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Failed to create article.' });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await store.updateBlog(id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Article not found.' });
    }
    return res.status(200).json({ success: true, message: 'Blog article updated successfully.', data: updated });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Failed to update article.' });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await store.deleteBlog(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Article not found.' });
    }
    return res.status(200).json({ success: true, message: 'Blog article deleted successfully.', data: deleted });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Failed to delete article.' });
  }
};


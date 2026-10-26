import { store } from '../utils/store.js';

export const getProjects = async (req, res) => {
  try {
    const { category } = req.query;
    const projects = await store.getProjects(category);
    return res.status(200).json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch projects.' });
  }
};

export const getProjectBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const project = await store.getProjectBySlug(slug);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found.' });
    }
    return res.status(200).json({ success: true, data: project });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch project.' });
  }
};

export const createProject = async (req, res) => {
  try {
    const data = { ...req.body };
    if (!data.slug && data.title) {
      data.slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }
    const created = await store.createProject(data);
    return res.status(201).json({ success: true, message: 'Project created successfully.', data: created });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Failed to create project.' });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await store.updateProject(id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Project not found.' });
    }
    return res.status(200).json({ success: true, message: 'Project updated successfully.', data: updated });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Failed to update project.' });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await store.deleteProject(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Project not found.' });
    }
    return res.status(200).json({ success: true, message: 'Project deleted successfully.', data: deleted });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Failed to delete project.' });
  }
};


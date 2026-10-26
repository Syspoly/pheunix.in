import { store } from '../utils/store.js';

export const getSettings = async (req, res) => {
  try {
    const settings = await store.getSettings();
    return res.status(200).json({ success: true, data: settings });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to retrieve site settings.' });
  }
};

export const updateSettings = async (req, res) => {
  try {
    const updated = await store.updateSettings(req.body);
    return res.status(200).json({
      success: true,
      message: 'Site settings updated successfully.',
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to update site settings.' });
  }
};

export const getTestimonials = async (req, res) => {
  try {
    const list = await store.getTestimonials(false);
    return res.status(200).json({ success: true, count: list.length, data: list });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to retrieve testimonials.' });
  }
};

export const getAdminTestimonials = async (req, res) => {
  try {
    const list = await store.getTestimonials(true);
    return res.status(200).json({ success: true, count: list.length, data: list });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to retrieve testimonials.' });
  }
};

export const createTestimonial = async (req, res) => {
  try {
    const created = await store.createTestimonial(req.body);
    return res.status(201).json({ success: true, message: 'Testimonial created successfully.', data: created });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Failed to create testimonial.' });
  }
};

export const updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await store.updateTestimonial(id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Testimonial not found.' });
    }
    return res.status(200).json({ success: true, message: 'Testimonial updated successfully.', data: updated });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Failed to update testimonial.' });
  }
};

export const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await store.deleteTestimonial(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Testimonial not found.' });
    }
    return res.status(200).json({ success: true, message: 'Testimonial deleted successfully.', data: deleted });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Failed to delete testimonial.' });
  }
};


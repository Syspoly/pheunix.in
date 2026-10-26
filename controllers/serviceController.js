import { store } from '../utils/store.js';

export const getServices = async (req, res) => {
  try {
    const services = await store.getServices();
    return res.status(200).json({ success: true, count: services.length, data: services });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch services.' });
  }
};

export const getServiceBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const service = await store.getServiceBySlug(slug);
    if (!service) {
      return res.status(404).json({ success: false, message: 'Service not found.' });
    }
    return res.status(200).json({ success: true, data: service });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch service.' });
  }
};

export const getAdminServices = async (req, res) => {
  try {
    const services = await store.getServices(true);
    return res.status(200).json({ success: true, count: services.length, data: services });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch admin services.' });
  }
};

export const createService = async (req, res) => {
  try {
    const data = { ...req.body };
    if (!data.slug && data.title) {
      data.slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }
    const created = await store.createService(data);
    return res.status(201).json({ success: true, message: 'Service created successfully.', data: created });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Failed to create service.' });
  }
};

export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await store.updateService(id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Service not found.' });
    }
    return res.status(200).json({ success: true, message: 'Service updated successfully.', data: updated });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Failed to update service.' });
  }
};

export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await store.deleteService(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Service not found.' });
    }
    return res.status(200).json({ success: true, message: 'Service deleted successfully.', data: deleted });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Failed to delete service.' });
  }
};


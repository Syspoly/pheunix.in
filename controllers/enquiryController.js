import { store } from '../utils/store.js';

export const createEnquiry = async (req, res) => {
  try {
    const {
      fullName,
      businessName,
      email,
      phone,
      businessType,
      serviceRequired,
      projectDescription,
      budgetRange,
      preferredTimeline,
      consent,
    } = req.body;

    const errors = {};

    if (!fullName || !fullName.trim()) {
      errors.fullName = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!phone || phone.trim().length < 7) {
      errors.phone = 'Please provide a valid phone number (at least 7 digits).';
    }

    if (!serviceRequired || !serviceRequired.trim()) {
      errors.serviceRequired = 'Please select the service you are looking for.';
    }

    if (!projectDescription || projectDescription.trim().length < 10) {
      errors.projectDescription = 'Please describe your idea or requirements in at least 10 characters.';
    }

    if (!consent) {
      errors.consent = 'You must agree to the privacy policy to submit your enquiry.';
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed. Please correct the highlighted errors.',
        errors,
      });
    }

    const enquiry = await store.createEnquiry({
      fullName: fullName.trim(),
      businessName: (businessName || '').trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      businessType: (businessType || 'Other').trim(),
      serviceRequired: serviceRequired.trim(),
      projectDescription: projectDescription.trim(),
      budgetRange: budgetRange || 'Not decided',
      preferredTimeline: preferredTimeline || 'Flexible',
      consent: Boolean(consent),
    });

    console.log(`📩 New enquiry received from ${enquiry.fullName} (${enquiry.email}) for "${enquiry.serviceRequired}"`);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your project enquiry has been received. Our team will review your requirements and reach out within 24 business hours.',
      enquiryId: enquiry._id,
    });
  } catch (error) {
    console.error('Error creating enquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'An unexpected server error occurred while processing your enquiry. Please try again or reach out on WhatsApp.',
    });
  }
};

export const getAllEnquiries = async (req, res) => {
  try {
    const { status, search } = req.query;
    let list = await store.getEnquiries();

    if (status && status !== 'All') {
      list = list.filter((item) => item.status.toLowerCase() === status.toLowerCase());
    }

    if (search && search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (item) =>
          item.fullName.toLowerCase().includes(q) ||
          item.email.toLowerCase().includes(q) ||
          item.phone.includes(q) ||
          (item.businessName && item.businessName.toLowerCase().includes(q)) ||
          item.serviceRequired.toLowerCase().includes(q)
      );
    }

    return res.status(200).json({
      success: true,
      count: list.length,
      data: list,
    });
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve enquiries.',
    });
  }
};

export const updateEnquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, internalNotes } = req.body;

    const updated = await store.updateEnquiry(id, {
      ...(status && { status }),
      ...(internalNotes !== undefined && { internalNotes }),
    });

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Enquiry not found.' });
    }

    return res.status(200).json({
      success: true,
      message: 'Enquiry updated successfully.',
      data: updated,
    });
  } catch (error) {
    console.error('Error updating enquiry:', error);
    return res.status(500).json({ success: false, message: 'Failed to update enquiry.' });
  }
};

export const deleteEnquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await store.deleteEnquiry(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Enquiry not found.' });
    }

    return res.status(200).json({
      success: true,
      message: 'Enquiry deleted successfully.',
    });
  } catch (error) {
    console.error('Error deleting enquiry:', error);
    return res.status(500).json({ success: false, message: 'Failed to delete enquiry.' });
  }
};

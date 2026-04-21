import serviceModel from "../models/serviceModel.js";

export const getServices = async (req, res) => {
  const length = await serviceModel.countDocuments({ isDeleted: false });
  try {
    const services = await serviceModel.find(
      { isDeleted: false },
      { isDeleted: 0 },
    );
    res.status(200).json({
      success: true,
      message: "Services fetched successfully",
      length,
      data: services,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await serviceModel.findOne(
      {
        _id: id,
        isDeleted: false,
      },
      { isDeleted: 0 },
    );
    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Service fetched successfully",
      data: service,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const createService = async (req, res) => {
  try {
    const { title, description, offers } = req.body;
    console.log(req.file);

    const imageIcon = req.file?.filename || null;
    const existingService = await serviceModel.findOne({ title });
    if (existingService) {
      return res.status(400).json({
        success: false,
        message: "Service with this title already exists",
      });
    }
    const service = await serviceModel.create({
      title,
      description,
      offers,
      imageIcon,
    });
    const length = await serviceModel.countDocuments({ isDeleted: false });
    res.status(201).json({
      success: true,
      message: "Service created successfully",
      length,
      data: service,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, offers } = req.body;

    const service = await serviceModel.findOneAndUpdate(
      { _id: id, isDeleted: false },
      { title, description, offers, imageIcon: req.file?.filename },
      { new: true },
    );
    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Service updated successfully",
      data: service,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    await serviceModel.findOneAndUpdate(
      { _id: id, isDeleted: false },
      { isDeleted: true },
      { new: true },
    );
    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

import mempberModel from "../models/memberModel.js";

export const getMembers = async (req, res) => {
  try {
    const members = await mempberModel.find(
      { isDeleted: false },
      { isDeleted: 0 },
    );
    res.status(200).json({
      success: true,
      message: "Members fetched successfully",
      data: members,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getMemberById = async (req, res) => {
  try {
    const { id } = req.params;
    const member = await mempberModel.findOne(
      { _id: id, isDeleted: false },
      { isDeleted: 0 },
    );
    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Member fetched successfully",
      data: member,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const createMember = async (req, res) => {
  try {
    const { name, jobTitle, description , position, email } = req.body;
    const image = req.file ? req.file.filename : null;
    const member = await mempberModel.create({
      name,
      jobTitle,
      description,
      position,
      email,
      image,
    });
    res.status(201).json({
      success: true,
      message: "Member created successfully",
      data: member,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateMember = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, jobTitle, description, position, email } = req.body;
    const member = await mempberModel.findByIdAndUpdate(
      id,
      { name, jobTitle, description, position, email, image: req.file?.filename  },
      { new: true },
    );
    res.status(200).json({
      success: true,
      message: "Member updated successfully",
      data: member,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteMember = async (req, res) => {
  try {
    const { id } = req.params;
    const member = await mempberModel.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true },
    );
    res.status(200).json({
      success: true,
      message: "Member deleted successfully",
      data: member,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

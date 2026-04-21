import contactMessageModel from "../models/contactMessageModel.js";

export const getContactMessages = async (req, res) => {
  try {
    const contactMessages = await contactMessageModel
      .find({ isDeleted: false })
      .sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "Contact messages fetched successfully",
      data: contactMessages,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const createContactMessage = async (req, res) => {
  const { name, email, subject, phone, compenyName, message } = req.body;
  try {
    const contactMessage = await contactMessageModel.create({
      name,
      email,
      subject,
      phone,
      compenyName,
      message,
    });
    res.status(201).json({
      success: true,
      message: "Contact message created successfully",
      data: contactMessage,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateContactMessage = async (req, res) => {
  const { id } = req.params;
  const { isRead, isAnswered, isSpam } = req.body;

  try {
    const contactMessage = await contactMessageModel.findByIdAndUpdate(
      id,
      {
        isRead,
        isAnswered,
        isSpam,
      },
      { new: true },
    );

    res.status(200).json({
      success: true,
      message: "Contact message updated successfully",
      data: contactMessage,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteContactMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const contactMessage = await contactMessageModel.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Contact message deleted successfully",
      data: contactMessage,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

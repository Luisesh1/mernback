const Event = require('../models/Event');
const Category = require('../models/Category');
const Joi = require('joi');
const { eventSchema } = require('../validations/eventValidation');


exports.createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const categoryExists = await Category.findOne({ name });
    if (categoryExists) {
      return res.status(400).json({ message: 'Category already exists' });
    }
    const category = new Category({ name });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const category = await Category.findByIdAndUpdate(id, { name }, { new: true });
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.createEvent = async (req, res) => {
  const { error } = eventSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const { title, description, category, date, time, location } = req.body;
  try {
    const categoryObj = await Category.findOne({ _id: category });
    if (!categoryObj) {
      return res.status(400).json({ message: 'Category does not exist' });
    }

    const eventExists = await Event.findOne({ title, category: categoryObj._id });
    if (eventExists) {
      return res.status(400).json({ message: 'Event title already exists' });
    }

    const event = new Event({
      title,
      description,
      category: categoryObj._id,
      date,
      time,
      location,
    });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: 'Event with this title already exists in this category' });
    }
    res.status(500).json({ message: err.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('category');
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findById(id).populate('category');
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title, description, category, date, time, location } = req.body;
  try {
    const categoryObj = await Category.findOne({ name: category });
    if (!categoryObj) {
      return res.status(400).json({ message: 'Category does not exist' });
    }

    const event = await Event.findByIdAndUpdate(
      id,
      { title, description, category: categoryObj._id, date, time, location },
      { new: true }
    );
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
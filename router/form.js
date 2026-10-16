const express = require("express");
const router = express.Router();

const authorization = require('../function/auth')

const FormController = require("../controller/form");
const Form = new FormController();

const EventController = require("../controller/event");
const Event = new EventController();

router.use(express.json());

// Create Form
router.post("/create", async (req, res, next) => {
  try {
    const {
      program_id,
      name,
      email,
      phone_number,
      description,
      interested_in,
      support_with,
      source_about_us,
      country,
      occupation,
    } = req.body;

    // Create or Update Form
    const result = await Form.create({
      program_id,
      name,
      email,
      phone_number,
      description,
      interested_in,
      support_with,
      source_about_us,
      status:"FORM"
    });


    return res.status(200).json({
      success: true,
      message: "Form submitted successfully.",
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

// Form List
router.get("/list" ,async (req, res, next) => {
  try {
    const result = await Form.list({});

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

// Form Details
router.post("/details", async (req, res, next) => {
  try {
    const result = await Form.details({ _id: req.body._id });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

// Delete Form
router.post("/delete",async (req, res, next) => {
  try {
    const result = await Form.delete({ _id: req.body._id });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

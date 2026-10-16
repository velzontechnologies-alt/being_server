const express = require("express");
const router = express.Router();

const UserController = require("../controller/user");
const User = new UserController();
const EventController = require("../controller/event");
const Event = new EventController();


router.use(express.json());
// Create User
router.post("/create", async (req, res, next) => {
  try {
    const result = await User.create({
      email: req.body.email,
      name: req.body.name,
      phone_number: req.body.phone_number,
      description: req.body.description,
      interested_in:req.body.interested_in,
      support_with:req.body.support_with,
      source_about_us:req.body.source_about_us

    });

    
    // Create Event Booking
    await Event.book({
      form_id: result._id,
      first_name: name,
      last_name: "",
      email,
      phone_number,
      country: country || "",
      occupation: occupation || "",
      description,
      status: "CONTACT_US",
    });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

// User List
router.get("/list", async (req, res, next) => {
  try {
    const result = await User.list({});

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

// User Details
router.post("/details", async (req, res, next) => {
  try {
    const result = await User.details({ _id: req.body._id });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

// Delete User
router.post("/delete", async (req, res, next) => {
  try {
    const result = await User.delete({ _id: req.body._id });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

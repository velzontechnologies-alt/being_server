const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const uploadfile = require('../function/uploadfile')
const authorization = require('../function/auth')

const programController = require("../controller/program");
const Program = new programController();
const EventController = require("../controller/event");
const Event = new EventController();

router.use(express.json());

// Create Image
router.post("/create", authorization, uploadfile, async (req, res, next) => {
  try {
    console.log(req.file)
    console.log("ffffffff")
    console.log(req.body)
    console.log("ffffff")
    console.log(req.admin_id)
    const file = req.file;
    const { card_status, description, card_title, ideal, what_you_gain, suitable, tagline, key_out_come } = req.body
    const result = await Program.create({
      admin_id: req.admin_id,
      card_status: card_status,
      card_image: process.env.SPACE_DOMAIN + file.originalname,
      card_description: description,
      card_title: card_title,
      ideal: ideal,
      what_you_gain: what_you_gain,
      suitable: suitable,
      tagline: tagline,
      key_out_come: key_out_come,

    });


    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

// Image List
router.get("/list", async (req, res, next) => {
  try {

    const result = await Program.list({});

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

// Image Statu True List
router.get("/status/list", async (req, res, next) => {
  try {

    const result = await Program.statusTrueList({});

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

// Image Details
router.post("/details", authorization, async (req, res, next) => {
  try {
    const admin_id = req.admin_id;
    const result = await Program.details({ admin_id: admin_id, _id: req.body._id });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

//update details
router.post("/update", authorization, uploadfile, async (req, res, next) => {
  try {

    console.log(req.body)
    const result = await Program.update({
      admin_id: req.admin_id,
      _id: req.body._id,
      card_status: req.body.card_status,
      card_description: req.body.description,
      card_title: req.body.card_title,
      ideal: req.body.ideal,
      what_you_gain: req.body.what_you_gain,
      suitable: req.body.suitable,
      tagline: req.body.tagline,
      key_out_come: req.body.key_out_come

    })
    res.status(200).json({ success: true, data: result })
  } catch (err) {
    next(err);
  }
})
//update Image
router.post("/update/image", authorization, uploadfile, async (req, res, next) => {
  try {
    const result = await Program.updateImage({
      admin_id: req.admin_id,
      _id: req.body._id,
      card_image: process.env.SPACE_DOMAIN + file.originalname,

    })
    res.status(200).json({ success: true, data: result })
  } catch (err) {
    next(err);
  }
})


// Delete Image
router.post("/delete", authorization, async (req, res, next) => {
  try {
    console.log("delete");
    console.log(req.body)
    console.log(req.admin_id)

    const result = await Program.delete({ admin_id: req.admin_id, _id: req.body._id });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

const authorization = require('../function/auth')
const uploadfile = require('../function/uploadfile')

const GalleryController = require("../controller/gallery");
const Gallery = new GalleryController();

router.use(express.json());

// Create Gallery
router.post("/create",authorization,uploadfile,async (req, res, next) => {
  try {
    const file = req.file;
    const result = await Gallery.create({
      admin_id: req.admin_id,
      image:process.env.SPACE_DOMAIN + file.originalname ,
    });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

// Gallery List
router.get("/list", authorization, async (req, res, next) => {
  try {
    const admin_id = req.admin_id;
    const result = await Gallery.list({ admin_id: admin_id });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

// Gallery Details
router.post("/details", authorization, async (req, res, next) => {
  try {
    const admin_id = req.admin_id;
    const result = await Gallery.details({ admin_id: admin_id, _id: req.body._id });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

//Update Gallery
router.post("/update", authorization, uploadfile,async (req, res, next) => {
  try {
    const admin_id = req.admin_id;
    const file= req.file
    const result = await Gallery.update({ admin_id: admin_id, _id: req.body._id,image:process.env.SPACE_DOMAIN + file.originalname , });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});


// Delete Gallery
router.post("/delete", authorization, async (req, res, next) => {
  try {

    const admin_id = req.admin_id;
    console.log("data",req.admin,req.body)
    const result = await Gallery.delete({ admin_id: admin_id, _id: req.body._id });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

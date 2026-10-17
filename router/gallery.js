const express = require("express");
const router = express.Router();

const authorization = require('../function/auth')
const uploadfile = require('../function/uploadfile')

const GalleryController = require("../controller/gallery");
const Gallery = new GalleryController();

router.use(express.json());

//Gallery create

router.post("/create", authorization, uploadfile, async (req, res, next) => {
  try {
    const file = req.file;
    const { heading, title, description } = req.body;
    console.log("data", { heading, title, description, admin_id: req.admin_id, image: file.location, description: description })
    const result = await Gallery.create({
      heading: heading,
      title: title,
      admin_id: req.admin_id,
      image: file.location,
      description: description
    });

    res.status(200).json({
      success: true,
      data: result,
    });

  } catch (err) {
    next(err);
  }
});

//sub _ image added
router.post("/add/sub/image", authorization, uploadfile, async (req, res, next) => {
  try {
    const file = req.file;

    const result = await Gallery.addsubimag({
      admin_id: req.admin_id,
      _id: req.body._id,
      sub_image: file.location
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
router.get("/list", async (req, res, next) => {
  try {

    const result = await Gallery.list({});

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});
// Gallery status true List
router.get("/status/list", async (req, res, next) => {
  try {

    const result = await Gallery.statusTrueList({});

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
router.post("/update/status", authorization, async (req, res, next) => {
  try {
    const admin_id = req.admin_id;
    console.log(admin_id)
    console.log(req.body)
    const result = await Gallery.updateStatus({ admin_id: admin_id, _id: req.body._id, status: req.body.status });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

//Update  Gallery
router.post("/update", authorization, async (req, res, next) => {
  try {
    const admin_id = req.admin_id;
    console.log(admin_id)
    console.log(req.body)
    const result = await Gallery.update({ admin_id: admin_id, _id: req.body._id, description: req.body.description });

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
    console.log("delete");
    console.log(req.body)
    console.log(req.admin_id)

    const result = await Gallery.delete({ admin_id: req.admin_id, _id: req.body._id });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

//sub _ image remove
router.post("/remove/sub/image", authorization, async (req, res, next) => {
  try {
 
 
    const result = await Gallery.removeSubImage({
      admin_id: req.admin_id,
      _id: req.body._id,
      sub_image: req.body.sub_image
    });
 
    res.status(200).json({
      success: true,
      data: result,
    });
 
  } catch (err) {
    next(err);
  }
});

module.exports = router;

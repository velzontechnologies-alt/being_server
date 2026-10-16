const express = require("express");
const bodyParser = require("body-parser");

const authorization = require('../function/auth')
const uploadfile = require('../function/uploadfile')

const router = express.Router();

const EventController = require("../controller/event");
const Event = new EventController();

router.use(express.json());

// Create Event
router.post("/create", authorization,uploadfile,async (req, res, next) => {
  try {
    const file = req.file
    const result = await Event.create({
      admin_id: req.admin_id,
      title: req.body.title,
      image:process.env.SPACE_DOMAIN + file.originalname ,
      description: req.body.description,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      status: req.body.status,
    });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

// Event List
router.get("/list", authorization ,async (req, res, next) => {
  try {
    const result = await Event.list({admin_id:req.admin_id});

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

// Event Details
router.post("/details", authorization,  async (req, res, next) => {
  try {
    const result = await Event.details({ admin_id:req.admin_id,_id: req.body._id });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

// Delete Event
router.post("/delete", authorization ,async (req, res, next) => {
  try {
    const result = await Event.delete({ admin_id:req.admin_id,_id: req.body._id });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

//Update Event
router.post ("/update",authorization,async(req,res,next)=>{
  try{
    console.log(req.body)
    const result = await Event.update({admin_id:req.admin_id,_id:req.body._id,
      title: req.body.title,
      description: req.body.description,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      status: req.body.status,})
 
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
})



//Update Event
router.post ("/update/image",authorization,uploadfile,async(req,res,next)=>{
  try{
    const result = await Event.updateImage({admin_id:req.admin_id,_id:req.body._id,
    
      image:process.env.SPACE_DOMAIN + file.originalname ,
     })
 
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
})
module.exports = router;

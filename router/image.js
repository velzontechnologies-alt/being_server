const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const uploadfile = require('../function/uploadfile')
const authorization = require('../function/auth')

const ImageController = require("../controller/image");
const Image = new ImageController();

router.use(express.json());

// Create Image
router.post("/create", authorization,uploadfile,async (req, res, next) => {
  try {
    console.log(req.file)
    console.log(req.body)
    const file = req.file;
    const result = await Image.create({
      admin_id:req.admin_id,
      card_status: req.body.card_status,
      card_image:process.env.SPACE_DOMAIN + file.originalname ,
      card_description: req.body.card_description,
      card_title: req.body.card_title,

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
router.get("/list", authorization, async (req, res, next) => {
  try {
    const admin_id = req.admin_id;
    const result = await Image.list({ admin_id: admin_id });

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
    const result = await Image.details({ admin_id: admin_id, _id: req.body._id });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

//update details
router.post("/update",authorization,uploadfile,async (req,res,next)=>{
  try{
    const result = await Image.update({
      admin_id:req.admin_id,
      _id:req.body._id,
        card_status: req.body.card_status,
      card_description: req.body.card_description,
      card_title: req.body.card_title,
    
    })
  res.status(200).json({success:true,data:result})
  }catch(err){
    next(err);
  }
})
//update Image
router.post("/update/image",authorization,uploadfile,async (req,res,next)=>{
  try{
    const result = await Image.updateImage({
      admin_id:req.admin_id,
      _id:req.body._id,
     card_image:process.env.SPACE_DOMAIN + file.originalname ,
    
    })
  res.status(200).json({success:true,data:result})
  }catch(err){
    next(err);
  }
})


// Delete Image
router.post("/delete", authorization, async (req, res, next) => {
  try {
    const admin_id = req.admin_id;
    const result = await Image.delete({ admin_id: admin_id, _id: req.body._id });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

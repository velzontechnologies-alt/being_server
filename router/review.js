const express = require("express");
const router = express.Router();

const authorization = require('../function/auth')

const demo_=require('../schema/demo')

const ReviewController = require("../controller/review");
const Review = new ReviewController();


router.use(express.json());
//demo testing
router.post("/demo" ,async (req, res, next) => {
  try {

    const {name,description}=req.body
    const result = await demo_({
   
      name: name,
    
      description:description,
    
     

    }).save()
     

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

// Create Review
router.post("/create" ,async (req, res, next) => {
  try {

    const {tag,name,description}=req.body
    const result = await Review.create({
   
      name: name,
    
      description:description,
      tag:tag,
     

    });
     

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

// Review List
router.get("/list" ,async (req, res, next) => {
  try {
    const result = await Review.list({});

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

// Review Details
// router.post("/details", async (req, res, next) => {
//   try {
//     const result = await Review.details({ _id: req.body._id });

//     res.status(200).json({
//       success: true,
//       data: result,
//     });
//   } catch (err) {
//     next(err);
//   }
// });

// Delete Review
router.post("/delete",authorization,async (req, res, next) => {
  try {
    const result = await Review.delete({ _id: req.body._id });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

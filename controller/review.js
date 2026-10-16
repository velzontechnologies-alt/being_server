const Review_ = require("../schema/review");


class Review {
async create({
 
  name,
 tag,
  description,
 
}) {
  try {
    // Save enquiry form
    const result = await Review_.create({
        
     
      name,
      tag,
      description,
      
    });

    return result;
  } catch (error) {
    console.error("Create Form Error:", error);
    throw error;
  }
}

  async list({}) {
    try {
      const result = await Review_.find({});

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }


  async delete({_id }) {
    try {
      return await Review_.deleteOne({ _id: _id });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

}

module.exports = Review;

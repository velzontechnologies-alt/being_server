const Gallery_ = require("../schema/gallery");

class Gallery {
  async create({ admin_id, image}) {
    try {
      const result = await new Gallery_({
        admin_id: admin_id,
        image: image,
      }).save();

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async list({ admin_id }) {
    try {
      const result = await Gallery_.find({ admin_id: admin_id });

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async details({ admin_id,_id }) {
    try {
      return await Gallery_.findOne({
        admin_id: admin_id,
        _id: _id
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async delete({ admin_id,_id }) {
    try {
      console.log("data",admin_id,_id)
      return await Gallery_.deleteOne({
        admin_id: admin_id,
        _id: _id
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async update({ admin_id, image,_id }) {
    try{
        const result = await Gallery_.findOneAndUpdate(
            { admin_id:admin_id,_id:_id },
            {$set:
            {
                image: image,

            }},
            { new: true }
        );
        return result;
    }
    catch (error) {
        console.error(error);
        throw error;
    }}

}

module.exports = Gallery;

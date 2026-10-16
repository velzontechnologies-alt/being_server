const Image_ = require("../schema/image");

class Image {
  async create({ admin_id, card_status, card_image, card_description, card_title }) {
    try {
      const result = await new Image_({
        admin_id: admin_id,
        card_status: card_status,
        card_image: card_image,
        card_description: card_description,
        card_title: card_title,
      }).save();

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async list({ admin_id }) {
    try {
      const result = await Image_.find({ admin_id: admin_id });

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async details({ admin_id, _id }) {
    try {
      return await Image_.findOne({
        admin_id: admin_id,
        _id: _id
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async delete({ admin_id, _id }) {
    try {
      return await Image_.deleteOne({
        admin_id: admin_id,
        _id: _id
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async update({ admin_id, _id,card_status, card_description, card_title }) {
    try{
        const result = await Image_.findOneAndUpdate(
            { admin_id:admin_id,_id:_id },
            {$set:{
                card_status: card_status,
                card_description: card_description,
                card_title: card_title,
            }},
            { new: true }
        );
        return result;
    }
    catch (error) {
        console.error(error);
        throw error;
    }}

     async updateImage({ admin_id, _id,card_image }) {
    try{
        const result = await Image_.findOneAndUpdate(
            { admin_id:admin_id,_id:_id },
            {$set:{
                card_image:card_image,
              
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

module.exports = Image;

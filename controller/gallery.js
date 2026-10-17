const Gallery_ = require("../schema/gallery");

class Gallery {
  async create({ admin_id, image, description, title, heading }) {
    try {
      console.log("data", { admin_id, image, description, title, heading })
      const result = await new Gallery_({
        admin_id: admin_id,
        image: image,
        description: description,
        title: title,
        heading: heading,


      }).save();

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }


  async addsubimag({ admin_id, _id, sub_image }) {
    try {
      console.log("data", { admin_id, _id, sub_image })
      const result = await Gallery_.findOneAndUpdate(
        { admin_id: admin_id, _id: _id },
        {
          $push:
          {
            sub_image: sub_image,


          }
        },
        { new: true }
      );
      return result;
    }
    catch (error) {
      console.error(error);
      throw error;
    }
  }
  async list({ }) {
    try {
      const result = await Gallery_.find({});

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async statusTrueList({ }) {
    try {
      const result = await Gallery_.find({ status: true });

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async details({ admin_id, _id }) {
    try {
      const result = await Gallery_.findOne({
        admin_id: admin_id,
        _id: _id
      });
      console.log("data", result)
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }


  async delete({ admin_id, _id }) {
    try {
      console.log({ admin_id, _id })

      const result = await Gallery_.deleteOne({
        admin_id: admin_id,
        _id: _id,
      });
      console.log(result)
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async update({ admin_id, _id, description }) {
    try {
      const result = await Gallery_.findOneAndUpdate(
        { admin_id: admin_id, _id: _id },
        {
          $set:
          {
            description: description,


          }
        },
        { new: true }
      );
      return result;
    }
    catch (error) {
      console.error(error);
      throw error;
    }
  }


  async updateStatus({ admin_id, status, _id }) {
    try {
      const result = await Gallery_.findOneAndUpdate(
        { admin_id: admin_id, _id: _id },
        {
          $set:
          {
            status: status,


          }
        },
        { new: true }
      );
      return result;
    }
    catch (error) {
      console.error(error);
      throw error;
    }
  }

  async removeSubImage({admin_id,_id,sub_image}){
    try {
      const result = await Gallery_.findOneAndUpdate(
        { admin_id: admin_id, _id: _id },
        {
          $pull:
          {
            sub_image: sub_image,
  
  
          }
        },
        { new: true }
      );
      return result;
    }
    catch (error) {
      console.error(error);
      throw error;
    }
  }

}

module.exports = Gallery;

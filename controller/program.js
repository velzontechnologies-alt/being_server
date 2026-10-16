const Program_ = require("../schema/program");
const User_ = require("../schema/user")



class Program {
  async create({
    admin_id,
    card_status,
    card_image,
    card_description,
    card_title,
    ideal,
    what_you_gain,
    suitable,
    tagline,
    key_out_come,
    status
  }) {
    try {
      const result = await new Program_({
        admin_id: admin_id,
        card_status: card_status,
        card_image: card_image,
        card_description: card_description,
        card_title: card_title,
        ideal: ideal,
        what_you_gain: what_you_gain,
        suitable: suitable,
        tagline: tagline,
        key_out_come: key_out_come,
        status
      }).save();

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async list({ }) {
    try {
      const result = await Program_.find({});

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async statusTrueList({ }) {
    try {
      const result = await Program_.find({ card_status: true });

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async details({ admin_id, _id }) {
    try {
      const result = await Program_.findOne({
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

  async delete({ admin_id, _id }) {
    try {
      console.log({ admin_id, _id })

      const result = await Program_.deleteOne({
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
  async update({
    admin_id,
    _id,
    card_status,
    card_description,
    card_title,
    ideal,
    what_you_gain,
    suitable,
    tagline,
    key_out_come,
  }) {
    try {
      const result = await Program_.findOneAndUpdate(
        { admin_id: admin_id, _id: _id },
        {
          $set: {
            card_status: card_status,
            card_description: card_description,
            card_title: card_title,
            ideal: ideal,
            what_you_gain: what_you_gain,
            suitable: suitable,
            tagline: tagline,
            key_out_come: key_out_come,
          },
        },
        { new: true },
      );
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateImage({ admin_id, _id, card_image }) {
    try {
      const result = await Program_.findOneAndUpdate(
        { admin_id: admin_id, _id: _id },
        {
          $set: {
            card_image: card_image,
          },
        },
        { new: true },
      );
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }


}

module.exports = Program;

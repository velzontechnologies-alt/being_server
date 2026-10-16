const Form_ = require("../schema/form");
const User_=require("../schema/user")
const eventBooking_=require("../schema/eventBooking")

class Form {
async create({
  program_id,
  email,
  name,
  phone_number,
  description,
  support_with,
  interested_in,
  source_about_us,
  status
}) {
  try {
    // Check existing form
    let form = await Form_.findOne({ email });

    if (form) {
      // Update existing form
      form = await Form_.findOneAndUpdate(
        { email },
        {
          $set: {
            program_id,
            name,
            phone_number,
            description,
            support_with,
            interested_in,
            source_about_us,
            status
          },
        },
        { new: true }
      );
    } else {
      // Create new form
      form = await Form_.create({
        email,
        program_id,
        name,
        phone_number,
        description,
        support_with,
        interested_in,
        source_about_us,
        status
      });
    }

    // Update user if exists
    const user = await User_.findOne({ email });

    if (user) {
      await User_.findOneAndUpdate(
        { email },
        {
          $set: {
            name,
            phone_number,
            description,
            support_with,
            interested_in,
            source_about_us,
          },
        },
        { new: true }
      );
    }

    return form;
  } catch (error) {
    console.error("Create Form Error:", error);
    throw error;
  }
}

  async list({}) {
    try {
      const result = await Form_.find({});

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async details({ _id }) {
    try {
      return await Form_.findOne({
        _id: _id
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async delete({_id }) {
    try {
      return await Form_.deleteOne({ _id: _id });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }



}

module.exports = Form;

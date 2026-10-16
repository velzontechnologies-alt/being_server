const User_ = require("../schema/user");

class User {
  async create({ email, name, phone_number, description,support_with,interested_in,source_about_us }) {
    try {
      const result = await new User_({
        email: email,
        name: name,
        phone_number: phone_number,
        description: description,
        interested_in:interested_in,
        support_with:support_with,
        source_about_us:source_about_us
      }).save();

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async list() {
    try {
      const result = await User_.find({});

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async details({ _id }) {
    try {
      return await User_.findOne({
        _id: _id,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async delete({ _id }) {
    try {
      return await User_.deleteOne({ _id: _id });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = User;

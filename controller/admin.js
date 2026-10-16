
const Admin_ = require("../schema/admin");

class Admin {
  async create({ email, name, phone_number,password }) {
    try {
      const result = await new Admin_({
        email: email,
        name: name,
        phone_number: phone_number,
        password: password,
      }).save();

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async list() {
    try {
      const result = await Admin_.find({});

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async details({ _id }) {
    try {
      return await Admin_.findOne({
        _id: _id,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  
  async login(email, password) {
    try {
     
        const adminDetails = await Admin_.findOne({ email, password });
      

      // If user not found
      if (!adminDetails) {
        return { status: 400, error: 'Invalid email or password' };
      }

      // Update login status
      const result = await Admin_.findOneAndUpdate(
        { email, password},
        { $set: { status: true } },
        { new: true }
      );

      return result;
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Login failed',error);
    }
  }

  async logout(email) {
    try {

      // Update login status
      const result = await Admin_.findOneAndUpdate(
        { email },
        { $set: { status: false } },
        { new: true }
      );

      return result;
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Login failed',error);
    }
  }

  async delete({ _id }) {
    try {
      const result = await Admin_.deleteOne({ _id: _id });
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async profileUpdate({ _id, profile_image }) {
try {
  const result = await Admin_.findOneAndUpdate(
    { _id },
    { $set: { profile_image } },
    { new: true }
  );
  return result;
}catch (error) {
  console.error(error);
  throw error;
}
  }




async update({ _id, name, phone_number, description }) {
    try {
     console.log("Updating admin with ID:", _id, "Name:", name, "Phone Number:", phone_number, "Description:", description);
      const result = await Admin_.findOneAndUpdate({ _id }, 
        { $set: { name, phone_number, description } }, { new: true });
        return result;
    } catch (error) {
      console.error(error);
      throw error;
    }

}
}

module.exports = Admin;


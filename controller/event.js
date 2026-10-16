const Event_ = require("../schema/event");
const User_ = require("../schema/user")
const eventBooking_ = require("../schema/eventBooking")

class Event {
  async create({ admin_id, title, image, description, start_date, end_date, start_time, end_time, status }) {
    try {
      const result = await new Event_({
        admin_id: admin_id,
        title: title,
        image: image,
        description: description,
        start_date: start_date,
        end_date: end_date,
        start_time: start_time,
        end_time: end_time,
        status: status,
      }).save();

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async list({ }) {
    try {
      const result = await Event_.find({});

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async statusTrueList({ }) {
    try {
      const result = await Event_.find({ status: true });

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async details({ admin_id, _id }) {
    try {
      return await Event_.findOne({
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
      return await Event_.deleteOne({
        admin_id: admin_id,
        _id: _id
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async update({ admin_id, _id, title, description, start_date, end_date, start_time, end_time, status }) {
    try {
      const result = await Event_.findOneAndUpdate(
        {
          admin_id: admin_id, _id: _id
        },
        {
          $set: {
            title: title,
            description: description,
            start_date: start_date,
            end_date: end_date,
            start_time: start_time,
            end_time: end_time,
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

  async updateImage({ admin_id, _id, image, }) {
    try {
      const result = await Event_.findOneAndUpdate(
        {
          admin_id: admin_id, _id: _id
        },
        {
          $set: {

            image: image

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



  async book({ _id, form_id, event_id, program_id, event_name, first_name, last_name, email, phone_number, country, occupation, description, status }) {
    try {
      const result = await new eventBooking_(
        {
          _id: _id, form_id, event_id, program_id, event_name,
          first_name, last_name, email, phone_number, country, occupation, description,

          status: status
        }

      ).save()
      const checkemail = await User_.findOne({ email: email })
      if (checkemail) {
        const addDetails = await User_.findOneAndUpdate({ email: email }, { $set: { first_name, last_name, email, phone_number, country, occupation, description, } })
      }
      return result;
    }

    catch (error) {
      console.error(error);
      throw error;
    }
  }


  async eventBookDelete({ _id, event_name }) {
    try {
      const result = await eventBooking_.deleteOne({ _id, event_name })
        ;

      return result;
    }

    catch (error) {
      console.error(error);
      throw error;
    }
  }


  async bookList({ }) {
    try {
      const result = await eventBooking_.find({}

      );

      return result;
    }

    catch (error) {
      console.error(error);
      throw error;
    }
  }


}

module.exports = Event;

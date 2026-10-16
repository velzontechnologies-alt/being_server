const Event_ = require("../schema/event");

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

  async list({ admin_id }) {
    try {
      const result = await Event_.find({ admin_id: admin_id });

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
  async update({ admin_id, _id,title, description, start_date, end_date, start_time, end_time, status }) {
    try{
        const result = await Event_.findOneAndUpdate(
            { admin_id:admin_id,_id:_id
             },
            {$set: {
                title: title,
                description: description,
                start_date: start_date,
                end_date: end_date,
                start_time: start_time,
                end_time: end_time,
                status: status,
            }},
            { new: true }
        );
        return result;
    }
   
    catch (error) {
        console.error(error);
        throw error;
    }}

     async updateImage({ admin_id, _id,image, }) {
    try{
        const result = await Event_.findOneAndUpdate(
            { admin_id:admin_id,_id:_id
             },
            {$set: {
               
                image: image
               
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

module.exports = Event;

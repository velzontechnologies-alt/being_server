const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')

const AdminController = require("../controller/admin");
const Admin = new AdminController();

const authorization = require('../function/auth')
const uploadfile = require('../function/uploadfile')
const prefToken = require('../function/tokenGenerator');

router.use(express.json())
router.use(bodyParser.urlencoded({ extended: true }))



// Create User
router.post("/create", async (req, res, next) => {
    try {

        const result = await Admin.create({email: req.body.email, name: req.body.name, phone_number: req.body.phone_number, password: req.body.password});

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (err) {
        next(err);
    }
});

// Admin List
router.get("/list", async (req, res, next) => {
    try {

        const result = await Admin.list({});

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (err) {
        next(err);
    }
});

// Admin Login

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const loginResult = await Admin.login(email, password);

    if (loginResult.error) {
      return res.status(loginResult.status).json({ error: loginResult.error});
    }

   
    const data = await prefToken(loginResult)
		res.setHeader('token', data.token)

    res.status(200).json({ message: 'Login successful', token: data.token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error', error_details: error.message});
  }
});

//Admin Logout
router.post('/logout', async (req, res) => {
  try {
    const { email } = req.body;
    
    const logoutResult = await Admin.logout(email);

    res.json({ success: true, message: 'Logged out successfully', logoutResult });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error', error_details: error.message });
  }
});
// Update User
router.post("/update", authorization, async (req, res, next) => {
    try {
        const result = await Admin.update({
            _id: req.admin_id,
            name: req.body.name,
            phone_number: req.body.phone_number,
            description: req.body.description,
        });

        res.status(200).json({
            success: true,
            message: "User Updated Successfully",
            data: result
        });

    } catch (err) {
        next(err);
    }
});


//profile update
router.post("/profile-update", authorization, uploadfile, async (req, res, next) => {
    try {
         const file = req.file;
const result = await Admin.profileUpdate({
profile_image:process.env.SPACE_DOMAIN + file.originalname ,
            _id: req.admin_id,})
res.status(200).json({
            success: true,
            message: "User Profile Updated Successfully",
            data: result
        });
    } catch (err) {
        next(err);
    }
});

//Update Admin
router.post("/details", authorization ,async (req, res, next) => {
    try {
   
        const result = await Admin.details({ _id: req.admin_id });

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (err) {
        next(err);
    }
});

// Delete User
router.post("/delete",async (req, res, next) => {
    try {
console.log(req.admin_id)
        const result = await Admin.delete({ id:req.body._id});

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (err) {
        next(err);
    }
});

module.exports = router;
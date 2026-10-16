require("dotenv").config();

const multer = require("multer");
const multerS3 = require("multer-s3");
const { S3Client } = require("@aws-sdk/client-s3");
const path = require("path");

// DigitalOcean Spaces Client
const spacesClient = new S3Client({
  region: process.env.S3_REGION || "sgp1", // Default region if not specified
  endpoint: `https://${process.env.S3_REGION}.digitaloceanspaces.com`, // Default endpoint if not specified
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const upload = multer({
  storage: multerS3({
    s3: spacesClient,
    bucket: process.env.BUCKET_NAME,                       //bucket name
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",

    metadata: async (req, file, cb) => {
      cb(null, {
        fieldname: file.fieldname,
      });
    },

    key: async (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),


  fileFilter: function (req, file, callback) {
    try {
      const ext = path.extname(file.originalname).toLowerCase();
      req.extension = ext;

      if (
        ext !== ".png" &&
        ext !== ".jpg" &&
        ext !== ".jpeg" &&
        ext !== ".pdf" &&
        ext !== ".mp4" &&
        ext !== ".mp3" &&
        ext !== ".aac" &&
        ext !== ".amr" &&
        ext !== ".wav" &&
        ext !== ".ogg" &&
        ext !== ".mov" &&
        ext !== ".avi" &&
        ext !== ".mkv" &&
        ext !== ".doc" &&
        ext !== ".docx" &&
        ext !== ".xls" &&
        ext !== ".xlsx" &&
        ext !== ".ppt" &&
        ext !== ".pptx" &&
        ext !== ".txt" &&
        ext !== ".rtf" &&
        ext !== ".csv" &&
        ext !== ".key" &&
        ext !== ".gif" &&
        ext !== ".bmp" &&
        ext !== ".html" &&
        ext !== ".webp" &&
        ext !== ".jfif" &&
        ext !== ".webm"
      ) {
        return callback(new Error("Unsupported file format"));
      }


      callback(null, true);
    } catch (error) {
      callback(error);
    }
  },
}).single("file");

module.exports = upload;
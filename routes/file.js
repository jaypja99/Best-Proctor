const path = require('path');
const express = require('express');
const multer = require('multer');
const File = require('../models/file');
const Files = require('../models/file_achive');
const Seller = require('../models/seller')
const School = require('../models/school')
const Parent = require('../models/parent')
const Product = require('../models/product')
const Router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './files');
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    }
  }),
  limits: {
    fileSize: 10000000 // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|PNG|docx|xlsx|xls|ppt)$/)) {
      return cb(
        new Error(
          'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
        )
      );
    }
    cb(undefined, true); // continue with upload
  }
});
const uploads = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './client/public/images');
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    }
  }),
  limits: {
    fileSize: 10000000 // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|PNG|docx|xlsx|xls|ppt)$/)) {
      return cb(
        new Error(
          'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
        )
      );
    }
    cb(undefined, true); // continue with upload
  }
});




Router.post(
  '/upload',
  upload.single('file'),
  async (req, res) => {
    try {
      const { title, description,type } = req.body;
      const { path, mimetype } = req.file;
      const file = new File({
        title,
        description,
        type,
        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();
      res.send('file uploaded successfully.');
    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);

Router.post(
  '/Achive',
  uploads.single('file'),
  async (req, res) => {
    try {
      const { name, department,year,achivement } = req.body;
      const { path, mimetype } = req.file;
      const file = new Files({
        name,
        department,
        year,
        achivement,
        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();
      res.send('file uploaded successfully.');
    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);
Router.post(
  '/Seller',
  uploads.single('file'),
  async (req, res) => {
    try {
      const {sellerName, shopName, contactNumber,addressLine,city,email,username,password} = req.body;
      const { path, mimetype } = req.file;
      const file = new Seller({
            sellerName,
            shopName,    
            contactNumber,
            addressLine,
            city,
            email,
            username,
            password,
        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();
      res.send('file uploaded successfully.');
    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);



Router.post(
  '/School',
  uploads.single('file'),
  async (req, res) => {
    try {
      const {schoolName,schoolType,contactNumber,addressLine,State,city,pinCode,adminName,adminNumber,email,username,password} = req.body;
      const file = new School({
        schoolName,
        schoolType,
        contactNumber,
        addressLine,
        State,
        city,
        pinCode,
        adminName,
        adminNumber,
        email,
        username,
        password
       
      });
      await file.save();
      res.send('file uploaded successfully.');
    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
 
);

Router.post(
  '/Product',
  uploads.single('file'),
  async (req, res) => {
    try {
      const {productname,schoolname,Standard,productcat,productsubcat,productquantity,productprice} = req.body;
      const file = new Product({
        productname,
        schoolname,
        Standard,
        productcat,
        productsubcat,
        productquantity,
        productprice
       
      });
      await file.save();
      res.send('file uploaded successfully.');
    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
 
);


Router.post(
  '/Parent',
  uploads.single('file'),
  async (req, res) => {
    try {
      const {studentName,schoolType,Standard,Age,addressLine,State,city,schoolName,parentName,email,username,password,contactNumber} = req.body;
      const file = new Parent({
        studentName,
        schoolType,
        Standard,
        Age,
        addressLine,
        State,
        city,
        schoolName,
        parentName,
        email,
        contactNumber,
        username,
        password 
       
      });
      await file.save();
      res.send('file uploaded successfully.');
    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
 
);

Router.get('/getAllFiles', async (req, res) => {
  try {
    const files = await File.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send('Error while getting list of files. Try again later.');
  }
});

Router.get('/download/:id', async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    res.set({
      'Content-Type': file.file_mimetype
    });
    res.sendFile(path.join(__dirname, '..', file.file_path));
  } catch (error) {
    res.status(400).send('Error while downloading file. Try again later.');
  }
});

module.exports = Router;
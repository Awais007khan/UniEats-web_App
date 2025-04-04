const express = require('express');
const router = express.Router();
const User = require('../modals/User')
const Order = require ('../modals/Order')
const Item = require('../modals/Item')
// const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const multer = require ('multer')
const fs = require('fs');
const path = require('path');
const JWt_SECRET = 'anasisagood$boy';
// var fetchuser = require('../Middleware/fetchuser')
// import fetchuser from '../Middleware/fetchuser';
var jwt = require('jsonwebtoken');
const Commet = require('../modals/Comet')
const Rating = require('../modals/Rating')
const Contact= require('../modals/Contact')
const stripe = require("stripe")("pk_test_XXXXXXXXXXXXXXXXXXXXXXXX"); // Replace with your Stripe Secret Key
const app = express();
const cors = require("cors");
// Middleware to parse JSON bodiess
router.use(express.json());

// Route to handle user registration
app.use(cors())
router.post('/createuser', [
  body('name').notEmpty().withMessage('The name is invalid'),
  body('email').isEmail().withMessage('The email is invalid'),
  body('password').isLength({ min: 6 }).withMessage('The password must be at least 6 characters long'),
  // body('phonenumber')
  //   .isLength({ min: 11, max: 11 }).withMessage('The Phone Number must be exactly 11 characters long')
  //   .isNumeric().withMessage('The Phone Number must be numeric')
], async (req, res) => {
  let Success=false
  // Validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    // Check if user with the same email already exists
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry, a user with this email already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      // phonenumber: req.body.phonenumber // Assuming the phone number is already validated
    });
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWt_SECRET);
    //  console.log(authtoken)
   // await user.save();
    Success=true
    res.json({Success,authtoken})
    // res.status(201).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server eroor has been occured");
  }
});

// module.exports = router;

// now for athentacating the user weather it is present in the database or not if not than show the error that the user you are entering is not present
app.use(cors())
router.post('/login', [
  body('email').isEmail().withMessage('The email is invalid').isEmail(),
  body('password').isLength({ min: 6 }).withMessage('The password cannot be blank').exists(),
], async (req, res) => {
  let Success=false
  // Validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array('Internal server error') })
    // const (email,password)=req.body
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ Success,error: "Please try to login with the correct credentions" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      Success=false
      return res.status(400).json({ Success,error: "Please try to login with the correct credentions" });
    }
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWt_SECRET);
    //  console.log(authtoken)
    // await user.save();
    Success=true
    res.json({Success,authtoken})
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server eroor has been occured");
  }
});
app.use(cors())
router.post('/create', async (req, res) => {
  let Success=false
  const { UserName,ItemName,DepartmentName,CurrentSemester,RoomNumber} = req.body;

  try {
      const newOrder = new Order({
          UserName,
          ItemName,
          DepartmentName,
          CurrentSemester,
          RoomNumber,
          status: 'pending',  // Default status
      });
      await newOrder.save();
      Success=true
      res.status(201).json({ message: 'Order placed successfully!',Success ,order: newOrder });
  } catch (error) {
      res.status(500).json({ message: 'Error in placing Order', error: error.message });
  }
});

// In your backend route file
router.delete('/item/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    
    if (!deletedItem) {
      return res.status(404).json({ 
        Success: false, 
        message: 'Item not found' 
      });
    }
    
    res.json({ 
      Success: true, 
      message: 'Item deleted successfully' 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      Success: false, 
      message: 'Server error' 
    });
  }
});
router.get('/orders', async (req, res) => {
  try {
      const orders = await Order.find();  // Fetch all orders
      res.status(200).json({ orders });  // Send the orders as a response
  } catch (error) {
      res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
});

app.use(cors())
router.post('/commet', async (req, res) => {
let Success=false
  try {
    const { itemname, comment } = req.body;

    const newCommet = new Commet({ itemname, comment});
    await newCommet.save();
    Success=true
    res.status(201).json({ message: 'New Comment Has been  placed successfully!',Success, commet: newCommet });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error in  placing the comment', error: err.message });
  }
});
app.use(cors())
router.post('/contact', async (req, res) => {
let Success=false
  try {
    const { fullname, emailaddress,sendmessage } = req.body;

    const newContact = new Contact({ fullname, emailaddress,sendmessage});
    await newContact.save();
    Success=true
    res.status(201).json({ message: 'Your message has been send  successfully!',Success, contact: newContact });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error in  sending the message', error: err.message });
  }
});
router.post("/pay", async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: "pkr", // Use 'pkr' for PKR or your preferred currency
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Serve static uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Multer Storage Configuration
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  allowedTypes.includes(file.mimetype) ? cb(null, true) : cb(new Error('Only JPEG, PNG, and JPG files are allowed'), false);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

// Upload Image Route
router.post('/item', upload.single('image'), async (req, res) => {
  try {
    const { name, role, intro, Price } = req.body;

    if (!req.file) {
      return res.status(400).json({ Success: false, message: 'Image is required' });
    }
    if (!name || !role || !intro || !Price || isNaN(Price)) {
      return res.status(400).json({
        Success: false,
        message: 'All fields are required and Price must be a valid number',
      });
    }

    const newItem = new Item({
      name,
      role,
      intro,
      Price: parseFloat(Price),
      image: req.file.filename,
    });

    await newItem.save();

    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    console.log('Generated Image URL:', imageUrl); // Debug log

    res.status(201).json({
      Success: true,
      message: 'New item has been added successfully!',
      item: {
        ...newItem.toObject(),
        imageUrl,
      },
    });
  } catch (err) {
    console.error('Error saving item:', err);
    res.status(500).json({
      Success: false,
      message: 'Internal server error while saving the item',
      error: err.message,
    });
  }
});

router.get('/items', async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });

    if (!items || items.length === 0) {
      return res.status(404).json({
        Success: false,
        message: 'No items found in the database',
      });
    }

    const itemsWithUrls = items.map(item => {
      const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${item.image}`;
      console.log('Generated Image URL:', imageUrl); // Debug log
      return {
        ...item.toObject(),
        imageUrl,
      };
    });

    res.status(200).json({
      Success: true,
      items: itemsWithUrls,
    });
  } catch (error) {
    console.error('Error fetching items:', error.message);
    res.status(500).json({
      Success: false,
      message: 'Internal server error while fetching items',
      error: error.message,
    });
  }
});

// Fetch Items Route
// router.get('/items', async (req, res) => {
//   try {
//     const items = await Item.find().sort({ createdAt: -1 });

//     if (!items || items.length === 0) {
//       return res.status(404).json({
//         Success: false,
//         message: 'No items found in the database',
//       });
//     }

//     const itemsWithUrls = items.map(item => ({
//       ...item.toObject(),
//       imageUrl: `${req.protocol}://${req.get('host')}/uploads/${item.image}`,
//     }));

//     res.status(200).json({
//       Success: true,
//       items: itemsWithUrls,
//     });
//   } catch (error) {
//     console.error('Error fetching items:', error.message);
//     res.status(500).json({
//       Success: false,
//       message: 'Internal server error while fetching items',
//       error: error.message,
//     });
//   }
// });

// const { validationResult } = require('express-validator');
// app.use(cors())
// const corsOptions = {
//   origin: 'http://localhost:5000', // Replace with your frontend URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true, // Allow cookies if needed
// };
// app.use(cors(corsOptions));
// // app.use('/backend/uploads', express.static('G:/ueeats/ue-eats/backend/uploads'));
// app.use('/backend/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use('/uploads', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*'); // Allow cross-origin access for images
//   next();
// }, express.static(path.join(__dirname, 'uploads')));

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const uploadDir = path.join(__dirname, '../uploads/');
//     if (!fs.existsSync(uploadDir)) {
//       fs.mkdirSync(uploadDir, { recursive: true }); // Ensure directory exists
//     }
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`); // Ensure unique filenames using timestamps
//   },
// });

// // Set up file filter for Multer
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true); // Allow the file
//   } else {
//     cb(new Error('Only JPEG, PNG, and JPG files are allowed'), false); // Reject the file
//   }
// };

// // Initialize Multer with the storage and file filter
// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 }, // Limit to 5MB
// });

// app.use(cors())
// router.post('/item', upload.single('image'), async (req, res) => {
//   try {
//     const { name, role, intro, Price } = req.body;

//     if (!req.file) {
//       return res.status(400).json({ Success: false, message: 'Image is required' });
//     }
//     if (!name || !role || !intro || !Price || isNaN(Price)) {
//       return res.status(400).json({
//         Success: false,
//         message: 'All fields are required and Price must be a valid number',
//       });
//     }

//     const newItem = new Item({
//       name,
//       role,
//       intro,
//       Price: parseFloat(Price),
//       image: req.file.filename,
//     });

//     await newItem.save();

//     res.status(201).json({
//       Success: true,
//       message: 'New item has been added successfully!',
//       item: {
//         ...newItem.toObject(),
//         imageUrl: `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`, // Include the image URL
//       },
//     });
//   } catch (err) {
//     console.error('Error saving item:', err);
//     res.status(500).json({
//       Success: false,
//       message: 'Internal server error while saving the item',
//       error: err.message,
//     });
//   }
// });
// app.use(cors())
// router.get('/items', async (req, res) => {
//   try {
//     const items = await Item.find().sort({ createdAt: -1 });

//     if (!items || items.length === 0) {
//       return res.status(404).json({
//         Success: false,
//         message: 'No items found in the database',
//       });
//     }

//     const itemsWithUrls = items.map(item => ({
//       ...item.toObject(),
//       imageUrl: `${req.protocol}://${req.get('host')}/uploads/${item.image}`,
//     }));

//     res.status(200).json({
//       Success: true,
//       items: itemsWithUrls,
//     });
//   } catch (error) {
//     console.error('Error fetching items:', error.message);

//     res.status(500).json({
//       Success: false,
//       message: 'Internal server error while fetching items',
//       error: error.message,
//     });
//   }
// });
app.use(cors())
router.post('/rate', async (req, res) => {
  let Success=false
  const { itemName, rating, } = req.body;

  if (!itemName || !rating ) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const newRating = new Rating({
      itemName,
      rating,
    });

    await newRating.save();
    Success=true
    res.status(201).json({ message: 'Rating submitted successfully' });
  } catch (error) {
    console.error('Error submitting rating:', error);
    res.status(500).json({ message: 'Failed to submit rating. Please try again later.' });
  }
});


module.exports = router;

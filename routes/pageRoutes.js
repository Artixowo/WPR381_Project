// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const { title } = require('process');
require('dotenv').config();

const comEvents = [ {
    title: "Cape Town Music Festival",
    date: "2025-06-15",
    location: "Cape Town, Western Cape",
    image: "/images/Mfest.jpeg",
    eventType: "Music"
  },
  {
    title: "Durban Cultural Parade",
    date: "2025-07-01",
    location: "Durban, KwaZulu-Natal",
    image: "/images/Cpar.jpeg",
    eventType: "Cultural"
  },
  {
    title: "Johannesburg Marathon",
    date: "2025-08-20",
    location: "Johannesburg, Gauteng",
    image: "/images/Jmar.jpeg",
    eventType: "Sport"
  },
  {
    title: "Pretoria Food Festival",
    date: "2025-09-10",
    location: "Pretoria, Gauteng",
    image: "/images/Pfest.jpeg",
    eventType: "Food"
  },
  {
    title: "Garden Route Eco Festival",
    date: "2025-10-05",
    location: "Garden Route, Western Cape",
    image: "/images/GRF.jpeg",
    eventType: "Environment"
  },
  {
    title: "Cape Town International Boat Show",
    date: "2025-10-20",
    location: "Cape Town, Western Cape",
    image: "/images/CTBS.jpeg",
    eventType: "Exhibition"
  },
  {
    title: "Joburg Open Tennis Tournament",
    date: "2025-11-15",
    location: "Johannesburg, Gauteng",
    image: "/images/JTT.jpeg",
    eventType: "Sport"
  },
  {
    title: "Free Coding Bootcamp for Youth",
    date: "2025-06-01",
    location: "Durban, KwaZulu-Natal",
    image: "/images/Bcamp.jpeg",
    eventType: "Enrichment"
  },
  {
    title: "Women’s Empowerment Conference",
    date: "2025-09-25",
    location: "Pretoria, Gauteng",
    image: "/images/Conference.jpeg",
    eventType: "Enrichment"
  },
  {
    title: "Annual Soweto Gospel Choir Performance",
    date: "2025-07-15",
    location: "Soweto, Gauteng",
    image: "/images/Sowetoc.jpeg",
    eventType: "Music"
  },
  {
    title: "Springbok Rugby Test Match",
    date: "2025-08-25",
    location: "Port Elizabeth, Eastern Cape",
    image: "Springrtm",
    eventType: "Sport"
  },
  {
    title: "South African Youth Film Festival",
    date: "2025-06-20",
    location: "Cape Town, Western Cape",
    image: "/images/FilmF.jpeg",
    eventType: "Cultural"
  },
  {
    title: "Yoga in the Park",
    date: "2025-05-30",
    location: "Johannesburg, Gauteng",
    image: "/images/Yoga.jpeg",
    eventType: "Enrichment"
  },
  {
    title: "Cape Town Wellness Retreat",
    date: "2025-08-10",
    location: "Cape Town, Western Cape",
    image: "/images/retreat.jpeg",
    eventType: "Health"
  },
  {
    title: "Blood Donation Drive",
    date: "2025-06-10",
    location: "Durban, KwaZulu-Natal",
    image: "/images/Blood.jpeg",
    eventType: "Health"
  },
  {
    title: "Health and Fitness Expo",
    date: "2025-07-25",
    location: "Johannesburg, Gauteng",
    image: "/images/FitnHealth.jpeg",
    eventType: "Health"
  },
  {
    title: "Mental Health Awareness Walk",
    date: "2025-09-12",
    location: "Pretoria, Gauteng",
    image: "/images/walk.jpeg",
    eventType: "Health"
  },
  {
    title: "National HIV/AIDS Awareness Campaign",
    date: "2025-11-01",
    location: "Cape Town, Western Cape",
    image: "/images/HIV.jpeg",
    eventType: "Health"
  }]

const team = [
  {
    name: "Trent Evans",
    role: "Frontend Developer",
    bio: "Pending"
  },
  {
    name: "Gito Martin",
    role: "Frontend Devloper",
    bio: "Pending"
  },
  {
    name: "Petrus Pienaar",
    role: "Backend Developer",
    bio: "Pending"
  },
  {
    name: "Matthew harris",
    role: "Backend Devloper",
    bio: "Pending"
  }
];


router.get('/', (req, res) => {
  res.render("pages/home",{ comEvent: comEvents, title: 'Home' })
 
});

router.get('/about', (req, res) => {
 res.render('pages/about', { team, title: 'About' });
});


router.get('/events', (req, res) => {
  res.render('pages/events', { comEvent: comEvents, title: 'Events' });
});


router.get('/contact', (req, res) => {
  res.render('pages/contact', {title: 'Contact'});
});


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Path to the data directory and JSON file
const dataDir = path.join(__dirname, '../data');
const filePath = path.join(dataDir, 'contact.json');

// Ensure the directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Example contact route
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Check if all fields are filled
  if (!name || !email || !message) {
    return res.status(400).send("All fields are required.");
  }

  // Create a contact data object
  const contactData = {
    name,
    email,
    message,
    date: new Date().toISOString() // You can store the date the message was submitted
  };

  // Check if the file exists, if not, create it with an empty array
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2), 'utf8');
  }

  // Read the existing contact data from the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send("Error reading the file.");
    }

    // If the file is empty or contains invalid JSON, initialize with an empty array
    let existingData = [];
    try {
      existingData = JSON.parse(data);
    } catch (e) {
      console.error("Error parsing JSON, initializing with an empty array:", e);
    }

    // Add the new contact message to the existing data
    existingData.push(contactData);

    // Send an email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Contact Form Submission Confirmation',
      text: `Thank you for reaching out, ${name}! We have received your message and will get back to you shortly.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Email error:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });

    // Write the updated data back to the JSON file
    fs.writeFile(filePath, JSON.stringify(existingData, null, 2), 'utf8', (err) => {
      if (err) {
        return res.status(500).send("Error writing to the file.");
      }

      console.log("New contact form submission saved:", contactData);

      // Redirect to the thank-you page
      res.redirect('/thankyou');
    });
  });
});


router.get('/thankyou', (req, res) => {
  res.render("pages/thankyou")
});

module.exports = router;

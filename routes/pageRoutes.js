// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
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
router.get('/', (req, res) => {
});

router.get('/about', (req, res) => {
});

router.get('/events', (req, res) => {
});

router.get('/contact', (req, res) => {
});

router.get('/thankyou', (req, res) => {
});

module.exports = router;

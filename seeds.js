
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Category = require('./models/Category');
const Event = require('./models/Event');

const MONGO_URI = 'mongodb://localhost:27017/yourDatabaseName';
const {connectDB, disconnectDB} = require("./config/db");
connectDB();

// Función para crear usuarios
const createUsers = async () => {
  const users = [
    { username: 'ticket_office', email: 'ticket_office@disruptive.com', password: 'password', role: 'ticket_office' },
    { username: 'organizer1', email: 'organizer1@disruptive.com', password: 'password', role: 'organizer' },
    { username: 'organizer2', email: 'organizer2@disruptive.com', password: 'password', role: 'organizer' },
    { username: 'participant1', email: 'participant1@disruptive.com', password: 'password', role: 'participant' },
    { username: 'participant2', email: 'participant2@disruptive.com', password: 'password', role: 'participant' },
    { username: 'participant3', email: 'participant3@disruptive.com', password: 'password', role: 'participant' },
    { username: 'participant4', email: 'participant4@disruptive.com', password: 'password', role: 'participant' },
    { username: 'participant5', email: 'participant5@disruptive.com', password: 'password', role: 'participant' },
    { username: 'participant6', email: 'participant6@disruptive.com', password: 'password', role: 'participant' },
    { username: 'participant7', email: 'participant7@disruptive.com', password: 'password', role: 'participant' },
  ];

  for (let user of users) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await User.create(user);
  }
  console.log('Users created');
};

// Función para crear categorías
const createCategories = async () => {
  const categories = [
    { name: 'Technology' },
    { name: 'Health' },
    { name: 'Education' },
    { name: 'Entertainment' },
    { name: 'Sports' },
  ];

  await Category.insertMany(categories);
  console.log('Categories created');
};

// Función para crear eventos
const createEvents = async () => {
  const categories = await Category.find(); // Obtener todas las categorías para asignarlas a los eventos
  const events = [
    {
      title: 'Tech Conference 2024',
      logo: 'path/to/logo1.png',
      cover: 'path/to/cover1.png',
      description: 'A tech conference event.',
      category: categories[0]._id,
      date: new Date('2024-10-01'),
      time: '09:00',
      location: 'Tech Hub',
      subscribers: [],
    },
    {
      title: 'Health & Wellness Expo',
      logo: 'path/to/logo2.png',
      cover: 'path/to/cover2.png',
      description: 'An event focusing on health and wellness.',
      category: categories[1]._id,
      date: new Date('2024-11-05'),
      time: '10:00',
      location: 'Wellness Center',
      subscribers: [],
    },
    {
      title: 'Educational Workshop',
      logo: 'path/to/logo3.png',
      cover: 'path/to/cover3.png',
      description: 'A workshop on the latest educational tools.',
      category: categories[2]._id,
      date: new Date('2024-09-15'),
      time: '14:00',
      location: 'Learning Hub',
      subscribers: [],
    },
    {
      title: 'Entertainment Festival',
      logo: 'path/to/logo4.png',
      cover: 'path/to/cover4.png',
      description: 'A festival full of entertainment.',
      category: categories[3]._id,
      date: new Date('2024-08-20'),
      time: '18:00',
      location: 'Fun Park',
      subscribers: [],
    },
    {
      title: 'Sports Gala',
      logo: 'path/to/logo5.png',
      cover: 'path/to/cover5.png',
      description: 'A gala celebrating sports achievements.',
      category: categories[4]._id,
      date: new Date('2024-07-30'),
      time: '20:00',
      location: 'Sports Arena',
      subscribers: [],
    },
    {
      title: 'Tech Innovators Meet',
      logo: 'path/to/logo6.png',
      cover: 'path/to/cover6.png',
      description: 'Meet the tech innovators of tomorrow.',
      category: categories[0]._id,
      date: new Date('2024-12-10'),
      time: '11:00',
      location: 'Innovation Lab',
      subscribers: [],
    },
    {
      title: 'Wellbeing Workshop',
      logo: 'path/to/logo7.png',
      cover: 'path/to/cover7.png',
      description: 'A workshop to promote mental health.',
      category: categories[1]._id,
      date: new Date('2024-06-25'),
      time: '13:00',
      location: 'Health Plaza',
      subscribers: [],
    },
    {
      title: 'Future of Education',
      logo: 'path/to/logo8.png',
      cover: 'path/to/cover8.png',
      description: 'Exploring the future of education.',
      category: categories[2]._id,
      date: new Date('2024-05-18'),
      time: '10:00',
      location: 'Education Forum',
      subscribers: [],
    },
    {
      title: 'Music & Arts Festival',
      logo: 'path/to/logo9.png',
      cover: 'path/to/cover9.png',
      description: 'A festival for music and arts enthusiasts.',
      category: categories[3]._id,
      date: new Date('2024-04-21'),
      time: '17:00',
      location: 'Cultural Center',
      subscribers: [],
    },
    {
      title: 'Sports Meet & Greet',
      logo: 'path/to/logo10.png',
      cover: 'path/to/cover10.png',
      description: 'Meet your favorite sports stars.',
      category: categories[4]._id,
      date: new Date('2024-03-15'),
      time: '16:00',
      location: 'Stadium',
      subscribers: [],
    },
  ];

  await Event.insertMany(events);
  console.log('Events created');
};


const seedDatabase = async () => {
  try {
    await createUsers();
    await createCategories();
    await createEvents();
    console.log('Database seeding completed successfully.');
    disconnectDB();
  } catch (error) {
    disconnectDB();
    console.error('Error seeding database:', error);
  }
};

seedDatabase();

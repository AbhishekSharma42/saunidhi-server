const sqlite3 = require('sqlite3');

// Connect to SQLite database (or create it if it doesn't exist)
const db = new sqlite3.Database('my_database.db', (err) => {
  if (err) {
    console.error('Error connecting to SQLite database:', err.message);
  } else {
    console.log('Connected to SQLite database');
  }
});

// this module for user contact us 
const Contact = (FirstName, LastName, BusinessEmailAddress, PhoneNumber, CompanyName, Industry, Desc) => {

}

// this module for user contact us 
const ContactToHealthCare = (FirstName, LastName, BusinessEmailAddress, PhoneNumber, CompanyName, Industry, Desc) => {

}

// this module for have a project ideas send by cline 
const ProjectIdea = (Name, PhoneNumber, EmailId, Company, SocialLink, Desc) => {

}

module.exports = { Contact, ContactToHealthCare, ProjectIdea };
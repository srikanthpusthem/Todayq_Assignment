# Publisher Web App

This is a Publisher Web App developed as an assignment for Todayq. The app allows publishers to upload their content offerings, view them on the home screen, add them to a cart, and proceed to checkout.

## Features

- **Home Screen**: Displays all content offerings as cards with details like title, link, views, locations, rating, type, and price.
- **Submit Offerings**: Floating button that redirects to a form where publishers can submit new content offerings.
- **Cart**: Allows users to add content offerings to a cart, view the cart, and proceed to checkout. The cart icon in the navbar displays the number of items in the cart.
- **Back Navigation**: Both the "Submit Offerings" and "Cart" pages have a back button to navigate back to the home page.

## Technologies Used

- **Frontend**: React, React Router, Axios, CSS
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Icons**: FontAwesome

## Project Structure

```plaintext
Todayq_Assignment/
├── backend/
│   ├── models/
│   │   └── Offering.js
│   ├── routes/
│   │   └── offerings.js
│   ├── .env
│   ├── server.js
│   └── ...
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── ContentForm.jsx
│   │   ├── FloatingButton.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   └── ...
│   ├── contexts/
│   │   └── CartContext.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── README.md
├── package.json
└── ...

API Endpoints
POST /api/offerings: Submit a new content offering
GET /api/offerings: Get all content offerings
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Thanks to Todayq for the assignment.
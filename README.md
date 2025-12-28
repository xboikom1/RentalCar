# RentalCar

A web application for car rentals. Users can search, filter, view details, and book cars online.

## Features

- Car catalog with filters by brand, price per hour, and mileage
- Car details: location, type, rental price, specifications, description
- Favorite cars marking
- Booking interface
- Error handling for invalid filters and requests

### Basic workflow

- Select car brand, price, and mileage filters
- View filtered cars in the catalog
- Mark cars as favorites
- Click on a car for details
- Book a selected car through the interface

## Project Structure

- `/src` — application source code
  - `/components` — React components (Header, Loader, and other reusable UI components0)
  - `/pages` — Page components (HomePage, CatalogPage, CarPage, NotFoundPage)
  - `/redux` — Redux store configuration, slices, and state management
  - `/utils` — Utility functions
- `/public` — static files

## Technologies

- React
- Redux
- Vite
- CSS Modules
- Formik
- Yup
- Axios
- Redux Persist
- React Hot Toast
- React Select
- React Day Picker
- SVG Sprite
- Vercel

# Portfolio Project

## Overview
This project is a personal portfolio website that showcases my skills, services, qualifications, and work. It was built using React, focusing on a component-based architecture, and includes features like a toggleable navigation bar, dynamic content display, and integration with external services like Email.js.

## Key Features
- **Responsive Design**: Optimized for different screen sizes.
- **Dynamic Content Display**: Showcases skills, work history, and projects.
- **Email Integration**: Allows users to send emails directly via Email.js.
- **Smooth Navigation**: Toggleable navigation bar for a user-friendly experience.
- **Interactive Testimonials**: Swiping functionality powered by Swiper.js.

## Steps to Create This Portfolio

### 1. Install Dependencies
- **Boxicons and Iconscout**: Used for icons across the portfolio.

### 2. Build the Components

#### Header
- **Header Component**:
  - Implemented a toggle feature to show and hide the navigation bar using the `useState` hook.

#### Home
- **Home Component**:
  - Contains sub-components to display personal information, social media links, and a scroll-down feature.

#### About
- **About Component**:
  - Includes an info sub-component that provides detailed information about me.

#### Skills
- **Skills Component**:
  - Divided into `Frontend` and `Backend` sub-components to showcase my technical skills.

#### Services
- **Services Section**:
  - Displays the services offered, with a mini-component that blurs the page content when activated.

#### Qualification
- **Qualification Section**:
  - Contains `Education` and `Experience` sub-components, highlighting my academic background and work history.

#### Work
- **Work Component**:
  - Serves as a portfolio section, including `Works`, `Data`, and `WorkItems` sub-components to showcase projects.

#### Testimonial
- **Testimonial Component**:
  - Integrates Swiper.js for swiping functionality between testimonials, and a data component for testimonial content.

#### Contact
- **Contact Component**:
  - Includes links for contacting me via LinkedIn, Twitter, and email.
  - Integrated Email.js, allowing users to send emails directly from the portfolio.

## Technologies Used
- **React**: For building the user interface with reusable components.
- **Email.js**: For email integration, allowing direct email sending from the website.
- **Swiper.js**: Used to enable swipe functionality in the Testimonials section.
- **Boxicons and Iconscout**: For iconography throughout the website.

## Additional Information
This README provides a step-by-step overview of how the portfolio was built. The project leverages modern front-end practices, including React hooks and component-based architecture. For more details, please refer to the project’s source code.

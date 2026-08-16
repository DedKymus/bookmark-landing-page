# Bookmark Landing Page

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). 

## Overview

### The challenge

Users should be able to:
- View the optimal layout for the site depending on their device's screen size (Desktop & Mobile responsive).
- See hover states for all interactive elements on the page.
- Receive an error message when the newsletter form is submitted if the email field is empty or formatted incorrectly.
- Interact with a fully functional custom tab-slider for the Features section.
- Open and close an accordion in the FAQ section.
- Open and close a smooth full-screen mobile navigation menu.

### Screenshot

![img](./images/desktop-preview.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (Variables)
- Flexbox
- Vanilla JavaScript for DOM manipulation

### What I learned & Features implemented

- **Custom SVG Masking**: Used `mask-image` to change the color of complex SVG icons (like the accordion arrows) directly via CSS background colors, keeping the HTML clean from inline SVGs.
- **Smooth Animations**: Added custom CSS keyframes and smooth transitions for all interactive elements, error states, and mobile menus.
- **Form Validation**: Implemented custom JS email validation with a dynamic error state that gracefully pushes the layout down when triggered, without breaking the document flow on mobile.
- **Fully Responsive**: Built a fluid layout that scales perfectly from large monitors down to small smartphone screens using media queries.

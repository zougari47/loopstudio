# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Loopstudios landing page solution](#frontend-mentor---loopstudios-landing-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- **bonus**: see animation for the menu in mobile view

### Screenshot

![](/src/img/loopstudio.png)

### Links

- [Code Source](https://your-solution-url.com)
- [Live Demo](https://your-live-site-url.com)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [Vite](https://vitejs.dev/) - Frontend tool

### What I learned

This was my first website using styled components and also first time using Vite, I was trying to import svg as react component as useul but after 2 hours of searching I found that I need a plugin for vite.

This how i change background and text for the grid:

```javascript
const product = [
  { img: 'image-deep-earth', text: 'deep earth' },
  { img: 'image-night-arcade', text: 'night arcade' },
  { img: 'image-soccer-team', text: 'soccer team vr' },
  { img: 'image-grid', text: 'the grid' },
  { img: 'image-from-above', text: 'from up above vr' },
  { img: 'image-pocket-borealis', text: 'pocket borealis' },
  { img: 'image-curiosity', text: 'the curiosity' },
  { img: 'image-fisheye', text: 'make it fisheye' }
]
  .map((bg, idx) => {
    return `li:nth-child(${idx + 1}){
        background-image: linear-gradient(50deg, rgb(0,0,0,0.8),transparent), url("/src/img/mobile/${
          bg.img
        }.jpg");
        background-size:cover;
        min-height:110px;
        position:relative;
        @media ${device.md}{
          background-image: linear-gradient(50deg, rgb(0,0,0,0.8),transparent), url("/src/img/desktop/${
            bg.img
          }.jpg");
          min-height:380px;
        }
    }
    
    li:nth-child(${idx + 1}):before{
        content: "${bg.text}";
        color: var(--White);
        width:40%;
        position:absolute;
        bottom:20%;
        left:10%;
        text-transform:uppercase;
        font-size:1.3rem;
        font-family: 'Josefin Sans', sans-serif;
        line-height:1.3;
        font-weight:300;
        @media ${device.md}{
          bottom:10%;
          // left:20%
          width:50%
        }
    }`;
  })
  .join('');
```

## Author

- Frontend Mentor - [@zougari47](https://www.frontendmentor.io/profile/zougari47)
- Twitter - [@zougari47](https://www.twitter.com/zougari47)
- codepen - [@zougari47](https://codepen.io/zougari47)

# Frontend Mentor - Project tracking intro component solution

This is a solution to the [Project tracking intro component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/project-tracking-intro-component-5d289097500fcb331a67d80e). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Screenshots](#screenshots)

## Overview

Created a front page for progect planning and time tracking company using html & css.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Create the background shape using code

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox
- JavaScript

### What I learned

- Best practice to create nav-bar with ```<ul>``` and ```<li>```.

```html
<nav class="nav">
  <ul class="nav-links">
    <li class="menu-item"><a>Product</a></li>
    <li class="menu-item"><a>Features</a></li>
    <li class="menu-item"><a>Pricing</a></li>
    <li><div class="point"></div></li>
    <li class="menu-item"><a>Login</a></li>
  </ul>
</nav>
```

- Using variables in css.

```css
:root {
  --backgroundFigure: rgb(237, 242, 246);
  --background: rgb(255, 255, 255);
  --highlight: rgb(207, 212, 216);
  --darkHighlight: rgb(127, 131, 140);
}
```

- Combining Css classes and JS event listeners to open and close the nav menu.

```js
openMenu.addEventListener("click", (e) => {
  navBar.classList.remove("hidden");
  openMenu.classList.add("hidden");
  closeMenu.classList.remove("hidden");
})
```

- Working with Media Queries in JS to show or hide the nav bar.

```js
mobileVersion.addEventListener("change", (e) => {
  if (mobileVersion.matches) {
    navBar.classList.add("hidden");
  } else {
    navBar.classList.remove("hidden");
  }
})
```

## Screenshots

### Desktop version

![FrontEnd_Mentor](https://user-images.githubusercontent.com/88268603/147874776-54adcc74-196c-4d07-b218-32542326812d.JPG)

### Mobile version (nav is hidden)

![mobile_version](https://user-images.githubusercontent.com/88268603/147874798-6e25442e-60a2-4352-b23e-9d4246de7eb4.JPG)

### Mobile version (nav is active)

![mobile_version_open_nav](https://user-images.githubusercontent.com/88268603/147874819-bb268780-d1d1-48fd-9d53-ef3e57e4e73b.JPG)
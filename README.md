# Open-Library-UI-Kit #

<p>
    <a href="https://github.com/ShafSpecs/Open-Library-UI-Kit/blob/main/LICENSE" alt="License">
        <img src="https://img.shields.io/github/license/ShafSpecs/Open-Library-UI-Kit" /></a>
   <a href="https://github.com/ShafSpecs/Open-Library-UI-Kit/stargazers" alt="Stars">
        <img src="https://img.shields.io/github/stars/ShafSpecs/Open-Library-UI-Kit" /></a>
  <a href="https://github.com/ShafSpecs/Open-Library-UI-Kit/network/members" alt="Forks">
        <img src="https://img.shields.io/github/forks/ShafSpecs/Open-Library-UI-Kit" /></a>
</p>

This project is designed to be used as a template for UI Kits built mainly with React, styled-components and Semantic-UI. [Click](https://openlibrary-ui-kit.vercel.app) to preview a live demo of the template.

---

### Contents of this guide: ###

1. How to navigate the project
2. Understand file hierachy
3. How to use in your project
4. How to report a bug or request a feature


## How to navigate this project

This project contains a source folder alongside a license and configuration files and a README file.
The `package.json` and `package-lock.json` contains the dependency information, the README and License both contain how to use and utilize this project. 
The src folder contains all the code and will be deiscussed below:


## Understand file hierachy

`src` folder is comprised of 3 files and 3 folders. `main.jsx` is our entry point (index file), `app.css` contains all our styles and `App.jsx` is our main, first component (rendered in our index file). 


The `Landing Page` folder contains our code for the landing page (Homepage), it contains of the main `Homepage.jsx` file that renders the entire page and a Section folder that contains an About folder and other stylesheet files and folders. `landingpage.jsx` and `material-kit-react.jsx` are both stylesheets used in the landing page while Grid, Parallax, Header and Icon all contain the component and style that makes up the Landing Page. The About folder is the component that makes up the whitespace of the landing page, it can be edited to your own liking and taste. 
![About Section](https://user-images.githubusercontent.com/69679506/127505904-5f8632c1-58c0-4fc7-b8ac-fdcfaed0462b.png)



The `Image` folder contains images sourced from free image sites, **all ownership and copyright belong to their respective authors**.


The `modules` folder contains three distinctive folders. `Layouts` folder, `unique imports` and `components` folder. The Layouts folder have two files, `PageLayout.jsx` and `ComponentTab.jsx`. `PageLayout.jsx` is the container used for the skeleton of each UI kit component and `ComponentTab.jsx` is a plain component designed to render each of your component in your respective pages, just place it in your page layout as aprop to render every time.

The unique imports folder contains `MobileNavbar.jsx` that contains the navbar used for mobile resolution, `Desktop SideBar.jsx` contains  the sidebar component used for the library in Desktop resolution. 


The `components` folder contains the Homepage header. All these can be edited and formatted to your liking, just update the imports.


## How to use in project

To use in your project, fork this repository then clone it. Thereafter run
```
npm install
```
to install dependencies. You can edit and add content and pages as you please. 


## How to report bug or request feature

To request or report, create an issue and if it's deemed necessary or advisable, would be acted upon immediately. Or, you can create a pull request and we will take it from there.

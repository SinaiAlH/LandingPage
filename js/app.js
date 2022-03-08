/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
window.addEventListener('load', function () {
    // Get sections 
    const sections = document.querySelectorAll("section");
    const menu = document.getElementById("navbar__list");
    let navLi = [];
    let options = "";

    // Build submenu options
    for (let i = 0; i < sections.length; i++) {
        const text = sections[i].querySelectorAll("h2").length > 0 ? sections[i].querySelectorAll("h2")[0].outerText : `Section ${i}`;
        const id = sections[i].id;
        options += `<li class="${id}"><a data-nav="${id}" class="menu__link" href="#${id}"">${text}</a></li>`;
        
    }
    // Add options to nav element on dom
    menu.innerHTML = options;
    // Scroll to section on link click
    var menuOptions = document.querySelectorAll(".menu__link");
    for (let i = 0; i < menuOptions.length; i++) {
        menuOptions[i].addEventListener("click", function(){
            document.querySelectorAll('section').forEach(n => n.classList.remove('your-active-class'));
            document.getElementById(this.getAttribute("data-nav")).classList.add("your-active-class");
        });        
    }
    

    navLi = document.querySelectorAll("nav ul li");
    // Set sections as active

    // Add scroll listener in order to get the current position of the object 
    // and the position of the window to set the section as active
    window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = (section.getBoundingClientRect().top + window.pageYOffset) - 40;
        
            if (
                scrollY > sectionTop &&
                scrollY <= sectionTop + sectionHeight
              ) {
            current = section.getAttribute("id"); 
        }
    });

    // Change the menu list option as active when the displayed position is the option selected.
    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
        });
    };






  }, false);




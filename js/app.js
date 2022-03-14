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

let sections = [];

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
const buildNav = () => {
    const menu = document.getElementById("navbar__list");
    let options = "";

    // Build submenu options
    sections.forEach(function(section) {
        const text = section.querySelectorAll("h2").length > 0 ? section.querySelectorAll("h2")[0].outerText : `Section ${i}`;
        const id = section.id;
        options += `<li class="${id}"><a data-nav="${id}" class="menu__link" href="#${id}"">${text}</a></li>`;
    });
    
    // Add options to nav element on dom
    menu.innerHTML = options;
};

// Add class 'active' to section when near top of viewport
//const setActiveSection 

// Scroll to anchor ID using scrollTO event
const scrollToSection = (evt) => {
    evt.preventDefault();
    const element = document.getElementById(evt.currentTarget.getAttribute("data-nav"));

    //scroll to the section
    element.scrollIntoView( { behavior: "smooth", block: "start", inline: "center" });

    // Update top nav
    document.querySelectorAll('section').forEach(n => n.classList.remove('your-active-class'));
    element.classList.add("your-active-class");
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
window.addEventListener('load', function () {
    // Get sections 
    sections = document.querySelectorAll("section");
    
    // Build top nav
    buildNav();

    // Add click behavior to scroll to section on link click
    document.querySelectorAll(".menu__link").forEach( (opt) =>  opt.addEventListener("click", scrollToSection));    

    // Add scroll listener in order to get the current position of the object 
    // and the position of the window to set the section as active
    window.onscroll = () => {
        let navLi = document.querySelectorAll("nav ul li");
        let current = "";
    
        sections.forEach((section) => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = (section.getBoundingClientRect().top + window.pageYOffset) - 40;
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
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
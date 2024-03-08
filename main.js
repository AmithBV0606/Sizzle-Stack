const navMenu = document.getElementById('nav-menu');

// For Hamburger Settings : 
const ham = document.getElementById('hamburger');

ham.addEventListener('click', ()=>{
    navMenu.classList.remove('hidden');
})

// For closing Hamburger menu :
const navClose = document.getElementById('nav-close');

navClose.addEventListener('click', () => {
    navMenu.classList.add('hidden');
})

// For Clasing Hamburger Menu after clicking on any other page link :
const navLink = document.querySelectorAll(".nav_link");

navLink.forEach(link => 
    link.addEventListener('click', () => {
        navMenu.classList.add('hidden');
    })
    )

// For applying selected button state(Active class)

const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".item_wrap");
const foods = document.querySelectorAll(".food");
const snacks = document.querySelectorAll(".snack");
const beverages = document.querySelectorAll(".beverage");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })
        tab.classList.add("active")
        // For Filtering the Menu when clicked on particular category of Items :
        const tabval = tab.getAttribute('data-tabs')
        // console.log(tabval)

        all.forEach(item => {
            item.style.display = 'none';
        })

         if(tabval == 'food'){
            foods.forEach(item => {
                item.style.display = 'block';
            })
        } else if(tabval == 'snack'){
            snacks.forEach(item => {
                item.style.display = 'block';
            })
        } else if(tabval == 'beverage'){
            beverages.forEach(item => {
                item.style.display = 'block';
            })
        } else {
            all.forEach(item => {
                item.style.display = 'block';
            })
        }
    })
})

// Scroll Up Icon disappear : 
const scrollUp = () => {
    const scrollupBTN = document.getElementById("scroll-up");

    if(this.scrollY >=250){
        scrollupBTN.classList.remove("-bottom-1/2");
        scrollupBTN.classList.add("bottom-4");
    } else {
        scrollupBTN.classList.add("-bottom-1/2");
        scrollupBTN.classList.remove("bottom-4");
    }
}

window.addEventListener("scroll", scrollUp);

// Dark Theme Settings : 
const html = document.querySelector("html");
const themeBTN = document.getElementById("theme-toggle");

const darkMode = () => {
    html.classList.add("dark"); // Here dark class is being added to the html tag.
    themeBTN.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "dark");
}

const lightMode = () => {
    html.classList.remove("dark");
    themeBTN.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light");
}

if(localStorage.getItem("mode") == "dark"){
    darkMode();
}else {
    lightMode();
}

themeBTN.addEventListener("click", (e) => {
    if(localStorage.getItem("mode") == "light"){
        darkMode();
    } else {
        lightMode();
    }
})

// To add active link : 
const activeLink = () =>{
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav_link");
    
    let current = "home";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if(this.scrollY >= sectionTop - 60){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((item) => {
        item.classList.remove("text-Saffron");

        if(item.href.includes(current)){
            item.classList.add("text-Saffron");
        }
    });
}

window.addEventListener("scroll", activeLink);

// Sroll Reveal Animation 
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 400
})

// Home Section Load Animation : 
sr.reveal(".home_image");
sr.reveal(".home_content", {origin:"bottom"});

// Category Section Load Animation : 
sr.reveal(".category_card", {interval : 300});

// Prormo Cards Loadout : 
sr.reveal(".promo_card-1", {origin: "left"});
sr.reveal(".promo_card-2", {origin: "right"});

// About Section Loadout : 
sr.reveal(".about_image", {origin:"top"});
sr.reveal(".about_content", {origin:"bottom"});

// Menu items Loadout : 
sr.reveal(".menu_items", {origin: "left"});

// Customer Review Loadout : 
sr.reveal(".customer_review", {origin: "right"})

// Footer Loadout : 
sr.reveal(".footer", {interval: 300})
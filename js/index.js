const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// nav

let nav = document.querySelector("nav");

const navItem1 = nav.querySelector('a');
navItem1.textContent = "Services";
navItem1.href = "#";

const navItem2 = nav.appendChild(document.createElement('a'));
navItem2.textContent = "Product";
navItem2.href = "#";

const navItem3 = nav.appendChild(document.createElement('a'));
navItem3.textContent = "Vision";
navItem3.href = "#";

const navItem4 = nav.appendChild(document.createElement('a'));
navItem4.textContent = "Features";
navItem4.href = "#";

const navItem5 = nav.appendChild(document.createElement('a'));
navItem5.textContent = "About";
navItem5.href = "#";

const navItem6 = nav.appendChild(document.createElement('a'));
navItem6.textContent = "Contact";
navItem6.href = "#";

// cta

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

const ctaHeader = document.querySelector("h1");
ctaHeader.textContent = "DOM is awesome!";

const ctaButton = document.querySelector("button");
ctaButton.innerText = "Get Started";

// main content

/* top content */
const mcTitle1 = document.querySelector('div .top-content .text-content:nth-of-type(1) h4');
mcTitle1.textContent = siteContent['main-content']['features-h4'];

const mcPara1 = document.querySelector('div .top-content .text-content:nth-of-type(1) p');
mcPara1.textContent = siteContent['main-content']['features-content'];

const mcTitle2 = document.querySelector('div .top-content .text-content:nth-of-type(2) h4');
mcTitle2.textContent = siteContent['main-content']['about-h4'];

const mcPara2 = document.querySelector('div .top-content .text-content:nth-of-type(2) p');
mcPara2.textContent = siteContent['main-content']['about-content'];

/* middle image */
let mcImage = document.getElementById("middle-img");
mcImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

/* bottom content */
const mcTitle3 = document.querySelector('div .bottom-content .text-content:nth-of-type(1) h4');
mcTitle3.textContent = siteContent['main-content']['services-h4'];

const mcPara3 = document.querySelector('div .bottom-content .text-content:nth-of-type(1) p');
mcPara3.textContent = siteContent['main-content']['services-content'];

const mcTitle4 = document.querySelector('div .bottom-content .text-content:nth-of-type(2) h4');
mcTitle4.textContent = siteContent['main-content']['product-h4'];

const mcPara4 = document.querySelector('div .bottom-content .text-content:nth-of-type(2) p');
mcPara4.textContent = siteContent['main-content']['product-content'];

const mcTitle5 = document.querySelector('div .bottom-content .text-content:nth-of-type(3) h4');
mcTitle5.textContent = siteContent['main-content']['vision-h4'];

const mcPara5 = document.querySelector('div .bottom-content .text-content:nth-of-type(3) p');
mcPara5.textContent = siteContent['main-content']['vision-content'];



// Nav button variables
const navAbout = document.getElementById("navAbout");
const navProjects = document.getElementById("navProjects");
const navContact = document.getElementById("navContact");

// ABOUT HANDLER
navAbout.addEventListener("click", () => {
    console.log("ABOUT");
    document.getElementById("body").scrollIntoView({behavior: 'smooth'});
})

// PROJECTS HANDLER
navProjects.addEventListener("click", () => {
    console.log("PROJECTS");
    document.getElementById("projects").scrollIntoView({behavior: 'smooth'});
})

// CONTACT HANDLER
navContact.addEventListener("click", () => {
    console.log("CONTACT");
    document.getElementById("contact").scrollIntoView({behavior: 'smooth'});
})
const card = document.querySelectorAll(".project");
const sectionP = document.getElementById("slider")
const left = document.querySelector(".left");
const right = document.querySelector(".right");

const home = document.getElementById("home")
const about = document.getElementById("about")
const project = document.getElementById("project")
const contact = document.getElementById("contact")

const homeBtn = document.querySelector(".home-btn")
const aboutBtn = document.querySelector(".about-btn")
const projectBtn = document.querySelector(".project-btn")
const contactBtn = document.querySelector(".contact-btn")


const tester = () => {
    alert("tested")
}
var tx = 0
const moveForward = () => {
    if(tx > -50){
        tx = tx - 10
    }
    sectionP.style.transform = `translateX(${tx}%)`
}
const moveBackward = () =>{
    if(tx < 0){
        tx = tx + 10
    }
    sectionP.style.transform = `translateX(${tx}%)`
}

homeBtn.addEventListener("click", function(){
    home.style.display = "flex";
    about.style.display = "none";
    project.style.display = "none";
    contact.style.display = "none"
})
aboutBtn.addEventListener("click", function(){
    home.style.display = "none";
    about.style.display = "flex";
    project.style.display = "none";
    contact.style.display = "none"
})
projectBtn.addEventListener("click", function(){
    home.style.display = "none";
    about.style.display = "none";
    project.style.display = "flex";
    contact.style.display = "none"
})
contactBtn.addEventListener("click", function(){
    home.style.display = "none";
    about.style.display = "none";
    project.style.display = "none";
    contact.style.display = "flex";
})


right.addEventListener("click", moveForward)
left.addEventListener("click", moveBackward)

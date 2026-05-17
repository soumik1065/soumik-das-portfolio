
const collapseBtns = document.querySelectorAll(".collapse-btn");

collapseBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    const content = btn.nextElementSibling;

    if(content.style.display === "block"){
      content.style.display = "none";
    }
    else{
      content.style.display = "block";
    }

  });

});




const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

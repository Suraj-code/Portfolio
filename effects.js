// Select all menu links
const menuLinks = document.querySelectorAll(".navbar li");

// Add click event listener to each menu item
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Close the menu when a menu item is clicked
        menu.classList.remove("open");

        // Change the menuToggler text back to the original state (≡)
        menuToggler.textContent = "≡";
    });
});

// Add click event listener to the menuToggler
menuToggler.addEventListener('click', () => {
    // Toggle the class to show/hide the menu
    menu.classList.toggle('open');

    // Change the menuToggler text based on its current state
    menuToggler.textContent = menuToggler.textContent === "×" ? "≡" : "×";
});


document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".typing-text");
  const textElement2 = document.querySelector(".typing-hi");
  const text = textElement.textContent;
  const text2 = textElement2.textContent;
  textElement.textContent = "";
  textElement2.textContent = ""; // Clear the original text
  textElement.style.visibility = "hidden"; // Hide textElement initially
  
  let charIndex = 0;
  const typingSpeed = 85; // Adjust the speed as needed
  
  function typeText2() {
      if (charIndex < text2.length) {
          textElement2.textContent += text2.charAt(charIndex);
          charIndex++;
          setTimeout(typeText2, typingSpeed);
      } else {
          charIndex = 0; // Reset charIndex for textElement
          textElement.style.visibility = "visible"; // Show textElement
          typeText(); // Start typing textElement after textElement2 is done
      }
  }
  
  function typeText() {
      if (charIndex < text.length) {
          textElement.textContent += text.charAt(charIndex);
          charIndex++;
          setTimeout(typeText, typingSpeed);
      }
  }
  
  setTimeout(typeText2, typingSpeed);
});

let slideIndex = 0;
showProject(slideIndex);

function showProject(index) {
    const projects = document.getElementsByClassName("photo-card");
    
    // Hide all projects
    for (let i = 0; i < projects.length; i++) {
        projects[i].style.display = "none";
    }
    
    // Show the specific project
    if (index >= projects.length) { slideIndex = 0; }
    if (index < 0) { slideIndex = projects.length - 1; }
    projects[slideIndex].style.display = "flex";
    // projects[slideIndex].classList.add("active");
}

function nextProject() {
    showProject(slideIndex += 1);
}

function prevProject() {
    showProject(slideIndex -= 1);
}

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 }); // Adjust threshold as needed

sections.forEach(section => {
    observer.observe(section);
});






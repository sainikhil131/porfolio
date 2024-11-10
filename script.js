// Function to animate the text letter by letter
function changeTextLetterByLetter(newText, elementId, callback) {
    let index = 0;
    const roleTextElement = document.getElementById(elementId);
    roleTextElement.textContent = ''; // Clear the current text

    // Create an interval to add one letter at a time
    const interval = setInterval(function() {
        roleTextElement.textContent += newText[index];
        index++;
        if (index === newText.length) {
            clearInterval(interval); // Stop when all letters are added
            if (callback) callback(); // Call the callback when the text is fully written
        }
    }, 200); // 200ms interval for each letter
}

// Function to cycle between texts in a loop
function cycleText() {
    const roleTextElement = document.getElementById('role-text');

    // Initial text setup
    changeTextLetterByLetter('Full-Stack Developer', 'role-text', function() {
        // After displaying 'Full-Stack Developer', wait for 2 seconds then show 'Programmer'
        setTimeout(function() {
            changeTextLetterByLetter('Programmer', 'role-text', function() {
                // After displaying 'Programmer', wait for 2 seconds then loop again with 'Full-Stack Developer'
                setTimeout(function() {
                    cycleText(); // Recursively call cycleText to restart the loop
                }, 2000); // Wait for 2 seconds before showing 'Full-Stack Developer' again
            });
        }, 2000); // Wait for 2 seconds after 'Full-Stack Developer' before switching to 'Programmer'
    });
}

// Start the loop when the page loads
window.onload = function() {
    cycleText();
};
/*----------about---------*/
// JavaScript to trigger animation on scroll
function animateOnScroll() {
    const aboutSection = document.getElementById("about");
    const textColumn = document.querySelector(".about-col-2");
    const imageColumn = document.querySelector(".about-col-1");

    function handleScroll() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionBottom = aboutSection.getBoundingClientRect().bottom;
        const triggerPoint = window.innerHeight * 0.8;

        // Check if the section is within the viewport
        if (sectionTop < triggerPoint && sectionBottom > 0) {
            // Add animations when the section is visible
            textColumn.classList.add("animate-right");
            imageColumn.classList.add("animate-left");
        } else {
            // Reset animations to trigger again when scrolling up
            textColumn.classList.remove("animate-right");
            imageColumn.classList.remove("animate-left");
        }
    }

    window.addEventListener("scroll", handleScroll);
}

document.addEventListener("DOMContentLoaded", animateOnScroll);



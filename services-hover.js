// Select the specific services
const webDesigns = document.querySelector('.service-web-designs .desc h3');
const webDeveloper = document.querySelector('.service-web-developer .desc h3');
const devOps = document.querySelector('.service-devops .desc h3');

// Function to add and remove the hover effect
function applyHoverEffect(element) {
    element.addEventListener('mouseover', () => {
        element.style.color = 'red';
    });
    element.addEventListener('mouseout', () => {
        element.style.color = 'white'; // Reset to original color
    });
}

// Apply hover effect on each service
applyHoverEffect(webDesigns);
applyHoverEffect(webDeveloper);
applyHoverEffect(devOps);

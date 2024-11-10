document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll(".services-list div");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                } else {
                    entry.target.classList.remove("animate"); // Remove class when out of view
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the item is in view
        }
    );

    serviceItems.forEach((item) => {
        observer.observe(item);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const skillItems = document.querySelectorAll(".skill");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const progressBar = entry.target.querySelector('.progress-bar');
                if (entry.isIntersecting) {
                    // Set width to target value when the skill is in view
                    const targetWidth = entry.target.getAttribute('data-target-width');
                    progressBar.style.width = targetWidth;
                    entry.target.setAttribute("data-animated", "true");
                } else {
                    // Optionally reset width if leaving the viewport
                    progressBar.style.width = "0%";
                    entry.target.removeAttribute("data-animated");
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the skill is in view
    );

    skillItems.forEach((item) => observer.observe(item));
});

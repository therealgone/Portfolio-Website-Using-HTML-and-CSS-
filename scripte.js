document.querySelectorAll(".nav li a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); 
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

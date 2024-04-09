document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    dropdownToggle.addEventListener("click", () => {
        const dropdownMenu = document.querySelector("#dynamic-dropdown > .dynamic-dropdown-menu");
        dropdownMenu.classList.toggle("open");
        dropdownToggle.classList.toggle("open");
    });
});
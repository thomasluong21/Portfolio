document.addEventListener("DOMContentLoaded", function() {
    const currentDateElement = document.querySelector(".current_date");
    const currentYear = new Date().getFullYear();
    currentDateElement.textContent = currentYear;
    console.log('hello')
});
document.getElementById("navToggleBtn").addEventListener("click", function () {
    let icon = this.querySelector(".custom-toggler-icon");
    if (icon.textContent === "☰") {
        icon.textContent = "✖";  // Change to X when menu is opened
    } else {
        icon.textContent = "☰";  // Change back to ☰ when menu is closed
    }
});



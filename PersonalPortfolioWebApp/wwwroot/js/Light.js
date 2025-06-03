const toggleBtn = document.getElementById("darkModeToggle");
const icon = document.getElementById("darkIcon");

// Check saved preference
const currentMode = localStorage.getItem("theme");

if (currentMode === "light") {
    document.body.classList.add("light-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        localStorage.setItem("theme", "dark");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});
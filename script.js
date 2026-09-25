// ================================
// TAB NAVIGATION
// ================================
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.tab;

    tabs.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });

    panels.forEach((panel) => {
      panel.classList.remove("active");
      panel.hidden = true;
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    const targetPanel = document.getElementById(targetId);
    targetPanel.hidden = false;
    targetPanel.classList.add("active");
  });
});

// ================================
// MOBILE MENU
// ================================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Show selected tab and hide others
function showTab(tabId, el) {
  // Hide all sections
  const sections = document.querySelectorAll(".tab-content");
  sections.forEach(section => section.classList.remove("active"));

  // Remove active state from ALL nav items (a and button)
  const navItems = document.querySelectorAll("nav a, nav button");
  navItems.forEach(item => item.classList.remove("active"));

  // Show selected section
  const activeSection = document.getElementById(tabId);
  if (activeSection) activeSection.classList.add("active");

  // Highlight clicked nav item (if provided)
  if (el) el.classList.add("active");
}

// Show Home tab by default when page loads
window.addEventListener("DOMContentLoaded", () => {
  // Find first nav item that matches "home" and set active
  const homeBtn = document.querySelector("nav button[onclick*=\"'home'\"]")
                || document.querySelector("nav a[onclick*=\"'home'\"]");

  showTab("home", homeBtn);
});

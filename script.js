document.addEventListener("DOMContentLoaded", async () => {
  const tabsContainer = document.getElementById("tabs");
  const contentContainer = document.getElementById("content");

  try {
    // Fetch data from the external JSON file
    const response = await fetch("tabsContent.json");
    const data = await response.json();

    // Generate tabs and content dynamically
    data.tabs.forEach((tab, index) => {
      // Create tab buttons
      const tabButton = document.createElement("button");
      tabButton.className = "tab";
      if (index === 0) tabButton.classList.add("active");
      tabButton.setAttribute("data-tab", `tab${index + 1}`);
      tabButton.textContent = tab.name;
      tabsContainer.appendChild(tabButton);

      // Create tab content divs
      const tabContent = document.createElement("div");
      tabContent.className = "tab-content";
      if (index === 0) tabContent.classList.add("active");
      tabContent.id = `tab${index + 1}`;
      tabContent.textContent = tab.content;
      contentContainer.appendChild(tabContent);
    });

    // Add click event listeners to tabs
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        // Remove active class from all tabs and content
        tabs.forEach((t) => t.classList.remove("active"));
        contents.forEach((c) => c.classList.remove("active"));

        // Add active class to clicked tab and corresponding content
        tab.classList.add("active");
        const target = tab.getAttribute("data-tab");
        const targetContent = document.getElementById(target);
        if (targetContent) {
          targetContent.classList.add("active");
        }
      });
    });
  } catch (error) {
    console.error("Error loading tab content:", error);
  }
});

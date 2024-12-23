document.addEventListener("DOMContentLoaded", async () => {
  const tabsContainer = document.getElementById("tabs");
  const contentContainer = document.getElementById("content");

  try{
    // Fetch data from the external JSON file
    const response = await fetch("tabsContent.json");
    const data = await response.json();

    // Generate tabs and content dynamically
    data.tabs.forEach((tab, index) => {
      //Create tab buttons
      const tabButton = document.createElement("button");
      tabButton.className = "tab";
      if (index === 0) tabButton.classList.add("active");
    })
  }
})
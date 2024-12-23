# Tabs UI with External Content

This project implements a dynamic tabs interface using HTML, CSS, and JavaScript, where both the tab names and content are dynamically loaded from an external JSON file.

## Features

- Dynamic loading of tab names and content from an external file (`tabsContent.json`).
- Active tab highlighting.
- Smooth switching between tabs with corresponding content display.
- Modular and maintainable code structure.

## Live Demo

[View Demo](https://github.com/sumeetbidhan/tabsUIExternal)

## Project Structure

```
project-root/
├── index.html       # Main HTML file
├── styles.css       # Stylesheet for the project
├── script.js        # JavaScript logic for tabs functionality
├── tabsContent.json # External JSON file containing tab data
└── README.md        # Project documentation
```

## How It Works

### External JSON File (`tabsContent.json`)
The `tabsContent.json` file provides the names and content for each tab:

```json
{
  "tabs": [
    { "name": "Tab 1", "content": "This is the content for Tab 1." },
    { "name": "Tab 2", "content": "This is the content for Tab 2." },
    { "name": "Tab 3", "content": "This is the content for Tab 3." }
  ]
}
```

### HTML
The `index.html` contains placeholders for tabs and content containers:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic Tabs</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="tabs"></div>
  <div id="content"></div>
  <script src="script.js"></script>
</body>
</html>
```

### CSS
Basic styling is handled in `styles.css`:

```css
body {
  font-family: Arial, sans-serif;
}

#tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.tab {
  padding: 10px 20px;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
}

.tab.active {
  background-color: #007bff;
  color: #fff;
}

.tab-content {
  display: none;
  padding: 20px;
  border: 1px solid #ccc;
}

.tab-content.active {
  display: block;
}
```

### JavaScript
The logic for dynamically generating tabs and content is in `script.js`:

```javascript
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
```

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/sumeetbidhan/tabsUIExternal.git
   ```

2. Navigate to the project directory:
   ```bash
   cd tabsUIExternal
   ```

3. Open the `index.html` file in a browser.

4. Ensure the `tabsContent.json` file is in the same directory as `index.html`.

## Roadmap
This project follows the guidelines provided by [roadmap.sh](https://roadmap.sh/projects/simple-tabs).

## License
This project is open source and available under the [MIT License](LICENSE).


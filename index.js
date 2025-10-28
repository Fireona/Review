// Button collapses all "text"-class containers immediately following "section"-class containers
function toggleNextText(button) {
  // Find the closest section div (the title container)
  const section = button.closest(".section");

  // Find the next sibling element that has the "text" class
  const textBlock = section.nextElementSibling;

  // If the next element exists and has the "text" class, toggle it
  if (textBlock && textBlock.classList.contains("text")) {
    if (textBlock.style.display === "none") {
      textBlock.style.display = "block";
      button.textContent = "–"; // change button to minus when open
    } else {
      textBlock.style.display = "none";
      button.textContent = "+"; // change button back to plus when closed
    }
  }
}
function toggleText(button) {
    // Find the parent <div> of the clicked button>
    const parentDiv = button.closest(".text");

    // Find all child elements inside that parent div, except the button
    const children = parentDiv.querySelectorAll(":scope > *:not(button)");

    // Loop through and toggle visibility for those children
    children.forEach(child=> {
        if (child.style.display === "none") {
            child.style.display = "block";
        } else {
            child.style.display = "none";
        }
    });
}
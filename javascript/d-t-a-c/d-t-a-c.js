// Script for in-site nav and linked tab in js/dtac
document.addEventListener("DOMContentLoaded", () => {
    const links = [
        { id: "string1", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings"},
        { id: "string2", url: "https://www.w3schools.com/js/js_string_methods.asp"},
        { id: "string3", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},
        { id: "conditional1", url: "https://javascript.info/comparison"},
        { id: "conditional2", url: "https://javascript.info/logical-operators"},
        { id: "conditional3", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals"},
        { id: "conditional4", url: "https://javascript.info/ifelse"},
        { id: "conditional5", url: "https://javascript.info/switch"},
    ];

    links.forEach(link => {
        const element = document.getElementById(link.id);
        if (element) {
            element.addEventListener("click", () => {
                window.open(link.url, "_blank");
            });
        }
    });
});
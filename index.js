const headingOne = document.getElementById("heading-1");
headingOne.oninput = (e) => {
    if (headingOne.innerHTML.length > 0) {
        headingOne.removeAttribute("data-placeholder");
    } else {
        headingOne.setAttribute("data-placeholder", "Heading 1");
    }
};

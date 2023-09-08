function formSubmit(alertText) {
    alert(alertText)
}

function checkScrollPosition() {
    let navElement = document.querySelector('nav')
    let scrollPosition = window.scrollY

    if (scrollPosition > 0) {
        navElement.classList.add('not-at-top');
    } else {
        navElement.classList.remove('not-at-top');
    }
}

window.addEventListener('scroll', checkScrollPosition);

function scrollToTarget(offset) {
    var targetElement = document.getElementById('targetElement'); // Replace with the actual ID of your target element
    var offsetTop = targetElement.offsetTop + offset;

    // Scroll to the target element with smooth behavior
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

// Add a click event listener to the button
var scrollButton = document.getElementById('scrollButton'); // Replace with the actual ID of your button
scrollButton.addEventListener('click', function () {
    // Adjust the scroll offset as needed (e.g., 50 pixels down)
    scrollToTarget(550);
});
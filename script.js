// Wait for the browser to fully load the HTML before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Select the button element from our HTML using its ID
    const colorButton = document.getElementById('colorButton');
    
    // Keep track of whether the background is changed or not
    let isChanged = false;

    // Add an event listener to listen for a 'click' event on the button
    colorButton.addEventListener('click', () => {
        if (!isChanged) {
            // Change the body background color to something vibrant
            document.body.style.backgroundColor = '#dbeafe';
            colorButton.textContent = 'Reset Color';
            isChanged = true;
        } else {
            // Revert back to the original background color
            document.body.style.backgroundColor = '#f0f2f5';
            colorButton.textContent = 'Click Me!';
            isChanged = false;
        }
    });

});

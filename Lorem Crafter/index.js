// Selecting elements
const form = document.querySelector('#form');
const copyButton = document.querySelector('.copy');
const textWrapper = document.querySelector('.text-wrapper');
const textSection = document.querySelector('.text-section');

// Handling form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const size = parseInt(form.input.value);
    displayLoremIpsum(size);
});

// Generating Lorem Ipsum text
function displayLoremIpsum(size) {
    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula odio non risus finibus feugiat.
    Donec bibendum, sapien eget volutpat dapibus, urna velit malesuada tortor, et fermentum arcu velit non dui.
    Vestibulum condimentum, justo sed rhoncus laoreet, nunc tellus viverra nulla, nec eleifend purus velit non justo.
    Proin sit amet venenatis velit, eu varius nunc. Integer eget ligula eu metus elementum sodales.
    Sed efficitur, mi a rhoncus vehicula, odio orci malesuada elit, at fermentum justo nulla et urna.
    Cras auctor, elit at lacinia eleifend, metus ex condimentum purus, ut lacinia tortor lectus id ipsum.
    Nunc viverra sit amet justo in lacinia. Vestibulum scelerisque, orci id cursus placerat, purus purus bibendum urna, at scelerisque quam libero sed arcu.
    Fusce eget purus eget purus sodales tristique ac nec nunc. Pellentesque eleifend laoreet ultrices.`;

    const loremArray = lorem.split('\n');
    let result = '';

    for (let i = 0; i < size; i++) {
        result += `<p class='text-gray font-semibold'>${loremArray[i % loremArray.length]}<p/>`;
    }

    // Displaying or hiding the text container
    textWrapper.style.display = result ? 'flex' : 'none';
    textSection.innerHTML = result;
}

// Adding event listener to copy button

// copyButton.addEventListener('click', () => {
//     const text = textSection.textContent;

//     // Creating a temporary textarea to copy text to clipboard
//     const textArea = document.createElement('textarea');
//     textArea.value = text;
//     textArea.style.position = 'fixed';
//     textArea.style.top = 0;
//     textArea.style.left = 0;
//     textArea.style.opacity = 0;

//     document.body.appendChild(textArea);
//     textArea.select();
//     document.execCommand('copy');
//     document.body.removeChild(textArea);

//     // Adding animation class to copy button
//     copyButton.classList.add('fa-clipboard');
//     copyButton.classList.remove('fa-copy');
//     setTimeout(() => {
//         copyButton.classList.remove('fa-clipboard');
//         copyButton.classList.add('fa-copy');
//     }, 500);
// });


copyButton.addEventListener('click', () => {
    const text = textSection.textContent;

    // Create a range object
    const range = document.createRange();
    
    // Select the text content inside the div
    range.selectNodeContents(textSection);

    // Add the selected range to the current selection
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Clear the selection
    selection.removeAllRanges();

    // Adding animation class to copy button
    copyButton.classList.add('fa-check');
    copyButton.classList.remove('fa-copy');
    setTimeout(() => {
        copyButton.classList.remove('fa-check');
        copyButton.classList.add('fa-copy');
    }, 500);
});

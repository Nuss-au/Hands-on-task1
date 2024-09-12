
document.addEventListener( 'DOMContentLoaded', () => {

    // Sample sentences to form the paragraphs
    const loremIpsum = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
        "Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
        "Integer in mauris eu nibh euismod gravida.",
        "Duis ac tellus et risus vulputate vehicula.",
        "Donec lobortis risus a elit. Etiam tempor."    
    ]
    document.getElementById('generateBtn').addEventListener('click', generateLoremIpsum);

    function generateLoremIpsum() {
        const numPar = document.getElementById('numPar').value;
        const numSent = document.getElementById('numSent').value;
        const outputDiv = document.getElementById('output');
    
    
        // Clear previous output
        outputDiv.innerHTML = "";
    
        // Generate paragraphs
        for (let i = 0; i < numPar; i++) {
            let paragraph = "";
            for (let j = 0; j < numSent; j++) {
                const randomIndex = Math.floor(Math.random() * loremIpsum.length);
                paragraph += loremIpsum[randomIndex] + " ";
            }
            // Create a paragraph element and append it
            const p = document.createElement('p');
            p.textContent = paragraph;
            outputDiv.appendChild(p);
        }
    }
    

})
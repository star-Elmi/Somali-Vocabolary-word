// Select DOM elements
const somaliWordInput = document.getElementById('somaliWord');
const englishTranslationInput = document.getElementById('englishTranslation');
const addWordBtn = document.getElementById('addWordBtn');
const wordList = document.getElementById('wordList');

// Retrieve vocabulary from local storage or initialize an empty array
let vocabulary = localStorage.getItem('somaliVocabulary') ? JSON.parse(localStorage.getItem('somaliVocabulary')) : [];

// Function to update local storage and UI
function updateLocalStorage() {
    localStorage.setItem('somaliVocabulary', JSON.stringify(vocabulary));
    updateUI();
}

// Function to update the UI with the vocabulary list
function updateUI() {
    wordList.innerHTML = '';

    vocabulary.forEach(word => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${word.somali}</span> - ${word.english}`;
        wordList.appendChild(li);
    });
}

// Add Word button event listener
addWordBtn.addEventListener('click', () => {
    const somaliWord = somaliWordInput.value.trim();
    const englishTranslation = englishTranslationInput.value.trim();

    if (somaliWord === '' || englishTranslation === '') {
        alert('Please enter both a Somali word and its English translation.');
        return;
    }

    // Add the new word to the vocabulary array
    vocabulary.push({ somali: somaliWord, english: englishTranslation });

    // Update local storage and UI
    updateLocalStorage();

    // Clear input fields
    somaliWordInput.value = '';
    englishTranslationInput.value = '';
});

// Initial UI update to display any words already saved
updateUI();

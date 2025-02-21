document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("text-input");
    const wordCount = document.getElementById("word-count");
    const charCount = document.getElementById("char-count");

    textInput.addEventListener("input", () => {
        const text = textInput.value.trim();
        const words = text.match(/\b\S+\b/g) || []; 
        wordCount.textContent = words.length;
        charCount.textContent = text.length;
    });
});
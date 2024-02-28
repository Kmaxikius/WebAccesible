document.addEventListener('DOMContentLoaded', function () {
    const readButton = document.getElementById('readButton');
    const increaseFontSizeButton = document.getElementById('increaseFontSize');
    const decreaseFontSizeButton = document.getElementById('decreaseFontSize');
    const applyColorsButton = document.getElementById('applyColors');
    const textColorSelect = document.getElementById('textColor');
    const backgroundColorSelect = document.getElementById('backgroundColor');
    const mainContent = document.getElementById('mainContent');

    readButton.addEventListener('click', function () {
        const fullText = mainContent.textContent;
        readText(fullText);
    });

    increaseFontSizeButton.addEventListener('click', function () {
        changeFontSize(1.2);
    });

    decreaseFontSizeButton.addEventListener('click', function () {
        changeFontSize(0.8);
    });

    applyColorsButton.addEventListener('click', function () {
        const selectedTextColor = textColorSelect.value;
        const selectedBackgroundColor = backgroundColorSelect.value;

        mainContent.style.color = selectedTextColor;
        mainContent.style.backgroundColor = selectedBackgroundColor;
    });

    function readText(text) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = text;
        window.speechSynthesis.speak(speech);
    }

    function changeFontSize(factor) {
        const currentFontSize = parseFloat(window.getComputedStyle(mainContent).fontSize);
        mainContent.style.fontSize = (currentFontSize * factor) + 'px';
    }
});

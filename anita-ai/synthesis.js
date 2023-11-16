const speechSynthesis = window.speechSynthesis;

if (speechSynthesis) {
  micBtn.addEventListener('click', speak);

  function speak(e) {
    e.preventDefault();
    const inputValue = input.value;
    const speech = new SpeechSynthesisUtterance();
    speech.lang = 'en-US';
    speech.text = inputValue;
    speech.volume = '1';
    speech.rate = '1';
    speech.pitch = '1';
    speech.voice = speechSynthesis.speak(speech);
  }
} else {
  console.log('Speech Synthesis Not Supported');
  speechBtnDiv.style.visibility = 'hidden';
}

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (speechRecognition) {
  const recognition = new speechRecognition();

  micBtn.addEventListener('click', micBtnClicked);
  function micBtnClicked(e) {
    e.preventDefault();
    if (micBtn.classList.contains('fa-microphone')) {
      recognition.start();
    } else {
      recognition.stop();
    }
  }

  recognition.addEventListener('start', () => {
    micBtn.classList.remove('fa-microphone');
    micBtn.classList.add('fa-microphone-slash');
    instruction.textContent = 'Recording... Press Ctrl + m to stop.';
    searchInput.focus();
    console.log('Speech Recognition Enabled');
  });
  recognition.addEventListener('end', () => {
    micBtn.classList.remove('fa-microphone-slash');
    micBtn.classList.add('fa-microphone');
    instruction.textContent = 'Press Ctrl + x or Click the Mic icon to start';
    searchInput.focus();
    console.log('Speech Recognition Disabled');
  });

  recognition.continuous = true;
  recognition.addEventListener('result', (e) => {
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;

    if (transcript.toLowerCase().trim() === 'stop recording') {
      recognition.stop();
    } else if (!searchInput.value) {
      searchInput.value = transcript;
    } else {
      if (transcript.toLowerCase().trim() === 'search') {
        searchForm.submit();
      } else if (transcript.toLowerCase().trim() === 'reset form') {
        searchInput.value = '';
      } else {
        searchInput.value = transcript;
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'x') {
      recognition.start();
    }
    if (e.ctrlKey && e.key === 'm') {
      recognition.stop();
    }
  });
} else {
  speechBtnDiv.style.visibility = 'hidden';
}

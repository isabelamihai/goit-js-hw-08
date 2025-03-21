import { throttle } from 'lodash';

// Selectează formularul și câmpurile sale
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Funcția care actualizează localStorage
function saveFeedbackToLocalStorage() {
  const feedbackData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackData));
}

// Folosește throttle pentru a preveni actualizarea prea frecventă
form.addEventListener('input', throttle(saveFeedbackToLocalStorage, 500));

// La încărcarea paginii, umple câmpurile cu datele salvate, dacă există
document.addEventListener('DOMContentLoaded', () => {
  const savedFeedback = localStorage.getItem('feedback-form-state');
  if (savedFeedback) {
    const { email, message } = JSON.parse(savedFeedback);
    emailInput.value = email;
    messageInput.value = message;
  }
});

// La trimiterea formularului, șterge datele din localStorage
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const feedbackData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(feedbackData); // Afișează obiectul în consolă
  localStorage.removeItem('feedback-form-state'); // Șterge datele salvate
  form.reset(); // Resetează formularul
});

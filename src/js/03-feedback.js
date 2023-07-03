import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onInput, 100));
feedbackForm.addEventListener('submit', onFormSubmit);

// input listener

function onInput(event) {
  // const {
  //   elements: { email, message },
  // } = event.currentTarget;

  const formValue = {
    email: feedbackForm.elements.email.value,
    message: feedbackForm.elements.message.value,
  };

  return localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
}

// submit listener

function onFormSubmit(event) {
  event.preventDefault();

  if (
    feedbackForm.elements.email.value === '' ||
    feedbackForm.elements.message.value === ''
  ) {
    return console.log('Please fill in all the fields!');
  }

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');

  event.currentTarget.reset();
}

//  pageRelaunch

function pageRelaunch() {
  const formValues = localStorage.getItem('feedback-form-state');
  if (formValues) {
    const StoredArr = JSON.parse(formValues);
    feedbackForm.elements.email.value = StoredArr.email;
    feedbackForm.elements.message.value = StoredArr.message;
  }
}

pageRelaunch();

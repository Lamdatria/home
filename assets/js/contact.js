document.querySelector('.php-email-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const form = this;
  const formData = new FormData(form);
  const loadingElement = document.querySelector('.loading');
  const sentMessageElement = document.querySelector('.sent-message');

  loadingElement.classList.add('d-block');

  fetch('https://docs.google.com/forms/d/e/1FAIpQLScv0fPp_kwfeVrgr5zcKfz5PtnZqupG2_IluxBFrNF5HQqHhQ/formResponse', {
    method: 'POST',
    body: formData,
    mode: 'no-cors'
  })
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      console.log(`${response.status} ${response.statusText} ${response.url}`); 
    }
  })
  .then(data => {
    loadingElement.classList.remove('d-block');
      sentMessageElement.classList.add('d-block');
      form.reset(); 
  
  })
  .catch(error => {
    console.error(error);
    loadingElement.classList.remove('d-block');
  });
});

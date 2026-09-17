(function () {
  const role = document.body.dataset.role;
  const form = document.querySelector('.login-form');
  const input = document.querySelector('#loginIdentity');
  const error = document.querySelector('.form-error');
  const demo = document.querySelector('[data-demo]');

  function openApp() {
    try {
      localStorage.setItem('spa_pending_role', role);
    } catch (e) {
      error.textContent = 'Local storage is unavailable. Please allow site data and try again.';
      return;
    }
    window.location.href = 'index.html?role=' + encodeURIComponent(role);
  }

  function submit() {
    if (!input.value.trim()) {
      error.textContent = 'Enter your mobile number or account code to continue.';
      input.focus();
      return;
    }
    error.textContent = '';
    openApp();
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    submit();
  });

  demo.addEventListener('click', function () {
    input.value = role === 'farmer' ? 'RJ-JPR-4471' : 'C2';
    submit();
  });
}());
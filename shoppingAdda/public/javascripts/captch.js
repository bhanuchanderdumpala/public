var getCaptcha = () => {
  var captchaText = generateCaptchaText('ULUNL');
  document.getElementById("captchaBlock").innerText = captchaText;
};

window.getCaptcha = getCaptcha; // ✅ Expose globally for onclick

// Refresh captcha when login modal is shown
const loginModal = document.getElementById('loginModal');
if (loginModal) {
  loginModal.addEventListener('show.bs.modal', () => {
    getCaptcha();
  });
}

// Optional: generate on page load
window.addEventListener('DOMContentLoaded', () => {
  getCaptcha();
});

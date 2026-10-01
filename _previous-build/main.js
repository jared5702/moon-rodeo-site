(function () {
  'use strict';

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  var mqDesktop = window.matchMedia('(min-width: 900px)');

  function setMenu(open, returnFocus) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    var label = toggle.querySelector('.nav-toggle__label');
    if (label) label.textContent = open ? 'Close' : 'Menu';
    if (!open && returnFocus) toggle.focus();
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false, true);
      }
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && !mqDesktop.matches) setMenu(false);
    });

    var onChange = function () { if (mqDesktop.matches) setMenu(false); };
    if (mqDesktop.addEventListener) mqDesktop.addEventListener('change', onChange);
    else if (mqDesktop.addListener) mqDesktop.addListener(onChange);
  }

  /* ---------- Newsletter form ----------
     No mailing-list provider or consent workflow is connected yet, so a valid
     submission does not claim success. It says plainly that nothing was sent. */
  var form = document.getElementById('signup-form');
  if (!form) return;

  var email = document.getElementById('email');
  var consent = document.getElementById('consent');
  var emailError = document.getElementById('email-error');
  var consentError = document.getElementById('consent-error');
  var status = document.getElementById('signup-status');

  function showError(input, el, message) {
    el.textContent = message;
    el.hidden = false;
    input.setAttribute('aria-invalid', 'true');
  }

  function clearError(input, el) {
    el.textContent = '';
    el.hidden = true;
    input.removeAttribute('aria-invalid');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.hidden = true;
    status.textContent = '';
    clearError(email, emailError);
    clearError(consent, consentError);

    var firstInvalid = null;
    var value = email.value.trim();

    if (!value) {
      showError(email, emailError, 'Error: enter your email address, like name@example.com.');
      firstInvalid = email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      showError(email, emailError, 'Error: that email address looks incomplete. Use the format name@example.com.');
      firstInvalid = email;
    }

    if (!consent.checked) {
      showError(consent, consentError, 'Error: check the box to confirm you want Moon Rodeo emails.');
      if (!firstInvalid) firstInvalid = consent;
    }

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    status.textContent = 'Email signup isn’t connected yet, so nothing was sent. Please check back soon.';
    status.hidden = false;
  });

  email.addEventListener('input', function () { if (email.hasAttribute('aria-invalid')) clearError(email, emailError); });
  consent.addEventListener('change', function () { if (consent.hasAttribute('aria-invalid')) clearError(consent, consentError); });
})();

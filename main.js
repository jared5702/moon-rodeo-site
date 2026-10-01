(function () {
  'use strict';

  /* ---------- Full-screen menu ---------- */
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');
  var background = [document.getElementById('main'), document.querySelector('.footer'), document.querySelector('.stamp')];

  function setMenu(open, returnFocus) {
    if (!btn || !menu) return;
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    background.forEach(function (el) { if (el) el.inert = open; });
    if (open) {
      var first = menu.querySelector('a');
      if (first) first.focus();
    } else if (returnFocus) {
      btn.focus();
    }
  }

  if (btn && menu) {
    btn.addEventListener('click', function () {
      setMenu(btn.getAttribute('aria-expanded') !== 'true', true);
    });

    document.addEventListener('keydown', function (e) {
      if (btn.getAttribute('aria-expanded') !== 'true') return;
      if (e.key === 'Escape') {
        setMenu(false, true);
        return;
      }
      // Keep Tab inside the open menu and its close button.
      if (e.key === 'Tab') {
        var items = [btn].concat(Array.prototype.slice.call(menu.querySelectorAll('a')));
        var firstEl = items[0];
        var lastEl = items[items.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) { e.preventDefault(); lastEl.focus(); }
        else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); firstEl.focus(); }
      }
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
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

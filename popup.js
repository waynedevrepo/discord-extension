document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.local.get('authHeader', function (data) {
    if (data.authHeader) {
      document.getElementById('auth-header').innerText = data.authHeader;
    } else {
      document.getElementById('auth-header').innerText =
        'No authorization header found.';
    }
  });
});

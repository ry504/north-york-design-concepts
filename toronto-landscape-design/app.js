(function () {
  var form = document.getElementById('enquiry-form');
  var service = document.getElementById('service');
  var details = document.getElementById('details');
  var status = document.getElementById('enquiry-status');
  if (!form || !service || !status) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var text = details && details.value.trim() ? details.value.trim() : 'no sample details entered';
    status.textContent =
      'Preview only: ' + service.value + ' — ' + text + '. ' +
      'This concept has not sent, saved or shared anything.';
    status.hidden = false;
    status.focus();
  });
})();

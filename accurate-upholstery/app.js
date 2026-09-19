(function () {
  "use strict";

  var form = document.getElementById("enquiry-form");
  if (!form) return;

  var status = document.getElementById("enquiry-status");
  var resetBtn = document.getElementById("form-reset");
  var fields = [
    { el: document.getElementById("ptype"), err: document.getElementById("ptype-err"), label: "Project type" },
    { el: document.getElementById("item"), err: document.getElementById("item-err"), label: "Furniture item" },
    { el: document.getElementById("desc"), err: document.getElementById("desc-err"), label: "Description" }
  ];

  function setError(field, message) {
    if (message) {
      field.err.textContent = message;
      field.err.hidden = false;
      field.el.setAttribute("aria-invalid", "true");
      if (field.err.id) field.el.setAttribute("aria-describedby", field.err.id);
    } else {
      field.err.textContent = "";
      field.err.hidden = true;
      field.el.removeAttribute("aria-invalid");
      field.el.removeAttribute("aria-describedby");
    }
  }

  fields.forEach(function (field) {
    var evt = field.el.tagName === "SELECT" ? "change" : "input";
    field.el.addEventListener(evt, function () {
      if (!field.err.hidden) setError(field, "");
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var firstInvalid = null;

    fields.forEach(function (field) {
      var value = (field.el.value || "").trim();
      if (!value) {
        setError(field, field.label + " is required.");
        if (!firstInvalid) firstInvalid = field.el;
      } else {
        setError(field, "");
      }
    });

    if (firstInvalid) {
      status.textContent = "Please complete the required fields.";
      firstInvalid.focus();
      return;
    }

    var type = fields[0].el.value;
    var item = fields[1].el.value.trim();
    var desc = fields[2].el.value.trim();

    status.textContent =
      "Sample summary, not sent anywhere.\n" +
      "Project type: " + type + "\n" +
      "Furniture item: " + item + "\n" +
      "Description: " + desc;

    if (resetBtn) resetBtn.hidden = false;

  });

  form.addEventListener("reset", function () {
    window.setTimeout(function () {
      fields.forEach(function (field) { setError(field, ""); });
      if (status) status.textContent = "";
      if (resetBtn) resetBtn.hidden = true;
    }, 0);
  });
})();

(function () {
  "use strict";

  var form = document.getElementById("enquiry-form");
  if (!form) return;

  var statusEl = document.getElementById("enquiry-status");
  var summaryEl = document.getElementById("enquiry-summary");
  var typeOut = document.getElementById("summary-type");
  var itemOut = document.getElementById("summary-item");
  var detailsOut = document.getElementById("summary-details");
  var typeField = document.getElementById("project-type");
  var itemField = document.getElementById("item");
  var detailsField = document.getElementById("details");

  var LABELS = { home: "Home", commercial: "Commercial" };

  function showSummary() {
    var type = LABELS[typeField.value] || "Not chosen";
    var item = itemField.value.trim();
    var details = detailsField.value.trim();

    typeOut.textContent = type;
    itemOut.textContent = item;
    detailsOut.textContent = details || "No extra details given";

    summaryEl.hidden = false;
    statusEl.textContent =
      "Sample preview only — nothing has been sent. " +
      "Project type: " + type + ". Furniture item: " + (item || "not given") + ".";
    statusEl.focus();
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!typeField.value) {
      statusEl.textContent = "Choose a project type — home or commercial — to preview the enquiry.";
      summaryEl.hidden = true;
      statusEl.focus();
      typeField.focus();
      return;
    }
    if (!itemField.value.trim()) {
      statusEl.textContent = "Add a furniture item, for example a sofa or booth seating.";
      summaryEl.hidden = true;
      statusEl.focus();
      itemField.focus();
      return;
    }

    showSummary();
  });

  form.addEventListener("reset", function () {
    summaryEl.hidden = true;
    statusEl.textContent =
      "Form cleared. Fill it in and choose \u201CPreview enquiry\u201D to see a summary of the sample details here.";
  });
})();

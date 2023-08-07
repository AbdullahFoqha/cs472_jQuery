function toObject() {
  var formData = $('#form').serializeArray();
  var result = {};

  // Use map to transform formData into an object
  formData.map(function (item) {
    result[item.name] = item.value;
  });

  return result;
}

$(document).ready(function () {
  // Existing code...

  // Replace $.each with map in the toObject method
  function toObject() {
    var formData = $('#form').serializeArray();
    var result = {};

    // Use map to transform formData into an object
    formData.map(function (item) {
      result[item.name] = item.value;
    });

    return result;
  }

  // Print object to console button click handler
  $('#printToConsole').click(function () {
    var result = toObject();
    console.log(JSON.stringify(result, null, 2));
  });

  // Load object into console button click handler
  $('#loadToObject').click(function () {
    var demoData = {
      // Define your demo data object here
    };
    $('#form').fromObject(demoData);
  });
});

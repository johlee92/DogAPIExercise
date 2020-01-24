// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("#js-form-random").validate({
      // Specify validation rules
      rules: {
        searchNumber: {
          required: true,
          minlength: 1,
          maxlength: 50
        }
      },
      // Specify validation error messages
      messages: {
        searchNumber: {
          required: "Please provide a number",
          minlength: "Your number must be at least 1",
          maxlength: "Your number must be below 50"
        }
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
    //   submitHandler: function(form) {
    //     form.submit();
    //   }
    });
  });
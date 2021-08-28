function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}

<form>
  <label for="choose">Would you prefer a banana or a cherry?</label>
  <input id="choose" name="i_like" required pattern="[Bb]anana|[Cc]herry">
    <button>Submit</button>
</form>

  form {
    font: 1em sans-serif;
  max-width: 320px;
}

p > label {
    display: block;
}

  input[type="text"],
  input[type="email"],
  input[type="number"],
  textarea,
  fieldset {
    width : 100%;
  border: 1px solid #333;
  box-sizing: border-box;
}

  input:invalid {
    box - shadow: 0 0 5px 1px red;
}

  input:focus:invalid {
    box - shadow: none;
}



  <form novalidate>
    <p>
      <label for="mail">
        <span>Please enter an email address:</span>
        <input type="email" id="mail" name="mail" required minlength="8">
          <span class="error" aria-live="polite"></span>
    </label>
  </p>
      <button>Submit</button>
</form>
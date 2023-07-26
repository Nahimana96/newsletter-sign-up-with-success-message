const successPage = document.querySelector(".success");
const signUpPage = document.querySelector(".sign-up");

function onSubmit() {
  const form = document.querySelector(".text form");
  const input = document.querySelector(".text form input");
  // ajout de l'evenement submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const dynamicText = document.querySelector(".success .dynamic-text");
    signUpPage.style.display = "none";
    dynamicText.innerHTML = `A confirmation mail has been sent to <br/> <span>${input.value}</span>. Please open it and click the button inside to confirm your subscription.`;
    successPage.style.display = "block";
  });
}
onSubmit();

function dismissMessage() {
  const dismissButton = document.querySelector(".dismiss");

  // ajout de l'evenement au clic
  dismissButton.addEventListener("click", () => {
    successPage.style.display = "none";
    signUpPage.style.display = "grid";
  });
}
dismissMessage();

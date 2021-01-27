const nextBtn = document.querySelectorAll('.next-btn');
const prevBtn = document.querySelectorAll('.prev-btn');
const formSteps = document.querySelectorAll('.form-step');
const stepIndicators = document.querySelectorAll('.step-indicator > *')

nextBtn.forEach(button => button.addEventListener('click', toNextPage));
prevBtn.forEach(button => button.addEventListener('click', toPrevPage));
stepIndicators.forEach(button => button.addEventListener('click', toStep));

function toStep(e) {
  let clickedStepNum = parseInt(e.target.innerHTML);
  // deactivate current
  document.querySelector('.current-step').classList.remove('current-step');
  document.querySelector('div.active').classList.remove('active');
  // activate clicked
  formSteps[clickedStepNum - 1].classList.add('current-step');
  stepIndicators[clickedStepNum - 1].classList.add('active');
  console.log(currentStep);
}

function toNextPage(e) {
  let currentStepNum = Array.prototype.indexOf.call(nextBtn, e.target);
  //activate next
  formSteps[currentStepNum + 1].classList.add('current-step');
  stepIndicators[currentStepNum + 1].classList.add('active');
  // deactivate current
  formSteps[currentStepNum].classList.remove('current-step');
  stepIndicators[currentStepNum].classList.remove('active');
}

function toPrevPage(e) {
  let currentStepNum = Array.prototype.indexOf.call(prevBtn, e.target);
  // activate previous
  formSteps[currentStepNum].classList.add('current-step');
  stepIndicators[currentStepNum].classList.add('active');
  // deactivate current
  formSteps[currentStepNum + 1].classList.remove('current-step');
  stepIndicators[currentStepNum + 1].classList.remove('active');
}

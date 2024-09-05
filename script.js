const questions = [{
    text: "Quelle est la distance entre la terre et le soleil",
    choices: ['50 millions de km', '100 millions de km', '150 millions de km'],
    answer: 3,
  }, {
    text: "Vrai ou faux : sur Neptune, le vent peut souffler à plus de 2000 km/h",
    choices: ['Vrai', 'Faux'],
    answer: 1,
  },
  /** etc... **/
];

const settings = {
  "title": "Questionnaire sur les Films et Séries",
  "minimum_score": 4,
  "success_message": "Félicitations! Vous êtes un véritable cinéphile!",
  "failure_message": "Dommage! Vous devriez regarder plus de films et séries.",
  "etape": 0,
}

const progressBar = document.querySelector('.progressBar');
progressBar.value = settings.etape;
console.log(progressBar);

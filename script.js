let questions = [
  { text: "Quelle est la première voiture sportive produite par Nissan?", choices: ['Fairlady Z', 'GT-R', 'Skyline'], answer: 1 },
  { text: "Quelle marque japonaise est célèbre pour son modèle 'Supra'?", choices: ['Nissan', 'Mazda', 'Toyota'], answer: 3 },
  { text: "En quelle année Honda a-t-elle lancé la première génération de la Civic?", choices: ['1972', '1980', '1985'], answer: 1 },
  { text: "La Mazda RX-7 est connue pour son moteur de type:", choices: ['V6', 'Rotatif', 'Turbo Diesel'], answer: 2 },
  { text: "Quel modèle de Subaru est associé à la compétition de rallye?", choices: ['Forester', 'BRZ', 'Impreza WRX'], answer: 3 },
  { text: "Quelle est la marque japonaise qui fabrique la voiture hybride Prius?", choices: ['Suzuki', 'Toyota', 'Mitsubishi'], answer: 2 },
  { text: "La Lexus LFA est équipée d'un moteur:", choices: ['V8', 'V10', 'V12'], answer: 2 },
  { text: "Quel constructeur japonais produit le modèle MX-5, connu également sous le nom de Miata?", choices: ['Honda', 'Mazda', 'Nissan'], answer: 2 },
  { text: "La Nissan GT-R est souvent surnommée:", choices: ['Godzilla', 'Samurai', 'Ninja'], answer: 1 },
  { text: "Quelle marque japonaise utilise le slogan 'The Power of Dreams'?", choices: ['Honda', 'Mazda', 'Subaru'], answer: 1 },
  { text: "Quelle voiture est connue pour avoir un moteur Boxer?", choices: ['Toyota 86', 'Subaru BRZ', 'Mitsubishi Lancer'], answer: 2 },
  { text: "Quel modèle de Mitsubishi est associé à la compétition de rallye?", choices: ['Eclipse', 'Lancer Evolution', 'Outlander'], answer: 2 },
  { text: "Quelle marque japonaise a produit le modèle 'Silvia'?", choices: ['Nissan', 'Toyota', 'Mazda'], answer: 1 },
  { text: "La Honda NSX est également connue sous le nom de:", choices: ['Integra', 'Civic', 'Acura'], answer: 3 },
  { text: "Quelle voiture est connue pour avoir un moteur VTEC?", choices: ['Mazda RX-7', 'Honda Civic', 'Subaru Impreza'], answer: 2 },
  { text: "Quel modèle de Toyota est associé à la compétition de rallye?", choices: ['Celica', 'Supra', 'Corolla'], answer: 1 },
  { text: "Quelle marque japonaise a produit le modèle 'RX-8'?", choices: ['Mazda', 'Toyota', 'Honda'], answer: 1 },
  { text: "La Subaru WRX STI est une version sportive de la:", choices: ['Forester', 'Legacy', 'Impreza'], answer: 3 },
  { text: "Quelle voiture est connue pour avoir un moteur Turbo Diesel?", choices: ['Subaru Legacy', 'Mitsubishi Lancer', 'Toyota 86'], answer: 1 },
  { text: "Quel modèle de Nissan est associé à la compétition de drift?", choices: ['350Z', '240SX', '370Z'], answer: 2 },
  { text: "Quelle marque japonaise a produit le modèle 'S2000'?", choices: ['Nissan', 'Honda', 'Toyota'], answer: 2 },
  { text: "La Toyota Celica est souvent associée à la compétition de:", choices: ['Rallye', 'Drift', 'Drag'], answer: 1 },
  { text: "En quelle année la Toyota 2000GT a-t-elle été produite?", choices: ['1965', '1967', '1970'], answer: 2 },
  { text: "Quel est le modèle emblématique de sport de Mitsubishi?", choices: ['Eclipse', 'Lancer Evolution', 'Outlander'], answer: 2 },
  { text: "La première génération de la Mazda Miata a été lancée en:", choices: ['1989', '1995', '2000'], answer: 1 },
  { text: "Quelle marque japonaise a conçu la Skyline GT-R?", choices: ['Toyota', 'Nissan', 'Honda'], answer: 2 },
  { text: "La Subaru BRZ est un modèle partagé avec:", choices: ['Toyota', 'Honda', 'Mazda'], answer: 1 },
  { text: "Quel modèle de Toyota a remporté les 24 Heures du Mans en 2018?", choices: ['Supra', 'TS050 Hybrid', 'Corolla'], answer: 2 },
  { text: "Quel constructeur japonais a introduit la technologie VTEC?", choices: ['Mazda', 'Honda', 'Subaru'], answer: 2 },
  { text: "Quelle voiture est connue pour avoir un moteur rotatif?", choices: ['Mazda RX-8', 'Honda NSX', 'Subaru Legacy'], answer: 1 },
  { text: "Quel modèle de Nissan est aussi connu sous le nom 'Z-Car'?", choices: ['350Z', '240SX', '370Z'], answer: 3 },
  { text: "Quel constructeur japonais a développé le modèle Legend?", choices: ['Honda', 'Toyota', 'Mitsubishi'], answer: 1 }
];

// randomize questions and select only 10
questions = questions.sort(() => Math.random() - 0.5).slice(0, 10);

const settings = {
  title: "Questionnaire sur les Voitures Japonaises",
  minimum_score: 7,
  success_message: "Félicitations! Vous êtes un véritable pilote!",
  failure_message: "Dommage! Vous devriez plus vous intéresser aux voitures japonaises!",
  etape: 0,
  score: 0,
  selectedAnswers: []
};

const progressBar = document.querySelector('.progressBar');
const questionText = document.getElementById('question');
const choicesContainer = document.getElementById('choices');
const nextBtn = document.getElementById('nextBtn');

function loadQuestion() {
  const currentQuestion = questions[settings.etape];

  // update the question text
  questionText.textContent = currentQuestion.text;

  // update the choices
  choicesContainer.innerHTML = '';
  currentQuestion.choices.forEach((choice, index) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'action';
    input.value = index + 1;
    label.append(input, choice);
    choicesContainer.appendChild(label);

    // remove the disabled attribute when an answer is selected
    input.addEventListener('change', () => {
      nextBtn.disabled = false;
    });
  });

  // reset the button to disabled
  nextBtn.disabled = true;

  // update the progress bar
  progressBar.value = settings.etape;

  // update the question number
  document.getElementById('currentQuestion').textContent = settings.etape + 1;
}

function getSelectedAnswer() {
  const selectedOption = document.querySelector('input[name="action"]:checked');
  return parseInt(selectedOption.value);
}

function handleNextQuestion() {
  const userAnswer = getSelectedAnswer();
  if (userAnswer === null) {
    alert("Veuillez sélectionner une réponse !");
    return;
  }

  // save user's answer and whether it was correct
  const currentQuestion = questions[settings.etape];
  const isCorrect = userAnswer === currentQuestion.answer;
  settings.selectedAnswers.push({
    question: currentQuestion.text,
    userAnswer: currentQuestion.choices[userAnswer - 1],
    correctAnswer: currentQuestion.choices[currentQuestion.answer - 1],
    isCorrect
  });

  // update score if correct
  if (isCorrect) {
    settings.score++;
  }

  // Go to the next question or show the results
  settings.etape++;
  if (settings.etape < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.querySelector("h1").textContent = "Résultats : ";
  questionText.textContent = `Votre score: ${settings.score}/${questions.length} - `;
  choicesContainer.innerHTML = '';

  // display the results
  settings.selectedAnswers.forEach(answer => {
    const resultItem = document.createElement('div');
    resultItem.innerHTML = `
      <p><strong>Question :</strong> ${answer.question}</p>
      <p><strong>Votre réponse :</strong> ${answer.userAnswer} ${answer.isCorrect ? '✅' : '❌'}</p>
      <p><strong>Bonne réponse :</strong> ${answer.correctAnswer}</p>
      <hr>
    `;
    choicesContainer.appendChild(resultItem);
  });

  // display message based on score
  questionText.textContent += settings.score >= settings.minimum_score ? settings.success_message : settings.failure_message;

  // hide button
  nextBtn.style.display = 'none';
}

nextBtn.addEventListener('click', handleNextQuestion);

// start quiz
loadQuestion();

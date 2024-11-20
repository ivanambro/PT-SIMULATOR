// Profili clienti simulati
const clientProfiles = [
  {
    age: 25,
    sex: "Maschio",
    weight: 70,
    height: 175,
    goal: "Ipertrofia",
    constraints: "Solo manubri",
    time: "3 giorni/settimana, 1 ora per sessione",
  },
  {
    age: 30,
    sex: "Femmina",
    weight: 65,
    height: 165,
    goal: "Dimagrimento",
    constraints: "No salti, problemi al ginocchio",
    time: "5 giorni/settimana, 45 minuti",
  },
];

// Stato attuale
let currentClient = null;

// Lista esercizi
let exerciseList = [];

// Genera un nuovo cliente
function generateClient() {
  currentClient = clientProfiles[Math.floor(Math.random() * clientProfiles.length)];
  const profileDiv = document.getElementById("client-profile");
  profileDiv.innerHTML = `
    <p><strong>Età:</strong> ${currentClient.age}</p>
    <p><strong>Sesso:</strong> ${currentClient.sex}</p>
    <p><strong>Peso:</strong> ${currentClient.weight} kg</p>
    <p><strong>Altezza:</strong> ${currentClient.height} cm</p>
    <p><strong>Obiettivo:</strong> ${currentClient.goal}</p>
    <p><strong>Vincoli:</strong> ${currentClient.constraints}</p>
    <p><strong>Tempo:</strong> ${currentClient.time}</p>
  `;
}

// Aggiungi esercizi
document.getElementById("add-cardio").addEventListener("click", () => {
  const cardio = document.getElementById("cardio-select").value;
  const minutes = document.getElementById("cardio-minutes").value;
  if (minutes) {
    exerciseList.push(`Cardio: ${cardio} per ${minutes} minuti`);
    updateExerciseList();
  }
});

document.getElementById("add-hypertrophy").addEventListener("click", () => {
  const name = document.getElementById("exercise-name").value;
  const sets = document.getElementById("sets").value;
  const reps = document.getElementById("reps").value;
  if (name && sets && reps) {
    exerciseList.push(`Ipertrofia: ${name}, ${sets} serie x ${reps} ripetizioni`);
    updateExerciseList();
  }
});

document.getElementById("add-stretching").addEventListener("click", () => {
  const name = document.getElementById("stretching-name").value;
  const minutes = document.getElementById("stretching-minutes").value;
  if (name && minutes) {
    exerciseList.push(`Stretching: ${name} per ${minutes} minuti`);
    updateExerciseList();
  }
});

// Aggiorna lista esercizi
function updateExerciseList() {
  const list = document.getElementById("exercise-list");
  list.innerHTML = exerciseList.map(exercise => `<li>${exercise}</li>`).join("");
}

// Valuta la scheda
document.getElementById("submit-plan").addEventListener("click", () => {
  const feedback = document.getElementById("feedback");
  feedback.innerHTML = `
    <p>Hai creato ${exerciseList.length} esercizi per un cliente con obiettivo ${currentClient.goal}.</p>
    <p>Ottimo lavoro! Continua così.</p>
  `;
  document.getElementById("plan-section").style.display = "none";
  document.getElementById("feedback-section").style.display = "block";
});

// Ricomincia
document.getElementById("restart-game").addEventListener("click", () => {
  exerciseList = [];
  document.getElementById("exercise-list").innerHTML = "";
  document.getElementById("feedback-section").style.display = "none";
  document.getElementById("plan-section").style.display = "block";
  generateClient();
});

// Inizia il gioco
generateClient();

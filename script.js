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

// Funzione per generare un cliente
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

// Lista esercizi
let exerciseList = [];

// Aggiungi esercizio
document.getElementById("add-exercise").addEventListener("click", () => {
  const exercise = document.getElementById("exercise").value;
  const sets = document.getElementById("sets").value;
  const reps = document.getElementById("reps").value;
  const load = document.getElementById("load").value;

  if (exercise && sets && reps && load) {
    exerciseList.push({ exercise, sets, reps, load });
    const li = document.createElement("li");
    li.textContent = `${exercise}: ${sets} serie x ${reps} ripetizioni (${load})`;
    document.getElementById("exercise-list").appendChild(li);

    // Resetta i campi
    document.getElementById("exercise").value = "";
    document.getElementById("sets").value = "";
    document.getElementById("reps").value = "";
    document.getElementById("load").value = "";
  } else {
    alert("Compila tutti i campi!");
  }
});

// Valuta la scheda
document.getElementById("submit-plan").addEventListener("click", () => {
  if (exerciseList.length === 0) {
    alert("Aggiungi almeno un esercizio!");
    return;
  }

  const feedback = document.getElementById("feedback");
  feedback.innerHTML = `
    <p>Scheda Valutata per il cliente con obiettivo <strong>${currentClient.goal}</strong>.</p>
    <p>Hai completato ${exerciseList.length} esercizi. Buon lavoro!</p>
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

// Inizia il gioco generando il primo cliente
generateClient();

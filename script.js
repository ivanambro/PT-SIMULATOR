// Funzione per generare clienti virtuali
function generateClient() {
  const profiles = [
    {
      age: 25,
      sex: "Maschio",
      weight: 70,
      height: 175,
      goal: "Ipertrofia",
      constraints: "No bilanciere, solo manubri",
    },
    {
      age: 35,
      sex: "Femmina",
      weight: 60,
      height: 165,
      goal: "Dimagrimento",
      constraints: "Cardio moderato e resistenza",
    },
    {
      age: 45,
      sex: "Maschio",
      weight: 85,
      height: 180,
      goal: "Aumento forza",
      constraints: "Problema alla spalla destra",
    },
  ];

  return profiles[Math.floor(Math.random() * profiles.length)];
}

// Mostra il profilo cliente
function displayClientProfile() {
  const profile = generateClient();
  const profileDiv = document.getElementById("profile");

  profileDiv.innerHTML = `
    <p><strong>Età:</strong> ${profile.age}</p>
    <p><strong>Sesso:</strong> ${profile.sex}</p>
    <p><strong>Peso:</strong> ${profile.weight} kg</p>
    <p><strong>Altezza:</strong> ${profile.height} cm</p>
    <p><strong>Obiettivo:</strong> ${profile.goal}</p>
    <p><strong>Vincoli:</strong> ${profile.constraints}</p>
  `;

  // Salvo il cliente generato per usarlo in valutazione
  return profile;
}

const currentClient = displayClientProfile();

// Aggiungi esercizi alla lista
document.getElementById("add-exercise").addEventListener("click", () => {
  const exercise = document.getElementById("exercise").value;
  const sets = document.getElementById("sets").value;
  const reps = document.getElementById("reps").value;

  if (exercise && sets && reps) {
    const exerciseList = document.getElementById("exercise-list");
    const li = document.createElement("li");
    li.textContent = `${exercise}: ${sets} serie x ${reps} ripetizioni`;
    exerciseList.appendChild(li);

    // Pulisce i campi
    document.getElementById("exercise").value = "";
    document.getElementById("sets").value = "";
    document.getElementById("reps").value = "";
  } else {
    alert("Compila tutti i campi!");
  }
});

// Funzione per la valutazione del piano di allenamento
function evaluatePlan(exercises, client) {
  let score = 0;

  // Controlla se gli esercizi sono appropriati per l'obiettivo del cliente
  if (client.goal === "Ipertrofia") {
    if (exercises.some(exercise => exercise.includes("manubri"))) {
      score += 20; // Aggiungi punti se ci sono esercizi con manubri
    }
  }

  if (client.goal === "Dimagrimento") {
    if (exercises.some(exercise => exercise.includes("cardio"))) {
      score += 30; // Aggiungi punti per esercizi cardio
    }
  }

  if (client.goal === "Aumento forza") {
    if (exercises.some(exercise => exercise.includes("resistenza"))) {
      score += 25; // Aggiungi punti per esercizi di resistenza
    }
  }

  // Verifica i vincoli (ad esempio, se il cliente ha problemi fisici)
  if (client.constraints.includes("problema alla spalla destra")) {
    // Se l'esercizio contiene "spalla", togli punti
    if (exercises.some(exercise => exercise.includes("spalla"))) {
      score -= 10;
    }
  }

  // Aggiungi logica per altre valutazioni

  return score;
}

// Modifica il listener del pulsante di invio
document.getElementById("submit-plan").addEventListener("click", () => {
  const exercises = [];
  const exerciseList = document.getElementById("exercise-list");
  const listItems = exerciseList.getElementsByTagName("li");

  // Estrai gli esercizi dalla lista
  for (let item of listItems) {
    exercises.push(item.textContent);
  }

  // Valuta la scheda
  const score = evaluatePlan(exercises, currentClient);

  // Mostra il punteggio
  alert(`Il punteggio della tua scheda è: ${score}`);
});

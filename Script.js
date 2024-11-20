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

// Placeholder per valutazione
document.getElementById("submit-plan").addEventListener("click", () => {
  alert("Sistema di valutazione in sviluppo!");
});

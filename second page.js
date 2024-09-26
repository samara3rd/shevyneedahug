document.addEventListener('DOMContentLoaded', (event) => {
  const audio = document.querySelector('audio');
  
  // Check if the audio is already playing
  if (audio.paused) {
    // Add an event listener to play the audio on user interaction
    document.body.addEventListener('click', () => {
      audio.play();
    }, { once: true });
  }
});

const genText = document.getElementById("gen-text");

genText.addEventListener("click", function() {
  let messages = [
    "Allah reassured ˹them˺, “Have no fear! I am with you, hearing and seeing. (Taha:20)",
    "Your Lord has proclaimed, “Call upon Me, I will respond to you. (Ghafir:40)",
    "And the next life is certainly far better for you than this one. (Ad-Duhaa:4)",
    "They planned, but Allah also planned. And Allah is the best of planners. (Al-Anfal:30)",
    "Surely in the remembrance of Allah do hearts find comfort. (Ar-Ra'd:28)",
    "So, surely with hardship comes ease. Surely with ˹that˺ hardship comes ˹more˺ ease.(Al-Insyirah:5-6)",
    "Allah does not burden a soul more than it can bear. (Al-Baqarah:286)",
    "If Allah finds goodness in your hearts, He will give you better than what has been taken from you, and forgive you. For Allah is All-Forgiving, Most Merciful. (Al-Anfal:70)",
    "And whoever puts their trust in Allah, then He ˹alone˺ is sufficient for them. (At-Talaq:3)",
    "Be grateful to Allah, for whoever is grateful, it is only for their own good. (Luqman:12)",
    "And We will reward those who are grateful. (Ali 'Imran:145)",
    "If you are grateful, I will certainly give you more. (Ibrahim:7)",
    "˹But˺ surely to your Lord is the return ˹of all˺. (Al-'Alaq:8)",
    "My success comes only through Allah. (Hud:88)",
    "My Lord is certainly with me—He will guide me. (Ash-Shu'ara:62)",
    "Do not falter or grieve. (Ali 'Imran:139)",
    "Indeed, what Allah has for you is far better for you, if only you knew. (An-Nahl:95)",
    "And the worldly life is no more than amusement and diversion. (Al-An'am:32)",
    "So be patient with gracious patience. (Al-Ma'arij:5)",
    "And your Lord does injustice to no one. (Al-Kahf:49)",
    "And remember Allah often so you may be successful. (Al-Jumu'ah:10)",
    "And He is with you wherever you are. (Al-Hadid:4)"
  ];
  const textEl = document.querySelector(".textMessage");
  textEl.textContent = messages[Math.floor(Math.random() * messages.length)];
});
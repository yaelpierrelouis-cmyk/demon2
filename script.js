function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("active");
}

window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

const characterInfo = {
    // Main Characters
    tanjiro: {
        name: "Tanjiro Kamado",
        image: "images/tanjiro.jpg",
        description: "A kind-hearted boy whose family was slaughtered by demons. He joins the Demon Slayer Corps, mastering Water and Sun Breathing to protect humanity and cure his sister."
    },
    nezuko: {
        name: "Nezuko Kamado",
        image: "images/nezuko.jpg",
        description: "Tanjiro's younger sister who became a demon but retained her humanity. She protects humans using her Blood Demon Art."
    },
    zenitsu: {
        name: "Zenitsu Agatsuma",
        image: "images/zenitsu.jpg",
        description: "Cowardly but skilled swordsman. In unconscious moments, he becomes unstoppable using Thunder Breathing."
    },
    inosuke: {
        name: "Inosuke Hashibira",
        image: "images/inosuke.jpg",
        description: "Raised by boars, aggressive and wild. Uses dual serrated swords and Beast Breathing. Thrives in battle but grows stronger through teamwork."
    },

    // Hashira
    rengoku: {
        name: "Kyojuro Rengoku",
        image: "images/rengoku.jpg",
        description: "Flame Hashira, passionate and honorable. Exemplifies courage and self-sacrifice in battle against demons."
    },
    giyu: {
        name: "Giyu Tomioka",
        image: "images/giyu.jpg",
        description: "Water Hashira, quiet and serious. Introduced Tanjiro to the Corps and masters Water Breathing."
    },
    shinobu: {
        name: "Shinobu Kocho",
        image: "images/shinobu.jpg",
        description: "Insect Hashira, hides her pain behind a gentle smile. Uses wisteria poison to defeat demons effectively."
    },
    tengen: {
        name: "Tengen Uzui",
        image: "images/tengen.jpg",
        description: "Sound Hashira, flamboyant and skilled. Combines agility and explosive combat style to defeat demons."
    },
    muichiro: {
        name: "Muichiro Tokito",
        image: "images/muichiro.jpg",
        description: "Mist Hashira, young prodigy. Calm and detached but incredibly powerful with Mist Breathing techniques."
    },

    // Upper Moons
    kokushibo: {
        name: "Kokushibo",
        image: "images/kokushibo.jpg",
        description: "Upper Moon One, strongest demon under Muzan. Master of Moon Breathing and centuries of combat experience."
    },
    doma: {
        name: "Doma",
        image: "images/doma.jpg",
        description: "Upper Moon Two, charismatic and terrifying. Uses Cryokinetic powers and manipulates emotions of his victims."
    },
    akaza: {
        name: "Akaza",
        image: "images/akaza.jpg",
        description: "Upper Moon Three, martial arts expert demon who values strength above all. Immense regenerative and combat skills make him deadly."
    },
    hantengu: {
        name: "Hantengu",
        image: "images/hantengu.jpg",
        description: "Upper Moon Four, splits into multiple clones to overwhelm opponents. Uses agility and deception."
    },
    gyokko: {
        name: "Gyokko",
        image: "images/gyokko.jpg",
        description: "Upper Moon Five, artistic demon who treats combat as art. Uses pottery-themed Blood Demon Arts."
    },
    kaigaku: {
        name: "Kaigaku",
        image: "images/kaigaku.jpg",
        description: "Upper Moon Six, former Thunder Breathing student turned demon. Skilled in lightning-fast combat and deadly strikes."
    }
};

// ================== MODAL ELEMENTS ==================
const modal = document.getElementById('characterModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalDescription = document.getElementById('modalDescription');
const spanClose = document.querySelector('.close');

// ================== OPEN MODAL FUNCTION ==================
function openModal(character) {
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");
  const modal = document.getElementById("characterModal");

  if (character === "tanjiro") {
    title.innerText = "Tanjiro Kamado";
    text.innerText = `Tanjiro Kamado is the main protagonist of Demon Slayer. He was once a kind and hardworking boy who lived peacefully with his family in the mountains. His life changed forever when his entire family was slaughtered by demons, leaving only his sister Nezuko alive—but transformed into a demon.

Instead of giving in to hatred, Tanjiro chose compassion. He joined the Demon Slayer Corps to protect innocent people and search for a cure for Nezuko. Tanjiro possesses an exceptional sense of smell, allowing him to detect emotions and weaknesses in battle.

He initially masters Water Breathing and later awakens the powerful Sun Breathing, a legendary technique passed down through his family. Despite facing overwhelming enemies, Tanjiro never loses his empathy, even for demons.

His strength comes not only from his sword, but from his unwavering kindness, determination, and love for his sister.`;
  }

  else if (character === "nezuko") {
    title.innerText = "Nezuko Kamado";
    text.innerText = `Nezuko Kamado is Tanjiro’s younger sister and one of the most unique demons in the series. After being turned into a demon during the massacre of her family, she miraculously retained her human emotions and conscience.

Unlike other demons, Nezuko refuses to eat humans and instead protects them, especially her brother. She often suppresses her demonic urges through sheer willpower.

Nezuko’s Blood Demon Art allows her to manipulate pink flames that harm demons but do not injure humans. She also possesses incredible strength, regeneration, and the ability to shrink or grow her body.

Her character represents the struggle between humanity and darkness, proving that love and family can overcome even the strongest curses.`;
  }

  else if (character === "zenitsu") {
    title.innerText = "Zenitsu Agatsuma";
    text.innerText = `Zenitsu Agatsuma is a fearful and insecure Demon Slayer who constantly doubts his abilities. Despite his cowardly nature, Zenitsu possesses extraordinary talent in swordsmanship.

He practices Thunder Breathing but is only able to master its first form. However, he executes it to perfection, moving at blinding speed and delivering devastating attacks.

When Zenitsu falls unconscious due to fear, his true potential emerges. In this state, he becomes calm, focused, and incredibly powerful, defeating enemies he could not face while awake.

Zenitsu’s journey highlights personal growth, showing that bravery does not mean being fearless, but pushing forward even when afraid.`;
  }

  else if (character === "inosuke") {
    title.innerText = "Inosuke Hashibira";
    text.innerText = `Inosuke Hashibira was raised by wild boars in the mountains, which shaped his aggressive and fearless personality. He wears a boar’s head mask and charges into battle without hesitation.

Inosuke developed his own unique combat style known as Beast Breathing. He wields dual serrated swords and relies on his heightened senses and flexibility to overwhelm his enemies.

Though he appears reckless and rude, Inosuke deeply cares about his companions. Over time, he learns the value of teamwork and trust.

His character represents raw instinct, independence, and the strength that comes from accepting others while staying true to oneself.`;
  }

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("characterModal").style.display = "none";
}

// ================== CLOSE MODAL ==================
spanClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal){
        modal.style.display = "none";
    }
}

function createEmbers(section) {
    for (let i = 0; i < 30; i++) {
        const ember = document.createElement("span");
        ember.style.left = Math.random() * 100 + "%";
        ember.style.animationDuration = (3 + Math.random() * 4) + "s";
        ember.style.animationDelay = Math.random() * 5 + "s";
        section.appendChild(ember);
    }
}

document.querySelectorAll(".embers").forEach(section => {
    createEmbers(section);
});

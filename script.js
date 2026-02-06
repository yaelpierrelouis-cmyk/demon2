
function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    // toggle a class to show/hide menu
    navMenu.classList.toggle("show");
}


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

  switch(character) {
    // === Main Characters ===
    case "tanjiro":
      title.innerText = "Tanjiro Kamado";
      text.innerText = `Tanjiro Kamado is the main protagonist of Demon Slayer. He was once a kind and hardworking boy who lived peacefully with his family in the mountains. His life changed forever when his entire family was slaughtered by demons, leaving only his sister Nezuko alive—but transformed into a demon.

Instead of giving in to hatred, Tanjiro chose compassion. He joined the Demon Slayer Corps to protect innocent people and search for a cure for Nezuko. Tanjiro possesses an exceptional sense of smell, allowing him to detect emotions and weaknesses in battle.

He initially masters Water Breathing and later awakens the powerful Sun Breathing, a legendary technique passed down through his family. Despite facing overwhelming enemies, Tanjiro never loses his empathy, even for demons.

His strength comes not only from his sword, but from his unwavering kindness, determination, and love for his sister.`;
      break;

    case "nezuko":
      title.innerText = "Nezuko Kamado";
      text.innerText = `Nezuko Kamado is Tanjiro’s younger sister and one of the most unique demons in the series. After being turned into a demon during the massacre of her family, she miraculously retained her human emotions and conscience.

Unlike other demons, Nezuko refuses to eat humans and instead protects them, especially her brother. She often suppresses her demonic urges through sheer willpower.

Nezuko’s Blood Demon Art allows her to manipulate pink flames that harm demons but do not injure humans. She also possesses incredible strength, regeneration, and the ability to shrink or grow her body.

Her character represents the struggle between humanity and darkness, proving that love and family can overcome even the strongest curses.`;
      break;

    case "zenitsu":
      title.innerText = "Zenitsu Agatsuma";
      text.innerText = `Zenitsu Agatsuma is a fearful and insecure Demon Slayer who constantly doubts his abilities. Despite his cowardly nature, Zenitsu possesses extraordinary talent in swordsmanship.

He practices Thunder Breathing but is only able to master its first form. However, he executes it to perfection, moving at blinding speed and delivering devastating attacks.

When Zenitsu falls unconscious due to fear, his true potential emerges. In this state, he becomes calm, focused, and incredibly powerful, defeating enemies he could not face while awake.

Zenitsu’s journey highlights personal growth, showing that bravery does not mean being fearless, but pushing forward even when afraid.`;
      break;

    case "inosuke":
      title.innerText = "Inosuke Hashibira";
      text.innerText = `Inosuke Hashibira was raised by wild boars in the mountains, which shaped his aggressive and fearless personality. He wears a boar’s head mask and charges into battle without hesitation.

Inosuke developed his own unique combat style known as Beast Breathing. He wields dual serrated swords and relies on his heightened senses and flexibility to overwhelm his enemies.

Though he appears reckless and rude, Inosuke deeply cares about his companions. Over time, he learns the value of teamwork and trust.

His character represents raw instinct, independence, and the strength that comes from accepting others while staying true to oneself.`;
      break;

    // === Hashira ===
    case "rengoku":
      title.innerText = "Kyojuro Rengoku – Flame Hashira";
      text.innerText = `Kyojuro Rengoku is the Flame Hashira of the Demon Slayer Corps. He is passionate, cheerful, and deeply committed to protecting humanity from demons. Rengoku’s courage and unwavering sense of justice make him a beacon of hope.

He is a master of Flame Breathing, using powerful fire-based techniques to defeat demons. Rengoku’s dedication to his comrades and his willingness to sacrifice himself exemplify the ideals of a true Hashira.`;
      break;

    case "giyu":
      title.innerText = "Giyu Tomioka – Water Hashira";
      text.innerText = `Giyu Tomioka is the Water Hashira, known for his calm, stoic demeanor and incredible swordsmanship. Despite his reserved personality, he cares deeply for humanity and his fellow demon slayers.

Giyu is the one who first recognizes Tanjiro’s potential and guides him into the Demon Slayer Corps. He masters Water Breathing techniques and demonstrates precision, discipline, and determination in every battle.`;
      break;

    case "shinobu":
      title.innerText = "Shinobu Kocho – Insect Hashira";
      text.innerText = `Shinobu Kocho is the Insect Hashira, who hides her sorrow and pain behind a gentle, smiling facade. She cannot physically overpower most demons, so she uses her intelligence, speed, and wisteria-based poisons to defeat them.

Her mastery of Insect Breathing allows her to deliver deadly strikes with finesse. Shinobu’s character emphasizes strategy, intellect, and resilience in the fight against demons.`;
      break;

    case "tengen":
      title.innerText = "Tengen Uzui – Sound Hashira";
      text.innerText = `Tengen Uzui is the flamboyant and powerful Sound Hashira. Combining flashy combat techniques with incredible agility, he defeats demons with precision and style.

Tengen is loyal to his comrades and values teamwork and family above all. His Sound Breathing techniques allow him to deliver explosive attacks and keep his enemies off balance.`;
      break;

    case "muichiro":
      title.innerText = "Muichiro Tokito – Mist Hashira";
      text.innerText = `Muichiro Tokito is the young prodigy Mist Hashira. Calm and often detached, he has immense skill with Mist Breathing techniques that confuse and overwhelm enemies.

Despite his young age, Muichiro demonstrates extraordinary power, showing that natural talent combined with focus can rival even the most experienced warriors.`;
      break;

    // === Upper Moons ===
    case "kokushibo":
      title.innerText = "Kokushibo – Upper Moon One";
      text.innerText = `Kokushibo is the strongest demon under Muzan Kibutsuji and the Upper Moon One. He has mastered Moon Breathing techniques and possesses centuries of combat experience.

His formidable strength, agility, and regenerative abilities make him an almost invincible foe. Kokushibo’s character represents the pinnacle of demonic power and the tragic consequences of immortality.`;
      break;

    case "doma":
      title.innerText = "Doma – Upper Moon Two";
      text.innerText = `Doma is the Upper Moon Two demon, charismatic yet terrifying. He uses Cryokinetic powers to manipulate ice and freeze his enemies, while also exploiting the emotions of his victims to control them.

His calm demeanor hides the cruelty and danger he poses, making him a highly unpredictable adversary.`;
      break;

    case "akaza":
      title.innerText = "Akaza – Upper Moon Three";
      text.innerText = `Akaza is a martial arts expert and Upper Moon Three demon. He values strength above all and engages in close-combat battles with unmatched skill.

Akaza has immense regenerative powers and physical abilities, making him a deadly opponent for any Demon Slayer.`;
      break;

    case "hantengu":
      title.innerText = "Hantengu – Upper Moon Four";
      text.innerText = `Hantengu is the Upper Moon Four demon, who can split into multiple clones to confuse and overwhelm his enemies. Each clone has its own personality and fighting style.

His deceptive abilities make him a challenging foe, requiring strategy and teamwork to defeat.`;
      break;

    case "gyokko":
      title.innerText = "Gyokko – Upper Moon Five";
      text.innerText = `Gyokko is the artistic Upper Moon Five demon. He treats combat as art and uses pottery-themed Blood Demon Arts to create weapons and monsters that attack his opponents.

Gyokko’s creativity and unique fighting style make him a dangerous and unpredictable enemy.`;
      break;

    case "kaigaku":
      title.innerText = "Kaigaku – Upper Moon Six";
      text.innerText = `Kaigaku is the former Thunder Breathing student who became the Upper Moon Six demon. He is extremely fast and deadly in combat, using lightning-quick strikes and martial prowess.

Kaigaku represents the fall from humanity and the destructive nature of obsession with strength.`;
      break;

    default:
      title.innerText = "Unknown Character";
      text.innerText = "Information for this character is not available.";
      break;
  }

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("characterModal").style.display = "none";
}

// Close modal when clicking outside content
window.onclick = function(event) {
  const modal = document.getElementById("characterModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

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

// Gallery lightbox
const galleryImages = document.querySelectorAll(".gallery-img");
const modal = document.getElementById("galleryModal");
const modalImg = document.getElementById("modalImage");
const caption = document.getElementById("caption");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        caption.innerText = img.alt;
    });
});

function closeGalleryModal() {
    modal.style.display = "none";
}


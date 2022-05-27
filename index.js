// Rappel des types de données
let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; // type Undefined

// Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[0][3]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
// console.log(array2[4].nom);

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// objet.adresse = "22 rue du code";
// console.log(objet);

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];
// console.log(data[2].pseudo[0]);

//---------------------------
// Les structures de controle
//---------------------------
if (data[0].age > data[1].age) {
  // console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  // Valeur si faux
}

// While
let w = 0;

while (w < 10) {
  w++;
  // console.log("La valeur de w est de : " + w);
}

// Do while
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

// Les boucles for
for (const user of data) {
  // document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

// on déclare la valeur de i | jusqu'où on boucle | on incrémente i si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  // console.log(i);
  // console.log(data[i].technos[0]);
  // document.body.innerHTML += "<h2>" + data[i].technos + "</h2>";
}

// Switch
document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

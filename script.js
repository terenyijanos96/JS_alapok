window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekFormazasa1();
  esemenyKezeles1();
  esemenyKezeles2();
  //esemenyKezeles3-at a esemenyKezeles2-ben hívom meg
  esemenyKezeles4();
});

function elemekElerese1() {
  let sectionCim = document.querySelectorAll("section:nth-of-type(1) h2")[0];
  console.log(sectionCim.innerText);
}

function elemekElerese2() {
  let ide = document.querySelector("#ide");
  let paragraph = document.createElement("p");

  ide.appendChild(paragraph);
  paragraph.innerText = "Jó reggelt!";
}

function elemekElerese3() {
  let ide = document.querySelectorAll(".ide")[0];
  let paragraph = document.createElement("p");

  ide.appendChild(paragraph);
  paragraph.innerText = "Jó reggelt!";
}

function elemekElerese4() {
  let lista = document.querySelectorAll(".lista")[0];
  let ul = document.createElement("ul");

  lista.appendChild(ul);

  for (let i = 0; i < 5; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = Math.floor(Math.random() * 21) + 10;
  }
}

function elemekFormazasa1() {
  let lista = document.querySelectorAll(".lista")[0];
  lista.classList.add("formazott");
}

function esemenyKezeles1() {
  let lista = document.querySelectorAll(".lista")[0];
  let kattintasutan = document.querySelectorAll(".kattintasutan")[0];

  lista.addEventListener("click", () => {
    let listaHTML = lista.innerHTML;
    listaHTML = listaHTML.replaceAll("ul", "div");
    listaHTML = listaHTML.replaceAll("li", "p");
    kattintasutan.innerHTML = listaHTML;
  });
}

function esemenyKezeles2() {
  let feladat = document.querySelectorAll(".feladat")[0];
  let gomb = document.createElement("button");

  feladat.appendChild(gomb);
  gomb.innerText = "OK";
  gomb.addEventListener("click", () => {
    let div = document.createElement("div");
    let img = document.createElement("img");

    feladat.appendChild(div);
    div.style.display = "inline-block";
    div.appendChild(img);
    img.src = "newborn-baby-chick-g8807d709a_640.jpg";
    img.alt = "kis csirke üldögél";
    esemenyKezeles3();
  });
}

function esemenyKezeles3() {
  let feladat = document.querySelectorAll(".feladat")[0];
  let kepek = feladat.querySelectorAll("img");

  kepek.forEach((kep) => {
    kep.addEventListener("mouseenter", kepmeretValtoztat);
    kep.addEventListener("mouseleave", kepmeretValtoztat);
  });
}

function kepmeretValtoztat(e) {
  e.target.classList.toggle("nagykep");
}

function esemenyKezeles4() {
  let tarolo = document.querySelectorAll(".tarolo")[0];
  let divek = tarolo.querySelectorAll("div");
  let eredmeny = document.querySelectorAll(".megjelenito")[0];

  let i = 0;

  divek.forEach((div) => {
    div.addEventListener("click", (e) => {
      eredmeny.innerHTML += (0 < i ? " " : "") + e.target.innerHTML;
      i++;
    });
  });
}

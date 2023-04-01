$(function () {
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
  let sectionCim = $("section:nth-of-type(1) h2").text();
  console.log(sectionCim);
}

function elemekElerese2() {
  let ide = $("#ide");
  ide.append(`<p>Jó reggelt!</p>`);
}

function elemekElerese3() {
  let ide = $(".ide").eq(0);
  ide.append(`<p>Jó reggelt!</p>`);
}

function elemekElerese4() {
  let lista = $(".lista").eq(0);
  let txt = "<ul>";
  for (let i = 0; i < 5; i++) {
    txt += `<li>${Math.floor(Math.random() * 21) + 10}</li>`;
  }
  txt += "</ul>";

  lista.append(txt);
}

function elemekFormazasa1() {
  $(".lista").eq(0).addClass("formazott");
}

function esemenyKezeles1() {
  let lista = $(".lista").eq(0);
  let kattintasutan = $(".kattintasutan").eq(0);

  lista.on("click", () => {
    kattintasutan.append(lista.html());
  });
}

function esemenyKezeles2() {
  let feladat = $(".feladat").eq(0);
  feladat.append(`<button>OK</button>`);
  let gomb = $(`.feladat button`).eq(0);
  let txt_div = "<div>";
  gomb.on("click", () => {
    txt += `<img src="newborn-baby-chick-g8807d709a_640.jpg" alt="kis csibe üldögél">`;

    esemenyKezeles3();
  });
  txt += `</div>`;
  feladat.append(txt);
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

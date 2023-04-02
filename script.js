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
  let sectionCim = $("section:first h2").text();
  console.log(sectionCim);
}

function elemekElerese2() {
  $("#ide").html("<p>Jó reggelt!</p>");
}

function elemekElerese3() {
  $(".ide").eq(0).html("<p>Jó reggelt!</p>");
}

function elemekElerese4() {
  let lista = $(".lista").eq(0);
  let ul = $("<ul></ul>")

  lista.append(ul)
  for (let i = 0; i < 5; i++) {
    let li = $("<li></li>")
    ul.append(li)
    li.text(Math.floor(Math.random() * 21) + 10)
  }

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
  let gomb = $(`<button>OK</button>`);
  feladat.append(gomb);

  gomb.click(() => {
    let div = $("<div></div>");
    let img = $(
      `<img src="newborn-baby-chick-g8807d709a_640.jpg" alt="kis csibe üldögél">`
    );
    feladat.append(div);
    div.append(img);
    img.hover((e) => {
      esemenyKezeles3(e);
    });
  });
}

function esemenyKezeles3(e) {
  $(e.target).toggleClass("nagykep");
}

function esemenyKezeles4() {
  let divek = $(".tarolo div");
  let eredmeny = $(".megjelenito").eq(0);

  let i = 0;

  divek.click((e) => {
    eredmeny.append((0 < i++ ? " " : "") + $(e.target).text())
  });
}

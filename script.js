// Dark mode
let body = document.querySelector("body");
let dark = document.querySelector("#dark");

dark.onclick = function () {
  if (dark.checked == true) {
    body.classList.add("darkMode");
  } else {
    body.classList.remove("darkMode");
  }
};

// page content
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// side menu
var sidemeu = document.getElementById("sidemenu");

function openmenu() {
  sidemeu.style.right = "0";
}
function closemenu() {
  sidemeu.style.right = "-200px";
}

//Klik di luar sidebar untuk menghilangkan nav

// const hamburger = document.querySelector("#bars");

// document.addEventListener("click", function (e) {
//   if (!openmenu.contains(e.target) && !sidemeu.contains(e.target)) {
//     closemenu();
//   }
// });

// var sidemeu = document.getElementById("sidemenu");

// function openmenu() {
//   sidemeu.style.right = "0";
// }
// function closemenu() {
//   sidemeu.style.right = "-200px";
// }

//Klik di luar sidebar untuk menghilangkan nav true

document.addEventListener("click", function (event) {
  if (!sidemeu.contains(event.target) && event.target.id !== "bars") {
    closemenu();
  }
});

// efek kalimat muncul perlahan
// Tunggu halaman dimuat
window.addEventListener("load", function () {
  // Dapatkan elemen header-text
  var headerText = document.getElementById("header-text");

  // Tambahkan kelas show-header-text ke elemen header-text
  headerText.classList.add("show-header-text");
});

// efek about me muncul perlahan ketika discroll
// Tunggu halaman dimuat
window.addEventListener("load", function () {
  // Dapatkan elemen about-col-2
  var aboutCol2 = document.getElementById("about-col-2");

  // Tambahkan event listener untuk event scroll
  window.addEventListener("scroll", function () {
    // Dapatkan posisi elemen about-col-2 relatif terhadap viewport
    var aboutCol2Position = aboutCol2.getBoundingClientRect();

    // Jika posisi bawah elemen about-col-2 lebih besar dari nol
    if (aboutCol2Position.bottom > 0) {
      // Tambahkan kelas show-about-col-2 ke elemen about-col-2
      aboutCol2.classList.add("show-about-col-2");
    }
  });
});

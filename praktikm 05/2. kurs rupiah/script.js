sconst kurs = document.getElementById("kurs");
const kursAkhir = document.getElementById("kursAkhir");
const kursAwal = document.getElementById("kursAwal");

function convertKurs(kurs, kursAwal) {
  let total = 0;
  switch (kurs) {
    case "dolarUs":
      total = kursAwal * 9915;
      break;

    case "dolarSingapore":
      total = kursAwal * 13472;
      break;

    case "ringgitMalay":
      total = kursAwal * 874;
      break;

    case "yenJepang":
      total = kursAwal * 120;
      break;

    case "euro":
      total = kursAwal * 15888;
      break;
      
    case "riyal":
      total = kursAwal * 3592;
      break;

    default:
      total = kursAwal;
      break;
  }
  return total;
}

kurs.addEventListener("change", function () {
  const uang = convertKurs(this.value, kursAwal.value);

  kursAkhir.value = new Intl.NumberFormat("id", {
    style: "currency",
    currency: "IDR",
  }).format(uang);
});

kursAwal.addEventListener("input", function () {
  const uang = convertKurs(kurs.value, this.value);
  kursAkhir.value = new Intl.NumberFormat("id", {
    style: "currency",
    currency: "IDR",
  }).format(uang);
});

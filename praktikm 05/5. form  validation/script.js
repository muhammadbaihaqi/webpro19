const namaPelanggan = document.getElementById("name");
const emailPelanggan = document.getElementById("email");
const jamKeberangkatan = document.getElementById("time");
const tujuanKeberangkatan = document.getElementById("tujuan");
const jumlahTiket = document.getElementById("jumlah");
const formValidation = document.getElementById("form");

formValidation.addEventListener("submit", function (event) {
  event.preventDefault();

  if (namaPelanggan.value.length === 0 && namaPelanggan.value.length <= 50) {
    namaPelanggan.classList.add("error");
  } else {
    namaPelanggan.classList.add("success");
  }

  if (emailPelanggan.value.length === 0) {
    emailPelanggan.classList.add("error");
  } else {
    emailPelanggan.classList.add("success");
  }

  if (jamKeberangkatan.value.length === 0) {
    jamKeberangkatan.classList.add("error");
  } else {
    jamKeberangkatan.classList.add("success");
  }

  if (tujuanKeberangkatan.value.length === 0) {
    tujuanKeberangkatan.classList.add("error");
  } else {
    tujuanKeberangkatan.classList.add("success");
  }

  if (jumlahTiket.value >= 0 && jumlahTiket.value <= 10) {
    jumlahTiket.classList.add("success");
    
  } else {
    jumlahTiket.classList.add("error");
  }

  document.getElementById("result").innerHTML = `
  <h2>Result</h2>
  <p>Nama pelanggan : ${namaPelanggan.value}</p>

  <p>Email pelanggan : ${emailPelanggan.value}</p>
  
  <p>Jam keberangkatan : ${jamKeberangkatan.value}</p>
  
  <p>Tujuan keberangkatan : ${tujuanKeberangkatan.value}</p>
  
  <p>Jumlah tiket : ${jumlahTiket.value}</p>
  `;
});
const img = document.getElementById("image");
const selectImg = document.getElementById("select");

const imgSource = {
  persija:
    "https://images.malkelapagading.com/articles/Persija-Jakarta-Juara-Liga-Indonesia.jpg",
  baliunited:
    "https://www.pssi.org/files/uploads/news/image/2019/Dec/23/5e00893e3c3f1/img-20191222-wa0019-_x600.jpg?token=6f0d05fad0a862d1a8f03bcae040b0e4",
  Aremafc:
    "https://cdn0-production-assets-kly.akamaized.net/medias/1534531/big/088749800_1489367893-20170312-Arema-FC-Rengkuh-Gelar-Juara-Piala-Presiden-2017-Tebe-10.jpg",
  persybaya:
    "https://cdn-asset.jawapos.com/wp-content/uploads/2020/02/persebaya-juara-piala-gubernur-ofisial-persebaya.jpeg",
  persipura:
  "https://cdns.klimg.com/bola.net/library/p/headline/0000130383.jpg",
  pss:
  "https://cdn2.tstatic.net/jakarta/foto/bank/images/pemain-pss-sleman-final-liga-2-2018.jpg",
};

selectImg.addEventListener("change", function () {
img.src = imgSource[this.value];
  img.alt = this.value;
});
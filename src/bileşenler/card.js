import axios from "axios";

const Card = (makale) => {

  const card = document.createElement("div");
  card.classList.add("card");
  const headLine = document.createElement("div");
  headLine.classList.add("headline");
  headLine.textContent = makale.anabaslik;
  card.appendChild(headLine);
  const author = document.createElement("div");
  author.classList.add("author");
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const yazarFoto = document.createElement("img");
  yazarFoto.src = makale.yazarFoto;
  imgContainer.appendChild(yazarFoto);
  author.appendChild(imgContainer);
  const yazarAdı = document.createElement("span");
  yazarAdı.textContent = makale.yazarAdi;
  author.appendChild(yazarAdı);
  card.appendChild(author);

  card.addEventListener("click" , (event) => {
    console.log(event.target.querySelector(".headline").textContent);
  })
  return card;
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
}

const cardEkleyici = (secici) => {

  const cardEkle = document.querySelector(secici);
  axios
  .get("http://localhost:5001/api/makaleler")
  .then((response) => {
    for(let key in response.data.makaleler){

      for(let i = 0 ; i<response.data.makaleler[key].length; i++){
        cardEkle.appendChild(Card(response.data.makaleler[key][i]));
      }
    }
  })
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
}

export { Card, cardEkleyici }

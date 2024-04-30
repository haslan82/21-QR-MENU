import { menu } from "./js/db.js";
import { calculatePrice, elements } from "./js/helpers.js";


//! Fonksiyonlar
 
const renderMenuItems = ( menuItems ) => {

// Dizideki her obje için bir elemanı temsil eden HTML elemanı oluşturur.
// Bu HTML i bir diziye aktarır.

    let menuHTML = menuItems.map(
    (item) => 
    `
    <a 
    id="card" 
    href="/productDetail.html? id=${item.id} " 
    class=" text-decoration-none text-black d-flex flex-column flex-md-row gap-2">
        <img src="${item.img}"
         class="rounded-shadow" >

<div>
    <div class="d-flex justify-content-between">
        <h5>${item.title}</h5>
        <p class="text-success">${calculatePrice(item.price)} ₺ </p>
    </div>
    <p class="lead">
    ${item.desc}
    </p>
</div>


    </a>`
   
);

menuHTML = menuHTML.join("");
elements.menuArea.innerHTML = menuHTML;

};

// tıklanılan butonun categorisine göre ürünleri listeler
const searchCategory = (e) =>{
    const category = e.target.dataset.category;
   
    // Tüm dizi elemanlarından yalnızca kategori değeri butonun kategori değeri ile
    // eşleşenleri getir ve bir dizi şeklinde değişkene aktar
    const filtredMenu = menu.filter((item) => item.category === category);

    // Hepsi seçilirse bütün menuyu ekrana aktarır.
if(category === "all")
renderMenuItems(menu);
else{

    // Filtrelenen elemanları ekrana aktarmadsı için menu dizisinden
    // oluşturduğumuz filtredMenu dizisini ekrana aktarır.
    renderMenuItems(filtredMenu);
}
// butonları güncellemesi için seçtiğimiz kategorinin 
//butonu aktifleştirebilmek için kategoriyi parametre olarak gönderdik.
renderButtons(category)

};


const renderButtons = (active) => {

    // eski butonları ekrandan sil
   elements.buttonsArea.innerHTML = "";


   
};
    


 //! Olay İzleyicileri
document.addEventListener("DOMContentLoaded", renderMenuItems(menu));

elements.buttonsArea.addEventListener("click", searchCategory);

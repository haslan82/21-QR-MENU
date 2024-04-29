import { menu } from "./js/db.js";
import { elements } from "./js/helpers.js";


//! Fonksiyonlar
 
const renderMenuItems = ( menuItems ) => {

// Dizideki her obje için bir elemanı temsil eden HTML elemanı oluşturur.
// Bu HTML i bir diziye aktarır.

    let menuHTML = menuItems.map(
    (item) => 
    `
    <a id="card" href="productDetail.html? id=2" 
    class=" text-decoration-none text-black d-flex flex-column flex-md-row gap-2">
        <img src="${item.img}"
         class="rounded-shadow" >

<div>
    <div class="d-flex justify-content-between">
        <h5>${item.title}</h5>
        <p class="text-success">${item.price} ₺ </p>
    </div>
    <p class="lead">
    ${item.desc}
    </p>
</div>


    </a>
    `
   
);
menuHTML = menuHTML.join("");
elements.menuArea.innerHTML = menuHTML;

};


 //! Olay İzleyicileri
document.addEventListener("DOMContentLoaded", renderMenuItems(menu))

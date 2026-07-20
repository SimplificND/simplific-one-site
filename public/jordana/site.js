const data={
  punto:{name:"Fiat Punto Essence 1.6",year:"2011/2012",price:"R$ 36.900",image:"./assets/punto.jpg",km:"Consulte",gear:"Manual",fuel:"Flex"},
  gol:{name:"Volkswagen Gol",year:"1998/1998",price:"Consulte",image:"./assets/gol.jpg",km:"Consulte",gear:"Manual",fuel:"Gasolina"},
  moto:{name:"Moto seminova",year:"Modelo recente",price:"Consulte",image:"./assets/moto.jpg",km:"Baixa km",gear:"Manual",fuel:"Gasolina"},
  oportunidade:{name:"Oportunidade Jordana",year:"Seminovo",price:"Consulte",image:"./assets/carro-3.jpg",km:"Consulte",gear:"Manual",fuel:"Flex"},
  sedan:{name:"Sedan seminovo",year:"Seminovo",price:"Consulte",image:"./assets/carro-4.jpg",km:"Consulte",gear:"Automático",fuel:"Flex"},
  oferta:{name:"Oferta da semana",year:"Seminovo",price:"Consulte",image:"./assets/carro-5.jpg",km:"Consulte",gear:"Manual",fuel:"Flex"}
};
const cards=[...document.querySelectorAll(".card")],tabs=[...document.querySelectorAll(".tabs button")],search=document.querySelector("#search"),empty=document.querySelector("#empty");
let filter="Todos";
function update(){let count=0,q=search.value.toLowerCase().trim();cards.forEach(card=>{const show=(filter==="Todos"||card.dataset.category===filter)&&card.dataset.name.includes(q);card.hidden=!show;if(show)count++});empty.style.display=count?"none":"block"}
tabs.forEach(tab=>tab.addEventListener("click",()=>{tabs.forEach(item=>item.classList.remove("active"));tab.classList.add("active");filter=tab.dataset.filter;update()}));
search.addEventListener("input",update);
const modal=document.querySelector("#modal"),modalImage=document.querySelector("#modal-image"),modalTitle=document.querySelector("#modal-title"),modalYear=document.querySelector("#modal-year"),modalSpecs=document.querySelector("#modal-specs"),modalPrice=document.querySelector("#modal-price"),modalWhatsapp=document.querySelector("#modal-whatsapp");
document.querySelectorAll("[data-vehicle]").forEach(button=>button.addEventListener("click",()=>{const vehicle=data[button.dataset.vehicle];modalImage.src=vehicle.image;modalImage.alt=vehicle.name;modalTitle.textContent=vehicle.name;modalYear.textContent=vehicle.year;modalPrice.textContent=vehicle.price;modalSpecs.innerHTML=`<span>Quilometragem <b>${vehicle.km}</b></span><span>Câmbio <b>${vehicle.gear}</b></span><span>Combustível <b>${vehicle.fuel}</b></span>`;modalWhatsapp.href=`https://wa.me/message/CJGG4COMSE3BG1?text=${encodeURIComponent(`Olá! Tenho interesse no ${vehicle.name} ${vehicle.year}.`)}`;modal.hidden=false;document.body.style.overflow="hidden"}));
function closeModal(){modal.hidden=true;document.body.style.overflow=""}
document.querySelector("#close").addEventListener("click",closeModal);modal.addEventListener("click",event=>{if(event.target===modal)closeModal()});document.addEventListener("keydown",event=>{if(event.key==="Escape"&&!modal.hidden)closeModal()});

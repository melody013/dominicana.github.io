const card1 = document.querySelector ('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const bg = document.querySelector('.general');
const title = document.querySelector('h1');
const textCard = document.querySelector('p');
const colorTitle = '#FFA500';

card1.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/basilica señora de la altagracia.jpg')";
    title.innerText = 'Basilica de la Altagracia';
    textCard.innerText = 'Es el sitio religioso más importante de República Dominicana. La misma rinde honor a la santa patrona';
});
card2.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/restaurante barcelo.jpg')";
    title.innerText = 'Barcelo Restaurant';
    textCard.innerText = 'El Hotel Barceló Santo Domingo está en la Avenida Máximo Gómez esquina 27 de Febrero de la capital dominicana. Mimos y lujos para los paladares más exigentes'
})
card3.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/Sitio Histórico Nacional de San Juan.jpg')";
    title.innerText = 'Sitio Historico Nacional';
    textCard.innerText = 'Es un sitio muy especial y representativo del pueblo dominicano, cerca al parque Independencia';
})
card4.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/Playa blanca.jpg')";
    title.innerText = 'Playa Santa';
    textCard.innerText = 'Playa Santa es una de las mejores playas de Puerto Rico. Es una playa con pocas olas que hace el disfrute de sus verdes aguas tranquilas una delicia.';
})

/* MENU MOBILE */

const menuMobile = document.querySelector('.menu-mobile');
const links = document.querySelector('.links');
const linksItens = document.querySelectorAll('.links a');

menuMobile.addEventListener('click', () => {
    links.classList.toggle('active');
});

/* FECHA O MENU */
linksItens.forEach((linksItem) => {
    linksItem.addEventListener('click', () => {
        links.classList.toggle('active');
    })
})
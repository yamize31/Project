let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let ListItemDom = document.querySelector('.carousel .List');
let thumbnailDom = document.querySelector('.corousel .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        ListItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next')
    }
}
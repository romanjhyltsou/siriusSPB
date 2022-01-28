const burgerMob = document.querySelector('.burger__mob'),
      navMobMenu = document.querySelector('.nav-mob__menu'),
      closeWrapper = document.querySelector('.close__wrapper'),
      filterByPriceFilter = document.querySelector('.filter-by__price-filter'),
      catalogAsidePrice = document.querySelector('.catalog-aside__price'),
      catalogAsideMoreBtn = document.querySelector('.catalog-aside__more-btn'),
      catalogAsideCloseFilter = document.querySelector('.catalog-aside__close-filter'),
      catalogAsideItemTitles = document.querySelectorAll('.catalog-aside__item-title'),
      catalogAsideContents = document.querySelectorAll('.catalog-aside__content'),
      catalogBasketAdd = document.querySelectorAll('.catalog__basket-add'),
      modalChoice = document.querySelector('.modal-choice'),
      modalChoiceClose = document.querySelector('.modal-choice__close');
      

function navMobMenuOpen(){
    navMobMenu.classList.add('nav-mob__menu--active');
    disableScroll();
}

function navMobMenuClose(){
    navMobMenu.classList.remove('nav-mob__menu--active');
    enableScroll();
}

function filterByPriceFilterOpen(){
    catalogAsidePrice.classList.toggle('catalog-aside__price--active');

}

function filterByPriceFilterClose(e){
    e.preventDefault();
    catalogAsidePrice.classList.remove('catalog-aside__price--active');
}

catalogAsideItemTitles.forEach( (item, index) => {
    item.addEventListener('click', ()=>{
        item.classList.toggle('catalog-aside__item-title--active');
        catalogAsideContents[index].classList.toggle('hide');
            
    });
});

/* move */
let x1 = null,
    y1 = null;
function handelTouchStart(e){
    const ferstTouch = e.touches[0];
    x1 = ferstTouch.clientX;
    y1 = ferstTouch.clientY;
    /* console.log(x1 ,y1); */
}


function handelTouchMove(e){
    console.log(close);
    if(!x1 || !y1){
        return false;
    }
   let x2 = e.touches[0].clientX;
   let y2 = e.touches[0].clientY;
    /* console.log(x2 ,y2); */

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if(Math.abs(xDiff) > Math.abs(yDiff)){
        if(xDiff > 0){
            /* console.log('right'); */
        }else{
            filterByPriceFilterClose(e);
            navMobMenuClose();
            /* console.log('left'); */
        }
    }else{
        if(yDiff > 0){
            /* console.log('Down'); */
        }else{
            /* console.log('top'); */
        }
    }
    x1 = null;
    y1 = null;
   
}
/* move */
/* bascet-btn  */
 
catalogBasketAdd.forEach( (item, index)=>{
    item.addEventListener('click', (e)=>{
        e.preventDefault();
        modalChoice.classList.add('modal-choice--active');
        /* console.log('a'); */
        disableScroll();
       
    });
});
function modalChoiceCl(e){
    e.preventDefault();
/*     console.log('sss'); */
    modalChoice.classList.remove('modal-choice--active');
    enableScroll();
}

/* block scroll */

const disableScroll = () => {
    document.body.dataset.scrollY = window.scrollY;  

    document.body.style.cssText =  `
    position:fixed;
    top: -${window.scrollY}px;
    left:0;
    width:100%;
    overflow:hidden;
    height:100vh;
    padding-right: ${window.innerWidth - document.body.offsetWidth}px;
    `;
};

const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dataset.scrollY
    });
};

/* block scroll */
/* bascet-btn  */

burgerMob.addEventListener('click', navMobMenuOpen);
closeWrapper.addEventListener('click',navMobMenuClose);

filterByPriceFilter.addEventListener('click',filterByPriceFilterOpen);
catalogAsideMoreBtn.addEventListener('click', filterByPriceFilterClose);
catalogAsideCloseFilter.addEventListener('click',filterByPriceFilterOpen);

catalogAsidePrice.addEventListener('touchstart',handelTouchStart);
catalogAsidePrice.addEventListener('touchmove',handelTouchMove);
navMobMenu.addEventListener('touchstart',handelTouchStart);
navMobMenu.addEventListener('touchmove',handelTouchMove);



modalChoiceClose.addEventListener('click', modalChoiceCl);
modalChoiceBtn.addEventListener('click', modalChoiceCl);
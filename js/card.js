class CardCatalog {
    constructor(src, alt, art, descr, whol, retail,parentSelector, ...classes){
        this.src = src;
        this.alt = alt;
        this.art = art;
        this.descr = descr;
        this.whol = whol;
        this.retail = retail;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
        this.transfer = 78;
        this.changeToRU();
    }

    changeToRU (){
        this.whol = this.whol *  this.transfer;
        this.retail = this.retail * this.transfer;

    }

    render(){
        const element = document.createElement('a');
        if(this.classes.length === 0){
            this.element = 'catalog__card';
            element.classList.add(this.element);
        }else{
            this.classes.forEach(className => element.classList.add(className));
        }
        element.innerHTML = `
        <div class="catalog__img-box">
          <img src="${this.src}" alt="${this.alt}">
        </div>
        <div class="catalog__content">
          <p class="catalog__content-art">
            Арт ${this.art}
          </p>
          <p class="catalog__content-text">
            ${this.descr}
          </p>
          <p class="catalog__content-wholesale">
            Опт ${this.whol} ₽
          </p>
          <p class="catalog__content-retail">
            Розница ${this.retail} ₽
          </p>
          <div class="catalog__basket">
              <button class="catalog__basket-add">
                <span> В корзину</span>
              </button>
              <button class="catalog__basket-heart">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="catalog__basket-heart-path" d="M17.3667 3.84172C16.941 3.41589 16.4357 3.0781 15.8795 
                    2.84763C15.3232 2.61716 14.7271 2.49854 14.125 2.49854C13.5229 
                    2.49854 12.9268 2.61716 12.3705 2.84763C11.8143 3.0781 11.309 
                    3.41589 10.8833 3.84172L10 4.72506L9.11666 
                    3.84172C8.25692 2.98198 7.09086 2.49898 5.875 
                    2.49898C4.65914 2.49898 3.49307 2.98198 2.63333 3.84172C1.77359 
                    4.70147 1.29059 5.86753 1.29059 7.08339C1.29059 8.29925 1.77359 
                    9.46531 2.63333 10.3251L3.51666 11.2084L10 17.6917L16.4833 
                    11.2084L17.3667 10.3251C17.7925 9.89943 18.1303 9.39407 18.3608 
                    8.83785C18.5912 8.28164 18.7099 7.68546 18.7099 7.08339C18.7099 6.48132 18.5912 
                    5.88514 18.3608 5.32893C18.1303 4.77271 17.7925 4.26735 17.3667 3.84172V3.84172Z" 
                    stroke="#A0A4A8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              </button>
          </div>
        </div>
        `;

        this.parent.append(element);
    }
}
new CardCatalog(
    'img/catalog-1.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card'
).render();
new CardCatalog(
    'img/catalog-2.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card'
).render();
new CardCatalog(
    'img/catalog-3.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card' 
).render();
new CardCatalog(
    'img/catalog-4.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card' 
).render();
new CardCatalog(
    'img/catalog-1.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card'
).render();
new CardCatalog(
    'img/catalog-2.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card'
).render();
new CardCatalog(
    'img/catalog-3.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card' 
).render();
new CardCatalog(
    'img/catalog-4.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card' 
).render();
new CardCatalog(
    'img/catalog-1.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card'
).render();
new CardCatalog(
    'img/catalog-2.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card'
).render();
new CardCatalog(
    'img/catalog-3.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card' 
).render();
new CardCatalog(
    'img/catalog-4.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card' 
).render();
new CardCatalog(
    'img/catalog-1.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card'
).render();
new CardCatalog(
    'img/catalog-2.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card'
).render();
new CardCatalog(
    'img/catalog-3.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card' 
).render();
new CardCatalog(
    'img/catalog-4.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card' 
).render();
new CardCatalog(
    'img/catalog-1.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card'
).render();
new CardCatalog(
    'img/catalog-2.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card'
).render();
new CardCatalog(
    'img/catalog-3.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card' 
).render();
new CardCatalog(
    'img/catalog-4.png',
    'product',
    '1232425',
    `Костюм "СИРИУС-Горка" куртка, брюки 
    (гражданские размеры) КМФ Мультикам`,
    40,
    54,
    '.catalog__card-wrapper',
    'catalog__card' 
).render();
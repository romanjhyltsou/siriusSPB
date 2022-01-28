const catalogBasketHearts = document.querySelectorAll('.catalog__basket-heart'),
	  basketNumHeart = document.querySelector('.basket__num-heart span'),
	  modalChoiceBtn = document.querySelector('.modal-choice__btn'),
	  basketNumGoods = document.querySelector('.basket__num-goods span');
	  
	  console.log(modalChoiceBtn);
	let counterHeart = 0;
	let counterGoods = 0;

	catalogBasketHearts.forEach( item => {
		item.addEventListener('click', ()=>{
			let plusHeart = ++counterHeart;
			basketNumHeart.textContent = plusHeart;
		});
	});

	modalChoiceBtn.addEventListener('click', ()=>{
		let plusgoods = ++counterGoods;
		basketNumGoods.textContent = plusgoods;
	});
const catalogBasketHearts = document.querySelectorAll('.catalog__basket-heart'),
	  basketNumHeart = document.querySelectorAll('.basket__num-heart span'),
	  basketNumGoods = document.querySelectorAll('.basket__num-goods span'),
	  modalChoiceBtn = document.querySelector('.modal-choice__btn');
	  
	let counterHeart = 0;
	let counterGoods = 0;


	catalogBasketHearts.forEach( item => {
		item.addEventListener('click', (e)=>{
			let plusHeart = ++counterHeart;
			basketNumHeart.forEach( item =>{
				item.textContent = plusHeart;
			});
		});
	});

	modalChoiceBtn.addEventListener('click', (e)=>{
		let plusgoods = ++counterGoods;
		basketNumGoods.forEach( item =>{
			item.textContent = plusgoods;
		});
	});
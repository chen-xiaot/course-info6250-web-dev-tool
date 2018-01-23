( () => {
	const btn = document.getElementById('button-play');
	const select = document.getElementById('select-game');

	const handleGameChange = () => {
		const value = select.value;
		btn.disabled = (value === 'none');
	};

	handleGameChange();

	select.addEventListener('change', () => {
    	handleGameChange();
  	});
} )();


// //IIFE
// ( () => {}
// )();
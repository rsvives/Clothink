function initLoader() {
	var loaderElement = document.getElementById('loader');
	var contentElement = document.getElementById('content');

	if (loaderElement) {
		loaderElement.style.display = 'block';
	} else {
		console.error('No se encontró el elemento loader');
	}

	if (contentElement) {
		contentElement.style.display = 'none';
	} else {
		console.error('No se encontró el elemento content');
	}

	window.addEventListener('load', () => {
		loaderElement.style.display = 'none';
		contentElement.style.display = 'block';
	});
}
document.addEventListener('DOMContentLoaded', initLoader);

/**
 * Cambia la fuente de múltiples elementos de imagen.
 *
 */
function colorPicker() {
	const images = {
		'main-image': '../img/clothes/casual/polo/pink-polo/thumbnail.jpg',
		image1: '../img/clothes/casual/polo/pink-polo/image1.jpg',
		image2: '../img/clothes/casual/polo/pink-polo/image2.jpg',
		image3: '../img/clothes/casual/polo/pink-polo/image3.jpg',
		image4: '../img/clothes/casual/polo/pink-polo/image4.jpg',
	};
	for (let id in images) {
		let elementoImagen = document.getElementById(id);
		if (elementoImagen) {
			elementoImagen.src = fuentesDeImagen[id];
		} else {
			console.error(`Elemento de imagen con id '${id}' no encontrado.`);
		}
	}
}

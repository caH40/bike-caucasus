export async function reduceImage(base64Str, ratio, MAX_WIDTH = 640, MAX_HEIGHT = 480) {
	try {
		let resized_base64 = await new Promise(resolve => {
			let img = new Image();
			img.src = base64Str;
			img.onload = () => {
				let canvas = document.createElement('canvas');
				let width = img.width;
				let height = img.height;

				if (width > height) {
					if (width > MAX_WIDTH) {
						height *= MAX_WIDTH / width;
						width = MAX_WIDTH;
					}
				} else {
					if (height > MAX_HEIGHT) {
						width *= MAX_HEIGHT / height;
						height = MAX_HEIGHT;
					}
				}

				let centerHeight = 0;
				canvas.width = width;
				if (ratio) {
					canvas.height = width * ratio;
					centerHeight = (height - canvas.height) / 2;
				} else {
					canvas.height = height;
				}

				const ctx = canvas.getContext('2d');
				ctx.drawImage(img, 0, -centerHeight, width, height);
				resolve(canvas.toDataURL('image/jpeg'));
			};
		});
		return resized_base64;
	} catch (error) {
		console.log(error);
	}
}

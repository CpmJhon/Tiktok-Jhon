const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://tiktok-download-video-no-watermark.p.rapidapi.com/tiktok/info?url=https%3A%2F%2Fvt.tiktok.com%2FZGJBQHoHA%2F');
xhr.setRequestHeader('x-rapidapi-key', '60acd142a7msh01db615b57e6efep13e23ajsna8ecd08fee74');
xhr.setRequestHeader('x-rapidapi-host', 'tiktok-download-video-no-watermark.p.rapidapi.com');
xhr.send(data);

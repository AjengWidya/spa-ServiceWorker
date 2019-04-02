self.addEventListener('install', function(event) {
	console.log('Ajeng: Installing service worker...');
	self.skipWaiting();
});

self.addEventListener('activate', function(event) {
	console.log('Ajeng: Activating service worker...');
});

self.addEventListener('fetch', function(event) {
	console.log('Ajeng:', event.request.url);
});
// https://developers.google.com/web/fundamentals/getting-started/primers/service-workers

// ------------------------------
// Pre Cache and Update
// ------------------------------
importScripts('./workbox-sw.prod.v2.1.1.js');

/**
 * Create an instance of WorkboxSW.
 * Setting clientsClaims to true tells our service worker to take control as
 * soon as it's activated.
 */
const workboxSW = new WorkboxSW({ clientsClaim: true });

/**
 * precache() is passed a manifest of URLs and versions, and does the following
 * each time the service worker starts up:
 *   - Adds all new URLs to a cache.
 *   - Refreshes the previously cached response if the URL isn't new, but the
 *     revision changes. This will also trigger a Broadcast Channel API message
 *     sent to the channel 'precache-updates'.
 *   - Removes entries for URLs that used to be in the list, but aren't anymore.
 *   - Sets up a fetch handler to respond to any requests for URLs in this
 *     list using a cache-first strategy.
 *
 * DO NOT CREATE OR UPDATE THIS LIST BY HAND!
 * Instead, add one of our tools (workbox-cli, workbox-webpack-plugin, or
 * workbox-build) to your existing build process, and have that regenerate the
 * manifest at the end of every build.
 */

// An array of file details include a `url` and `revision` parameter.
workboxSW.precache([
  {
    "url": "3rdpartylicenses.txt",
    "revision": "523d3b56ece9aec115c7e3811d53c3ef"
  },
  {
    "url": "assets/angular144.png",
    "revision": "995fb48f5afe74ed27281c8e14f18819"
  },
  {
    "url": "assets/Cursors/cursor_click_x.cur",
    "revision": "62116811ccbe9a18aefd73c3c53f920e"
  },
  {
    "url": "assets/Cursors/cursorani_wait.ani",
    "revision": "19fbc7da41b2b10ef1e28366ee96bc6f"
  },
  {
    "url": "assets/iconfont/codepoints",
    "revision": "7e4ff73a88c8dd11addf69672d6648d5"
  },
  {
    "url": "assets/iconfont/material-icons.css",
    "revision": "ff3e74b8aab07604027161591fd4adf2"
  },
  {
    "url": "assets/iconfont/MaterialIcons-Regular.eot",
    "revision": "e79bfd88537def476913f3ed52f4f4b3"
  },
  {
    "url": "assets/iconfont/MaterialIcons-Regular.ijmap",
    "revision": "ed6a98d002bc0b535dd8618f3ae05fe7"
  },
  {
    "url": "assets/iconfont/MaterialIcons-Regular.svg",
    "revision": "60b333913565d0fd467d8616af325557"
  },
  {
    "url": "assets/iconfont/MaterialIcons-Regular.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "assets/iconfont/MaterialIcons-Regular.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "assets/iconfont/MaterialIcons-Regular.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "assets/iconfont/README.md",
    "revision": "af86b7534f90b905f1adb4b71a160dca"
  },
  {
    "url": "assets/idb-keyval-min.js",
    "revision": "81dfde4d837c26e0aad2d73a373c239a"
  },
  {
    "url": "assets/launcher-icon-2x.jpg",
    "revision": "dd35bb7abe5cab4a9a66b90fa69f1df0"
  },
  {
    "url": "assets/launcher-icon-3x.jpg",
    "revision": "2f12e82197b1cf645ec7e632daf66e65"
  },
  {
    "url": "assets/launcher-icon-4x.jpg",
    "revision": "784f3874cafe9a6bcd378d42720bc8d3"
  },
  {
    "url": "assets/materialize/materialize.min.css",
    "revision": "dea286d7996bc9ab3a8d9c2076d2a97d"
  },
  {
    "url": "assets/materialize/materialize.min.js",
    "revision": "cc9619ce5783311514713f7c7b892522"
  },
  {
    "url": "assets/materialize/roboto/Roboto-Bold.woff",
    "revision": "eed9aab5449cc9c8430d7d258108f602"
  },
  {
    "url": "assets/materialize/roboto/Roboto-Bold.woff2",
    "revision": "c0f1e4a4fdfb8048c72e86aadb2a247d"
  },
  {
    "url": "assets/materialize/roboto/Roboto-Light.woff",
    "revision": "ea36cd9a0e9eee97012a67b8a4570d7b"
  },
  {
    "url": "assets/materialize/roboto/Roboto-Light.woff2",
    "revision": "3c37aa69cd77e6a53a067170fa8fe2e9"
  },
  {
    "url": "assets/materialize/roboto/Roboto-Medium.woff",
    "revision": "cf4d60bc0b1d4b2314085919a00e1724"
  },
  {
    "url": "assets/materialize/roboto/Roboto-Medium.woff2",
    "revision": "1561b424aaef2f704bbd89155b3ce514"
  },
  {
    "url": "assets/materialize/roboto/Roboto-Regular.woff",
    "revision": "3cf6adf61054c328b1b0ddcd8f9ce24d"
  },
  {
    "url": "assets/materialize/roboto/Roboto-Regular.woff2",
    "revision": "5136cbe62a63604402f2fedb97f246f8"
  },
  {
    "url": "assets/materialize/roboto/Roboto-Thin.woff",
    "revision": "44b78f142603eb69f593ed4002ed7a4a"
  },
  {
    "url": "assets/materialize/roboto/Roboto-Thin.woff2",
    "revision": "1f35e6a11d27d2e10d28946d42332dc5"
  },
  {
    "url": "assets/ng.png",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "assets/scss/custom-theme.scss",
    "revision": "38d8652182e9670d8e10fb3bafdf17d5"
  },
  {
    "url": "assets/scss/grid.cmd",
    "revision": "2bd818f18bf943709985fc7e59a7da34"
  },
  {
    "url": "assets/scss/grid.css",
    "revision": "9ad429ff12ce65881203dc3fff9d1cf4"
  },
  {
    "url": "assets/scss/grid.min.css",
    "revision": "fe5823668a09a6129eb1c46b27edff2a"
  },
  {
    "url": "assets/scss/grid.scss",
    "revision": "5f40fe8bb59aad9cd5ae396fa0c7c638"
  },
  {
    "url": "assets/sw-register.js",
    "revision": "9ff79c12b91428cf7fee2a738f7bd62d"
  },
  {
    "url": "cursor_click_x.cur",
    "revision": "62116811ccbe9a18aefd73c3c53f920e"
  },
  {
    "url": "favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "fontawesome-webfont.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "index.html",
    "revision": "bfafc212f774e978a274ad8026891eda"
  },
  {
    "url": "inline.bundle.js",
    "revision": "cf64e9496dde0a7183a4a6ad4532d085"
  },
  {
    "url": "main.bundle.js",
    "revision": "10cc1a99b3ebea8873e5c29490d14629"
  },
  {
    "url": "manifest.appcache",
    "revision": "efa02a6a8af648f449580e187d7c7dcb"
  },
  {
    "url": "manifest.json",
    "revision": "9f2d5ece1ff36de8ac6aae64ba42b26a"
  },
  {
    "url": "manifest.webapp",
    "revision": "6acd21f7d6876591ddd1d38586b4bf0b"
  },
  {
    "url": "MaterialIcons-Regular.eot",
    "revision": "e79bfd88537def476913f3ed52f4f4b3"
  },
  {
    "url": "MaterialIcons-Regular.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "MaterialIcons-Regular.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "MaterialIcons-Regular.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "offline.html",
    "revision": "282a587bae8aafa5f5f25fb76d441c57"
  },
  {
    "url": "polyfills.bundle.js",
    "revision": "e0492945aa9a920bb184f71cc3073a93"
  },
  {
    "url": "Roboto-Bold.woff",
    "revision": "eed9aab5449cc9c8430d7d258108f602"
  },
  {
    "url": "Roboto-Bold.woff2",
    "revision": "c0f1e4a4fdfb8048c72e86aadb2a247d"
  },
  {
    "url": "Roboto-Light.woff",
    "revision": "ea36cd9a0e9eee97012a67b8a4570d7b"
  },
  {
    "url": "Roboto-Light.woff2",
    "revision": "3c37aa69cd77e6a53a067170fa8fe2e9"
  },
  {
    "url": "Roboto-Medium.woff",
    "revision": "cf4d60bc0b1d4b2314085919a00e1724"
  },
  {
    "url": "Roboto-Medium.woff2",
    "revision": "1561b424aaef2f704bbd89155b3ce514"
  },
  {
    "url": "Roboto-Regular.woff",
    "revision": "3cf6adf61054c328b1b0ddcd8f9ce24d"
  },
  {
    "url": "Roboto-Regular.woff2",
    "revision": "5136cbe62a63604402f2fedb97f246f8"
  },
  {
    "url": "Roboto-Thin.woff",
    "revision": "44b78f142603eb69f593ed4002ed7a4a"
  },
  {
    "url": "Roboto-Thin.woff2",
    "revision": "1f35e6a11d27d2e10d28946d42332dc5"
  },
  {
    "url": "robots.txt",
    "revision": "6f94032faf83ae58741013c8fee07cb3"
  },
  {
    "url": "scripts.bundle.js",
    "revision": "931c2862949089b7569b163a3db933bf"
  },
  {
    "url": "styles.bundle.css",
    "revision": "768cd9187366c4e7e80cd137f115201a"
  },
  {
    "url": "uploads/mobil/download (1).jpg",
    "revision": "ea8895ad9ef6d476541a30c4d4597b28"
  },
  {
    "url": "uploads/mobil/download (2).jpg",
    "revision": "2982ecdfa8fb46652e7044245ddd3e1c"
  },
  {
    "url": "uploads/mobil/gg.png",
    "revision": "7cb70ded6cd1ea367c7d5bb118886093"
  },
  {
    "url": "uploads/mobil/images (6).jpg",
    "revision": "de32c0b3e387e10b688ec8baa1940d9b"
  },
  {
    "url": "uploads/mobil/supplier-icon-0.png",
    "revision": "cbe48e55be6181c9e63e6e131716a894"
  },
  {
    "url": "uploads/mobil/supplier-icon.png",
    "revision": "cbe48e55be6181c9e63e6e131716a894"
  },
  {
    "url": "uploads/supir/B612-2016-02-02-08-16-37_1-0.jpg",
    "revision": "3b4b8b5795f43d8da36db24369982157"
  },
  {
    "url": "uploads/supir/B612-2016-02-02-08-16-37_1.jpg",
    "revision": "3b4b8b5795f43d8da36db24369982157"
  },
  {
    "url": "uploads/supir/B612-2016-02-02-08-23-56_1.jpg",
    "revision": "196043191c15dd497e7341ddb6712297"
  },
  {
    "url": "uploads/supir/B612-2016-02-02-08-28-10_1.jpg",
    "revision": "b3fe32c593fe8a774f8f67534229106a"
  },
  {
    "url": "uploads/supir/gg.png",
    "revision": "7cb70ded6cd1ea367c7d5bb118886093"
  },
  {
    "url": "uploads/user/B612-2016-02-02-08-15-36_1_1.jpg",
    "revision": "1409d117b910ad6f21726f5e7f1bd27c"
  },
  {
    "url": "uploads/user/B612-2016-02-02-08-19-17_1.jpg",
    "revision": "2641b8cdb298198486a5633c2e1aab75"
  },
  {
    "url": "uploads/user/B612-2016-02-02-08-19-46_1-0.jpg",
    "revision": "13a2e1c80879594f8a046624871d4316"
  },
  {
    "url": "uploads/user/B612-2016-02-02-08-19-46_1.jpg",
    "revision": "13a2e1c80879594f8a046624871d4316"
  },
  {
    "url": "uploads/user/B612-2016-02-02-08-23-46_1.jpg",
    "revision": "516821f7657ca83896ef1151c6d5d23a"
  },
  {
    "url": "uploads/user/B612-2016-02-02-08-25-25_1-0.jpg",
    "revision": "fb7c4f1f9b78814befcef0ec2caaaaab"
  },
  {
    "url": "uploads/user/B612-2016-02-02-08-25-25_1.jpg",
    "revision": "fb7c4f1f9b78814befcef0ec2caaaaab"
  },
  {
    "url": "uploads/user/gg.png",
    "revision": "7cb70ded6cd1ea367c7d5bb118886093"
  },
  {
    "url": "workbox-sw.prod.v2.1.1.js",
    "revision": "f1cd0b1cbd1bab95b0699b558db84172"
  },
  {
    "url": "workbox-sw.prod.v2.1.1.js.map",
    "revision": "50032bbb3a40ae0047a5a44cd95ff06c"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js.map",
    "revision": "8e170beaf8b748367396e6039c808c74"
  }
]);

/**
 * Requests for URLs that aren't precached can be handled by runtime caching.
 * Workbox has a flexible routing system, giving you control over which caching
 * strategies to use for which kind of requests.
 *
 * registerRoute() takes a RegExp or a string as its first parameter.
 *   - RegExps can match any part of the request URL.
 *   - Strings are Express-style routes, parsed by
 *     https://github.com/nightwolfz/path-to-regexp
 *
 * registerRoute() takes a caching strategy as its second parameter.
 * The built-in strategies are:
 *   - cacheFirst
 *   - cacheOnly
 *   - networkFirst
 *   - networkOnly
 *   - staleWhileRevalidate
 * Advice about which strategies to use for various assets can be found at
 * https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/
 *
 * Each strategy can be configured with additional options, controlling the
 * name of the cache that's used, cache expiration policies, which response
 * codes are considered valid (useful when you want to cache opaque responses)
 * and whether updates to previously cached responses should trigger a message
 * using the BroadcastChannel API.
 *
 * The following routes show this flexibility put to use.
 */

/**
 * Set up a route that will match any URL requested that ends in .json.
 * Handle those requests using a network-first strategy.
 */
// workboxSW.router.registerRoute(
//   /\.json$/,
//   workboxSW.strategies.networkFirst()
// );

/**
 * Set up a route that will match any URL requested that has /api/ in it.
 * Handle those requests using a network-first strategy, but with a timeout.
 * If there's no network response before the timeout, then return the previous
 * response from the cache instead.
 */

workboxSW.router.registerRoute(
	/\/api\/(.*)/,
	// workboxSW.strategies.networkFirst({ networkTimeoutSeconds: 1 })
	workboxSW.strategies.cacheFirst({ cacheName: 'hero-api' })
);

// don't need this since we have fallback
// const networkFirstStrategy = workboxSW.strategies.networkFirst();
// workboxSW.router.registerRoute('/home/', networkFirstStrategy);
// workboxSW.router.registerRoute('/heroes/', networkFirstStrategy);
// workboxSW.router.registerRoute('/villains/', networkFirstStrategy);

/**
 * This URL will be used as a fallback if a navigation request can't be fulfilled.
 * Normally this URL would be precached so it's always available.
 * This is particularly useful for single page apps where requests should go to a single URL.
 */
workboxSW.router.registerNavigationRoute('/index.html');












// -------------------------------------------------------
// background sync
// -------------------------------------------------------
// self.importScripts('assets/idb-keyval-min.js');

// self.addEventListener('sync', event => {
//   swLog('I heard a sync event!', event);
//   if (event.tag === 'my-pwa-messages') {
//     event.waitUntil(getMessagesFromOutbox()
//       .then(messages => Promise.all(mapAndSendMessages(messages)))
//       .catch(err => swLog('unable to send messages to server', err))
//       .then(response => removeMessagesFromOutBox(response))
//     );
//   }
// });

// function getMessagesFromOutbox() {
// 	const key = 'pwa-messages';
// 	return idbKeyval.get(key).then(values => {
// 		values = values || '[]';
// 		const messages = JSON.parse(values) || [];
// 		return messages;
// 	});
// }

// function mapAndSendMessages(messages) {
// 	return messages.map(
// 		message => sendMessage(message)
// 			.then(response => response.json())
// 			.catch(err => swLog('server unable to handle the message', message, err))
// 	);
// }

// function sendMessage(message) {
// 	const headers = {
// 		'Accept': 'application/json',
// 		'X-Requested-With': 'XMLHttpRequest',
// 		'Content-Type': 'application/json'
// 	};
// 	const msg = {
// 		method: 'POST',
// 		body: JSON.stringify(message),
// 		headers: headers
// 	};
// 	return fetch('/messages', msg).then((response) => {
// 		swLog('message sent!', message);
// 		return response;
// 	});
// }

// function removeMessagesFromOutBox(response) {
// 	// If the first worked,let's assume for now they all did
// 	if (response && response.length && response[0] && response[0].result === 'success') {
// 		return idbKeyval.clear()
// 			.then(() => swLog('messages removed from outbox'))
// 			.catch(err => swLog('unable to remove messages from outbox', err));
// 	}
// 	return Promise.resolve(true);
// }


// -------------------------------------------------------
// push
// -------------------------------------------------------
// https://github.com/web-push-libs/web-push
self.addEventListener('push', event => {
	const body = event.data.text() || 'A little push';
	swLog(`Push received and had this data: "${event.data.text()}"`);

	const title = 'Push Demo';
	const options = {
		body: body,
		icon: 'assets/ng.png',
		badge: 'assets/ng.png'
	};

	event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
	swLog('Notification click Received.');

	event.notification.close();

	// We are calling event.waitUntil() again
	// to ensure the browser doesn't terminate
	// our service worker before our new window has been displayed.
	event.waitUntil(clients.openWindow('https://github.com/hwalyonglance'));
});

// const applicationServerPublicKey = 'BMZuj1Uek9SeT0myecw8TQxr4dB6Vl4X7c4abMzAA4KR72DsKnVcSpZr6svYgkwNSerKsz7vdZ1kfzwFc0TmH3o';
const applicationServerPublicKey =
	'BNKV7LJ5IFajn46I7FWroeSCMKtyOQPAGguMCn_-mVfyVjr_pvvQn0lW_KMoOAMqEAd4qhFHZhG6GEsDTPSJJ8I';

self.addEventListener('pushsubscriptionchange', event => {
	swLog(`'pushsubscriptionchange' event fired.`);
	const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
	event.waitUntil(
		self.registration.pushManager.subscribe({
			userVisibleOnly: true,
			applicationServerKey: applicationServerKey
		})
			.then(newSubscription => {
				// TODO: Send to application server
				swLog('New subscription: ', newSubscription);
			})
	);
});



// -------------------------------------------------------
// logging
// -------------------------------------------------------
function swLog(eventName, event) {
	console.log('[Service Worker] ' + eventName);
	if (event) {
		console.log(event);
	}
}

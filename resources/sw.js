workbox.clientsClaim()

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerNavigationRoute('/index.html', {
  blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
})

self.addEventListener('install', () => {
  console.log('[sw]', 'Your ServiceWorker is installed')
})

self.addEventListener('push', ev => {
  if (ev.data) {
    console.log('[sw]', 'pushed!!', ev.data.json())
    const { title, msg, icon } = ev.data.json()
    self.registration.showNotification(title, {
      body: msg,
      icon: icon,
    })
  }
})

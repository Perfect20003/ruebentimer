// firebase-messaging-sw.js
// Muss im Root-Verzeichnis des GitHub Pages Repos liegen (neben index.html)

importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB6dxEUrQsk3FAIHDGA0rObqwXSYE3jt1w",
  authDomain: "ruebentimer.firebaseapp.com",
  projectId: "ruebentimer",
  storageBucket: "ruebentimer.firebasestorage.app",
  messagingSenderId: "193161065289",
  appId: "1:193161065289:web:1ec75431795e1c3596a098"
});

const messaging = firebase.messaging();

// Zeigt Benachrichtigungen wenn App im Hintergrund ist
messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [200, 100, 200]
  });
});

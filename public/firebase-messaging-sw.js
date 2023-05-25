importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyAilHacTYdk4W4TmcMJvJt5WvyOE3YHzd4",
  authDomain: "react-chat-94734.firebaseapp.com",
  projectId: "react-chat-94734",
  storageBucket: "react-chat-94734.appspot.com",
  messagingSenderId: "96968284403",
  appId: "1:96968284403:web:3ef55270d7d65559c3ff86",
  measurementId: "G-K6YW5HXXBL"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

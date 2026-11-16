importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js','https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({apiKey:"AIzaSyAfBrvaYz9xCxo5pPo5drALQeii4TZrYwg",authDomain:"jesper-chat-2.firebaseapp.com",projectId:"jesper-chat-2",messagingSenderId:"516303452280",appId:"1:516303452280:web:45497f89f199f1489d558d"});
const m=firebase.messaging();
m.onBackgroundMessage(p=>{const d=p.data||{},call=d.type=='call';
 return self.registration.showNotification(d.title||'Jesper Chat',{body:d.body||'',icon:'icon-192.png',badge:'icon-192.png',tag:d.tag||'jc',renotify:true,requireInteraction:call,vibrate:call?[500,300,500,300,500,300,500]:[200,100,200]})});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{for(const c of l){if('focus'in c)return c.focus()}return clients.openWindow('/')}))});
self.addEventListener('fetch',()=>{});

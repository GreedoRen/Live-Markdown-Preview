import firebase from 'firebase/app';
import 'firebase/database';

const config = {
	apiKey: 'AIzaSyCUapEhiwrZuVaVIlSUOnuGmZaIbYsRCxI',
	authDomain: 'markdown-f55c0.firebaseapp.com',
	databaseURL: 'https://markdown-f55c0.firebaseio.com',
	projectId: 'markdown-f55c0',
	storageBucket: 'markdown-f55c0.appspot.com',
	messagingSenderId: '366291677650',
	appId: '1:366291677650:web:f6309435172ca34b'
};

firebase.initializeApp(config);

export default firebase.database();

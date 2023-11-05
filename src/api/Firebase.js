import firebase from 'firebase/app';
import 'firebase/database'; // Si estás utilizando la base de datos en tiempo real

// Tu configuración de Firebase
const firebaseConfig = {
  // ... tu configuración ...
};

// Inicializar Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Usar Firebase aquí

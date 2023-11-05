import firebase from 'firebase/app';
import 'firebase/firestore'; // si vas a usar Firestore
import 'firebase/auth'; // si vas a usar la autenticación

const firebaseConfig = {
  apiKey: "tu_api_key",
  authDomain: "tu_auth_domain",
  projectId: "tu_project_id",
  storageBucket: "tu_storage_bucket",
  messagingSenderId: "tu_messaging_sender_id",
  appId: "tu_app_id",
  measurementId: "tu_measurement_id"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Si vas a utilizar Firestore
const db = firebase.firestore();

// Si vas a utilizar la autenticación
const auth = firebase.auth();

// Exporta las constantes para usarlas en otros archivos
export { db, auth };

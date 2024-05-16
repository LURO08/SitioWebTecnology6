// Importa solo las funciones necesarias de Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCUcoC28-sdsfbgAPofCaYSOt33vAf8Sa4",
  authDomain: "ecommerstecnology6.firebaseapp.com",
  projectId: "ecommerstecnology6",
  storageBucket: "ecommerstecnology6.appspot.com",
  messagingSenderId: "208838310531",
  appId: "1:208838310531:web:7b3dc04813b9af2aaf79b6"
};
// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa los servicios de Firebase
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app); // Utiliza getAuth para obtener la instancia de autenticación


// Exporta las instancias para usar en otras partes de tu aplicación
export { auth, db, storage };

// Importa solo las funciones necesarias de Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDb01h2XL4yHp9SBYTy_YCTjX5YWrOPaMI",
  authDomain: "ecommerstecnology-7762e.firebaseapp.com",
  projectId: "ecommerstecnology-7762e",
  storageBucket: "ecommerstecnology-7762e.appspot.com",
  messagingSenderId: "122919737248",
  appId: "1:122919737248:web:b360f3b7cf5de325a7f6c5"
};
// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa los servicios de Firebase
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app); // Utiliza getAuth para obtener la instancia de autenticación


// Exporta las instancias para usar en otras partes de tu aplicación
export { auth, db, storage };

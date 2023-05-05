import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDg_VWo6HM17rSBG22SxGsEviWjSJYfesY",
    authDomain: "gizan-tech-task3.firebaseapp.com",
    projectId: "gizan-tech-task3",
    storageBucket: "gizan-tech-task3.appspot.com",
    messagingSenderId: "604846452233",
    appId: "1:604846452233:web:77821893ecca0245ead2d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

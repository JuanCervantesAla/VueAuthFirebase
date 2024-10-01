<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #7B5B3A; color: white;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Capibara World Ticket</a>
      <img alt="Vue logo" :src="require('@/assets/logo.png')" style="width: 60px; height: 50px;">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="existeUsuario" class="nav-link active" aria-current="page" to="/about">About</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-light me-2 text-dark" type="submit">Search</button>
        </form>
        <!-- Iniciar sesión --> 
        <button v-if="!existeUsuario" type="button" class="btn btn-light mx-2 text-dark" data-bs-toggle="modal" data-bs-target="#login">
          Log in
        </button> 
        <!-- Cerrar sesión -->   
        <button v-if="existeUsuario" class="btn btn-light me-2 text-dark" data-bs-toggle="modal" data-bs-target="#login" @click="signout">
          Log out
        </button>
        <!-- Regístrate --> 
        <button v-if="!existeUsuario" type="button" class="btn btn-light text-dark" data-bs-toggle="modal" data-bs-target="#registro">
          Regístrate
        </button>
      </div>
    </div>
  </nav>
  <!-- Modals for registration and login... -->
</template>



<script>
import { 
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
  } from "firebase/auth";
  import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
   data() {
        return {
            email: '',
            password: '',
            repassword: '',
            errorMessage: ''
        };
    },
   methods: {
     register(email, password) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('¡Registrado!');
        })
        .catch((error) => {
            const errorCode = error.code;
            this.errorMessage = error.message;
            alert(this.errorMessage);
            // ..
        });
      },        
     login( email, password ) {
       const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('¡Sesión iniciada!');
            // Signed in
            const user = userCredential.user;
            // ...
            })
        .catch((error) => {
        const errorCode = error.code;
        this.errorMessage = error.message;
        alert(this.errorMessage);
        });
        },
     signout () {
       const auth = getAuth();
      signOut(auth).then(() => {
        alert('¡Sesión cerrada! Inicia sesión.');
      }).catch((error) => {
      });
     }
   },
    computed: {
    ...mapGetters(['existeUsuario'])
  }
}
</script>

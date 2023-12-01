<template>
    <div class="signup">
        <div class="overlay">
            <div class="card card-centered text-center mb-3 position-absolute top-50 start-50 translate-middle rounded-5" style="width: 500px; height: 675px;">
                <div class="card-body">
                    <img src="../assets/Logo.png" class="mt-3 mb-4">
                    <h3 class="card-title">Log in</h3>
                    <div class="input-group flex-nowrap container px-5" style="margin-top: 35px;">
                        <input type="text" class="form-control rounded-4 border-2" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" style="height: 50px;">
                    </div>
                    <div class="input-group flex-nowrap container px-5 mt-3">
                        <input type="email" class="form-control rounded-4 border-2" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" style="height: 50px;">
                    </div>
                    <div class="input-group flex-nowrap container px-5 mt-3 mb-4">
                        <input type="password" class="form-control rounded-4 border-2" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" style="height: 50px;">
                    </div>
                    <router-link to="/Homelog"  class="btn btn-primary mt-5 rounded-4" style="width: 370px; height: 50px; font-size: 20px; font-family: Marko One;">Sign in</router-link>
                    <div class="container mt-1 login-register" style="width: 390px;">
                        <p>Sudah punya akun?</p><router-link to="/Login" class="register-link">Log in</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <router-view></router-view>
</template>

<style>
    html, body {
    height: 100%;
    margin: 0;
}

body {
    margin: 0;
    padding: 0;
}


.signup {
    position: relative;
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Hide overflow from the pseudo-element */
    background-image: url('../assets/background.jpg');  
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5); /* Black with 50% opacity */
    z-index: 1; /* Place the overlay above the background image */
}

.login-register{
    font-size: 1.05em;
    font-weight: 500;
    font-family: Marko One;
    color: #162938;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
}

</style>
<template>

    <nav class="navbar navbar-expand-lg fixed-top shadow custom-head" style="height: 100px;">
        <div class="container-fluid">
            <a class="navbar-brand ms-5" href="#"><img src="../assets/Brand.png"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" style="max-width: 900px; margin-left: 43px;">
                <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0 mx-3 d-flex justify-content-center custom-nav">
                    <li class="nav-item">
                        <router-link to="/Homelog" class="nav-link active m-4" aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link m-4" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                        </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Upper Body</a></li>
                        <li><a class="dropdown-item" href="#">Lower Body</a></li>
                        <li><a class="dropdown-item" href="#">Shoes</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Others</a></li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link m-4" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Collection
                        </a>
                    <ul class="dropdown-menu">
                        <li><router-link to="/mancoll" class="dropdown-item">Man's Collection</router-link></li>
                        <li><router-link to="/womancoll" class="dropdown-item">Woman's Collection</router-link></li>
                    </ul>
                    </li>
                </ul>
            </div>
            <router-link to="/Cart"><img class="mx-3 mt-1" src="../assets/shopping-cart.png"></router-link>
            <img src="../assets/profile.png"><h5 class="mx-2 mt-2" style="font-family: Marko One;">Fauzan Abderrasheed</h5>
        </div>
    </nav>
    <router-view></router-view>
    </template>
    
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Marko+One&family=Poppins:wght@400;600&display=swap');
    
    .custom-nav {
        font-size: 20px;
        font-family: Marko One;
    }
    
    .cta {
        background-color: #DDD2C6;
        font-family: Marko One;
        color: #8E4739;
        border: none;
        border-radius: 12px;
        cursor: pointer; 
    }
    
    .custom-head{
        background-color: #f8f9fa;
    }
    </style>
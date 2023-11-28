<template>
<nav class="navbar navbar-expand-lg fixed-top shadow custom-head" style="height: 100px;">
    <div class="container-fluid">
        <a class="navbar-brand ms-5" href="#"><img src="../assets/Brand.png"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0 d-flex justify-content-center custom-nav">
                <li class="nav-item">
                    <a class="nav-link active m-4" aria-current="page" href="#">Home</a>
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
                    <li><a class="dropdown-item" href="#">Man's Collection</a></li>
                    <li><a class="dropdown-item" href="#">Woman's Collection</a></li>
                </ul>
                </li>
            </ul>
        </div>
            <router-link to="/Homelog" class="cta ms-5 px-2 py-0" style="box-shadow:-3px 3px 5px"><button class="btn fs-5 border-0" style="color: #8E4739">Log in</button></router-link>
            <a class="cta me-5 ms-3 px-2" href="#" style="box-shadow:-3px 3px 5px"><button class="btn fs-5 border-0" style="color: #8E4739">Sign up</button></a>
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
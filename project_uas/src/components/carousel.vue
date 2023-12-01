<template>
    <div id="iklan" class="container pt-5 px-3 mb-5">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="../assets/carousel1.jpeg" class="d-block rounded-5 custom-carousel">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="../assets/carousel2.jpeg" class="d-block rounded-5 custom-carousel">
                </div>
                <div class="carousel-item">
                    <img src="../assets/carousel3.jpeg" class="d-block rounded-5 custom-carousel">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<style scoped>
#iklan {
    max-width: 1480px;
    margin-top: 100px;
}

.custom-carousel{
    width: 100%;
    height: 500px;
    object-fit: cover;
}
</style>
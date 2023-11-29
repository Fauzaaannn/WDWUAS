<template>
    <div class="card border-0 shadow rounded-4 d-inline-block float-start mb-5 custom-category" style="width: 18rem; margin-left: 100px;">
        <div class="card-header custom-ctghead">
            Categories
        </div>
        
        <h3 class="ms-4 mt-3">Upper Body</h3>
        <div class="mt-2 ms-5">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="sweater" checked>
                <label class="form-check-label" for="sweater">
                    Sweater
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="hoodies" checked>
                <label class="form-check-label" for="hoodies">
                    Hoodies
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="shirts" checked>
                <label class="form-check-label" for="shirts">
                    Shirts 
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                    Turtle Neck
                </label>
            </div>
        </div>

        <h3 class="ms-4 mt-3">Lower Body</h3>
        <div class="mt-2 ms-5 pb-5">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                    Trousers
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                    Cargo Pants
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                    Shorts 
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                    Jeans
                </label>
            </div>
        </div>
    </div>

    <div class="d-inline-block ms-5">
    <!-- sweater -->
        <div id="sweater-div" class="row mb-3">
            <router-link to="/Preview" class="card ms-3 border-0 shadow rounded-4" style="width: 266px; text-decoration: none;">
                <img src="../assets/sweater.jpeg" class="card-img-top mt-3 rounded-4">
                <div class="card-body p-0 mt-3 mb-3 mx-1">
                    <h5 class="card-title">Gildan Mens Sweater</h5>
                    <h4 class="card-title mt-2 mb-2">Rp150.000</h4>
                    <p class="card-text mb-2">Kota Malang</p>
                    <p class="card-text mb-2" style="font-size: 17px"><small class="text-body-secondary">Terjual 100 | <img src="../assets/star.png" style="max-width: 14px; max-height: 14px;"> 5 (100 rating)</small></p>
                </div>
            </router-link>
            <router-link to="/Preview" class="card ms-3 border-0 shadow rounded-4" style="width: 266px; text-decoration: none;">
                <img src="../assets/sweater.jpeg" class="card-img-top mt-3 rounded-4">
                <div class="card-body p-0 mt-3 mb-3 mx-1">
                    <h5 class="card-title">Gildan Mens Sweater</h5>
                    <h4 class="card-title mt-2 mb-2">Rp150.000</h4>
                    <p class="card-text mb-2">Kota Malang</p>
                    <p class="card-text mb-2" style="font-size: 17px"><small class="text-body-secondary">Terjual 100 | <img src="../assets/star.png" style="max-width: 14px; max-height: 14px;"> 5 (100 rating)</small></p>
                </div>
            </router-link>
            <router-link to="/Preview" class="card ms-3 border-0 shadow rounded-4" style="width: 266px; text-decoration: none;">
                <img src="../assets/sweater.jpeg" class="card-img-top mt-3 rounded-4">
                <div class="card-body p-0 mt-3 mb-3 mx-1">
                    <h5 class="card-title">Gildan Mens Sweater</h5>
                    <h4 class="card-title mt-2 mb-2">Rp150.000</h4>
                    <p class="card-text mb-2">Kota Malang</p>
                    <p class="card-text mb-2" style="font-size: 17px"><small class="text-body-secondary">Terjual 100 | <img src="../assets/star.png" style="max-width: 14px; max-height: 14px;"> 5 (100 rating)</small></p>
                </div>
            </router-link>
            <router-link to="/Preview" class="card ms-3 border-0 shadow rounded-4" style="width: 266px; text-decoration: none;">
                <img src="../assets/sweater.jpeg" class="card-img-top mt-3 rounded-4">
                <div class="card-body p-0 mt-3 mb-3 mx-1">
                    <h5 class="card-title">Gildan Mens Sweater</h5>
                    <h4 class="card-title mt-2 mb-2">Rp150.000</h4>
                    <p class="card-text mb-2">Kota Malang</p>
                    <p class="card-text mb-2" style="font-size: 17px"><small class="text-body-secondary">Terjual 100 | <img src="../assets/star.png" style="max-width: 14px; max-height: 14px;"> 5 (100 rating)</small></p>
                </div>
            </router-link>
        </div>
    <!-- hoodies -->
        <div id="hoodies-div" class="row mb-3">
            <router-link to="/Preview" class="card ms-3 border-0 shadow rounded-4" style="width: 266px; text-decoration: none;">
                <img src="../assets/hoodie.jpeg" class="card-img-top mt-3 rounded-4">
                <div class="card-body p-0 mt-3 mb-3 mx-1">
                    <h5 class="card-title">Jerzees Hoodie</h5>
                    <h4 class="card-title mt-2 mb-2">Rp175.000</h4>
                    <p class="card-text mb-2">Kota Sidoarjo</p>
                    <p class="card-text mb-2" style="font-size: 17px"><small class="text-body-secondary">Terjual 100 | <img src="../assets/star.png" style="max-width: 14px; max-height: 14px;"> 5 (100 rating)</small></p>
                </div>
            </router-link>
            <router-link to="/Preview" class="card ms-3 border-0 shadow rounded-4" style="width: 266px; text-decoration: none;">
                <img src="../assets/hoodie.jpeg" class="card-img-top mt-3 rounded-4">
                <div class="card-body p-0 mt-3 mb-3 mx-1">
                    <h5 class="card-title">Jerzees Hoodie</h5>
                    <h4 class="card-title mt-2 mb-2">Rp175.000</h4>
                    <p class="card-text mb-2">Kota Sidoarjo</p>
                    <p class="card-text mb-2" style="font-size: 17px"><small class="text-body-secondary">Terjual 100 | <img src="../assets/star.png" style="max-width: 14px; max-height: 14px;"> 5 (100 rating)</small></p>
                </div>
            </router-link>
            <router-link to="/Preview" class="card ms-3 border-0 shadow rounded-4" style="width: 266px; text-decoration: none;">
                <img src="../assets/hoodie.jpeg" class="card-img-top mt-3 rounded-4">
                <div class="card-body p-0 mt-3 mb-3 mx-1">
                    <h5 class="card-title">Jerzees Hoodie</h5>
                    <h4 class="card-title mt-2 mb-2">Rp175.000</h4>
                    <p class="card-text mb-2">Kota Sidoarjo</p>
                    <p class="card-text mb-2" style="font-size: 17px"><small class="text-body-secondary">Terjual 100 | <img src="../assets/star.png" style="max-width: 14px; max-height: 14px;"> 5 (100 rating)</small></p>
                </div>
            </router-link>
            <router-link to="/Preview" class="card ms-3 border-0 shadow rounded-4" style="width: 266px; text-decoration: none;">
                <img src="../assets/hoodie.jpeg" class="card-img-top mt-3 rounded-4">
                <div class="card-body p-0 mt-3 mb-3 mx-1">
                    <h5 class="card-title">Jerzees Hoodie</h5>
                    <h4 class="card-title mt-2 mb-2">Rp175.000</h4>
                    <p class="card-text mb-2">Kota Sidoarjo</p>
                    <p class="card-text mb-2" style="font-size: 17px"><small class="text-body-secondary">Terjual 100 | <img src="../assets/star.png" style="max-width: 14px; max-height: 14px;"> 5 (100 rating)</small></p>
                </div>
            </router-link>
        </div>
    <!-- shirts -->
        <div id="shirts-div" class="row mb-3">
            <router-link to="/Preview" class="card ms-3 border-0 shadow rounded-4" style="width: 266px; text-decoration: none;">
                <img src="../assets/shirts.jpg" class="card-img-top mt-3 rounded-4">
                <div class="card-body p-0 mt-3 mb-3 mx-1">
                    <h5 class="card-title">Utra Anet Shirt</h5>
                    <h4 class="card-title mt-2 mb-2">Rp75.000</h4>
                    <p class="card-text mb-2">Kota Bandung</p>
                    <p class="card-text mb-2" style="font-size: 17px"><small class="text-body-secondary">Terjual 100 | <img src="../assets/star.png" style="max-width: 14px; max-height: 14px;"> 5 (100 rating)</small></p>
                </div>
            </router-link>
            <router-link to="/Preview" class="card ms-3 border-0 shadow rounded-4" style="width: 266px; text-decoration: none;">
                <img src="../assets/shirts.jpg" class="card-img-top mt-3 rounded-4">
                <div class="card-body p-0 mt-3 mb-3 mx-1">
                    <h5 class="card-title">Utra Anet Shirt</h5>
                    <h4 class="card-title mt-2 mb-2">Rp75.000</h4>
                    <p class="card-text mb-2">Kota Bandung</p>
                    <p class="card-text mb-2" style="font-size: 17px"><small class="text-body-secondary">Terjual 100 | <img src="../assets/star.png" style="max-width: 14px; max-height: 14px;"> 5 (100 rating)</small></p>
                </div>
            </router-link>
            <router-link to="/Preview" class="card ms-3 border-0 shadow rounded-4" style="width: 266px; text-decoration: none;">
                <img src="../assets/shirts.jpg" class="card-img-top mt-3 rounded-4">
                <div class="card-body p-0 mt-3 mb-3 mx-1">
                    <h5 class="card-title">Utra Anet Shirt</h5>
                    <h4 class="card-title mt-2 mb-2">Rp75.000</h4>
                    <p class="card-text mb-2">Kota Bandung</p>
                    <p class="card-text mb-2" style="font-size: 17px"><small class="text-body-secondary">Terjual 100 | <img src="../assets/star.png" style="max-width: 14px; max-height: 14px;"> 5 (100 rating)</small></p>
                </div>
            </router-link>
            <router-link to="/Preview" class="card ms-3 border-0 shadow rounded-4" style="width: 266px; text-decoration: none;">
                <img src="../assets/shirts.jpg" class="card-img-top mt-3 rounded-4">
                <div class="card-body p-0 mt-3 mb-3 mx-1">
                    <h5 class="card-title">Utra Anet Shirt</h5>
                    <h4 class="card-title mt-2 mb-2">Rp75.000</h4>
                    <p class="card-text mb-2">Kota Bandung</p>
                    <p class="card-text mb-2" style="font-size: 17px"><small class="text-body-secondary">Terjual 100 | <img src="../assets/star.png" style="max-width: 14px; max-height: 14px;"> 5 (100 rating)</small></p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Marko+One&family=Poppins:wght@400;600&display=swap');

.custom-ctghead {
    font-family: Marko One;
    font-size: 45px;
    background-color: white;
}

.custom-category {
    font-family: Marko One;
}

</style>

<script>
    document.addEventListener('DOMContentLoaded', function () {
        let sweaterCheckbox = document.getElementById("sweater");
        let sweaterDiv = document.getElementById("sweater-div");

        sweaterCheckbox.addEventListener('change', function() {
            if (this.checked) {
                // Jika checkbox dicentang, tampilkan div dalam satu baris
                sweaterDiv.style.display = "flex";
                sweaterDiv.style.flexWrap = "wrap";
            } else {
                // Jika checkbox tidak dicentang, sembunyikan div
                sweaterDiv.style.display = "none";
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        // Mendapatkan referensi ke elemen-elemen yang diperlukan
        let hoodieCheckbox = document.getElementById("hoodies");
        let hoodieDiv = document.getElementById("hoodies-div");

        // Event listener untuk checkbox hoodies
        hoodieCheckbox.addEventListener('change', function () {
            if (this.checked) {
                // Jika checkbox dicentang, tampilkan div hoodies dalam satu baris
                hoodieDiv.style.display = "flex";
                hoodieDiv.style.flexWrap = "wrap";
            } else {
                // Jika checkbox tidak dicentang, sembunyikan div hoodies
                hoodieDiv.style.display = "none";
            }
        });
        
        let shirtsCheckbox = document.getElementById("shirts");
        let shirtsDiv = document.getElementById("shirts-div");
        // Event listener untuk checkbox shirts
        shirtsCheckbox.addEventListener('change', function () {
            if (this.checked) {
                // Jika checkbox dicentang, tampilkan div shirts dalam satu baris
                shirtsDiv.style.display = "flex";
                shirtsDiv.style.flexWrap = "wrap";
            } else {
                // Jika checkbox tidak dicentang, sembunyikan div shirts
                shirtsDiv.style.display = "none";
            }
        });
    });

</script>


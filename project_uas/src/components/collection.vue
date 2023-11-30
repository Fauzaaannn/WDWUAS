<template>
    <div class="custom-collection">
        <div class="row px-3">
            <!-- card 1 -->
            <router-link to="/mancoll" class="card mb-3 col float-start border-0 rounded-4 shadow" style="max-width: 700px; max-height: 180px; overflow: hidden; text-decoration: none;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="../assets/Man.png" class="img-fluid rounded-start" style="max-width: 200px;">
                    </div>
                    <div class="col-md-8" style="margin-top: 50px; margin-bottom: 50px;">
                        <div class="card-body">
                            <h1 style="font-family: Marko One; font-size: 35px;">Man's Collection</h1>
                        </div>
                    </div>
                </div>
            </router-link>
            <!-- card 2 -->
            <router-link to="/womancoll" class="card mb-3 col ms-5 border-0 rounded-4 shadow" style="max-width: 700px; max-height: 180px; overflow: hidden; text-decoration: none;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="../assets/Woman.png" class="img-fluid rounded-start" style="max-width: 200px;">
                    </div>
                    <div class="col-md-8" style="margin-top: 50px; margin-bottom: 50px;">
                        <div class="card-body">
                            <h1 style="font-family: Marko One; font-size: 35px;">Woman's Collection</h1>
                        </div>
                    </div>
                </div>
            </router-link>
            <!-- card -->
        </div>
    </div>
    <router-view></router-view>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Marko+One&family=Poppins:wght@400;600&display=swap');
.custom-collection {
    margin-left: 100px;
    margin-right: 100px;
}

</style>
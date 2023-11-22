<template>
  
    <div class="container" style="margin-top: 200px; margin-left: 200px; width: 1500px;">
      <h2 class="mb-4" style="font-size: 45px; font-family: Marko One;">Keranjang</h2>
    </div>
    <div class="container float-start" style="margin-left: 200px; width: 900px;">
        <!-- card 1 -->
        <div class="card mb-3 border-0 rounded-4 shadow" style="max-width: 880px; height: 180px;" type="button" data-bs-toggle="modal" data-bs-target="#cardproduct1">
            <div class="row g-0">
                <div class="col-md-4 px-2 pt-2 pb-2" style="max-width: 170px;">
                    <img src="../assets/hoodie.jpeg" class="img-fluid rounded-4" style="max-width: 165px;">
                </div>
                <div class="col-md-4" style="width: 400px;">
                    <div class="card-body ms-2 mt-1" style="font-family: Marko One;">
                        <h5 class="card-title" style="font-size: 27px">Jerzees Hoodie</h5>
                        <p class="card-text mb-1" style="font-size: 14px">Size L (120 cm x 120 cm)</p>
                        <p class="card-text mb-2" style="font-size: 14px"><small class="text-body-secondary">Terjual 100 | <img src="../assets/star.png" style="max-width: 14px; max-height: 14px;"> 5 (100 rating)</small></p>
                        <h5 class="card-title" style="font-size: 35px">Rp 100.000</h5>
                    </div>
                </div>
                <div class="col-md-4">
                  <div class="form-check position-absolute top-0 end-0 mt-2 me-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                  </div>

                  <div class="position-absolute bottom-0 end-0 me-4 mb-3">
                    <button @click="incrementCount(0)" id="btn">+</button>
                    <h1 class="num">{{ counts[0] }}</h1>
                    <button @click="decrementCount(0)" id="btn">-</button>
                  </div>
                </div>
            </div>
        </div>
        <!-- card 2 -->
        <div class="card mb-3 border-0 rounded-4 shadow" style="max-width: 880px; height: 180px;">
            <div class="row g-0">
                <div class="col-md-4 px-2 pt-2 pb-2" style="max-width: 170px;">
                    <img src="../assets/hoodie.jpeg" class="img-fluid rounded-4" style="max-width: 165px;">
                </div>
                <div class="col-md-4" style="width: 400px;">
                    <div class="card-body ms-2 mt-1" style="font-family: Marko One;">
                        <h5 class="card-title" style="font-size: 27px">Jerzees Hoodie</h5>
                        <p class="card-text mb-1" style="font-size: 14px">Size L (120 cm x 120 cm)</p>
                        <p class="card-text mb-2" style="font-size: 14px"><small class="text-body-secondary">Terjual 100 | <img src="../assets/star.png" style="max-width: 14px; max-height: 14px;"> 5 (100 rating)</small></p>
                        <h5 class="card-title" style="font-size: 35px">Rp 100.000</h5>
                    </div>
                </div>
                <div class="col-md-4">
                  <div class="form-check position-absolute top-0 end-0 mt-2 me-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                  </div>

                  <div class="position-absolute bottom-0 end-0 me-4 mb-3">
                    <button @click="incrementCount(1)" id="btn">+</button>
                    <h1 class="num">{{ counts[1] }}</h1>
                    <button @click="decrementCount(1)" id="btn">-</button>
                  </div>
                </div>
            </div>
        </div>
        <!-- card 3 -->
        <div class="card mb-3 border-0 rounded-4 shadow" style="max-width: 880px; height: 180px;">
            <div class="row g-0">
                <div class="col-md-4 px-2 pt-2 pb-2" style="max-width: 170px;">
                    <img src="../assets/hoodie.jpeg" class="img-fluid rounded-4" style="max-width: 165px;">
                </div>
                <div class="col-md-4" style="width: 400px;">
                    <div class="card-body ms-2 mt-1" style="font-family: Marko One;">
                        <h5 class="card-title" style="font-size: 27px">Jerzees Hoodie</h5>
                        <p class="card-text mb-1" style="font-size: 14px">Size L (120 cm x 120 cm)</p>
                        <p class="card-text mb-2" style="font-size: 14px"><small class="text-body-secondary">Terjual 100 | <img src="../assets/star.png" style="max-width: 14px; max-height: 14px;"> 5 (100 rating)</small></p>
                        <h5 class="card-title" style="font-size: 35px">Rp 100.000</h5>
                    </div>
                </div>
                <div class="col-md-4">
                  <div class="form-check position-absolute top-0 end-0 mt-2 me-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                  </div>

                  <div class="position-absolute bottom-0 end-0 me-4 mb-3">
                    <button @click="incrementCount(2)" id="btn">+</button>
                    <h1 class="num">{{ counts[2] }}</h1>
                    <button @click="decrementCount(2)" id="btn">-</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <!-- rekap belanjaan -->
    <div class="container float-start" style="width: 400px;">
      <div class="card border-0 shadow rounded-4">
        <a href="#" class="btn p-2 mt-3 mx-3 custom-promo">Makin Hemat Pakai Promo</a>
        <div class="line-4"><hr></div>
        <div class="card-body pb-0">
          <h4 class="card-title fw-semibold mb-4">Ringkasan Belanja</h4>
          <p class="card-text text-body-secondary float-start">Total Harga (0) barang <p class="card-text text-body-secondary me-3 float-end">Rp0</p></p>
        </div>
        <div class="card-body pt-0">
          <div class="line-5"><hr></div>
          <h4 class="card-title fw-semibold mt-0 mb-4 float-start" style="width: fit-content;">Total Harga</h4>
          <h4 class="card-title fw-semibold mt-0 me-3 mb-4 float-end" style="width: fit-content;">  -</h4>
        </div>
        <a href="#" class="btn p-2 mx-3 mb-3 custom-beli">Beli (0)</a>
      </div>
    </div>
    <!-- Modal Pop up -->
    <div class="modal fade" id="cardproduct1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="container text-center">
              <div class="row g-2">
                <div class="col-6 border">
                  <div class="p-0">
                    <img src="../assets/hoodie.jpeg" style="width:150px; height:150px;">
                  </div>
                </div>
                <div class="col-6 border">
                  <div class="p-3">Custom column padding</div>
                </div>
                <div class="col-6 border">
                  <div class="p-3">Custom column padding</div>
                </div>
                <div class="col-6 border">
                  <div class="p-3">Custom column padding</div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>


</template>

<script>
export default {
  data() {
    return {
      counts: [0, 0, 0] // Separate count for each card
    };
  },
  methods: {
    incrementCount(index) {
      this.counts[index]++;
    },
    decrementCount(index) {
      if (this.counts[index] > 0) {
        this.counts[index]--;
      }
    }
  }
};
</script>

<style scoped>
  #btn {
    font-weight: bold;
    background-color: #4CAF50; /* Green color (you can change it to your desired color) */
    color: white;
    border: none;
    border-radius: 50%; /* Make it a circle */
    width: 30px; /* Set a fixed width */
    height: 30px; /* Set a fixed height */
    font-size: 20px; /* Adjust font size */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
    transition: background-color 0.3s ease; /* Add a smooth transition effect on hover */
  }

  #btn:hover {
    background-color: #45a049; /* Darker green color on hover (you can change it to your desired color) */
  }

  .num { 
    color: black;
    display: inline;
    margin: 20px;
    font-size: 25px;
  }

  .form-check-input {
    width: 20px; /* Set a fixed width for the checkbox */
    height: 20px; /* Set a fixed height for the checkbox */
    appearance: none; /* Remove default styles for checkbox */
    border: 2px solid #4CAF50; /* Green color for border (you can change it to your desired color) */
    border-radius: 4px; /* Add some border radius for a rounded appearance */
    background-color: white; /* Set background color to white */
    position: relative;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
    transition: background-color 0.3s ease, border-color 0.3s ease; /* Add a smooth transition effect */
  }

  .form-check-input:checked {
    background-color: #4CAF50; /* Change background color when checked (you can change it to your desired color) */
    border-color: #4CAF50; /* Change border color when checked (you can change it to your desired color) */
  }

  .form-check-input:focus {
    outline: none; /* Remove the default focus outline */
  }

  .line-4 hr {
  height: 1px;
  border: 0;
  background: black;
  
}
  .line-5 hr {
  height: 1px;
  border: 0;
  background: black;
  }

  .custom-promo {
    font-weight: bold;
    font-size: 20px;
    color: #8E4739;
    border-color: #8E4739;
    border-width: 1px;
  }

  .custom-promo:hover {
    background-color: #DDD2C6;
    color: #8E4739;
    border: none;
  }

  .custom-beli{
    background-color: #DDD2C6;
    color: #8E4739;
    border: none;
    font-weight: bold;
    font-size: 20px;
  }

  .custom-beli:hover {
    background-color: #E2C799;
    color: #8E4739;
  }

  .custom-modhead {
    width: 50px;
    border: none;
  }
</style>
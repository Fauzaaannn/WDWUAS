<template>
    <div class="container" style="margin-top: 200px;">
        <div class="d-flex">
            <div class="row g-2 gy-4 d-block">
                <div class="col-9" style="width: 490px;">
                    <img src="../assets/hoodie.jpeg" style="width:440px;" class="rounded-4 shadow">
                </div>
                <div class="col-6" style="width: 450px;">
                    <div class="card border-0 shadow rounded-4">
                        <div class="card-body pb-0">
                            <h4 class="card-title ms-1 fw-semibold mb-4">Atur jumlah dan catatan</h4>
                            <div class="container p-0 text-center">
                                <div class="row gx-5" style="margin-left: 5px; margin-bottom: 10px;">
                                    <div class="col p-0" style="max-width: 50px; height: 50px;">
                                        <div class="p-0" style="width:50px">
                                            <img src="../assets/hoodie.jpeg" class="rounded-3 border" style="width: 50px; height: 50px;">
                                        </div>
                                    </div>
                                    <div class="col p-0" style="max-width: 250px; height: 50px;">
                                        <div class="float-start ms-3" style="justify-content: center; display: flex; padding-top: 10px; font-size: 18px;">SIZE M YELLOW</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="line-5" style="width: 400px; margin: 0 auto;"><hr></div>

                        <div>
                            <div class="counter-container border float-start me-3">
                                <button @click="incrementCount(2)" class="counter-button">+</button>
                                <h1 class="num">{{ counts[2] }}</h1>
                                <button @click="decrementCount(2)" class="counter-button">-</button>
                            </div>
                            <h5 class="mt-3">Stok: Sisa 4</h5>
                        </div>

                        <div class="card-body pt-0 ms-1">
                            <a href="#" style="text-decoration: none; color: #924e40; font-weight: bold;">Tambahkan Catatan</a>
                        </div>
                        <div class="card-body pt-0 ms-1">
                            <p class="card-text text-body-secondary float-start" style="font-size:20px;">Subtotal<h4 class="card-text text-body-secondary me-3 float-end fw-bold">Rp0</h4></p>
                        </div>

                        <a href="#" class="btn p-2 mx-3 custom-beli">+ Keranjang</a>
                        <a href="#" class="btn p-2 mt-3 mb-3 mx-3 custom-promo">Beli Langsung</a>
                    </div>
                </div>
            </div>
            <div class="row">
              <div class="border d-flex float-end" style="width: 800px; height: 1000px;">
                  masih di style
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

  .counter-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 150px;
    margin-left: 20px;
    margin-bottom: 20px;
    padding: 8px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .counter-button {
    font-size: 20px;
    padding: 4px 10px;
    border: none;
    background-color: white;
    color: black;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
    }

    .counter-button:hover {
    background-color: rgb(243, 233, 233);
    }

    .counter-number {
    font-size: 1.2rem;
    margin: 0 12px;
    }

    .num{
        font-size: 25px;
    }

</style>
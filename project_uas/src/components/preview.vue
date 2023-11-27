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
              <div class="d-flex float-end" style="width: 800px; height: 925px;">
                <div class="p-3 float-start text-start">
                    <h5 class="card-title mb-2 fw-bold" style="font-size: 35px">Jerzees Pullover Hooded Sweatshirt Hoodie</h5>
                    <h5 style="width: fit-content; display: inline; font-size: 18px;" class="mb-2">Terjual 500+</h5>
                    <p style="width: fit-content; display: inline; font-size: 18px;" class="mx-2">|</p>
                    <h5 class="mt-2" style="width: fit-content; font-size: 18px; display: inline;">4.0 <img src="../assets/star.png" style="width: 18px;"> (300 rating)</h5>
                    <p style="width: fit-content; display: inline; font-size: 18px;" class="mx-2">|</p>
                    <h5 style="width: fit-content; display: inline; font-size: 18px;" class="mb-2">Diskusi (10)</h5>
                    <h5 class="card-title mb-3 mt-2 fw-bold" style="font-size: 45px">Rp 100.000</h5>
                    <div class="line-5 mt-4" style="width: 725px;"><hr></div>
                    <div class="container text-center mb-4 mt-4 p-0">
                      <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        <div class="col p-0 mx-1" style="width: fit-content;">
                          <button type="button" class="btn btn-outline-secondary">Size S</button>
                        </div>
                        <div class="col p-0 mx-1" style="width: fit-content;">
                          <button type="button" class="btn btn-outline-secondary">Size M</button>
                        </div>
                        <div class="col p-0 mx-1" style="width: fit-content;">
                          <button type="button" class="btn btn-outline-secondary">Size L</button>
                        </div>
                        <div class="col p-0 mx-1" style="width: fit-content;">
                          <button type="button" class="btn btn-outline-secondary">Size 2L</button>
                        </div>
                        <div class="col p-0 mx-1" style="width: fit-content;">
                          <button type="button" class="btn btn-outline-secondary">Size XL</button>
                        </div>
                        <div class="col p-0 mx-1" style="width: fit-content;">
                          <button type="button" class="btn btn-outline-secondary">Size XXL</button>
                        </div>
                        <div class="col p-0 mx-1" style="width: fit-content;">
                          <button type="button" class="btn btn-outline-secondary">Size XXXL</button>
                        </div>
                        <div class="col p-0 mx-1" style="width: fit-content;">
                          <button type="button" class="btn btn-outline-secondary">Big Size</button>
                        </div>
                      </div>
                    </div>
                    <h4 class="mb-4 fw-bold">Detail dan Deskripsi Produk</h4>
                  <!-- Scrollable content for Scrollspy -->
                    <div data-bs-spy="scroll" data-bs-offset="0" class="scrollspy-example bg-body-tertiary p-3 rounded-2 custom-scroll1" style="overflow-y: scroll; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); height: 600px;">
                        <h4 id="scrollspyHeading2" class="text-start" style="font-weight: bold;">Deskripsi Produk:</h4>
                        <p class="text-start">
                          Hoodie Branded Berkualitas Tinggi

                          Jadikan gaya Anda lebih trendi dan tetap nyaman dengan hoodie branded berkualitas tinggi ini. Dibuat dengan teliti untuk memenuhi standar tertinggi, hoodie ini tidak hanya memberikan penampilan yang stylish, tetapi juga kenyamanan maksimal sepanjang hari.

                          Bahan Hoodie:

                          Hoodie ini terbuat dari campuran serat berkualitas tinggi, dengan dominasi serat katun yang memberikan kelembutan dan kehangatan yang luar biasa. Campuran serat lainnya, seperti poliester atau spandex, memberikan kekuatan dan elastisitas tambahan pada kain, sehingga hoodie ini tetap tahan lama dan tidak kehilangan bentuknya meskipun sering dipakai.

                          Bahan Motif:

                          Motif pada hoodie ini dirancang dengan teliti untuk menciptakan tampilan yang unik dan estetis. Beberapa hoodie mungkin menggunakan teknik sablon tingkat tinggi untuk mencapai detail motif yang tajam, sementara yang lain mungkin memiliki aplikasi bordir yang elegan. Beberapa merek juga mungkin menggabungkan bahan berbeda untuk menciptakan efek tekstur atau menggunakan cetakan digital untuk menciptakan motif yang lebih kompleks.

                          Fitur Tambahan:

                          Selain bahan berkualitas, hoodie ini juga dilengkapi dengan fitur tambahan yang meningkatkan kenyamanan dan fungsionalitasnya. Hoodie mungkin dilengkapi dengan kantong depan yang nyaman, resleting berkualitas tinggi, atau detil desain khusus yang membuatnya lebih menonjol.

                          Ketahanan dan Perawatan:

                          Hoodie ini dirancang untuk tahan lama, sehingga Anda dapat menikmati gaya yang tak lekang oleh waktu. Untuk menjaga kualitasnya, disarankan untuk mencuci dengan hati-hati sesuai petunjuk perawatan yang disediakan oleh produsen.

                          Dengan hoodie berkualitas tinggi ini, Anda tidak hanya mendapatkan pakaian fungsional, tetapi juga sebuah pernyataan gaya yang membedakan. Cocok untuk digunakan dalam berbagai kesempatan, baik itu santai di rumah, berkumpul dengan teman-teman, atau bahkan untuk menambahkan sentuhan kasual yang elegan dalam aktivitas sehari-hari Anda.
                        </p>
                    </div>
                  </div>
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
<template>
  <div style="font-family: arial, sans serif; overflow-x: hidden">
    <div class="header">
      <h1>Pilih Motor Yang Dibeli</h1>
    </div>
    <hr />
    <form @submit.prevent="add">
      <div class="body">
        <div class="motor gap">
          <input
            type="radio"
            name="motor"
            id="motor1"
            value="GSX-R150"
            v-model="motor"
          />
          <label for="motor1"
            ><img
              src="https://suzukicdn.net/uploads/motorcycle/Mask_Group3.png"
            />
            <h2 class="nama">GSX-R150</h2></label
          >
        </div>
        <div class="motor gap">
          <input
            type="radio"
            name="motor"
            id="motor2"
            value="GSX-S150"
            v-model="motor"
          />
          <label for="motor2"
            ><img
              src="https://suzukicdn.net/uploads/motorcycle/gsxs-thumb.jpg"
            />
            <h2 class="nama">GSX-S150</h2></label
          >
        </div>
        <div class="motor">
          <input
            type="radio"
            name="motor"
            id="motor3"
            value="GSX150 BANDIT"
            v-model="motor"
          />
          <label for="motor3"
            ><img
              src="https://suzukicdn.net/uploads/motorcycle/Suzuki-Bandit-thumb2.jpg"
            />
            <h2 class="nama">GSX150 BANDIT</h2></label
          >
        </div>
      </div>
      <div class="body">
        <div class="motor gap">
          <input
            type="radio"
            name="motor"
            id="motor4"
            value="SAFTRIA F150"
            v-model="motor"
          />
          <label for="motor4"
            ><img
              src="https://suzukicdn.net/uploads/motorcycle/tamnail_satria11.png"
            />
            <h2 class="nama">SAFTRIA F150</h2></label
          >
        </div>
        <div class="motor gap">
          <input
            type="radio"
            name="motor"
            id="motor5"
            value="NEX II"
            v-model="motor"
          />
          <label for="motor5"
            ><img
              src="https://suzukicdn.net/uploads/motorcycle/next_2_abu.png"
            />
            <h2 class="nama">NEX II</h2></label
          >
        </div>
        <div class="motor">
          <input
            type="radio"
            name="motor"
            id="motor6"
            value="NEX CROSSOVER"
            v-model="motor"
          />
          <label for="motor6"
            ><img src="https://suzukicdn.net/uploads/motorcycle/tamnail.png" />
            <h2 class="nama">NEX CROSSOVER</h2></label
          >
        </div>
      </div>
      <div class="body">
        <div class="motor gap">
          <input
            type="radio"
            name="motor"
            id="motor7"
            value="ADDRESS FI"
            v-model="motor"
          />
          <label for="motor7"
            ><img
              src="https://suzukicdn.net/uploads/motorcycle/tamnail_adress1.png"
            />
            <h2 class="nama">ADDRESS FI</h2></label
          >
        </div>
        <div class="motor gap">
          <input
            type="radio"
            name="motor"
            id="motor8"
            value="ADDRESS PLAYFUL"
            v-model="motor"
          />
          <label for="motor8"
            ><img
              src="https://suzukicdn.net/uploads/motorcycle/playful_thumb.jpg"
            />
            <h2 class="nama">ADDRESS PLAYFUL</h2></label
          >
        </div>
        <div class="motor">
          <input
            type="radio"
            name="motor"
            id="motor9"
            value="SMASH FI"
            v-model="motor"
          />
          <label for="motor9"
            ><img
              src="https://suzukicdn.net/uploads/motorcycle/smash-thumb.png"
            />
            <h2 class="nama">SMASH FI</h2></label
          >
        </div>
      </div>
      <div v-if="motor" class="sidenav body">
        <div class="action">
          <h2>{{ motor }}</h2>
          <fieldset><legend>CREDIT</legend></fieldset>
          <div class="radio-toolbar">
            <input
              type="radio"
              id="bayar"
              value="Kredit 12 Bulan"
              name="method"
              v-model="method"
            />
            <label for="bayar" style="margin-right: 1%">12 Bulan</label>
            <input
              type="radio"
              id="cicil"
              value="Kredit 24 Bulan"
              name="method"
              v-model="method"
            />
            <label for="cicil">24 Bulan</label>
          </div>
          <div class="bayar" v-if="motor === 'GSX-R150'">
            <div>
              <h3 v-if="method === 'Kredit 12 Bulan'">
                DP: Rp{{ DPmotor1 }}<br />
                Cicilan 12 Bulan: Rp{{ Cicil12Motor1 }}
              </h3>
              <h3 v-else-if="method === 'Kredit 24 Bulan'">
                DP: Rp{{ DPmotor1 }}<br />
                Cicilan 24 Bulan: Rp{{ Cicil24Motor1 }}
              </h3>
              <h3 v-else-if="method === 'Cash'">
                Rp{{ jenis.motor1 }}<br /><br />
              </h3>
            </div>
          </div>
          <div class="bayar" v-if="motor === 'GSX-S150'">
            <div>
              <h3 v-if="method === 'Kredit 12 Bulan'">
                DP: Rp{{ DPmotor2 }}<br />
                Cicilan 12 Bulan: Rp{{ Cicil12Motor2 }}
              </h3>
              <h3 v-else-if="method === 'Kredit 24 Bulan'">
                DP: Rp{{ DPmotor2 }}<br />
                Cicilan 24 Bulan: Rp{{ Cicil24Motor2 }}
              </h3>
              <h3 v-else-if="method === 'Cash'">
                Rp{{ jenis.motor2 }}<br /><br />
              </h3>
            </div>
          </div>
          <div class="bayar" v-if="motor === 'GSX150 BANDIT'">
            <div>
              <h3 v-if="method === 'Kredit 12 Bulan'">
                DP: Rp{{ DPmotor3 }}<br />
                Cicilan 12 Bulan: Rp{{ Cicil12Motor3 }}
              </h3>
              <h3 v-else-if="method === 'Kredit 24 Bulan'">
                DP: Rp{{ DPmotor3 }}<br />
                Cicilan 24 Bulan: Rp{{ Cicil24Motor3 }}
              </h3>
              <h3 v-else-if="method === 'Cash'">
                Rp{{ jenis.motor3 }}<br /><br />
              </h3>
            </div>
          </div>
          <div class="bayar" v-if="motor === 'SAFTRIA F150'">
            <div>
              <h3 v-if="method === 'Kredit 12 Bulan'">
                DP: Rp{{ DPmotor4 }}<br />
                Cicilan 12 Bulan: Rp{{ Cicil12Motor4 }}
              </h3>
              <h3 v-else-if="method === 'Kredit 24 Bulan'">
                DP: Rp{{ DPmotor4 }}<br />
                Cicilan 24 Bulan: Rp{{ Cicil24Motor4 }}
              </h3>
              <h3 v-else-if="method === 'Cash'">
                Rp{{ jenis.motor4 }}<br /><br />
              </h3>
            </div>
          </div>
          <div class="bayar" v-if="motor === 'NEX II'">
            <div>
              <h3 v-if="method === 'Kredit 12 Bulan'">
                DP: Rp{{ DPmotor5 }}<br />
                Cicilan 12 Bulan: Rp{{ Cicil12Motor5 }}
              </h3>
              <h3 v-else-if="method === 'Kredit 24 Bulan'">
                DP: Rp{{ DPmotor5 }}<br />
                Cicilan 24 Bulan: Rp{{ Cicil24Motor5 }}
              </h3>
              <h3 v-else-if="method === 'Cash'">
                Rp{{ jenis.motor5 }}<br /><br />
              </h3>
            </div>
          </div>
          <div class="bayar" v-if="motor === 'NEX CROSSOVER'">
            <div>
              <h3 v-if="method === 'Kredit 12 Bulan'">
                DP: Rp{{ DPmotor6 }}<br />
                Cicilan 12 Bulan: Rp{{ Cicil12Motor6 }}
              </h3>
              <h3 v-else-if="method === 'Kredit 24 Bulan'">
                DP: Rp{{ DPmotor6 }}<br />
                Cicilan 24 Bulan: Rp{{ Cicil24Motor6 }}
              </h3>
              <h3 v-else-if="method === 'Cash'">
                Rp{{ jenis.motor6 }}<br /><br />
              </h3>
            </div>
          </div>
          <div class="bayar" v-if="motor === 'ADDRESS FI'">
            <div>
              <h3 v-if="method === 'Kredit 12 Bulan'">
                DP: Rp{{ DPmotor7 }}<br />
                Cicilan 12 Bulan: Rp{{ Cicil12Motor7 }}
              </h3>
              <h3 v-else-if="method === 'Kredit 24 Bulan'">
                DP: Rp{{ DPmotor7 }}<br />
                Cicilan 24 Bulan: Rp{{ Cicil24Motor7 }}
              </h3>
              <h3 v-else-if="method === 'Cash'">
                Rp{{ jenis.motor7 }}<br /><br />
              </h3>
            </div>
          </div>
          <div class="bayar" v-if="motor === 'ADDRESS PLAYFUL'">
            <div>
              <h3 v-if="method === 'Kredit 12 Bulan'">
                DP: Rp{{ DPmotor8 }}<br />
                Cicilan 12 Bulan: Rp{{ Cicil12Motor8 }}
              </h3>
              <h3 v-else-if="method === 'Kredit 24 Bulan'">
                DP: Rp{{ DPmotor8 }}<br />
                Cicilan 24 Bulan: Rp{{ Cicil24Motor8 }}
              </h3>
              <h3 v-else-if="method === 'Cash'">
                Rp{{ jenis.motor8 }}<br /><br />
              </h3>
            </div>
          </div>
          <div class="bayar" v-if="motor === 'SMASH FI'">
            <div>
              <h3 v-if="method === 'Kredit 12 Bulan'">
                DP: Rp{{ DPmotor9 }}<br />
                Cicilan 12 Bulan: Rp{{ Cicil12Motor9 }}
              </h3>
              <h3 v-else-if="method === 'Kredit 24 Bulan'">
                DP: Rp{{ DPmotor9 }}<br />
                Cicilan 24 Bulan: Rp{{ Cicil24Motor9 }}
              </h3>
              <h3 v-else-if="method === 'Cash'">
                Rp{{ jenis.motor9 }}<br /><br />
              </h3>
            </div>
          </div>
          <fieldset><legend>CASH</legend></fieldset>
          <div class="radio-toolbar">
            <input
              type="radio"
              id="cash"
              value="Cash"
              name="method"
              v-model="method"
            />
            <label for="cash" class="cash">Bayar Langsung</label>
          </div>
        </div>
        <div class="info">
          <div v-if="motor === 'GSX-R150'">
            <h2>Berani melaju cepat!</h2>
            <p>
              Suzuki GSX-R 150 adalah ikon dan penerus tradisi motor sport
              performa tinggi yang mengusung kecanggihan teknologi. Suzuki
              menerapkan prinsip filosofi terbaik ketika mengembangkan GSX-R
              sejak pertama kali, dan masih dipertahankan setiap Suzuki
              mengembangkan dan menciptakan model generasi berikutnya.
            </p>
          </div>
          <div v-if="motor === 'GSX-S150'">
            <h2>Alter ego bagi pribadi yang suka tampil stylish setiap hari</h2>
            <p>
              Suzuki memberikan pilihan bagi pengendara yang mengutamakan
              performa serta ergonomi yang baik. Motor yang dapat menggunakan
              setiap hari di beragam situasi atau jarak, namun tetap menarik dan
              mudah untuk dikendalikan.
            </p>
          </div>
          <div v-if="motor === 'GSX150 BANDIT'">
            <h2>Kenyamanan baik sendiri maupun berboncengan</h2>
            <p>
              GSX150 Bandit dirancang untuk memberikan kenyamanan berkendara,
              baik sendiri maupun berboncengan. Suzuki menerapkan karakteristik
              GSX series yang memiliki kinerja mesin yang superior. Dengan
              desain yang berkarakter, GSX150 Bandit cocok untuk aktivitas
              sehari-hari atau touring bersama teman.
            </p>
          </div>
          <div v-if="motor === 'SAFTRIA F150'">
            <h2>Futuristik, Sporty, Agresif Menaklukan Tantangan</h2>
            <p>
              Satria F150 kini tampil makin futuristik dan sporty dengan desain
              body yang aerodinamis. Semakin agresif menaklukan semua tantangan
              di jalan. Menggunakan mesin baru yang mengadaptasi teknologi
              MotoGP Suzuki Satria F150 siap kalahkan semua lawan dengan
              performa maksimal dan tercepat di kelas underbone 150cc.
            </p>
          </div>
          <div v-if="motor === 'NEX II'">
            <h2>Motor Matic Stylish, Modern, dan Futuristik</h2>
            <p>
              NEX II adalah motor matic terbaru yang stylish dengan desain yang
              modern dan futuristik. NEX II mengusung mesin 115cc FI dengan
              teknologi SEP (Suzuki Eco Performance) yang memberikan keuntungan
              konsumsi bahan bakar. NEX II juga memiliki fitur Suzuki Easy Start
              System yang memudahkan dalam menyalakan mesin.
            </p>
          </div>
          <div v-if="motor === 'NEX CROSSOVER'">
            <h2>
              Dengan naked handle bar yang semakin sporty untuk teman berkendara
            </h2>
            <p>
              NEX Crossover adalah motor matic terbaru dengan tampilan fresh
              pada handle bar dan seat cover, dan tetap mempertahankan teknologi
              SEP (Suzuki Eco Performance) pada mesin 115cc FI. NEX Crossover
              juga dilengkapi dengan Digital Speedometer yang membuat tampilan
              makin futuristik dan memberikan kemudahan dalam membaca informasi.
            </p>
          </div>
          <div v-if="motor === 'ADDRESS FI'">
            <h2>Bebas berkendara, Dinamis bergaya</h2>
            <p>Suzuki Address kini hadir dengan warna dan stripping baru!</p>
          </div>
          <div v-if="motor === 'ADDRESS PLAYFUL'">
            <h2>Kini dengan Pilihan Warna Sesuai dengan Karaktermu</h2>
            <p>
              Model baru ini merupakan pilihan tambahan dari Suzuki Address FI
              yang telah eksis sebelumnya. Skutik multifungsi bermesin 113cc
              yang irit dan bertenaga tersebut kini dilengkapi dengan 10 pilihan
              warna aksesoris panel bodi menarik dan penuh gaya yang dapat
              disesuaikan dengan jiwa dan karakter muda-mudi masa kini, antara
              lain Stronger Red, Aura Yellow, Fresh Green, Macho Bright Blue,
              Majestic Gold, Dark Grey, Brilliant White, Hyper Pink, Luminous
              Orange dan Ice Silver. It’s So Me !
            </p>
          </div>
          <div v-if="motor === 'SMASH FI'">
            <h2>Motor Bebek yang Gesit, Tangguh, dan Irit</h2>
            <p>
              Suzuki kembali melahirkan New Smash FI dengan mempertahankan
              keunggulan performa, ketangguhan serta konsumsi bahan bakar yang
              irit dengan tagline baru ‘Tarikannya Dahsyat!’.
            </p>
          </div>
        </div>
        <div class="preview">
          <span class="close" @click="motor = false">&times;</span>
          <div class="img" v-if="motor === 'GSX-R150'">
            <img
              src="https://suzukicdn.net/uploads/motorcycle/Mask_Group3.png"
            />
          </div>
          <div class="img" v-if="motor === 'GSX-S150'">
            <img
              src="https://suzukicdn.net/uploads/motorcycle/gsxs-thumb.jpg"
            />
          </div>
          <div class="img" v-if="motor === 'GSX150 BANDIT'">
            <img
              src="https://suzukicdn.net/uploads/motorcycle/Suzuki-Bandit-thumb2.jpg"
            />
          </div>
          <div class="img" v-if="motor === 'SAFTRIA F150'">
            <img
              src="https://suzukicdn.net/uploads/motorcycle/tamnail_satria11.png"
            />
          </div>
          <div class="img" v-if="motor === 'NEX II'">
            <img
              src="https://suzukicdn.net/uploads/motorcycle/next_2_abu.png"
            />
          </div>
          <div class="img" v-if="motor === 'NEX CROSSOVER'">
            <img src="https://suzukicdn.net/uploads/motorcycle/tamnail.png" />
          </div>
          <div class="img" v-if="motor === 'ADDRESS FI'">
            <img
              src="https://suzukicdn.net/uploads/motorcycle/tamnail_adress1.png"
            />
          </div>
          <div class="img" v-if="motor === 'ADDRESS PLAYFUL'">
            <img
              src="https://suzukicdn.net/uploads/motorcycle/playful_thumb.jpg"
            />
          </div>
          <div class="img" v-if="motor === 'SMASH FI'">
            <img
              src="https://suzukicdn.net/uploads/motorcycle/smash-thumb.png"
            />
          </div>
          <button
            type="submit"
            v-show="!updateSubmit"
            class="confirm"
            id="show-modal"
            @click="showModal = true"
          >
            KONFIRMASI
          </button>
        </div>
      </div>
    </form>
    <div v-if="showModal" class="mask">
      <h1>
        Motor {{ motor }} Telah di Pesan Secara {{ method }} Dengan Harga Rp
        <span v-if="motor === 'GSX-R150'">
          <span v-if="method === 'Kredit 12 Bulan'">{{ Cicil12Motor1 }}</span>
          <span v-else-if="method === 'Kredit 24 Bulan'">{{
            Cicil24Motor1
          }}</span>
          <span v-else-if="method === 'Cash'">{{ jenis.motor1 }}</span>
        </span>
        <span v-if="motor === 'GSX-S150'">
          <span v-if="method === 'Kredit 12 Bulan'">{{ Cicil12Motor2 }}</span>
          <span v-else-if="method === 'Kredit 24 Bulan'">{{
            Cicil24Motor2
          }}</span>
          <span v-else-if="method === 'Cash'">{{ jenis.motor2 }}</span>
        </span>
        <span v-if="motor === 'GSX150 BANDIT'">
          <span v-if="method === 'Kredit 12 Bulan'">{{ Cicil12Motor3 }}</span>
          <span v-else-if="method === 'Kredit 24 Bulan'">{{
            Cicil24Motor3
          }}</span>
          <span v-else-if="method === 'Cash'">{{ jenis.motor3 }}</span>
        </span>
        <span v-if="motor === 'SAFTRIA F150'">
          <span v-if="method === 'Kredit 12 Bulan'">{{ Cicil12Motor4 }}</span>
          <span v-else-if="method === 'Kredit 24 Bulan'">{{
            Cicil24Motor4
          }}</span>
          <span v-else-if="method === 'Cash'">{{ jenis.motor4 }}</span>
        </span>
        <span v-if="motor === 'NEX II'">
          <span v-if="method === 'Kredit 12 Bulan'">{{ Cicil12Motor5 }}</span>
          <span v-else-if="method === 'Kredit 24 Bulan'">{{
            Cicil24Motor5
          }}</span>
          <span v-else-if="method === 'Cash'">{{ jenis.motor5 }}</span>
        </span>
        <span v-if="motor === 'NEX CROSSOVER'">
          <span v-if="method === 'Kredit 12 Bulan'">{{ Cicil12Motor6 }}</span>
          <span v-else-if="method === 'Kredit 24 Bulan'">{{
            Cicil24Motor6
          }}</span>
          <span v-else-if="method === 'Cash'">{{ jenis.motor6 }}</span>
        </span>
        <span v-if="motor === 'ADDRESS FI'">
          <span v-if="method === 'Kredit 12 Bulan'">{{ Cicil12Motor7 }}</span>
          <span v-else-if="method === 'Kredit 24 Bulan'">{{
            Cicil24Motor7
          }}</span>
          <span v-else-if="method === 'Cash'">{{ jenis.motor7 }}</span>
        </span>
        <span v-if="motor === 'ADDRESS PLAYFUL'">
          <span v-if="method === 'Kredit 12 Bulan'">{{ Cicil12Motor8 }}</span>
          <span v-else-if="method === 'Kredit 24 Bulan'">{{
            Cicil24Motor8
          }}</span>
          <span v-else-if="method === 'Cash'">{{ jenis.motor8 }}</span>
        </span>
        <span v-if="motor === 'SMASH FI'">
          <span v-if="method === 'Kredit 12 Bulan'">{{ Cicil12Motor9 }}</span>
          <span v-else-if="method === 'Kredit 24 Bulan'">{{
            Cicil24Motor9
          }}</span>
          <span v-else-if="method === 'Cash'">{{ jenis.motor9 }}</span>
        </span><br>
        Pesanan Anda Akan Segera Diantar
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      motor: false,
      showModal: false,
      method: "12",
      jenis: {
        motor1: 33900000,
        motor2: 29100000,
        motor3: 27300000,
        motor4: 26760000,
        motor5: 17400000,
        motor6: 19200000,
        motor7: 18300000,
        motor8: 18600000,
        motor9: 15900000,
      },
    };
  },
  component:
    ("modal",
    {
      template: "#modal-template",
    }),
  methods: {
    closing() {
      (this.motor = false), (this.showModal = false);
    },
  },
  computed: {
    DPmotor1: function () {
      return (this.jenis.motor1 * 30) / 100;
    },
    Cicil12Motor1: function () {
      return (this.jenis.motor1 - this.DPmotor1) / 12;
    },
    Cicil24Motor1: function () {
      return (this.jenis.motor1 - this.DPmotor1) / 24;
    },
    DPmotor2: function () {
      return (this.jenis.motor2 * 30) / 100;
    },
    Cicil12Motor2: function () {
      return (this.jenis.motor2 - this.DPmotor2) / 12;
    },
    Cicil24Motor2: function () {
      return (this.jenis.motor2 - this.DPmotor2) / 24;
    },
    DPmotor3: function () {
      return (this.jenis.motor3 * 30) / 100;
    },
    Cicil12Motor3: function () {
      return (this.jenis.motor3 - this.DPmotor3) / 12;
    },
    Cicil24Motor3: function () {
      return (this.jenis.motor3 - this.DPmotor3) / 24;
    },
    DPmotor4: function () {
      return (this.jenis.motor4 * 30) / 100;
    },
    Cicil12Motor4: function () {
      return (this.jenis.motor4 - this.DPmotor4) / 12;
    },
    Cicil24Motor4: function () {
      return (this.jenis.motor1 - this.DPmotor1) / 24;
    },
    DPmotor5: function () {
      return (this.jenis.motor5 * 30) / 100;
    },
    Cicil12Motor5: function () {
      return (this.jenis.motor5 - this.DPmotor5) / 12;
    },
    Cicil24Motor5: function () {
      return (this.jenis.motor5 - this.DPmotor5) / 24;
    },
    DPmotor6: function () {
      return (this.jenis.motor6 * 30) / 100;
    },
    Cicil12Motor6: function () {
      return (this.jenis.motor6 - this.DPmotor6) / 12;
    },
    Cicil24Motor6: function () {
      return (this.jenis.motor6 - this.DPmotor6) / 24;
    },
    DPmotor7: function () {
      return (this.jenis.motor7 * 30) / 100;
    },
    Cicil12Motor7: function () {
      return (this.jenis.motor7 - this.DPmotor7) / 12;
    },
    Cicil24Motor7: function () {
      return (this.jenis.motor7 - this.DPmotor7) / 24;
    },
    DPmotor8: function () {
      return (this.jenis.motor8 * 30) / 100;
    },
    Cicil12Motor8: function () {
      return (this.jenis.motor8 - this.DPmotor8) / 12;
    },
    Cicil24Motor8: function () {
      return (this.jenis.motor8 - this.DPmotor8) / 24;
    },
    DPmotor9: function () {
      return (this.jenis.motor9 * 30) / 100;
    },
    Cicil12Motor9: function () {
      return (this.jenis.motor9 - this.DPmotor9) / 12;
    },
    Cicil24Motor9: function () {
      return (this.jenis.motor9 - this.DPmotor9) / 24;
    },
  },
};
</script>

<style scoped>
.header {
  text-align: center;
}
.body {
  content: "";
  display: table;
  clear: both;
}
.motor {
  float: left;
  width: 32%;
  border: solid 1px black;
  margin-bottom: 13px;
  cursor: pointer;
}
.nama {
  background-color: #f1f1f1;
  padding: 10px 0 10px;
  margin: 0;
  text-align: center;
}
.gap {
  margin-right: 1.5%;
}
.sidenav {
  padding-top: 1px;
  height: 325px;
  width: 100%;
  position: fixed;
  bottom: 0;
  top: auto;
  left: 0;
  background-color: #222;
  overflow-x: hidden;
  transition: 0.5s;
  overflow-y: hidden;
  color: #f2f2f2;
}
.action {
  text-align: center;
  width: 32%;
  float: left;
}
.info {
  float: left;
  width: 34%;
  height: 324px;
  padding: 10px;
  border-left: #f2f2f2 solid 1px;
  border-right: #f2f2f2 solid 1px;
}
.preview {
  border-top: black;
  width: 34%;
  float: left;
  height: 324px;
  background-color: white;
  text-align: center;
}
fieldset {
  border-left: none;
  border-right: none;
  border-bottom: none;
}
legend {
  padding: 0 5px 0 5px;
  color: #f1f1f1;
}
input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}
.confirm {
  border: none;
  color: #f2f2f2;
  background-color: #333;
  padding: 15px 32px;
  font-size: 17px;
  border-radius: 4px;
  width: 95%;
  margin-bottom: 5px;
}
.confirm:hover {
  background-color: black;
}
.radio-toolbar label {
  display: inline-block;
  background-color: #333;
  padding: 15px 32px;
  font-size: 17px;
  border-radius: 4px;
  width: 47%;
  margin-bottom: 5px;
}
.radio-toolbar label:hover {
  background-color: black;
}
.radio-toolbar input[type="radio"]:checked + label {
  background-color: black;
}
.close {
  color: black;
  top: 20px;
  left: auto;
  right: 20px;
  font-size: 40px;
  cursor: pointer;
  position: absolute;
}
.col-50 .close {
  right: 34%;
}
.bayar {
  background-color: #aaaaaa;
  width: 95%;
  height: 70px;
  padding-top: 1px;
  color: black;
  margin: auto;
  position: relative;
  margin-bottom: 5px;
}
.bayar h3 {
  margin-top: 12px;
}
.cash {
  display: inline-block;
  width: 95%;
  color: white;
  margin-bottom: 5px;
}
.cash:hover {
  background-color: #111;
}
.img {
  margin: auto;
}
.img img {
  width: 65%;
}
* {
  box-sizing: border-box;
}
img {
  width: 100%;
  height: 70%;
  background-color: white;
}
.mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  color: white;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  text-align: center;
}
span {
  vertical-align: middle;
  width: 50%;
}
</style>
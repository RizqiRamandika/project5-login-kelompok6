<template>
  <div>
    <div class="navbar">
      <h3 class="admin">Dashboard Admin</h3>
    </div>
    <div class="sidebar">
      <div class="nav"></div>
      <a href="/infoMotor"
        ><button class="btn">
          <i style="margin-right: 5px" class="fa fa-list"></i><br />info</button
        ><br
      /></a>
      <a href="/beliAdmin"
        ><button class="btn">
          <i style="margin-right: 5px" class="fas fa-shopping-cart">
            <br />
            beli</i
          ></button
        ><br
      /></a>
      <a href="/peduli"
        ><button class="btnn">
          <i style="margin-right: 5px" class="fas fa-hand-holding-medical"></i
          ><br />care</button
        ><br
      /></a>
      <a href="/login"
        ><button class="btnn">
          <i style="margin-right: 5px" class="fas fa-sign-out-alt"></i
          ><br />Logout</button
        ><br
      /></a>
    </div>
    <div class="aa" style="background-color: white">
      <div class="row">
        <div class="leftcolumn">
          <div class="card">
            <h1>
              <marquee>
                SELAMAT DATANG DI WEBSITE RESMI KAMI PT YAMASA INDONESIA
                ADMIN!!!
              </marquee>
            </h1>
            <br />
            <img
              src="https://news.olx.co.id/media/article/banner/2390d25b-abed-4605-9138-372c541128c7.jpg"
              width="900px"
              height="400px"
            /><br /><br />
            <p>
              Selamat Datang di Website Resmi PT YAMASA INDONESIA. Semoga dengan
              dibangunnya Website ini menjadikan Pelayanan terhadap warga
              Masyarakat lebih baik lagi, terutama bagi mereka yang ingin
              membeli produk dari kami. PT YAMASA INDONESIA didirikan pada tahun
              2021. Bisnis utama kami adalah berbisnis sepeda motor. Kami
              mempunyai dua pabrik di Semarang dan dua di Jakarta, dan telah
              mendistribusikan produk ke seluruh wilayah Indonesia dan juga
              mengekspor ke luar negeri.Brand kami adalah KLX, MotorGP, dan
              Ninja H2, kami akan terus membuat motor-motor yang orisinil dan
              pertama di Indonesia, serta berkontribusi terhadap perwujudan
              kehidupan yang sejahtera bagi konsumen Indonesia.
            </p>
            <br />
            <p>
              Fokus kami adalah memahami dengan baik keinginan dan kendala yang
              dihadapi oleh para pelanggan kami. Semakin kami memahami kebutuhan
              para pelanggan, semakin kami dapat mengembangkan produk baru yang
              memenuhi kebutuhan tersebut. contoh, berkat saran dari pelanggan,
              kami memutuskan untuk membuat tampilan website Yamasa dalam
              berbagai bahasa – dan kami sangat berterima kasih untuk itu.
              Mungkin saran tersebut tampak sederhana, tetapi hasilnya sangat
              luar biasa.
            </p>
            <br />
            <p>
              Hingga kini, lebih dari setengah penjualan kami berasal dari
              pemesanan melalui internet – dan jumlahnya terus meningkat. Bagi
              sang pelanggan, Yamasa yang kuat adalah simbol kepercayaan dan
              kepemimpinan, yang memberikan rasa percaya diri dan rasa yakin.
              Yamasa bukan saja menjadi maskapai terbesar, tetapi juga menjadi
              pilihan utama mereka. Ini adalah semangat AirAsia. Percayalah saat
              saya mengatakan bahwa semangat kami untuk menjadi yang terbaik
              tidak akan pernah padam.
            </p>
            <br />
          </div>
        </div>
        <div class="rightcolumn">
          <div class="card">
            <h2>Visi & Misi</h2>
            <hr />
            <img
              src="https://news.olx.co.id/media/article/banner/2390d25b-abed-4605-9138-372c541128c7.jpg"
              width="265px"
              height="120px"
            />
            <p>
              <b>Visi:</b> Mendeskripsikan tujuan perusahaan di masa mendatang.
              Berbeda dengan misi, visi biasanya menggambarkan apa yang ingin
              diraih perusahaan. <br />
              <b>Misi:</b> Mendeskripsikan rencana apa yang dilakukan perusahaan
              untuk mencapai visi.
            </p>
          </div>
          <div class="card">
            <h3>Follow Me</h3>
            <hr />
            <p>
              <img
                src="https://www.freepnglogos.com/uploads/whatsapp-logo-png-hd-2.png"
                width="40"
                height="40"
              />
              0882 2756 1538
            </p>
            <p>
              <img
                src="https://www.pngmart.com/files/12/Shopee-Logo-Transparent-Background.png"
                width="40"
                height="40"
              />
              Yamasa_id
            </p>
            <p>
              <img
                src="https://id-test-11.slatic.net/p/d2a68971c70bebb12edf7dc6e82a978c.png"
                width="40"
                height="40"
              />
              YamasaToko.id
            </p>
            <p>
              <img
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
                width="40"
                height="40"
              />
              Yamasa.6
            </p>
            <p>
              <img
                src="data:image/png;base64,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"
                width="35"
                height="25"
              />
              Yamasa_kl6
            </p>
            <p>
              <img
                src="https://www.freepnglogos.com/uploads/gmail-email-logo-png-16.png"
                width="40"
                height="35"
              />
              Yamasa06@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

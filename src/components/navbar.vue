<template>
  <div>
    <div class="topnav">
      <a href="/">Home</a>
      <a href="/infoMotor">Info Motor</a>
      <a href="/beli">Beli</a>
      <a href="/kontak">Kontak</a>
      <a href="/kegiatan">Kegiatan</a>
    </div>
    <div class="slider">
      <figure>
        <div class="slide">
          <img src="logo.png" />
        </div>
        <div class="slide">
          <img
            src="https://ssmmotor.com/wp-content/uploads/2020/11/aerox.jpg"
          />
        </div>
        <div class="slide">
          <img
            src="https://ssmmotor.com/wp-content/uploads/2021/01/gear123.jpg"
          />
        </div>

        <div class="slide">
          <img
            src="https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/action/2022/ccd613ad-5c3e-4706-95eb-38c2f34e18fa.jpg"
          />
        </div>

        <div class="slide">
          <img
            src="https://www.belimotorya.com/wp-content/uploads/2021/03/POS.jpg"
          />
        </div>
      </figure>
    </div>
    <div class="topnav" style="padding: 10px">
      <h1></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
* {
  padding: 0;
  list-style: none;
  text-decoration: none;
}

.slider {
  overflow: hidden;
  height: 500px;
  width: 1313px;
}

.slider figure div {
  width: 20%;
  float: left;
}

.slider figure img {
  width: 100%;
  float: left;
}

.slider figure {
  position: relative;
  width: 500%;
  margin: 0;
  left: 0;
  animation: 20s slidy infinite;
}

@keyframes slidy {
  0% {
    left: 0%;
  }

  10% {
    left: 0%;
  }

  12% {
    left: -100%;
  }

  22% {
    left: -100%;
  }

  24% {
    left: -200%;
  }

  34% {
    left: -200%;
  }

  36% {
    left: -300%;
  }

  46% {
    left: -300%;
  }

  48% {
    left: -400%;
  }

  58% {
    left: -400%;
  }

  60% {
    left: -300%;
  }

  70% {
    left: -300%;
  }

  72% {
    left: -200%;
  }

  82% {
    left: -200%;
  }

  84% {
    left: -100%;
  }

  94% {
    left: -100%;
  }

  96% {
    left: 0%;
  }

  100% {
    left: 0%;
  }
}
</style>
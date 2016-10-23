<template lang="html">
  <body class="Landing__body">
    <section class="bgtopo">
      <div class="grid1">
        <img class="grow" src="../../assets/icons/logotipo.svg"/>
        <h1>Application<br/> amazing web <br />to make all your<br /> dreams</h1>
      </div>
      <div class="grid2">
        <img src="../../assets/iphone.png"/>
      </div>
    </section>

    <div class="section2">
      <h2>Tecnologia and economy <br/>side and side for you </h2>
      <div style="display: block; margin-top: 50px">
        <a class="btnh2" href="/dash">Go to aplication</a>
      </div>

        <div class="icon1">
          <img style="margin-left: 30%;" src="../../assets/icons/img1.png"/>
          <h3>Tecnologia and <br />economy</h3>
        </div>
        <div class="icon1">
          <img style="margin-left: 30%; margin-top: -20px;" src="../../assets/icons/img2.png"/>
          <h3>Tecnologia and <br />economy</h3>
        </div>
        <div class="icon1">
          <img style="margin-left: 30%;" src="../../assets/icons/img1.png"/>
          <h3>Tecnologia and <br />economy</h3>
        </div>
    </div>

    <div class="section3">
      <img style="width:100%; margin-top:46px;" src="../../assets/telasapp.png" />

    </div>
   <div class="section2">
      <h2>Tecnologia and economy <br/>side and side for you </h2>
      <div style="display: block; margin-top: 50px">
        <a class="btnh2" href="/dash">Go to aplication</a>
      </div>
   </div>

   <footer class="footer">


   </footer>



  </body>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style lang="css">
.Landing__body{
  background-image: url('../../assets/background.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 0 -95px;
  margin: 0 auto;
}
.bgtopo {
  width: 960px;
  height: 800px;
  /* position: absolute; */
  /* top: 50%; */
  margin-left: 24%;
  float: left;
  margin-top: 50px;
}

.grid1 {
  width: 480px;
  height: 100%;
  float: left;
}
.grid2 {
  width: 480px;
  height: 100%;
  float: left;
  margin-top: 190px;
}

h1 {font-family: 'Rubik', sans-serif; color: #fff; font-size: 55px; margin-top: 140px;}
h2 {font-family: 'Rubik', sans-serif; color: #29abe1; font-size: 55px; text-align: center; margin-top: 100px;}
h3 {font-family: 'Rubik', sans-serif; color: #29abe1; font-size: 25px; text-align: center; margin-top: 50px;}
.grow {
  width: 200px;
}

.section2 {
  width: 960px;
  height: 600px;
  float: left;
  margin-left: 24%;
}

.btnh2 {
    padding: 30px 75px;
    margin-left: 31%;
    font-size: 30px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    background: #29abe1;
    border-radius: 10px;
    transition: 0.3s;
    font-family: Rubik;
    text-decoration: none;
}

.btnh2:hover {
  background:#1998ce;
  transition: 0.3s;
}


.icon1 {
  width: 320px;
  height: 300px;
  float: left;
  margin-top: 200px;
}


.section3 {
  width: 100%;
  height: 700px;
  background: #29abe1;
  float: left;
  margin-top: 250px;
  background-image: url(/static/img/telasapp.png);
  background-size: cover;
}


.footer {
  width: 100%;
  background: #29abe1;
  height: 100px;
  float: left;
}
</style>

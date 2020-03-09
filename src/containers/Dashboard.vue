<template>
  <div class="dashboard-container">
    <div class="img-container text-center">
      <img
        v-bind:src="'https://files.sikayetvar.com' + picture"
        alt="Avatar"
        style="width:200px"
        class="img-circle"
      />
      <div class="title-container">
        <span class="title-text">{{ name }}</span>
      </div>
    </div>
    <div class="add-complaint">
      <div class="row">
        <div class="col-xs-6">
          <div class="add-quick-complaint">
            <div class="row">
              <div class="col-xs-4 text-center">
                <img
                  class="camera-icon"
                  src="src/assets/camera_icon.png"
                  alt="camera"
                />
              </div>
              <div class="col-xs-8">
                <span class="complaint-text">Hızlı</span><br />
                <span class="complaint-text">Şikayet Ekle</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="add-detailed-complaint">
            <div class="row">
              <div class="col-xs-4 text-center">
                <img
                  class="documents-icon"
                  src="src/assets/documents_icon.png"
                  alt="documents"
                />
              </div>
              <div class="col-xs-8">
                <span class="complaint-text">Detaylı</span><br />
                <span class="complaint-text">Şikayet Ekle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="message-notification-container">
      <div class="message-notification">
        <span class="message-notification-text"
          >Markadan gelen 2 okunmamış mesajınız var.</span
        >
      </div>
      <div class="read-now-container pull-right">
        <span class="read-now-text">Hemen Oku ></span>
      </div>
    </div>
    <div class="recent-moves-title">
      <span class="recent-moves-title-text">Son Hareketler</span>
    </div>
    <div class="recent-moves-container" v-for="item in this.recentMoves">
      <div class="row recent-moves-text">
        <div class="col-xs-3 text-center">
          <img src="src/assets/ic_4.png" alt="Avatar" style="width:100px" />
        </div>
        <div class="col-xs-9">
          <div class="brand-container">
            <span class="brand-text">{{ item.brand }}</span>
          </div>
          <div class="recentMoves-title-container">
            <span class="recentMoves-title-text">{{ item.title }}</span>
          </div>
          <div class="notification-container">
            <span class="notification-text">{{ item.notification }}</span>
          </div>
          <div class="description-container">
            <span class="description-text">{{ item.description }}</span>
          </div>
          <div class="time-container">
            <span class="time-text">{{ item.time }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="show-more-container text-center">
      <span class="show-more-text">Daha Çok Göster</span>
    </div>
    <div class="complaints-container text-center">
      <span class="complaints-text">Tüm Şikayetlerim (12)</span>
    </div>
    <div class="complaints-container text-center">
      <span class="complaints-text">Yorum Yazdığım Şikayetler (8)</span>
    </div>
    <div class="complaints-container text-center">
      <span class="complaints-text">Desteklediğim Şikayetler (65)</span>
    </div>
    <div class="complaint-container text-center">
      <span class="complaint-text"
        >Yazılan şikayetleri incelemek için şikayetvar.com'a git ></span
      >
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      picture: "",
      recentMoves: [
        {
          brand: "Trendyol",
          title: "Lorem ipsum dolor sit amet, consectetur adifs...",
          notification: "Marka şikayetinize cevap yazdı.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit sagittis turpi...",
          time: "5 saat önce"
        },
        {
          brand: "Apple",
          title: "Lorem ipsum dolor sit amet, consectetur adifs...",
          notification: "Şikayetiniz ile ilgili 3 yeni yorum var.",
          description: "",
          time: "5 saat önce"
        },
        {
          brand: "Garanti Bankası",
          title: "Lorem ipsum dolor sit amet, consectetur adifs...",
          notification: "Şikayetiniz 5 yeni destek aldı.",
          description: "",
          time: "5 saat önce"
        }
      ]
    };
  },
  created() {
    const access_token = sessionStorage.getItem("token");
    axios
      .get("http://localhost:8081/sikayets/" + access_token)
      .then(response => {
        this.name = response.data.name;
        this.picture = response.data.picture;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>
<style>
.dashboard-container {
  margin-bottom: 15vh;
}
.img-container {
  padding-top: 7vh;
}
.img-circle {
  border-radius: 100%;
}
.title-container {
  margin-top: 1vh;
}
.title-text {
  font-size: 50px;
  color: #002a5b;
  font-weight: bold;
}
.add-complaint {
  margin-top: 3vh;
  margin-left: 2vw;
  margin-right: 2vw;
}
.add-quick-complaint {
  background-color: #45da6f;
  padding: 10px;
  border-radius: 10px;
  height: 8vh;
  padding-top: 2vh;
  box-shadow: 2px 10px 30px #45da6f;
}
.add-detailed-complaint {
  background-color: #45da6f;
  padding: 10px;
  border-radius: 10px;
  height: 8vh;
  padding-top: 2vh;
  box-shadow: 2px 10px 30px #45da6f;
}
.complaint-text {
  font-size: 30px;
  color: #ffffff;
  font-weight: bold;
}
.camera-icon {
  width: 80px;
}
.documents-icon {
  width: 60px;
}
.message-notification-container {
  margin-top: 2vh;
  margin-left: 2vw;
  margin-right: 2vw;
  background-color: #002a5b;
  height: 8vh;
  border-radius: 10px;
}
.message-notification {
  margin-left: 5vw;
  padding-top: 1vh;
}
.message-notification-text {
  color: #ffffff;
  font-size: 35px;
}
.read-now-container {
  margin-right: 5vw;
}
.read-now-text {
  color: #45da6f;
  font-size: 35px;
}
.complaint-container {
  width: 100vw;
  height: 10vh;
  background-color: #45da6f;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  padding-top: 20px;
}
.complaint-text {
  font-size: 30px;
  color: #ffffff;
}
.recent-moves-container {
  background-color: #ffffff;
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-left: 2vw;
  margin-right: 2vw;
  border-radius: 20px;
}
.recent-moves-text {
  padding-top: 3vh;
}
.brand-text {
  font-size: 30px;
  color: #b0bece;
}
.recentMoves-title-text {
  font-size: 45px;
  color: #002a5b;
  font-weight: bold;
}
.notification-text {
  font-size: 30px;
  color: #002a5b;
  font-weight: 500;
}
.description-text {
  font-size: 30px;
  color: #002a5b;
}
.time-text {
  font-size: 35px;
  color: #f1f5f8;
  font-weight: bold;
}
.notification-container {
  margin-top: 1vh;
  margin-bottom: 1vh;
}
.time-container {
  margin-top: 1vh;
  margin-bottom: 1vh;
}
.recent-moves-title {
  margin-top: 3vh;
  margin-left: 2vw;
  margin-right: 2vw;
}
.recent-moves-title-text {
  color: #b0bece;
  font-size: 50px;
  font-weight: bold;
}
.show-more-container {
  margin-top: 2vh;
  margin-bottom: 2vh;
}
.show-more-text {
  font-size: 40px;
  color: #002a5b;
  font-weight: 500;
}
.complaints-container {
  border: 3px solid #002a5b;
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-left: 2vw;
  margin-right: 2vw;
  padding-top: 2vh;
  padding-bottom: 3vh;
  height: 7vh;
  border-radius: 10px;
}
.complaints-text {
  font-size: 40px;
  color: #002a5b;
  font-weight: 500;
}
</style>

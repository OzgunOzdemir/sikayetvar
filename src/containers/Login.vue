<template>
  <div class="container">
    <div class="logo-img-container text-center">
      <img
        class="logo-img"
        src="src/assets/sikayetvar_logo_dark.png"
        alt="sikayetvar_logo_dark"
      />
    </div>
    <div class="text-center sub-title-container">
      <span class="sub-title-top">Sosyal Medya Hesaplarınızla giriş yapın</span>
    </div>
    <div class="row social-media-container text-center">
      <div class="col-xs-6">
        <div class="facebook-container">
          <div class="row">
            <div class="col-xs-3 facebook-logo">
              <img
                class="facebook-icon"
                src="src/assets/facebook_icon.png"
                alt="facebook_icon"
              />
            </div>
            <div class="col-xs-9 facebook-text">Facebook</div>
          </div>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="google-container">
          <div class="row">
            <div class="col-xs-3 google-logo">
              <img
                class="google-icon"
                src="src/assets/google_icon.png"
                alt="google_icon"
              />
            </div>
            <div class="col-xs-9 google-text">Google</div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center information-container">
      <span class="sub-and">ya da</span><br />
      <span class="sub-title-bottom"
        >Kayıtlı e-posta adresinizle giriş yapın</span
      >
    </div>
    <div class="form-container">
      <div class="form-group">
        <input
          type="email"
          class="form-control input-container"
          placeholder="E-Posta"
          v-model="login.email"
        />
      </div>
      <div class="divider"></div>
      <div class="form-group">
        <input
          type="password"
          class="form-control input-container"
          placeholder="Şifre"
          v-model="login.password"
        />
      </div>
      <div class="divider">
        <div class="row">
          <div class="col-xs-6">
            <div class="checkbox">
              <label>
                <span class="remember-me-text pull-left">Beni Hatırla</span>
              </label>
            </div>
          </div>
          <div class="col-xs-6">
            <span class="forgot-password-text pull-right">Şifremi Unuttum</span>
          </div>
        </div>
      </div>
      <div class="button-container">
        <button
          type="button"
          class="btn btn-success login-button"
          @click.prevent="loginSubmitHandler"
        >
          <span class="login-button-text">Giriş Yap</span>
        </button>
      </div>
    </div>
    <div class="member-container text-center">
      <span class="sub-and">Üye Değilseniz Hemen</span
      ><span class="sub-title-bottom"> Üye Olun</span>
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
      login: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    loginSubmitHandler() {
      axios
        .post("http://localhost:8081/sikayets/login", {
          email: this.login.email,
          password: this.login.password
        })
        .then(response => {
          if (response.status == 200) {
            sessionStorage.setItem("token", response.data.access_token);
            this.$router.push("/dashboard");
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
<style>
.logo-img {
  width: 60vw;
  height: 10vh;
}
.logo-img-container {
  margin-top: 7vh;
}
.sub-title-container {
  margin-top: 3vh;
}
.sub-title-top,
.sub-title-bottom {
  color: #002a5b;
  font-size: 2vh;
  font-weight: bold;
}
.sub-and {
  color: #002a5b;
  font-size: 2vh;
}
.social-media-container {
  margin-top: 4vh;
  margin-left: 2vw;
  margin-right: 2vw;
}
.facebook-container {
  background-color: #2f77bf;
  padding: 30px 10px;
  border: 3px solid #114c86;
  border-radius: 20px;
}
.facebook-icon {
  width: 3vw;
  height: 3vh;
}
.google-icon {
  width: 5vw;
  height: 3vh;
}
.facebook-text {
  color: #ffffff;
  font-size: 2vh;
}
.google-text {
  color: #000000;
  font-size: 2vh;
}
.google-container {
  background-color: #ffffff;
  padding: 30px 10px;
  border: 3px solid #d7d7d7;
  border-radius: 20px;
}
.information-container {
  margin-top: 4vh;
}
.form-container {
  margin-top: 3vh;
  margin-left: 2vw;
  margin-right: 2vw;
}
.input-container {
  height: 7vh;
  border-radius: 10px;
}
.form-control {
  font-size: 40px !important;
  padding: 6px 30px !important;
}
.divider {
  margin-top: 2vh;
}
.forgot-password-text {
  text-decoration: underline;
  font-size: 30px;
}
.remember-me-text {
  font-size: 30px;
}
.button-container {
  margin-top: 6vh;
}
.login-button {
  width: 100%;
  height: 6vh;
  border-radius: 10px;
  background-color: #45da6f !important;
}
.login-button-text {
  font-size: 40px;
}
.member-container {
  margin-top: 3vh;
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
</style>

<template>
  <div class="work">
    <!-- タイトル -->
    <h1>Hi.</h1>
    <h1>
      <i class="fab fa-app-store"></i>
      My Works are..
    </h1>
    <!-- タイトルここまで -->

    <!-- Workここから -->
    <div class="work_content">
      <h2>
        <i class="fas fa-search"></i>
        <a href="https://github.com/segamiken/InfraDB" target="_blank">
          InfraDB
        </a>(Laravelを使用)
      </h2>
      <h3>概要</h3>
      <p class="work_content_txt">プログラミングのエラーと解決法を検索できるサイトです。</p>
      <img alt="InfraDB logo" src="../assets/infradb.png" class="work_content_img">
    </div>

    <div class="work_content">
      <h2>
        <i class="fas fa-window-maximize"></i>
        <a href="https://github.com/segamiken/my_resume" target="_blank">
          Portfolio Site
        </a>(Vue.jsを使用)
      </h2>
      <h3>概要</h3>
      <p class="work_content_txt">私のポートフォリオ(このページ)です。シンプルで分かりやすさを重視したデザインにしました。</p>
      <img alt="portfolio logo" src="../assets/portofolio.png" class="work_content_img">
    </div>

    <div class="work_content">
      <h2>
        <i class="fas fa-thumbs-up"></i>
        <a href="http://osakacityuni.herokuapp.com/" target="_blank">
          OCU
        </a>(Railsを使用)
      </h2>
      <h3>概要</h3>
      <p class="work_content_txt"></p>
      <img alt="OCU logo" src="../assets/ocu.png" class="work_content_img">
    </div>

    <div class="work_content">
      <h2>
        <i class="fas fa-shopping-cart"></i>
        <a href="https://github.com/matsumoto-group/matsumoto" target="_blank">
          Ecsite
        </a>(Rails, JQueryを使用)
      </h2>
      <h3>概要</h3>
      <p class="work_content_txt"></p>
      <img alt="Ecsite logo" src="../assets/ecsite.png" class="work_content_img">
    </div>
    <!-- workここまで -->
  </div>
</template>

<style scoped>
  a {
    text-decoration: none;
  }

  h3 {
    text-align: left;
    border-left: 5px solid #a18600;
    margin-left: 2rem;
    padding-left: 5px;
  }

  .work_content {
    width: 46%;
    height: 450px;
    margin: 20px 2% 70px 2%;

    background-color:#fff;
    box-shadow: 0 10px 8px #ddd;
    float: left;
  }

  .work_content_txt {
    text-align: left;
  }

  .work_content_img {
    width: 100%;
  }
</style>

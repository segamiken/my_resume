<template>
  <div class="work">
    <!-- タイトル -->
    <h1 class="work_title">
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
      <p class="work_content_txt">プログラミングのエラーと解決法を検索できるサイトです。プログラミング教室で働いていた際、社内システムとして作りました。質問対応記録のSpreadSheetから毎日エラー内容と解決法を取得しています。SheetsApiやHerokuのScheduler等を使用しています。</p>
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
      <p class="work_content_txt">私のポートフォリオ(このページ)です。シンプルで分かりやすさを重視したデザインにしました。<br>Vue-routerを使ってシンプルなSPAにしました。</p>
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
      <p class="work_content_txt">大学の授業に対する評価と感想を投稿できるサイトです。学部、学科、授業を選択してその授業に評価とコメントができます。</p>
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
      <p class="work_content_txt">基本的な機能が揃ったCDのECサイトです。3人のチームメンバーでGitHubを使用して開発をしました。</p>
      <img alt="Ecsite logo" src="../assets/ecsite.png" class="work_content_img">
    </div>

    <div class="work_content">
      <h2>
        <i class="fab fa-line"></i>
        <a href="https://github.com/segamiken/hotel_bot" target="_blank">
          近くのホテル探しマン
        </a>(LINE Bot, Node.jsを使用)
      </h2>
      <h3>概要</h3>
      <p class="work_content_txt">位置情報を送ると、5km圏内のファッションホテルを5件返してくれるLINEbotです。LINE Messaging APIやYOLP(Yahoo!ローカルサーチAPI)を使用しています。</p>
      <img alt="hotel logo" src="../assets/hotel.png" class="work_content_img">
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

  .work_title {
    margin-top: 30px;
  }

  .work_content {
    width: 46%;
    height: 500px;
    margin: 20px 2% 70px 2%;

    background-color:#e4e7ed;
    color: black;
    box-shadow: 0 10px 8px #ddd;
    float: left;
    border-radius: 3%;
  }

  .work_content_txt {
    text-align: left;
    padding: 0 20px;
  }

  .work_content_img {
    width: 100%;
  }

  /* レスポンシブ対応 */
  @media (max-width: 900px) {
    .work_content {
      width: 90%;
      margin-left: 5%;
      margin-bottom: 30px;
      height: auto;
    }
  }

  @media (max-width: 500px) {
    .work_content {
      height: auto;
    }
    .work_content_txt {
      font-size: 14px;
    }
  }
</style>

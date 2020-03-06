<template>
  <div class="skill">

    <!-- 題名 -->
    <h1>Hi.</h1>
    <h1>
      <i class="fas fa-laptop-code"></i>
      <vue-typer text="My Skills are.." :repeat='0'></vue-typer>
    </h1>

    <!-- 題名ここまで -->

    <!-- スキル -->
    <div class="skill_content">
      <div class="skill_content_text">
        <h2>Language&Framework</h2>
        <p>
          Ruby(Ruby on Rails) | PHP(Laravel) | JS(jQuery, Vue.js) | HTML | CSS
        </p>

        <h2>RDB</h2>
        <p>
           MySQL | PostgreSQL
        </p>

        <h2>Cloud</h2>
        <h3>AWS</h3>
        <p>
          VPC | EC2 | S3 | RDS | IAM
        </p>

        <h2>Others</h2>
        <p>
           GitHub | Docker | nginx | Apache
        </p>

        <h2>Language</h2>
        <p>Japanese(Native) | English(TOEIC830)</p>
      </div>
    </div>
    <!-- スキルここまで -->
  </div>
</template>

<style scoped>
  a {
    text-decoration: none;
  }
  
  .skill_content {
    width: 50%;
    margin: 0 auto;
    height: 500px;

    background-color:#fff;
    box-shadow: 0 8px 7px #ddd;
    text-align: left;
  }

  .skill_content_text {
    padding: 20px;
  }

  /* レスポンシブ対応 */
  @media (max-width: 1100px) {
    .skill_content {
      width: 70%;
      height: 530px;
    }
  }

  @media (max-width: 500px) {
    .skill_content {
      width: 90%;
    }
  }
</style>
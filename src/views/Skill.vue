<template>
  <div class="skill">

    <!-- 題名 -->
    <h1 class="skill_title">
      <i class="fas fa-laptop-code"></i>
      My Skills are..
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
          VPC | EC2 | ECR | ECS | S3 | RDS | IAM
        </p>

        <h2>Others</h2>
        <p>
           GitHub | Docker | nginx
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
    height: auto;

    background-color:#e4e7ed;
    color: black;
    box-shadow: 0 8px 7px #ddd;
    text-align: left;
    border-radius: 3%;
  }

  .skill_title {
    margin-top: 30px;
  }

  .skill_content_text {
    padding: 20px;
  }

  /* レスポンシブ対応 */
  @media (max-width: 1100px) {
    .skill_content {
      width: 70%;
    }
  }

  @media (max-width: 500px) {
    .skill_content {
      width: 90%;
    }
  }
</style>
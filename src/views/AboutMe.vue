<template>
  <div class="about">
    <h1>Hi..</h1>
    <h1>Welcome to Ken's Portfolio Site</h1>

    <div class="iam">
      <p>
        <i class="far fa-user"></i>
        I am..
      </p>
      <table class="about_table">
        <tr>
          <th>Name</th>
          <td>Ken Segami</td>
        </tr>

        <tr>
          <th>Age</th>
          <td>23</td>
        </tr>

        <tr>
          <th>Address</th>
          <td>Tokyo, Japan</td>
        </tr>
        
        <tr>
          <th>University</th>
          <td>Osaka City University</td>
        </tr>

        <tr>
          <th>Link</th>
          <td>
            <a href="https://twitter.com/ken_0205_jp" target="_blank">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a href="https://github.com/segamiken" target="_blank">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://qiita.com/ken-s" target="_blank">
              <i class="fas fa-laptop-code"></i>
            </a>
          </td>
        </tr>

        <tr>
          <th>Blog</th>
          <td>
            <a href="https://ken-japanmalaysia.com" target="_blank">とある大学5年生のブログ</a>
          </td>
        </tr>
      </table>
    </div>

    <div class="career">
      <p>
        <i class="fas fa-briefcase"></i>
        Career..
      </p>
      <table class="about_table">
        <tr>
          <th>Current Job</th>
          <td>大学4年生</td>
        </tr>

        <tr>
          <th></th>
          <td>2020年3月卒業予定</td>
        </tr>
      </table>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<style>
  a {
    text-decoration: none;
  }
  
  .iam {
    width: 25%;
    background-color:#fff;
    box-shadow: 0 8px 7px #ddd;
    float: left;
    margin-left: 24%;
    margin-right: 1%;
    height: 400px;
  }

  .career {
    width: 25%;
    background-color:#fff;
    box-shadow: 0 8px 7px #ddd;
    float: left;
    margin-right: 24%;
    margin-left: 1%;
    height: 400px;
  }

  .about_table {
    margin: 0 auto;
    text-align: left;
  }

  .about_table th {
    line-height: 300%;
    padding-right: 20px;
  }

  .about_table i{
    display: inline-block;
    margin-right: 20px;
  }

</style>
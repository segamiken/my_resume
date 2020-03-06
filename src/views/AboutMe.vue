<template>
  <div class="about">

    <!-- 題名 -->
    <transition mode="in-out">
      <h1>Hi.</h1>
    </transition>
    <transition mode="in-out">
      <h1>Welcome to Ken's Portfolio Site</h1>
    </transition>
    <!-- 題名ここまで -->

    <!-- 自己紹介 -->
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

        <tr>
          <th>Contact</th>
          <td>TwitterのDMでお願い致します。</td>
        </tr>
      </table>
    </div>
    <!-- 自己紹介ここまで -->


    <!-- 職歴 -->
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

      <ul class="timeline">
        <li class="timeline-item">
          <div class="timeline-item__tail"></div>
          <div class="timeline-item__node"></div>
          <div class="timeline-item__wrapper">
            Web広告企業でWebエンジニア
            <i class="fab fa-laravel"></i>
            <i class="fab fa-vuejs"></i>
            <br>
            <span class="year">2020/04-</span>
          </div>
        </li>
        <li class="timeline-item">
          <div class="timeline-item__tail"></div>
          <div class="timeline-item__node"></div>
          <div class="timeline-item__wrapper">
            プログラミングスクールメンター(Rails)
            <br>
            <span class="year">2019/07-2020/03</span>
          </div>
        </li>
        <li class="timeline-item">
          <div class="timeline-item__tail"></div>
          <div class="timeline-item__node"></div>
          <div class="timeline-item__wrapper">
            Sunway University(Malaysia)留学
            <br>
            <span class="year">2018/05-2019/03</span>
          </div>
        </li>
        <li class="timeline-item">
          <div class="timeline-item__tail__last"></div>
          <div class="timeline-item__node"></div>
          <div class="timeline-item__wrapper">
            大阪市立大学 商学部 入学
            <br>
            <span class="year">2015/04</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 職歴ここまで -->
  </div>
</template>

<style scoped>
  a {
    text-decoration: none;
  }
  
  .iam {
    width: 25%;
    margin-left: 24%;
    margin-right: 1%;
    height: 450px;

    background-color:#fff;
    box-shadow: 0 8px 7px #ddd;
    float: left;
  }

  .career {
    width: 25%;
    margin-right: 24%;
    margin-left: 1%;
    height: 450px;

    background-color:#fff;
    box-shadow: 0 8px 7px #ddd;
    float: left;
  }

  .about_table {
    margin: 0 auto;
    text-align: left;
  }

  .about_table th {
    line-height: 300%;
    padding-right: 20px;
  }

  /* font-awesome */
  .about_table i{
    display: inline-block;
    margin-right: 20px;
  }

  /* 職歴の系列のデザイン */
  .timeline {
    margin-top: 40px;
    font-size: 14px;
    list-style: none;
  }

  .timeline-item {
    position: relative;
    padding-bottom: 20px;
  }

  .timeline-item__tail {
    position: absolute;
    border-left: 2px solid #e4e7ed;
    height: 100%;
    left: 4px;
  }

  .timeline-item__node {
    width: 12px;
    height: 12px;
    position: absolute;
    background-color: #e4e7ed;
    border-radius: 50%;
    left: -1px;
  }

  .timeline-item__wrapper {
    position: relative;
    top: -3px;
    text-align: left;
    padding-left: 40px;
  }

   .timeline-item__wrapper i{
    display: inline-block;
    margin-left: 5px;
  }

  .year {
    display: inline-block;
    padding-top: 5px;
    font-size: 12px;
    color: #909399;
  }
</style>
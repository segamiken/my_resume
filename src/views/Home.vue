<template>
    <div class="home">
        <!-- 題名 -->
        <div class="home_content">
            <div class="home_content_main">
                <h1 class="home_content_title">
                    <i class="fas fa-plane-departure"></i>
                    <vue-typer text="Ken Segami" :repeat='0'></vue-typer>
                </h1>
            </div>
        </div>
        <!-- 題名ここまで -->
    </div>
</template>

<style scoped>
    #nav {
        margin-bottom: 1px;
    }
    .home_content {
        position: relative;
        background-image: url("../assets/kansai-airport.jpg");
        background-position: center;
        background-size: cover;
        height: 100vh;
    }

    .home_content_main {
        width: 50%;
    }

    .home_content_title {
        /* 共通デザイン */
        position: absolute;
        left: 0;
        right: 0;
        padding: 0.3em;
        border-top: double 5px aliceblue;
        border-bottom: double 5px aliceblue;

        /* 画面幅によって変更するデザイン */
        top: 30%;
        font-size: 65px;
        width: 35%;
        margin: 0 auto;
    }

    /* レスポンシブ対応 */
    @media (max-width: 1350px) {
        .home_content_title {
            font-size: 55px;
        }
    }

    @media (max-width: 1150px) {
        .home_content_title {
            font-size: 40px;
            width: 50%;
        }
    }

    @media (max-width: 600px) {
        .home_content_title {
            width: 75%;
        }
    }

    @media (max-width: 400px) {
        .home_content_title {
            width: 85%;
        }
    }
</style>

<template>
    <div class="header">
        <div class="slogan">
            <p>老男孩IT教育 | 帮助有志向的年轻人通过努力学习获得体面的工作和生活</p>
        </div>
        <div class="nav">
            <ul class="left-part">
                <li class="logo">
                    <router-link to="/">
                        <img src="../assets/img/head-logo.svg" alt="">
                    </router-link>
                </li>
                <li class="ele">
                    <span @click="goPage('/free')" :class="{active: url_path === '/free'}">免费课</span>
                </li>
                <li class="ele">
                    <span @click="goPage('/actual')"
                          :class="{active: url_path === '/actual'}">实战课</span>
                </li>
                <li class="ele">
                    <span @click="goPage('/light')" :class="{active: url_path === '/light'}">轻课</span>
                </li>
            </ul>

            <div class="right-part">
                <div>
                    <span>登录</span>
                    <span class="line">|</span>
                    <span>注册</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import router from "../router/index.js";

const url_path = ref(sessionStorage.url_path || '/')
const goPage = (url_path) => {
    if (url_path !== url_path.value) {
        router.push(url_path)
    }
    sessionStorage.url_path = url_path;
}

// router.currentRoute.value.path 是当前路由的路径
sessionStorage.url_path = router.currentRoute.value.path;
url_path.value = router.currentRoute.value.path;

</script>


<style scoped>
.header {
    background-color: white;
    box-shadow: 0 0 5px 0 #aaa;
}

.header:after {
    content: "";
    display: block;
    clear: both;
}

.slogan {
    background-color: #eee;
    height: 40px;
}

.slogan p {
    width: 1200px;
    margin: 0 auto;
    color: #aaa;
    font-size: 13px;
    line-height: 40px;
}

.nav {
    background-color: white;
    user-select: none;
    width: 1200px;
    margin: 0 auto;

}

.nav ul {
    padding: 15px 0;
    float: left;
}

.nav ul:after {
    clear: both;
    content: '';
    display: block;
}

.nav ul li {
    float: left;
}

.logo {
    margin-right: 20px;
}

.ele {
    margin: 0 20px;
}

.ele span {
    display: block;
    font: 15px/36px '微软雅黑';
    border-bottom: 2px solid transparent;
    cursor: pointer;
}

.ele span:hover {
    border-bottom-color: orange;
}

.ele span.active {
    color: orange;
    border-bottom-color: orange;
}

.right-part {
    float: right;
}

.right-part .line {
    margin: 0 10px;
}

.right-part span {
    line-height: 68px;
    cursor: pointer;
}
</style>
<template>
    <Headers></Headers>
    <Banner></Banner>
    <div class="course">
        <el-row>
            <el-col :span="6" v-for="(o, index) in 8" :key="o" class="course_detail">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="http://photo.liuqingzheng.top/2023%2002%2022%2021%2057%2011%20/image-20230222215707795.png"
                         class="image">
                    <div style="padding: 14px;">
                        <span>推荐课程</span>
                        <div class="bottom clearfix">
                            <time class="time">价格：999</time>
                            <el-button type="primary" key="text" class="button" link>查看详情</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
    <img src="http://photo.liuqingzheng.top/2023%2003%2001%2016%2010%2034%20/1.png" alt="" width="100%" height="500px">
    <Footer></Footer>

</template>

<script setup>
import axios from 'axios';
import {inject, reactive} from 'vue'
import Headers from '../components/Headers.vue'
import Footer from "../components/Footer.vue";
import Banner from "../components/Banner.vue";


</script>

<style scoped>
.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.course_detail {
    padding: 50px;
}
</style>

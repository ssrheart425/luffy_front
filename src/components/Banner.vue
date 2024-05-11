<template>
    <div class="banner">
        <el-carousel height="400px">
            <el-carousel-item v-for="(item,index) in bannerList.results" :key="index">
                <template v-if="item.link.indexOf('https://') >= 0">
                    <a :href="item.link">
                        <img :src="item.image" :alt="item.title">
                    </a>
                </template>
                <template v-else>
                    <router-link :to="item.link">
                        <img :src="item.image" :alt="item.title">
                    </router-link>
                </template>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup>
import {reactive, inject} from "vue";
import axios from "axios";
import {ElMessage} from "element-plus";

const settings = inject('$settings')

const bannerList = reactive({results: []})

axios.get(settings.banner).then(res => {
    if (res.data.code == 100) {
        bannerList.results = res.data.results
    } else {
        ElMessage.error(res.data.msg)
    }
}).catch(err => {
    ElMessage.error('服务器异常，请联系管理员')
})
</script>

<style scoped>
.el-carousel__item {
    height: 400px;
    min-width: 1200px;
}

.el-carousel__item img {
    height: 400px;
    margin-left: calc(50% - 1920px / 2);
}
</style>
<template>
  <div>
    <!-- 2.将值赋值给标签的原生属性or或者是变量 v-bing:原生属性名="vue变量"-->
    <a v-bind:href="url">点击去百度</a>
    <!--简写 :原生属性名="vue变量"-->
    <img :src="imgUrl" />
  </div>
</template>

<script>
export default {
  // 1.准备变量
  data() {
    return {
      url: 'https://www.yuque.com/dashboard',
      imgUrl:
        'https://gw.alipayobjects.com/zos/bmw-prod/735cefc9-f976-4c87-8b48-85f713f5b713.svg',
    };
  },

  created() {},

  methods: {},
};
</script>

<style scoped></style>

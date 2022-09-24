<template>
  <div>
    {{ msg }}
    <hr />
    {{ msg | reverse }}
    <hr />
    {{ msg | toUp }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello',
    };
  },

  created() {},

  methods: {},
  // 局部过滤器，只能在vue文件内使用
  // filters:{
  // 过滤器名字(val){
  // return 处理后的值
  // }
  // }
  filters: {
    toUp(val) {
      return val.toUpperCase();
    },
  },
};
</script>

<style scoped></style>

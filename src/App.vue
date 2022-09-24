<template>
  <div>
    <h2>过滤器的使用</h2>
    <UseFilter></UseFilter>
    <hr>
    <h2>使用v-bind给标签赋值,绑定变量</h2>
    <UseVbind></UseVbind>
  </div>
</template>

<script>
import UseFilter from '@/views/01.UseFilter.vue';
import UseVbind from '@/views/02.UseV-bind.vue'
export default {
  data() {
    return {};
  },
  components: {
    UseFilter,
    UseVbind,
  },
  created() {},

  methods: {},
};
</script>

<style scoped></style>

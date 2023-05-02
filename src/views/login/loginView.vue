<template>
  <div id="backcont">
    <div class="meituan-content">
      <div class="login-cont">
        <div class="meituan-title">玩就是玩</div>
        <div class="">
          <p>账号</p>
          <el-input v-model="input" placeholder="请开始你的表演" clearable />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const text = ref("");
    return { text };
  },
};
</script>

<style></style>

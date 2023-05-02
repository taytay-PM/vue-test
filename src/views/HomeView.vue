<!-- <template>

  <div class="slider">
    <div class="slider-group" :style="{ left: currentIndex * -width + 'px' }">
      <slot></slot>
    </div>
    <div class="slider-dots">
      <span
        class="dot"
        :class="{ active: currentIndex === index }"
        v-for="(dot, index) in dots"
        :key="index"
        @click="currentIndex = index"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    width: {
      type: Number,
      default: 200,
    },
    interval: {
      type: Number,
      default: 3000,
    },
  },
  setup(props) {
    const currentIndex = ref(0);
    const dots = ref([]);
    let timer;

    function autoPlay() {
      timer = setInterval(() => {
        currentIndex.value++;
        if (currentIndex.value === dots.value.length) currentIndex.value = 0;
      }, props.interval);
    }

    onMounted(() => {
      autoPlay();
    });

    const getDots = () => {
      dots.value = props.default.filter((vnode) => vnode.tag);
    };

    getDots();

    return {
      currentIndex,
      dots,
      timer,
    };
  },
};
</script>

<style scoped>
.slider {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.slider-group {
  display: flex;
  transition: left 0.5s ease;
}

.slider-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
  margin: 0 5px;
  cursor: pointer;
}

.active {
  background: orange;
}
</style> -->
<template>
  <div>test</div>
</template>

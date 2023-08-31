<template>
  <div class="prose-img">
    <img :src="src" :alt="alt" :width="width" :height="height" />
    <div class="caption" v-if="$slots.caption">
      <slot name="caption" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
});
</script>

<style scoped>
.prose-img {
  display: flex;
  margin: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.prose-img img {
  display: block;
  max-width: 98%;
  margin: auto;
  border: double thick;
}

.prose-img .caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
</style>

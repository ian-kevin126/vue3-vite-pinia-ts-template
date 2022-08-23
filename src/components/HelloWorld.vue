<script setup lang="ts">
import globalStore from '@/store/modules/global'
defineProps<{ msg: string }>()
const global = globalStore()
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="primary">{{ global.token }}</div>
</template>

<style scoped lang="less">
.primary {
  color: @primary-color;
}
</style>

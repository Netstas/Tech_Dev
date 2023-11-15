<script setup lang="ts">
import TheHeader from '@/layout/header/header.vue'
</script>

<template>
  <div class="wrapper">
    <The-Header></The-Header>
    <div class="container content">
      <div class="row">
        <div class="col-2">
          <div class="sidebar-left">sidebar left</div>
        </div>
        <div class="col-8">
          <div class="main">
            <RouterView />
          </div>
        </div>
        <div class="col-2">
          <div class="sidebar-right">sidebar right</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper{
  background-color: #f5f5f5;
}
.content {
  padding-top: 75px;
}
</style>

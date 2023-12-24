<script lang="ts"></script>
<template>
  <div class="sidebar-wrapper-right">
    <div class="sidebar-top">
      <div class="d-flex sidebar-top-avatar-name">
        <div class="sidebar-top-avatar">
          <router-link to="#">
            <img src="../../assets/image/avatar.jpg" width="50" height="50" alt="" />
          </router-link>
        </div>
        <div class="sidebar-top-name">
          <router-link to="#" class="sidebar-top-name-link"> Alicia Sykes </router-link>
        </div>
      </div>
      <div class="sidebar-top-follow">
        <button class="sidebar-top-follow-btn">Theo dõi</button>
      </div>
    </div>
    <div class="sidebar-bottom">
      <div class="sidebar-bottom-info">
        <strong>Vị trí</strong>
        <p class="sidebar-bottom-text">Hà nội</p>
      </div>
      <div class="sidebar-bottom-info">
        <strong>Công việc</strong>
        <p class="sidebar-bottom-text">Dev</p>
      </div>
      <div class="sidebar-bottom-info">
        <strong>Đã tham gia</strong>
        <p class="sidebar-bottom-text">12/2023</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url('@/assets/style/layout/sidebar/sidebar.scss');
</style>

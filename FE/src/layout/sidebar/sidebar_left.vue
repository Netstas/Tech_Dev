<script lang="ts"></script>
<template>
  <div class="sidebar-wrapper-left">
    <div class="sidebar-menu">
      <ul class="sidebar-menu-nav">
        <li class="sidebar-menu-item">
          <router-link to="#" class="sidebar-menu-link">
            <font-awesome-icon :icon="['fas', 'house']" />
            Trang chủ
          </router-link>
        </li>
        <li class="sidebar-menu-item">
          <router-link to="#" class="sidebar-menu-link">
            <font-awesome-icon :icon="['far', 'compass']" />
            Giới thiệu
          </router-link>
        </li>
        <li class="sidebar-menu-item">
          <router-link to="#" class="sidebar-menu-link">
            <font-awesome-icon :icon="['far', 'message']" />
            nhắn tin
          </router-link>
        </li>
        <li class="sidebar-menu-item">
          <router-link to="#" class="sidebar-menu-link">
            <font-awesome-icon :icon="['far', 'newspaper']" />
            bài viết
          </router-link>
        </li>
        <li class="sidebar-menu-item">
          <router-link to="#" class="sidebar-menu-link">
            <font-awesome-icon :icon="['far', 'bell']" />
            thông báo
          </router-link>
        </li>
        <li class="sidebar-menu-item">
          <router-link to="#" class="sidebar-menu-link">
            <font-awesome-icon :icon="['far', 'circle-question']" />
            hỏi đáp
          </router-link>
        </li>
        <li class="sidebar-menu-item">
          <router-link to="#" class="sidebar-menu-link">
            <font-awesome-icon :icon="['far', 'address-card']" />
            liên hệ
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url('@/assets/style/layout/sidebar/sidebar.scss');
</style>

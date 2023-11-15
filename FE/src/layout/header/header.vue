<script setup lang="ts"></script>
<template>
  <div class="header">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-6">
          <div class="header-left d-flex align-items-center gap-2">
            <div class="header-left__logo">
              <router-link to="#" class="header-left__logo__home">
                <img src="@/assets/logo/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" />
              </router-link>
            </div>
            <div class="header-left__form">
              <form action="" method="post" @click.prevent>
                <div class="header-left__group d-flex">
                  <input type="text" placeholder="Tìm kiếm..." class="header-left__form-input" />
                  <button class="header-left__form-btn">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="header-right text-end">
            <router-link to="#" class="header-right-login">Đăng nhập</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url('@/assets/style/layout/header/header.scss');
</style>

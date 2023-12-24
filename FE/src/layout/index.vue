<script setup lang="ts">
import TheHeader from '@/layout/header/header.vue'
import SidebarLeft from '@/layout/sidebar/sidebar_left.vue'
import SidebarRight from '@/layout/sidebar/sidebar_right.vue'
</script>

<template>
  <div class="wrapper">
    <The-Header></The-Header>
    <div class="container content">
      <div class="row">
        <div class="col-2">
          <div class="sidebar-left position-fixed">
            <Sidebar-Left />
          </div>
        </div>
        <div class="col-7">
          <div class="main">
            <!-- <RouterView /> -->
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed quibusdam amet
            est commodi obcaecati molestias laborum facere architecto praesentium quas, iure neque
            nisi doloribus vero possimus quia debitis doloremque. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Accusantium sed quibusdam amet est commodi obcaecati
            molestias laborum facere architecto praesentium quas, iure neque nisi doloribus vero
            possimus quia debitis doloremque. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusantium sed quibusdam amet est commodi obcaecati molestias laborum facere
            architecto praesentium quas, iure neque nisi doloribus vero possimus quia debitis
            doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed
            quibusdam amet est commodi obcaecati molestias laborum facere architecto praesentium
            quas, iure neque nisi doloribus vero possimus quia debitis doloremque. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Accusantium sed quibusdam amet est commodi
            obcaecati molestias laborum facere architecto praesentium quas, iure neque nisi
            doloribus vero possimus quia debitis doloremque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusantium sed quibusdam amet est commodi obcaecati molestias laborum
            facere architecto praesentium quas, iure neque nisi doloribus vero possimus quia debitis
            doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed
            quibusdam amet est commodi obcaecati molestias laborum facere architecto praesentium
            quas, iure neque nisi doloribus vero possimus quia debitis doloremque. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Accusantium sed quibusdam amet est commodi
            obcaecati molestias laborum facere architecto praesentium quas, iure neque nisi
            doloribus vero possimus quia debitis doloremque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusantium sed quibusdam amet est commodi obcaecati molestias laborum
            facere architecto praesentium quas, iure neque nisi doloribus vero possimus quia debitis
            doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed
            quibusdam amet est commodi obcaecati molestias laborum facere architecto praesentium
            quas, iure neque nisi doloribus vero possimus quia debitis doloremque. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Accusantium sed quibusdam amet est commodi
            obcaecati molestias laborum facere architecto praesentium quas, iure neque nisi
            doloribus vero possimus quia debitis doloremque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusantium sed quibusdam amet est commodi obcaecati molestias laborum
            facere architecto praesentium quas, iure neque nisi doloribus vero possimus quia debitis
            doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed
            quibusdam amet est commodi obcaecati molestias laborum facere architecto praesentium
            quas, iure neque nisi doloribus vero possimus quia debitis doloremque. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Accusantium sed quibusdam amet est commodi
            obcaecati molestias laborum facere architecto praesentium quas, iure neque nisi
            doloribus vero possimus quia debitis doloremque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusantium sed quibusdam amet est commodi obcaecati molestias laborum
            facere architecto praesentium quas, iure neque nisi doloribus vero possimus quia debitis
            doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed
            quibusdam amet est commodi obcaecati molestias laborum facere architecto praesentium
            quas, iure neque nisi doloribus vero possimus quia debitis doloremque. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Accusantium sed quibusdam amet est commodi
            obcaecati molestias laborum facere architecto praesentium quas, iure neque nisi
            doloribus vero possimus quia debitis doloremque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusantium sed quibusdam amet est commodi obcaecati molestias laborum
            facere architecto praesentium quas, iure neque nisi doloribus vero possimus quia debitis
            doloremque.
          </div>
        </div>
        <div class="col-3">
          <div class="sidebar-right position-fixed">
            <Sidebar-Right></Sidebar-Right>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  background-color: #f5f5f5;
  min-height: 100vh;
}
.content {
  padding-top: 75px;
}
.sidebar {
  &-left {
    width: 13.6%;
  }
  &-right {
    width: 21%;
  }
}
</style>

<template>
  <div id="app">
    <layout-base>
      <router-view />
    </layout-base>
  </div>
</template>

<script>
import LayoutBase from '@/layouts/Base'

export default {
  name: 'App',
  components: {
    LayoutBase
  },
}
</script>

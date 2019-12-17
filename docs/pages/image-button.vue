<template>
  <div>
    <h2>Image Button</h2>
    <h4>Basic</h4>
    <jt-image-button :icon="iconDatabase"></jt-image-button>
    <h4>In Toolbar</h4>
    <jt-toolbar class="border">
      <jt-image-button :icon="iconDatabase"></jt-image-button>
      <jt-image-button :icon="iconTable"></jt-image-button>
    </jt-toolbar>
  </div>
</template>

<script>
import iconDatabase from '../assets/database.png'
import iconTable from '../assets/table.png'

export default {
  data() {
    return {
      iconDatabase,
      iconTable,
    }
  },
}
</script>

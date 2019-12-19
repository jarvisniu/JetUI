<template>
  <div>
    <h2>Toolbar</h2>

    <h4>Basic (Horizontal)</h4>
    <jt-border inline all>
      <jt-toolbar>
        <jt-image-button :icon="iconDatabase"></jt-image-button>
        <jt-image-button :icon="iconTable"></jt-image-button>
      </jt-toolbar>
    </jt-border>

    <h4>Vertical</h4>
    <jt-border inline all>
      <jt-toolbar vertical>
        <jt-image-button :icon="iconDatabase"></jt-image-button>
        <jt-image-button :icon="iconTable"></jt-image-button>
      </jt-toolbar>
    </jt-border>
  </div>
</template>

<script>
import iconDatabase from '../../assets/database.png'
import iconTable from '../../assets/table.png'

export default {
  data() {
    return {
      iconDatabase,
      iconTable,
    }
  },
}
</script>

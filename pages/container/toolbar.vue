<template>
  <div>
    <h2>Toolbar</h2>

    <h4>Basic (Horizontal)</h4>
    <jt-border inline all>
      <jt-toolbar>
        <jt-toolbar-button :icon="iconDatabase"></jt-toolbar-button>
        <jt-toolbar-button :icon="iconTable"></jt-toolbar-button>
        <jt-toolbar-divider></jt-toolbar-divider>
        <jt-toolbar-button :icon="iconDatabase"></jt-toolbar-button>
        <jt-toolbar-divider through></jt-toolbar-divider>
        <jt-toolbar-button :icon="iconTable"></jt-toolbar-button>
      </jt-toolbar>
    </jt-border>

    <h4>Vertical</h4>
    <jt-border inline all>
      <jt-toolbar vertical>
        <jt-toolbar-button :icon="iconDatabase"></jt-toolbar-button>
        <jt-toolbar-divider></jt-toolbar-divider>
        <jt-toolbar-button :icon="iconDatabase"></jt-toolbar-button>
        <jt-toolbar-divider through></jt-toolbar-divider>
        <jt-toolbar-button :icon="iconTable"></jt-toolbar-button>
      </jt-toolbar>
    </jt-border>

  </div>
</template>

<script>
import iconDatabase from '~/assets/database.png'
import iconTable from '~/assets/table.png'

export default {
  data() {
    return {
      iconDatabase,
      iconTable,
    }
  },
}
</script>

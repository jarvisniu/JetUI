<template>
  <div>
    <h1>Toolbar</h1>

    <h2>Basic (Horizontal)</h2>
    <jt-snippet>
      <template>
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
      </template>
      <textarea slot="code">
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
      </textarea>
    </jt-snippet>

    <h2>Vertical</h2>
    <jt-snippet>
      <template>
        <jt-border inline all>
          <jt-toolbar vertical>
            <jt-toolbar-button :icon="iconDatabase"></jt-toolbar-button>
            <jt-toolbar-divider></jt-toolbar-divider>
            <jt-toolbar-button :icon="iconDatabase"></jt-toolbar-button>
            <jt-toolbar-divider through></jt-toolbar-divider>
            <jt-toolbar-button :icon="iconTable"></jt-toolbar-button>
          </jt-toolbar>
        </jt-border>
      </template>
      <textarea slot="code">
        <jt-border inline all>
          <jt-toolbar vertical>
            <jt-toolbar-button :icon="iconDatabase"></jt-toolbar-button>
            <jt-toolbar-divider></jt-toolbar-divider>
            <jt-toolbar-button :icon="iconDatabase"></jt-toolbar-button>
            <jt-toolbar-divider through></jt-toolbar-divider>
            <jt-toolbar-button :icon="iconTable"></jt-toolbar-button>
          </jt-toolbar>
        </jt-border>
      </textarea>
    </jt-snippet>

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

<template>
  <div>
    <h2>Gallery</h2>

    <h4>Button</h4>
    <jt-button>OK</jt-button>

    <h4>Input</h4>
    <jt-input></jt-input>

    <h4>Input Search</h4>
    <jt-border inline all style="background-color: var(--jt-bg-container-dark);">
      <jt-input-search></jt-input-search>
    </jt-border>

    <h4>Toolbar</h4>
    <jt-border inline all>
      <jt-toolbar>
        <jt-toolbar-button :icon="iconDatabase"></jt-toolbar-button>
        <jt-toolbar-button :icon="iconTable"></jt-toolbar-button>
        <jt-toolbar-divider></jt-toolbar-divider>
        <jt-toolbar-button :icon="iconDatabase"></jt-toolbar-button>
        <jt-toolbar-button :icon="iconTable"></jt-toolbar-button>
      </jt-toolbar>
    </jt-border>

    <h4>Toggle Bar</h4>
    <jt-border inline all>
      <jt-toggle-bar>
        <jt-toggle-bar-button
          v-for="(button, index) in toggleBarButtons" :key="index"
          :icon="button.icon"
          :value="button.value"
          :tip="button.tip"
          :selected="toggleBarValue === button.value"
          @click="toggleBarValue = button.value"
        >{{ button.label }}</jt-toggle-bar-button>
      </jt-toggle-bar>
    </jt-border>

    <h4>Panel</h4>
    <jt-border inline all>
      <jt-panel title="Message" style="width: 250px;">
        <div style="padding: 10px;">
          Hello World!
        </div>
      </jt-panel>
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
      toggleBarButtons: [
        { icon: iconDatabase, value: 'database', label: 'Database', tip: 'Manage Database' },
        { icon: iconTable, value: 'table', label: 'List', tip: 'Manage List' },
      ],
      toggleBarValue: 'database',
    }
  },
}
</script>

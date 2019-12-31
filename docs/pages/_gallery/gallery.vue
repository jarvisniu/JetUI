<template>
  <div>
    <h2>Gallery</h2>

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
      <jt-panel title="Message" style="width: 500px;">
        <jt-border bottom style="
          background-color: var(--jt-bg-container-dark);
          padding: 2px; font-size: 0;
        ">
          <jt-input-search margin="2" width="150"></jt-input-search>
          <jt-input margin="2" width="80"></jt-input>
          <jt-input-number margin="2" width="80" v-model="num1"></jt-input-number>
          <jt-button margin="2">OK</jt-button>
        </jt-border>

        <div style="padding: 10px;">
          Hello World!
        </div>
      </jt-panel>
    </jt-border>

    <h4>Rotated View</h4>
    <jt-border inline all>
      <jt-rotated-view style="height: 200px; width: 24px; vertical-align: top;">
        <jt-toggle-bar style="float: right;">
          <jt-toggle-bar-button>Project</jt-toggle-bar-button>
        </jt-toggle-bar>
        <jt-toggle-bar style="float: left;">
          <jt-toggle-bar-button>Structure</jt-toggle-bar-button>
          <jt-toggle-bar-button>Git</jt-toggle-bar-button>
        </jt-toggle-bar>
      </jt-rotated-view>
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
      num1: 1,
    }
  },
}
</script>

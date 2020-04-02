<template>
  <div>
    <h2>Toggle Bar</h2>

    <h4>Basic (Horizontal)</h4>
    <jt-border inline all>
      <jt-toggle-bar>
        <jt-toggle-bar-button
          v-for="(button, index) in toggleBarButtons" :key="index"
          :icon="button.icon"
          :value="button.value"
          :tip="button.tip"
          :selected="selValue1 === button.value"
          @click="selValue1 = button.value"
        >{{ button.label }}</jt-toggle-bar-button>
      </jt-toggle-bar>
    </jt-border>

    <h4>No Icon</h4>
    <jt-border inline all>
      <jt-toggle-bar>
        <jt-toggle-bar-button
          v-for="(button, index) in toggleBarButtons" :key="index"
          :value="button.value"
          :tip="button.tip"
          :selected="selValue2 === button.value"
          @click="selValue2 = button.value"
        >{{ button.label }}</jt-toggle-bar-button>
      </jt-toggle-bar>
    </jt-border>


    <h4>Set Width</h4>
    <jt-border inline all>
      <jt-toggle-bar>
        <jt-toggle-bar-button
          :selected="selTheme === 'light'"
          style="width: 80px;"
          @click="selTheme = 'light'"
        >Light</jt-toggle-bar-button>
        <jt-toggle-bar-button
          :selected="selTheme === 'dark'"
          style="width: 80px;"
          @click="selTheme = 'dark'"
        >Dark</jt-toggle-bar-button>
      </jt-toggle-bar>
    </jt-border>

  </div>
</template>

<script>
import iconDatabase from '~/assets/database.png'
import iconTable from '~/assets/table.png'

export default {
  data() {
    return {
      toggleBarButtons: [
        { icon: iconDatabase, value: 'database', label: 'Database', tip: 'Manage Database' },
        { icon: iconTable, value: 'table', label: 'List', tip: 'Manage List' },
      ],
      selValue1: 'database',
      selValue2: 'table',
      selTheme: 'light',
    }
  },
}
</script>

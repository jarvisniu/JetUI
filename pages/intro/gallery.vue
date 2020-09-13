<template>
  <div>
    <h2>Gallery</h2>

    <jt-border inline all>

      <!-- Panel 1 -->
      <jt-panel title="Form" style="width: 500px;" :fold="isPanelFormFolded">
        <div slot="control">
          <jt-panel-button v-if="isPanelFormFolded" @click="isPanelFormFolded = false">
            <jt-icon name="plus"></jt-icon>
          </jt-panel-button>
          <jt-panel-button v-else @click="isPanelFormFolded = true">
            <jt-icon name="minus"></jt-icon>
          </jt-panel-button>
        </div>
        <jt-border bottom>
          <jt-toolbar>
            <jt-input-search ref="inputSearch" width="150"></jt-input-search>
            <jt-input width="80"></jt-input>
            <jt-input-number width="80" v-model="num1"></jt-input-number>
            <jt-switch inline v-model="isDarkMode" on-label="暗" off-label="亮"></jt-switch>
            <jt-button>OK</jt-button>
          </jt-toolbar>
        </jt-border>

        <div style="padding: 10px;">
        </div>
      </jt-panel>

      <!-- Panel 2 -->
      <jt-border top>
        <jt-panel title="Toolbar" style="width: 500px;" :fold="isPanelToolbarFolded">
          <div slot="control">
            <jt-panel-button v-if="isPanelToolbarFolded" @click="isPanelToolbarFolded = false">
              <jt-icon name="plus"></jt-icon>
            </jt-panel-button>
            <jt-panel-button v-else @click="isPanelToolbarFolded = true">
              <jt-icon name="minus"></jt-icon>
            </jt-panel-button>
          </div>
          <jt-border bottom>
            <jt-toolbar>
              <jt-toolbar-button :icon="iconDatabase"
                :selected="selToolIndex == 0" @click="selToolIndex = 0"
              ></jt-toolbar-button>
              <jt-toolbar-button :icon="iconTable"
                :selected="selToolIndex == 1" @click="selToolIndex = 1"
              ></jt-toolbar-button>
              <jt-toolbar-divider></jt-toolbar-divider>
              <jt-toolbar-button :icon="iconDatabase"
                :selected="selToolIndex == 2" @click="selToolIndex = 2"
              ></jt-toolbar-button>
              <jt-toolbar-button :icon="iconTable"
                :selected="selToolIndex == 3" @click="selToolIndex = 3"
              ></jt-toolbar-button>
              <jt-toolbar-divider through></jt-toolbar-divider>
              <jt-button-group>
                <jt-button :selected="selCity == 'Beijing'"
                  @click="selCity = 'Beijing'">Beijing</jt-button>
                <jt-button :selected="selCity == 'Shanghai'"
                  @click="selCity = 'Shanghai'">Shanghai</jt-button>
                <jt-button :selected="selCity == 'Hong Kong'"
                  @click="selCity = 'Hong Kong'">Hong Kong</jt-button>
              </jt-button-group>
            </jt-toolbar>
          </jt-border>

          <div style="padding: 10px;">
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
          </div>
        </jt-panel>
      </jt-border>

      <!-- Panel 3 -->
      <jt-border top>
        <jt-panel title="List" style="width: 500px;" :fold="isPanelListFolded">
          <div slot="control">
            <jt-panel-button v-if="isPanelListFolded" @click="isPanelListFolded = false">
              <jt-icon name="plus"></jt-icon>
            </jt-panel-button>
            <jt-panel-button v-else @click="isPanelListFolded = true">
              <jt-icon name="minus"></jt-icon>
            </jt-panel-button>
          </div>
          <div style="padding: 10px;">
            <jt-border inline all>
              <jt-list style="width: 100px;" :data="list" v-model="selListIndex"></jt-list>
            </jt-border>
          </div>
        </jt-panel>
      </jt-border>
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
      toggleBarButtons: [
        { icon: iconDatabase, value: 'database', label: 'Database', tip: 'Manage Database' },
        { icon: iconTable, value: 'table', label: 'List', tip: 'Manage List' },
      ],
      selToolIndex: 0,
      selCity: 'Beijing',
      toggleBarValue: 'database',
      num1: 1,
      list: ['Bill', 'Jack', 'Tom'],
      selListIndex: 0,
      isPanelFormFolded: false,
      isPanelToolbarFolded: false,
      isPanelListFolded: false,
      isDarkMode: false,
    }
  },
}
</script>

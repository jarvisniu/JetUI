<template>
  <div>
    <h2>Gallery</h2>

    <h4>Panel</h4>
    <jt-border inline all>
      <jt-panel title="Message" style="width: 500px;">
        <jt-border bottom>
          <jt-toolbar>
            <jt-input-search width="150"></jt-input-search>
            <jt-input width="80"></jt-input>
            <jt-input-number width="80" v-model="num1"></jt-input-number>
            <jt-button>OK</jt-button>
          </jt-toolbar>
        </jt-border>
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
            <jt-list style="width: 100px;" :data="list" v-model="selListIndex"></jt-list>
          </jt-border>
        </div>
      </jt-panel>
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
      selToolIndex: 0,
      selCity: 'Beijing',
      toggleBarValue: 'database',
      num1: 1,
      list: ['Bill', 'Jack', 'Tom'],
      selListIndex: 0,
    }
  },
}
</script>

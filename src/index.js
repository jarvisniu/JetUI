import './components/jetui.vue'

import Breadcrumb from './components/breadcrumb.vue'
import IconLabel from './components/icon-label.vue'
import ImageButton from './components/image-button.vue'
import PanelTitle from './components/panel-title.vue'
import RotatedPanel from './components/rotated-panel.vue'
import SidePanel from './components/side-panel.vue'
import Splitter from './components/splitter.vue'
import Tabbar from './components/tabbar.vue'
import TabButton from './components/tab-button.vue'
import Toolbar from './components/toolbar.vue'
import Tooglebar from './components/togglebar.vue'
import VerticalToolbar from './components/vertical-toolbar.vue'

export default {
  install (Vue) {
    Vue.component('JtBreadcrumb', Breadcrumb)
    Vue.component('JtIconLabel', IconLabel)
    Vue.component('JtImageButton', ImageButton)
    Vue.component('JtPanelTitle', PanelTitle)
    Vue.component('JtRotatedPanel', RotatedPanel)
    Vue.component('JtSidePanel', SidePanel)
    Vue.component('JtSplitter', Splitter)
    Vue.component('JtTabbar', Tabbar)
    Vue.component('JtTabButton', TabButton)
    Vue.component('JtTogglebar', Tooglebar)
    Vue.component('JtToolbar', Toolbar)
    Vue.component('JtToolbar', Toolbar)
    Vue.component('VerticalToolbar', VerticalToolbar)

  }
}

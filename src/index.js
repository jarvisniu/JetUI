import './main.styl'
import './theme.scss'

import Border from './components/border/border.vue'
import Button from './components/button/button.vue'
import Breadcrumb from './components/breadcrumb/breadcrumb.vue'
import ImageButton from './components/image-button/image-button.vue'
import Input from './components/input/input.vue'
import InputSearch from './components/input-search/input-search.vue'
import PanelTitle from './components/panel-title.vue'
import RotatedPanel from './components/rotated-panel.vue'
import SidePanel from './components/side-panel.vue'
import Splitter from './components/splitter.vue'
import TabBar from './components/tab-bar.vue'
import TabButton from './components/tab-button.vue'
import Toolbar from './components/toolbar/toolbar.vue'
import ToggleBar from './components/toggle-bar/toggle-bar.vue'
import ToggleBarButton from './components/toggle-bar/toggle-bar-button.vue'

export default {
  install(Vue) {
    Vue.component(Border.name, Border)
    Vue.component(Button.name, Button)
    Vue.component(Breadcrumb.name, Breadcrumb)
    Vue.component(ImageButton.name, ImageButton)
    Vue.component(Input.name, Input)
    Vue.component(InputSearch.name, InputSearch)
    Vue.component(PanelTitle.name, PanelTitle)
    Vue.component(RotatedPanel.name, RotatedPanel)
    Vue.component(SidePanel.name, SidePanel)
    Vue.component(Splitter.name, Splitter)
    Vue.component(TabBar.name, TabBar)
    Vue.component(TabButton.name, TabButton)
    Vue.component(ToggleBar.name, ToggleBar)
    Vue.component(ToggleBarButton.name, ToggleBarButton)
    Vue.component(Toolbar.name, Toolbar)
  }
}

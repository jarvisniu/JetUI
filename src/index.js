import './main.styl'
import './theme.scss'

import Border from './components/border/jt-border.vue'
import Button from './components/button/jt-button.vue'
import Breadcrumb from './components/breadcrumb/jt-breadcrumb.vue'
import Input from './components/input/jt-input.vue'
import InputSearch from './components/input-search/jt-input-search.vue'
import Toolbar from './components/toolbar/jt-toolbar.vue'
import ToolbarButton from './components/toolbar/jt-toolbar-button.vue'
import ToolbarDivider from './components/toolbar/jt-toolbar-divider.vue'
import ToggleBar from './components/toggle-bar/jt-toggle-bar.vue'
import ToggleBarButton from './components/toggle-bar/jt-toggle-bar-button.vue'

export default {
  install(Vue) {
    Vue.component(Border.name, Border)
    Vue.component(Button.name, Button)
    Vue.component(Breadcrumb.name, Breadcrumb)
    Vue.component(Input.name, Input)
    Vue.component(InputSearch.name, InputSearch)
    Vue.component(ToggleBar.name, ToggleBar)
    Vue.component(ToggleBarButton.name, ToggleBarButton)
    Vue.component(Toolbar.name, Toolbar)
    Vue.component(ToolbarButton.name, ToolbarButton)
    Vue.component(ToolbarDivider.name, ToolbarDivider)
  }
}

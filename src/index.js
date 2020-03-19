import './main.styl'
import './theme.scss'

import Border from './components/border/jt-border.vue'
import Button from './components/button/jt-button.vue'
import ButtonGroup from './components/button/jt-button-group.vue'
import Breadcrumb from './components/breadcrumb/jt-breadcrumb.vue'
import Input from './components/input/jt-input.vue'
import InputNumber from './components/input-number/jt-input-number.vue'
import InputSearch from './components/input-search/jt-input-search.vue'
import Label from './components/label/jt-label.vue'
import List from './components/list/jt-list.vue'
import Panel from './components/panel/jt-panel.vue'
import PanelButton from './components/panel/jt-panel-button.vue'
import RotatedView from './components/rotated-view/jt-rotated-view.vue'
import Toolbar from './components/toolbar/jt-toolbar.vue'
import ToolbarButton from './components/toolbar/jt-toolbar-button.vue'
import ToolbarDivider from './components/toolbar/jt-toolbar-divider.vue'
import ToggleBar from './components/toggle-bar/jt-toggle-bar.vue'
import ToggleBarButton from './components/toggle-bar/jt-toggle-bar-button.vue'

export default {
  install(Vue) {
    Vue.component(Border.name, Border)
    Vue.component(Button.name, Button)
    Vue.component(ButtonGroup.name, ButtonGroup)
    Vue.component(Breadcrumb.name, Breadcrumb)
    Vue.component(Input.name, Input)
    Vue.component(InputNumber.name, InputNumber)
    Vue.component(InputSearch.name, InputSearch)
    Vue.component(Label.name, Label)
    Vue.component(List.name, List)
    Vue.component(Panel.name, Panel)
    Vue.component(PanelButton.name, PanelButton)
    Vue.component(RotatedView.name, RotatedView)
    Vue.component(ToggleBar.name, ToggleBar)
    Vue.component(ToggleBarButton.name, ToggleBarButton)
    Vue.component(Toolbar.name, Toolbar)
    Vue.component(ToolbarButton.name, ToolbarButton)
    Vue.component(ToolbarDivider.name, ToolbarDivider)
  }
}

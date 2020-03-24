import './theme.scss'

import Border from './border/jt-border.vue'
import Button from './button/jt-button.vue'
import ButtonGroup from './button/jt-button-group.vue'
import Breadcrumb from './breadcrumb/jt-breadcrumb.vue'
import Input from './input/jt-input.vue'
import InputNumber from './input-number/jt-input-number.vue'
import InputSearch from './input-search/jt-input-search.vue'
import Label from './label/jt-label.vue'
import List from './list/jt-list.vue'
import Panel from './panel/jt-panel.vue'
import PanelButton from './panel/jt-panel-button.vue'
import RotatedView from './rotated-view/jt-rotated-view.vue'
import Toolbar from './toolbar/jt-toolbar.vue'
import ToolbarButton from './toolbar/jt-toolbar-button.vue'
import ToolbarDivider from './toolbar/jt-toolbar-divider.vue'
import ToggleBar from './toggle-bar/jt-toggle-bar.vue'
import ToggleBarButton from './toggle-bar/jt-toggle-bar-button.vue'

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

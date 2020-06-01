import './theme.scss'

import Border from './border/jt-border.vue'
import Button from './button/jt-button.vue'
import ButtonGroup from './button/jt-button-group.vue'
import Breadcrumb from './breadcrumb/jt-breadcrumb.vue'
import ContainView from './contain-view/jt-contain-view.vue'
import Icon from './icon/jt-icon.vue'
import Input from './input/jt-input.vue'
import InputNumber from './input-number/jt-input-number.vue'
import InputSearch from './input-search/jt-input-search.vue'
import Label from './label/jt-label.vue'
import List from './list/jt-list.vue'
import Menu from './menu/jt-menu.vue'
import NavView from './nav-view/jt-nav-view.vue'
import Panel from './panel/jt-panel.vue'
import PanelButton from './panel/jt-panel-button.vue'
import RotatedView from './rotated-view/jt-rotated-view.vue'
import ScrollView from './scroll-view/jt-scroll-view.vue'
import SplitView from './split-view/jt-split-view.vue'
import SplitViewChild from './split-view/jt-split-view-child.vue'
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
    Vue.component(ContainView.name, ContainView)
    Vue.component(Icon.name, Icon)
    Vue.component(Input.name, Input)
    Vue.component(InputNumber.name, InputNumber)
    Vue.component(InputSearch.name, InputSearch)
    Vue.component(Label.name, Label)
    Vue.component(List.name, List)
    Vue.component(Menu.name, Menu)
    Vue.component(NavView.name, NavView)
    Vue.component(Panel.name, Panel)
    Vue.component(PanelButton.name, PanelButton)
    Vue.component(RotatedView.name, RotatedView)
    Vue.component(ToggleBar.name, ToggleBar)
    Vue.component(ScrollView.name, ScrollView)
    Vue.component(SplitView.name, SplitView)
    Vue.component(SplitViewChild.name, SplitViewChild)
    Vue.component(ToggleBarButton.name, ToggleBarButton)
    Vue.component(Toolbar.name, Toolbar)
    Vue.component(ToolbarButton.name, ToolbarButton)
    Vue.component(ToolbarDivider.name, ToolbarDivider)
  }
}

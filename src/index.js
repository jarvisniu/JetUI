import './theme.scss'

import Border from './border/jt-border.vue'
import Breadcrumb from './breadcrumb/jt-breadcrumb.vue'
import Button from './button/jt-button.vue'
import ButtonGroup from './button/jt-button-group.vue'
import Checkbox from './checkbox/jt-checkbox.vue'
import ContainView from './contain-view/jt-contain-view.vue'
import Drawer from './drawer/jt-drawer.vue'
import FoldTransition from './fold-transition/jt-fold-transition.vue'
import Icon from './icon/jt-icon.vue'
import Input from './input/jt-input.vue'
import InputNumber from './input-number/jt-input-number.vue'
import Label from './label/jt-label.vue'
import List from './list/jt-list.vue'
import Link from './link/jt-link.vue'
import Menu from './menu/jt-menu.vue'
import Panel from './panel/jt-panel.vue'
import PanelButton from './panel/jt-panel-button.vue'
import Popover from './popover/jt-popover.vue'
import Radio from './radio/jt-radio.vue'
import RotatedView from './rotated-view/jt-rotated-view.vue'
import ScrollView from './scroll-view/jt-scroll-view.vue'
import SplitView from './split-view/jt-split-view.vue'
import SplitViewChild from './split-view/jt-split-view-child.vue'
import Switch from './switch/jt-switch.vue'
import Table from './table/jt-table.vue'
import TableColumn from './table/jt-table-column.vue'
import Toolbar from './toolbar/jt-toolbar.vue'
import ToolbarButton from './toolbar/jt-toolbar-button.vue'
import ToolbarDivider from './toolbar/jt-toolbar-divider.vue'
import ToggleBar from './toggle-bar/jt-toggle-bar.vue'
import ToggleBarButton from './toggle-bar/jt-toggle-bar-button.vue'
import Tree from './tree/jt-tree.vue'
import TreeTable from './tree-table/jt-tree-table.vue'

export default {
  install(Vue) {
    Vue.component(Border.name, Border)
    Vue.component(Breadcrumb.name, Breadcrumb)
    Vue.component(Button.name, Button)
    Vue.component(ButtonGroup.name, ButtonGroup)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(ContainView.name, ContainView)
    Vue.component(Drawer.name, Drawer)
    Vue.component(FoldTransition.name, FoldTransition)
    Vue.component(Icon.name, Icon)
    Vue.component(Input.name, Input)
    Vue.component(InputNumber.name, InputNumber)
    Vue.component(Label.name, Label)
    Vue.component(Link.name, Link)
    Vue.component(List.name, List)
    Vue.component(Menu.name, Menu)
    Vue.component(Panel.name, Panel)
    Vue.component(PanelButton.name, PanelButton)
    Vue.component(Popover.name, Popover)
    Vue.component(Radio.name, Radio)
    Vue.component(RotatedView.name, RotatedView)
    Vue.component(ScrollView.name, ScrollView)
    Vue.component(SplitView.name, SplitView)
    Vue.component(SplitViewChild.name, SplitViewChild)
    Vue.component(Switch.name, Switch)
    Vue.component(ToggleBar.name, ToggleBar)
    Vue.component(Table.name, Table)
    Vue.component(TableColumn.name, TableColumn)
    Vue.component(ToggleBarButton.name, ToggleBarButton)
    Vue.component(Toolbar.name, Toolbar)
    Vue.component(ToolbarButton.name, ToolbarButton)
    Vue.component(ToolbarDivider.name, ToolbarDivider)
    Vue.component(Tree.name, Tree)
    Vue.component(TreeTable.name, TreeTable)
  }
}

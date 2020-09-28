// Tree Operations

function buildFromList(list) {
  const itemIdMap = {}
  const root = []
  list.forEach((item) => {
    item.children = []
    itemIdMap[item.id] = item
    if (item.parent == null) root.push(item)
  })
  list.forEach((item) => {
    if (item.parent != null) {
      itemIdMap[item.parent].children.push(item)
    }
  })
  return root
}

function getTreeList(tree, childrenKey) {
  if (typeof tree === 'object' && !Array.isArray(tree)) {
    tree = tree[childrenKey]
    if (tree == null) throw new Error('Given a tree please')
  }
  return tree
}

function traverse(tree, fn, childrenKey = 'children') {
  const list = getTreeList(tree, childrenKey)
  _traverse(list)

  function _traverse(list, level = 0) {
    list.forEach((item, index) => {
      fn({
        node: item,
        parentList: list,
        level,
        index,
        count: list.length,
      })
      if (item[childrenKey]) {
        _traverse(item[childrenKey], level + 1)
      }
    })
  }
}

function trim(tree, fn, childrenKey = 'children') {
  const list = getTreeList(tree, childrenKey)
  _traverse(list)

  function _traverse(list) {
    // list = list.filter((item) => !fn(item))
    for (let i = 0; i < list.length; i++) {
      if (fn(list[i])) {
        list.splice(i, 1)
        i -= 1
      }
    }
    list.forEach((item) => {
      if (item[childrenKey]) {
        _traverse(item[childrenKey])
      }
    })
  }
}

export default {
  buildFromList,
  traverse,
  trim,
}

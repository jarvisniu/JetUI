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
async function traverse(tree, visit, childrenKey = 'children') {
  const rootIsList = Array.isArray(tree)
  const rootNode = rootIsList ? wrapToNode(tree, childrenKey) : tree
  await _traverse(rootNode)

  async function _traverse(node, level = 0) {
    const list = node[childrenKey]
    if (list == null) return
    for(let i = 0; i < list.length; i++) {
      const item = list[i]
      await visit({
        node: item,
        index: i,
        level,
        parent: rootIsList && level === 0 ? null : node,
        list,
        count: list.length,
      })
      if (item[childrenKey]) {
        await _traverse(item, level + 1)
      }
    }
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

// private --------------------------------------------------------------------

function wrapToNode(arr, childrenKey) {
  return { [childrenKey]: arr }
}

// export ---------------------------------------------------------------------

export default {
  buildFromList,
  traverse,
  trim,
}

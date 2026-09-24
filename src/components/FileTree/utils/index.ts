import type { Tree, TreeItemType } from '@/types'

export const transformTree = (tree: Tree): TreeItemType[] =>
  Object.entries(tree).map(([name, node]) => {
    return {
      name,
      type: node.type,
      children: node.type === 'folder' ? transformTree(node.children) : [],
    }
  })

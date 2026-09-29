type FileNode = {
  type: 'file'
}

type FolderNode = {
  type: 'folder'
  children: Record<string, TreeNode>
}

type TreeNode = FileNode | FolderNode

export type Tree = Record<string, TreeNode>

export type TreeItemType = {
  name: string
  type: 'file' | 'folder'
  children: TreeItemType[]
}

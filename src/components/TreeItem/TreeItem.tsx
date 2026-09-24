import { useState } from 'react'
import { TreeList } from '@components/TreeList'
import type { TreeItemType } from '@/types'
import './TreeItem.css'

export function TreeItem({ item }: { item: TreeItemType }) {
  const [isOpen, setIsOpen] = useState(false)

  if (item.type === 'file') {
    return <li className="tree__file">📄 {item.name}</li>
  }

  return (
    <li>
      <button
        type="button"
        className="tree__toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '📂' : '📁'} {item.name}
      </button>
      {isOpen && <TreeList items={item.children} />}
    </li>
  )
}

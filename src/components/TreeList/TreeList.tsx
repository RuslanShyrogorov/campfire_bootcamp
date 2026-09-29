import type { TreeItemType } from '@/types'
import { TreeItem } from '@components/TreeItem'
import './TreeList.css'

export function TreeList({ items }: { items: TreeItemType[] }) {
  return (
    <ul className="tree__list">
      {items.map((item, index) => (
        <TreeItem
          key={index}
          item={item}
        />
      ))}
    </ul>
  )
}

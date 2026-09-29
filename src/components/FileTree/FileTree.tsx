import { useEffect, useState } from 'react'
import './FileTree.css'
import type { Tree } from '@/types'
import { TreeList } from '@components/TreeList'
import { transformTree } from './utils'

export function FileTree() {
  const [data, setData] = useState<Tree | null>(null)

  useEffect(() => {
    fetch('http://localhost:3001/root')
      .then((res): Promise<Tree> => res.json())
      .then(setData)
  }, [])

  const items = data ? transformTree(data) : []

  return (
    <div className="tree">
      <h2>List:</h2>
      {data ? <TreeList items={items} /> : <p>Loading...</p>}
    </div>
  )
}

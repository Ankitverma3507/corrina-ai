'use client'

import useSideBar from '@/context/use-sidebar'
import React from 'react'

type Props = {
    domains:
    |{
        id:string
        name:string
        icon:string
    }[]
    |null
    |undefined
}

const Sidebar = ({domains}: Props) => {
  const {expand, onExpand,page,onSignOut}= useSideBar();
    return (
    <div>Sidebar</div>
  )
}

export default Sidebar
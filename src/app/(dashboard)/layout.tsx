import { onLoginUser } from '@/actions/auth'
import { ChatProvider } from '@/context/use-chat-context'
import React from 'react'

type Props = {
    childred: React.ReactNode
}

const OwnerLayout = async ({childred}: Props) => {
    const authenticated= await onLoginUser()
    if(!authenticated) return null
  return (
        <ChatProvider>
            <div>
                
            </div>
        </ChatProvider>
  )
}

export default OwnerLayout
import React from 'react'

function PublicLayout({ children } : { children: React.ReactNode }) {
  return (
    <div>
        {children}
    </div>
  )
}

export default PublicLayout
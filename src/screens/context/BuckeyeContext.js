import React from 'react'

const BuckeyeContext = React.createContext()

export const BuckeyeProvider = ({ children }) => {
    return <BuckeyeContext.Provider>
        {children}
    </BuckeyeContext.Provider>
}
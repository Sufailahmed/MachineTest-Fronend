import React, { createContext, useState } from 'react'

export const isAuthTokenContext=createContext();


function ContextShare({children}) {
    //children is a predefined props used to share data between components
    //create a state that need to be shared
    

    const [isAuthToken,setIsAuthToken]=useState(false)
    
    
      return (
      <>
    
          <isAuthTokenContext.Provider value={{isAuthToken,setIsAuthToken}}>
          {children}
          </isAuthTokenContext.Provider>
         
  
      </>
      )
    }
    
    export default ContextShare
import React from 'react'

const Error = ({errormessage, children}) => {
  return (
    <div>
        <h2>Der er opstået en fejl ...</h2>
        {
            errormessage && <p>{errormessage}</p>
        }

        { children } {/*Skal hedde children, og kan ikke laves om (eller en god ide ikke at gøre det) */}

    </div>
  )
}

export default Error
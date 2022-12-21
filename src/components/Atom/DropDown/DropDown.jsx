import React from 'react'

function DropDown({ children }) {
    return (
        <div className="position-relative">
            <div className="position-fixed full overlay"></div>
            {children}
        </div>
    )
}

export default DropDown
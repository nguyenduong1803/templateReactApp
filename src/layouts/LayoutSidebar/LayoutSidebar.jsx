import React from 'react';

function LayoutSidebar({ children }) {
   return (
      <div>
         <h2>Head</h2>
         {children}
         <h2>food</h2>
      </div>
   );
}

export default LayoutSidebar;

import React from 'react'

import { openPopupWidget } from 'react-calendly'

const Calendly = ({ url }) => {
  const onClick = () => openPopupWidget({ url })

  return (
    <div>
      <button
        className="Button Button--Solid"
        aria-label="Schedule a time"
        onClick={onClick}
      >
        Schedule a time
      </button>
    </div>
  )
}

export default Calendly

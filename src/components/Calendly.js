import React from 'react'

import { openPopupWidget } from 'react-calendly'

const Calendly = ({ url, prefill, pageSettings, utm }) => {
  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm })

  return (
    <div className="col-lg-4 my-auto">
      <button className="Button Button--Outline" onClick={onClick}>
        Schedule a time
      </button>
    </div>
  )
}

export default Calendly

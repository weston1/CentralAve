import React from 'react'

import { openPopupWidget } from 'react-calendly'

const Calendly = ({ url, prefill, pageSettings, utm }) => {
  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm })

  return (
    <div className="col-lg-4 my-auto">
      <button className="Button Button--Solid" onClick={onClick}>
        Schedule a time to meet
      </button>
    </div>
  )
}

export default Calendly

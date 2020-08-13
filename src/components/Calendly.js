import React from 'react'

import { openPopupWidget } from 'react-calendly'

const CustomButton = ({ url, prefill, pageSettings, utm }) => {
  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm })

  return (
    <button className="Button" onClick={onClick}>
      Schedule a time to meet
    </button>
  )
}

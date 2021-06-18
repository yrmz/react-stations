// DO NOT DELETE
import React from 'react'
import PropTypes from 'prop-types'

function DogImage(props) {
  return (
    <div className="image">
      <img src={props.dogUrl} />
    </div>
  )
}

export default DogImage.PropTypes = {
  dogUrl: PropTypes.string,
}

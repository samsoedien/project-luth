import React from 'react'
import PropTypes from 'prop-types'

function Lights(props) {
  return (
    <>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 20]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      {/* <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
    </>
  )
}

Lights.propTypes = {}

export default Lights

import { createContext, useContext, useState } from 'react'
import { ECutawayOption } from '../features/3d-configurator/configurationOptions'

const ConfiguratorContext = createContext({})

export const ConfiguratorProvider = (props) => {
  console.log(props)
  const [material, setMaterial] = useState('Mahogany')
  // const [cutaway, setCutaway] = useState<ECutawayOption>(ECutawayOption.Venetian)

  return (
    <ConfiguratorContext.Provider
      value={{
        material,
        setMaterial,
        // cutaway,
        // setCutaway,
      }}
    >
      {props.children}
    </ConfiguratorContext.Provider>
  )
}

export const useConfiguration = () => {
  const context = useContext(ConfiguratorContext)
  return context
}

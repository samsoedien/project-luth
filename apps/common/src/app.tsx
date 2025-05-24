import './app.css'
import Configurator from './features/Configurator'
import Scene from './features/Scene'

import AcousticGuitar from './components/AcousticGuitar'

// const LuthModel = withMeshConfiguration(LuthAcoustic)

// import { ConfiguratorProvider } from './features/Configurator/ConfiguratorContext'
import { useFrame } from '@react-three/fiber'

export function App() {
  return (
    <div className="app">
      <>
        <Scene isDebug={true}>
          {/* <LuthModel /> */}
          <AcousticGuitar />
        </Scene>
        <Configurator />
      </>
    </div>
  )
}

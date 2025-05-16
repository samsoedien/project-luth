import './app.css'
import Configurator from './features/Configurator'
import Scene from './features/Scene'
import withMeshConfiguration from './components/withMeshConfiguration'

import LuthAcoustic from '~/_generated/LuthAcoustic'
import { Box } from '@react-three/drei'

const LuthModel = withMeshConfiguration(LuthAcoustic)

// import { ConfiguratorProvider } from './features/Configurator/ConfiguratorContext'

export function App() {
  return (
    <div className="app">
      <>
        <Scene isDebug={true}>
          <LuthModel />
        </Scene>
        <Configurator />
      </>
    </div>
  )
}

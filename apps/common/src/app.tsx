import './app.css'
import Configurator from './features/Configurator'
import Scene from './features/Scene'
import { ConfiguratorProvider } from './features/Configurator/ConfiguratorContext'

export function App() {
  return (
    // <div className="app">
    // <ConfiguratorProvider>
    <>
      <Scene />
      <Configurator />
    </>
    // </ConfiguratorProvider>
    // </div>
  )
}

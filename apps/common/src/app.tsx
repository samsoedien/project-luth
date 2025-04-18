import './app.css'
import Configurator from './features/Configurator'
import Scene from './features/Scene'

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

import { Leva, useControls } from 'leva'
import { useConfigurationStore } from '../store/store'

import {
  ELuthComponent,
  luthBaseDeps,
  luthBodyDeps,
  luthSoundboardDeps,
} from '~/models/configuration.model'
import BodyOptions from './options/BodyOptions'
import SoundboardOptions from './options/SoundboardOptions'
import ScaleOptions from './options/ScaleOptions'
import BackOptions from './options/BackOptions'
import NeckOptions from './options/NeckOptions'
import RosetteOptions from './options/RosetteOptions'
import KerflingOptions from './options/KerflingOptions'
import BaseOptions from './options/BaseOptions'
import ConfiguratorContext from './ConfiguratorContext'
import ConfiguratorScope from './ConfiguratorScope'

export default function Configurator() {
  const scope = useConfigurationStore((state) => state.scope)
  const setScope = useConfigurationStore((state) => state.setScope)

  const setControls = useConfigurationStore((state) => state.setControls)

  const undo = useConfigurationStore((state) => state.undo)
  const redo = useConfigurationStore((state) => state.redo)

  const saveConfiguration = useConfigurationStore((state) => state.saveConfiguration)
  const loadConfiguration = useConfigurationStore((state) => state.loadConfiguration)

  const componentVisibility = useConfigurationStore((state) => state.componentVisibility)
  console.log('Component Visibility:', componentVisibility)

  const history = useConfigurationStore((state) => state.history)
  console.log('History:', history)

  useControls('Scope', {
    scope: {
      options: Object.values(ELuthComponent) as ELuthComponent[],
      value: scope,
      onChange: (value: ELuthComponent) => {
        setScope(value)

        setControlsFromScope(value)
      },
    },
  })

  const setControlsFromScope = (scope: ELuthComponent) => {
    switch (scope) {
      case ELuthComponent.Base:
        setControls({
          rotation: [0, -Math.PI / 5, 0],
          zoom: undefined,
          polar: undefined,
          azimuth: undefined,
          snap: false,
        })
        break
      case ELuthComponent.Body:
        setControls({
          rotation: [0, -Math.PI / 5, 0],
          zoom: undefined,
          polar: undefined,
          azimuth: undefined,
          snap: false,
        })
        break
      case ELuthComponent.Scale:
        setControls({
          rotation: [0, 0, -Math.PI / 2],
          zoom: undefined,
          polar: undefined,
          azimuth: undefined,
          snap: true,
        })
        break
      case ELuthComponent.Soundboard:
        setControls({
          rotation: [0, 0, 0],
          zoom: 2,
          polar: [-Math.PI / 3, Math.PI / 3],
          azimuth: [-Math.PI / 4, Math.PI / 4],
          snap: true,
        })

        break
      case ELuthComponent.Braces:
        setControls({
          rotation: [-Math.PI / 3, Math.PI, 0],
          zoom: 2,
          polar: [-Math.PI / 3, Math.PI / 3],
          azimuth: [-Math.PI / 4, Math.PI / 4],
          snap: true,
        })

        break
      case ELuthComponent.Back:
        setControls({
          rotation: [Math.PI / 6, Math.PI - Math.PI / 8, 0],
          zoom: 2,
          polar: [-Math.PI / 3, Math.PI / 3],
          azimuth: [-Math.PI / 4, Math.PI / 4],
          snap: true,
          // snap: { mass: 5, tension: 140 },
          // config: { mass: 1, tension: 80 },
        })
        break
      case ELuthComponent.Sides:
        setControls({
          rotation: [-Math.PI / 2.5, 0, -Math.PI / 3],
          zoom: 2,
          polar: [-Math.PI / 3, Math.PI / 3],
          azimuth: [-Math.PI / 4, Math.PI / 4],
          snap: true,
          // snap: { mass: 5, tension: 140 },
          // config: { mass: 1, tension: 80 },
        })
        break
      case ELuthComponent.Binding:
        setControls({
          rotation: [0, -Math.PI / 3, -Math.PI / 5],
          zoom: 2,
          polar: [-Math.PI / 3, Math.PI / 3],
          azimuth: [-Math.PI / 4, Math.PI / 4],
          snap: true,
          // snap: { mass: 5, tension: 140 },
          // config: { mass: 1, tension: 80 },
        })
        break
      case ELuthComponent.EndGraft:
        setControls({
          rotation: [-Math.PI / 2, 0, 0],
          zoom: 2,
          polar: [-Math.PI / 3, Math.PI / 3],
          azimuth: [-Math.PI / 4, Math.PI / 4],
          snap: true,
          // snap: { mass: 5, tension: 140 },
          // config: { mass: 1, tension: 80 },
        })
        break
      case ELuthComponent.Neck:
        setControls({
          rotation: [0, -Math.PI / 3, -Math.PI / 5],
          zoom: 0.7,
          polar: [-Math.PI / 3, Math.PI / 3],
          azimuth: [-Math.PI / 4, Math.PI / 4],
          snap: true,
          // snap: { mass: 5, tension: 140 },
          // config: { mass: 1, tension: 80 },
        })

        break
    }
  }

  const handleSave = () => {
    saveConfiguration()
    alert('Configuration saved to localStorage!')
  }

  const handleLoad = () => {
    const saved = localStorage.getItem('guitar-config')
    if (saved) {
      try {
        const config = JSON.parse(saved)
        loadConfiguration(config)
        alert('Configuration loaded!')
      } catch (e) {
        console.error('Failed to parse configuration:', e)
        alert('Error loading configuration.')
      }
    } else {
      alert('No saved configuration found.')
    }
  }

  return (
    <div className="relative">
      <Leva />
      <BaseOptions />
      <BodyOptions />
      <ScaleOptions />
      <SoundboardOptions />
      <RosetteOptions />
      <BackOptions />
      <NeckOptions />
      <KerflingOptions />

      <div
        style={{
          position: 'absolute',
          bottom: '48px',
          left: '48px',
          background: 'white',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          padding: '16px',
          borderRadius: '8px',
        }}
      >
        <div>
          <button onClick={handleLoad}>Load configuration</button>
          <button onClick={handleSave}>Save configuration</button>
        </div>
        <br />
        <div>
          <button onClick={undo}>Undo Action</button>
          <button onClick={redo}>Redo Action</button>
        </div>
      </div>
      <ConfiguratorScope />
      <ConfiguratorContext />
    </div>
  )
}

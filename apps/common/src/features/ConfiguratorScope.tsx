import { ELuthComponent } from '~/models/configuration.model'
import { useConfigurationStore } from '../store/store'

export default function ConfiguratorContext() {
  const scope = useConfigurationStore((state) => state.scope)
  const setScope = useConfigurationStore((state) => state.setScope)

  const resetScope = () => {
    setScope(ELuthComponent.Base)
  }

  return (
    <>
      {scope !== ELuthComponent.Base ? (
        <div className="relative">
          <div
            style={{
              position: 'absolute',
              top: '96px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '12px',
              background: 'white',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              padding: '8px 24px',
              borderRadius: '8px',
            }}
          >
            {scope}
            <button
              style={{
                margin: '0 12px',
              }}
              onClick={resetScope}
            >
              Reset
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}

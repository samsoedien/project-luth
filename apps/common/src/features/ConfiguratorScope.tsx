import { ELuthComponent } from '~/models/configuration.model'
import { useConfigurationStore } from '../store/store'
import { getComponentBreadcrumb } from '~/helpers/getComponentScope'

export default function ConfiguratorContext() {
  const activeComponent = useConfigurationStore((state) => state.activeComponent)
  const setActiveComponent = useConfigurationStore((state) => state.setActiveComponent)
  console.log('activeComponent', activeComponent)

  const resetActiveComponent = () => {
    setActiveComponent(ELuthComponent.Base)
  }

  return (
    <>
      {activeComponent !== ELuthComponent.Base ? (
        <div className="relative">
          <div className="absolute top-[96px] left-1/2 -translate-x-1/2 rounded-lg bg-white p-2 text-[12px] shadow-md">
            {activeComponent}
            <button
              className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600"
              onClick={resetActiveComponent}
            >
              Reset
            </button>
            {getComponentBreadcrumb(activeComponent)}
          </div>
        </div>
      ) : null}
    </>
  )
}

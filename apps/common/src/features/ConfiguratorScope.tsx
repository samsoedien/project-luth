import { ELuthComponent } from '~/models/configuration.model'
import { useConfigurationStore } from '../store/store'
import { getComponentBreadcrumb } from '~/helpers/getComponentScope'

export default function ConfiguratorContext() {
  const scope = useConfigurationStore((state) => state.scope)
  const setScope = useConfigurationStore((state) => state.setScope)
  console.log('scope', scope)

  const resetScope = () => {
    setScope(ELuthComponent.Base)
  }

  return (
    <>
      {scope !== ELuthComponent.Base ? (
        <div className="relative">
          <div className="absolute top-[96px] left-1/2 -translate-x-1/2 rounded-lg bg-white p-2 text-[12px] shadow-md">
            {scope}
            <button
              className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600"
              onClick={resetScope}
            >
              Reset
            </button>
            {getComponentBreadcrumb(scope)}
          </div>
        </div>
      ) : null}
    </>
  )
}

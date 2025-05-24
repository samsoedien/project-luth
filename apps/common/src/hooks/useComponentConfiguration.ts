import { getConfiguredComponent } from '~/helpers/meshUtils'
import { ELuthComponent } from '~/models/configuration.model'
import { useConfigurationStore } from '~/store/store'

export const useComponentConfigurations = () => {
  const configuration = useConfigurationStore((state) => state.configuration)

  const get = (component: ELuthComponent) => getConfiguredComponent(configuration, component)

  return {
    soundboardConfiguration: get(ELuthComponent.Soundboard),
    rosetteConfiguration: get(ELuthComponent.Rosette),
    sidesConfiguration: get(ELuthComponent.Sides),
    // add more here...
  }
}

import { ELuthComponent } from '~/models/configuration.model'
import { useConfigurationStore } from '~/store/store'

export function useTransparantMaterialProps(component: ELuthComponent): MeshStandardMaterialProps {
  const componentVisibility = useConfigurationStore((state) => state.componentVisibility)
  const isActive = componentVisibility.has(component)

  if (!isActive) {
    return {
      transparent: true,
      opacity: 0.1,
      depthWrite: false,
      color: 'white',
    }
  }
  return {
    transparent: false,
    opacity: 1,
    depthWrite: true,
    color: 'white',
  }
}

interface MeshStandardMaterialProps {
  transparent: boolean
  opacity: number
  depthWrite: boolean
  color: string
}

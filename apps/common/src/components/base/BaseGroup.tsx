import { ELuthComponent, IMeshConfiguration } from '~/models/configuration.model'
import { EBaseOrientationOption } from '~/models/options.model'
import { useConfigurationStore } from '~/store/store'

export interface IBaseGroupProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
  children: React.ReactNode
}

export default function BaseGroup({ meshConfig, children }: IBaseGroupProps) {
  const { orientation } = useConfigurationStore((state) => state.baseOptions)

  return (
    <group
      name={meshConfig.name}
      dispose={null}
      scale={orientation === EBaseOrientationOption.LeftHanded ? [-1, 1, 1] : [1, 1, 1]}
    >
      {children}
    </group>
  )
}

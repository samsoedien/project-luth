import { ELuthComponent, IMeshConfiguration } from '~/models/configuration.model'

export interface IScaleGroupProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
  children: React.ReactNode
}

export default function ScaleGroup({ meshConfig, children }: IScaleGroupProps) {
  return (
    <group name={meshConfig.name} dispose={null}>
      {children}
    </group>
  )
}

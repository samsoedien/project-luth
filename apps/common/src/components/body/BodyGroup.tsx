import { ELuthComponent, IMeshConfiguration } from '~/models/configuration.model'

export interface IBodyGroupProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
  children: React.ReactNode
}

export default function BodyGroup({ meshConfig, children }: IBodyGroupProps) {
  return (
    <group name={meshConfig.name} dispose={null}>
      {children}
    </group>
  )
}

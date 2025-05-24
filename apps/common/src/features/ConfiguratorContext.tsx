import { useConfigurationStore } from '../store/store'

export default function ConfiguratorContext() {
  const context = useConfigurationStore((state) => state.context.hoveredMesh)
  const componentVisibility = useConfigurationStore((state) => state.componentVisibility)

  return (
    <div className="relative">
      <div className="absolute right-[48px] bottom-[48px] text-[12px]">
        {context}
        <br />
        {[...componentVisibility].join(', ') || 'None'}
      </div>
    </div>
  )
}

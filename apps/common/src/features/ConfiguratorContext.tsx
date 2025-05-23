import { useConfigurationStore } from '../store/store'

export default function ConfiguratorContext() {
  const context = useConfigurationStore((state) => state.context.hoveredMesh)
  const componentVisibility = useConfigurationStore((state) => state.componentVisibility)

  return (
    <div className="relative">
      <div
        style={{
          position: 'absolute',
          bottom: '48px',
          right: '48px',
          fontSize: '12px',
        }}
      >
        {context}
        <br />
        {[...componentVisibility].join(', ') || 'None'}
      </div>
    </div>
  )
}

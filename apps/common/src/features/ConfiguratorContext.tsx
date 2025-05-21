import { useConfigurationStore } from '../store/store'

export default function ConfiguratorContext() {
  const context = useConfigurationStore((state) => state.context.hoveredMesh)

  return (
    <div className="relatve">
      <div
        style={{
          position: 'absolute',
          bottom: '48px',
          right: '48px',
          fontSize: '12px',
        }}
      >
        {context}
      </div>
    </div>
  )
}

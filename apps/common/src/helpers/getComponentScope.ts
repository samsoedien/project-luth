import { ELuthComponent, componentDepsMap } from '~/models/configuration.model'

/**
 * Recursively retrieves the full dependency scope of a given component.
 *
 * Starting from the specified root `component`, this function traverses
 * its dependency tree defined in `componentDepsMap`, collecting all
 * reachable components including itself.
 *
 * The result is returned as a `Set<ELuthComponent>`, ensuring uniqueness
 * and efficient lookup for visibility toggling, filtering, or rendering logic.
 *
 * This function is safe against circular dependencies due to its internal
 * tracking via a `visited` set.
 *
 * @param component - The root `ELuthComponent` from which to begin the traversal.
 * @returns A `Set` of all components in the dependency scope of the given component.
 *
 * @example
 * ```ts
 * const scope = getComponentScope(ELuthComponent.Body);
 * console.log(scope.has(ELuthComponent.Soundboard)); // true, if Soundboard is a dependency of Body
 * ```
 */
export function getComponentScope(component: ELuthComponent): Set<ELuthComponent> {
  const visited = new Set<ELuthComponent>()

  function traverse(comp: ELuthComponent) {
    if (visited.has(comp)) return
    visited.add(comp)

    const children = componentDepsMap[comp] ?? []
    for (const child of children) {
      traverse(child)
    }
  }

  traverse(component)
  return visited
}

// Build reverse map: child => parent
const parentMap: Partial<Record<ELuthComponent, ELuthComponent>> = {}

for (const [parent, children] of Object.entries(componentDepsMap) as [
  ELuthComponent,
  readonly ELuthComponent[],
][]) {
  for (const child of children) {
    parentMap[child] = parent
  }
}

/**
 * Constructs a breadcrumb path from the root component to the specified leaf component.
 *
 * @param component - The leaf `ELuthComponent` to build the breadcrumb path for.
 * @returns An array representing the hierarchy from the root to the given component.
 *
 * @example
 * ```ts
 * getComponentBreadcrumb(ELuthComponent.Rosette)
 * // ➜ ['Body', 'Soundboard', 'Rosette']
 * ```
 */
export function getComponentBreadcrumb(component: ELuthComponent): ELuthComponent[] {
  const path: ELuthComponent[] = []
  let current: ELuthComponent | undefined = component

  while (current) {
    path.unshift(current)
    current = parentMap[current]
  }

  return path
}

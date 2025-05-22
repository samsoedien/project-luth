import { StateCreator } from 'zustand'
import { IOptionsStoreState, StoreState } from './store'

export interface IHistoryStoreState {
  history: IOptionsStoreState[]
  future: IOptionsStoreState[]
  undo: () => void
  redo: () => void
}

export const createHistorySlice: StateCreator<StoreState, [], [], IHistoryStoreState> = (
  set,
  get,
) => ({
  history: [],
  future: [],
  undo: () => {
    const { history, future, ...currentState } = get()
    if (history.length === 0) return

    const previous = history[history.length - 1]
    const newHistory = history.slice(0, -1)

    set({
      ...previous,
      history: newHistory,
      future: [currentState as IOptionsStoreState, ...future],
    })
  },

  redo: () => {
    const { history, future, ...currentState } = get()
    if (future.length === 0) return

    const next = future[0]
    const newFuture = future.slice(1)

    set({
      ...next,
      history: [...history, currentState as IOptionsStoreState],
      future: newFuture,
    })
  },
})

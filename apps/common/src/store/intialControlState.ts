import { PresentationControlProps } from '@react-three/drei'
import { ELuthComponent } from '~/models/configuration.model'

interface IControlState {
  presentationControls: PresentationControlProps
  soundboard: {
    cameraPosition: [number, number, number]
  }
}

// export const initialControlState: IControlState = {
//   presentationControls: {
//     soundboard: {
//       cameraPosition: [0, 0, 0],
//     },
//   },
// }

const getPresentationControls = (scope: ELuthComponent): PresentationControlProps => {
  switch (scope) {
    case ELuthComponent.Base:
      return {
        rotation: [0, 0, 0],
        polar: undefined,
        azimuth: undefined,
        snap: false,
      }
    case ELuthComponent.Soundboard:
      return {
        rotation: [0, 0, 0],
        polar: [-Math.PI / 3, Math.PI / 3],
        azimuth: [-Math.PI / 4, Math.PI / 4],
        snap: { mass: 5, tension: 80 },
      }
    default:
      return {
        rotation: [0, 0, 0],
        polar: undefined,
        azimuth: undefined,
        snap: false,
      }
  }
}

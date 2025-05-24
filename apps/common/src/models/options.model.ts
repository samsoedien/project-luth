export enum EBaseOrientationOption {
  RightHanded = 'RightHanded',
  LeftHanded = 'LeftHanded',
}

export enum EBaseTypeOption {
  Acoustic = 'Acoustic',
  Classical = 'Classical',
}

export enum EBaseStringCountOption {
  Six = 'Six',
  Seven = 'Seven',
  Eight = 'Eight',
  Nine = 'Nine',
  Four = 'Four',
  Twelve = 'Twelve',
}

// export enum EBaseStringsSpacingOption {
//   Standard = 'Standard', // 45mm nut, 52mm saddle - Martin Style
//   Classical = 'Classical', // 52mm nut, 58mm saddle - Classical Style
//   Narrow = 'Narrow', // 42mm nut, 48mm saddle - Custom Style
// }

export enum EBaseFretJointOption {
  Fret14 = 'Fret14',
  Fret12 = 'Fret12',
}

/** Body options */

export enum EBodyShapeOption {
  Dreadnought = 'Dreadnought',
  Parlor = 'Parlor',
  // GrandAuditorium = 'GrandAuditorium',
  // GrandConcert = 'GrandConcert',
  // J45 = 'J45',
  // J200 = 'J200',
  // 'L-00' = 'L-00',
  // Jumbo = 'Jumbo',
  // OM = 'OM',
  // '0' = '0',
  // '00' = '00',
  // '000' = '000',
  // GSMini = 'GSMini',
}

export enum EBodyDepthOption {
  Standard = 'Standard',
  Thinline = 'Thinline',
  Deep = 'Deep',
}

export enum EBodyCutawayOption {
  None = 'None',
  Venetian = 'Venetian',
  Florentine = 'Florentine',
  Scalloped = 'Scalloped',
  // SquaredOff = 'SquaredOff',
}

export enum EBodyArmBevelOption {
  None = 'None',
  Standard = 'Standard',
  RyanStyle = 'RyanStyle',
  LaskinStyle = 'LaskinStyle',
  FlorentineBevel = 'FlorentineBevel',
  SoftBevel = 'SoftBevel',
  Inset = 'Inset',
}

export enum EBodyUpperRibBevelOption {
  None = 'None',
  Standard = 'Standard',
}

/** Scale options */

export enum EScaleLengthOption {
  Standard = 'Standard',
  Shorter = 'Shorter',
  // Travel-24 = 'Travel-24',
  // 'Gib24/75' = 'Gib24/75',
  // Custom25 = 'Custom25',
  // 'Martin25/4' = 'Martin25/4',
  // 'Taylor25/5' = 'Taylor25/5',
  // 'Baritone30/5' = 'Baritone30/5',
}

export enum EScaleAsymmetricalOption {
  None = 'None',
  FannedFrets = 'FannedFrets',
}

export enum EScaleAsymmeticalVerticalFretOption {
  None = 'None',
  Fret7 = 'Fret7',
  Fret0 = 'Fret0',
}

/** Soundboard options */

export enum ESoundboardSoundHoleOption {
  Standard = 'Standard',
  None = 'None',
  FHole = 'FHole',
  Oval = 'Oval',
  // DHole = 'DHole', Maccaferri
}

/** Back options */

export enum EBackMultiPieceOption {
  OnePiece = 'OnePiece',
  TwoPiece = 'TwoPiece',
  ThreePiece = 'ThreePiece',
}

/** Sides options */

export enum ESidesSoundPortOption {
  None = 'None',
  Oval = 'Oval',
  // Scalloped = 'Scalloped',
}

/** Binding options */

export enum EBindingThicknessOption {
  Standard = 'Standard',
  Thin = 'Thin',
}

/** Neck options */

export enum ENeckShapeOption {
  CShape = 'CShape',
  VShape = 'VShape',
  DShape = 'DShape',
  UShape = 'UShape',
}

export enum ENeckAssymmetricalOption {
  None = 'None',
  Asymmetrical = 'Asymmetrical',
}

export enum ENeckHeelShapeOption {
  Rounded = 'Rounded',
  Volute = 'Volute',
  Squared = 'Squared',
}
/** Headstock options */

export enum EHeadstockShapeOption {
  Standard = 'Standard',
  // Reverse = 'Reverse',
  // Telecaster = 'Telecaster',
  // Stratocaster = 'Stratocaster',
}

export enum EHeadstockTypeOption {
  Solid = 'Solid',
  Slotted = 'Slotted',
}

/** Fretboard options */

export enum EFretboardExtensionOption {
  Straight = 'Straight',
  Rounded = 'Rounded',
  Extended = 'Extended',
}

export enum EFretboardRadiusOption {
  Vintage = 'Vintage',
  Modern = 'Modern',
  Flat = 'Flat',
}

export enum EFretboardBindingOption {
  None = 'None',
  fretboardBinding = 'FretboardBinding',
}

export enum EFretboardScallopedFretsOption {
  None = 'None',
  Scalloped = 'Scalloped',
}

/** Bridge options */

export enum EBridgeTypeOption {
  Traditional = 'Traditional',
  BellyUp = 'BellyUp',
  Tailpiece = 'Tailpiece',
}

/** Pickguard options */

export enum EPickguardShapeOption {
  Standard = 'Standard',
  TearDrop = 'TearDrop',
  Martin = 'Martin',
  Taylor = 'Taylor',
  Hummingbird = 'Hummingbird',
  Dove = 'Dove',
  J45 = 'J45',
  J200 = 'J200',
  None = 'None',
}

/** Strings options */

export enum EHeelJointOption {
  Dovetail = 'Dovetail',
  BoltOn = 'BoltOn',
}

export enum ERosetteVariantOption {
  VariantA = 'VariantA',
  VariantB = 'VariantB',
}

export enum EBracingPatternOption {
  X = 'X',
  XScalloped = 'X-Scalloped',
  VClass = 'V-Class',
  Fan = 'Fan',
  Ladder = 'Ladder',
  None = 'None',
}

export enum EBackstripOption {
  None = 'None',
  Zigzag = 'Zigzag',
  Chevron = 'Chevron',
  Herringbone = 'Herringbone',
}

export enum EKerflingVariant {
  TraditionalKerfedLining = 'TraditionalKerfedLining',
  ReversedKerfedLining = 'ReversedKerfedLining',
  SolidLining = 'SolidLining',
  Tentellones = 'Tentellones',
  Traditional = 'Traditional',
  Lining = 'Lining',
}

export enum EPurflingVariantOption {
  Standard = 'Standard',
  Herringbone = 'Herringbone',
  Pearloid = 'Pearloid',
}

export enum EFretTypeOption {
  Standard = 'Standard',
  Jumbo = 'Jumbo',
}

export enum EPickupOption {
  None = 'None',
  Piezo = 'Piezo',
  Magnetic = 'Magnetic',
  InternalMic = 'InternalMic',
  DualSource = 'DualSource',
}

export enum ETonewoodOption {
  Mahogany = 'Mahogany',
}

export interface IBaseOptions {
  orientation: EBaseOrientationOption
  fretJoint: EBaseFretJointOption
}

export interface IBodyOptions {
  bodyShape: EBodyShapeOption
  bodyDepth: EBodyDepthOption
  cutaway: EBodyCutawayOption
  armBevel: EBodyArmBevelOption
}

export interface IScaleOptions {
  scaleLength: EScaleLengthOption
  assymetrical: EScaleAsymmetricalOption
}

export interface ISoundboardOptions {
  soundHole: ESoundboardSoundHoleOption
}

export interface IBackOptions {
  backMultiPiece: EBackMultiPieceOption
}

export interface ISidesOptions {
  soundPort: ESidesSoundPortOption
}

export interface IBindingOptions {
  thickness: EBindingThicknessOption
}

export interface INeckOptions {
  profileShape: ENeckShapeOption
  assymetrical: ENeckAssymmetricalOption
}

export interface IHeadstockOptions {
  type: EHeadstockTypeOption
  headstockShape: EHeadstockShapeOption
}

export interface IFretboardOptions {
  radius: EFretboardRadiusOption
  extension: EFretboardExtensionOption
  scallopedFrets: EFretboardScallopedFretsOption
}

export interface IBridgeOptions {
  variant: EBridgeTypeOption
}

export interface IPickguardOptions {
  shape: EPickguardShapeOption
}

export interface IStringsOptions {}

export interface IRosetteOptions {
  variant: ERosetteVariantOption
}

export interface IBracesOptions {
  bracePattern: EBracingPatternOption
}

export interface IBackStripOptions {}

export interface IKerflingOtions {
  variant: EKerflingVariant
}

export interface IHeelTailBlocksOptions {
  heelJoint: EHeelJointOption
}

export interface IPurflingOptions {
  variant: EPurflingVariantOption
}

export interface INutOptions {}

export interface ISaddleOptions {}

export interface IFretsOptions {}

export interface IEndGraftOptions {}

export interface IBaseOptionConfig<T> {
  label: string
  features: T
  userProfile?: Array<'fingerstyle' | 'pickstyle'>
  tooltip: string
  icon: string
  hidden?: boolean
  disabled?: boolean
  keywords?: string[]
}

interface IStringSpacing {
  nut: number
  saddle: number
}

// This enum needs to be declared somewhere
export enum EBaseStringsSpacingOption {
  Standard = 'Standard',
  Wide = 'Wide',
  Narrow = 'Narrow',
}

// Final config map using the correct Record syntax
export const baseOptions: Record<EBaseStringsSpacingOption, IBaseOptionConfig<IStringSpacing>> = {
  [EBaseStringsSpacingOption.Standard]: {
    label: 'String Spacing',
    features: {
      nut: 45,
      saddle: 52,
    },

    userProfile: ['fingerstyle'],
    tooltip: 'Standard spacing for most guitars, suitable for fingerstyle and pickstyle playing.',
    icon: 'strings',
    keywords: ['strings', 'spacing'],
  },
  [EBaseStringsSpacingOption.Narrow]: {
    label: 'String Spacing',
    features: {
      nut: 42,
      saddle: 48,
    },

    userProfile: ['fingerstyle'],
    tooltip: 'Standard spacing for most guitars, suitable for fingerstyle and pickstyle playing.',
    icon: 'strings',
  },
  [EBaseStringsSpacingOption.Wide]: {
    label: 'String Spacing',
    features: {
      nut: 52,
      saddle: 65,
    },
    userProfile: ['fingerstyle'],
    tooltip: 'Standard spacing for most guitars, suitable for fingerstyle and pickstyle playing.',
    icon: 'strings',
  },
}

// export interface IOptionConfig<T> {
//   label: string
//   features: T
//   userProfile?: Array<'fingerstyle' | 'pickstyle'>
//   tooltip: string
//   icon: string
//   hidden?: boolean
//   disabled?: boolean
// }

// export interface IOptions {
//   base: IBaseOptionConfig<IBaseOptions>
//   body: IBaseOptionConfig<IBodyOptions>
//   scale: IBaseOptionConfig<IScaleOptions>
//   soundboard: IBaseOptionConfig<ISoundboardOptions>
// }

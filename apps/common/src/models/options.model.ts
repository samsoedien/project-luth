export enum EGuitarStringsCountOption {
  Six = 'Six',
  Seven = 'Seven',
  Eight = 'Eight',
  Nine = 'Nine',
  Four = 'Four',
  Twelve = 'Twelve',
}

export enum EGuitarStringsSpacingOption {
  Standard = 'Standard',
  Narrow = 'Narrow',
  Wide = 'Wide',
}

/** Body options */

export enum EBodyShapeOption {
  Dreadnought = 'Dreadnought',
  // GrandConcert = 'GrandConcert',
  // Auditorium = 'Auditorium',
  // Jumbo = 'Jumbo',
  // OM = 'OM',
  Parlor = 'Parlor',
}

export enum EBodyOrientationOption {
  RightHanded = 'RightHanded',
  LeftHanded = 'LeftHanded',
}

export enum EBodyDepthOption {
  Standard = 'Standard',
  Thinline = 'Thinline',
}

export enum EBodyCutawayOption {
  None = 'None',
  Venetian = 'Venetian',
  Florentine = 'Florentine',
  Scalloped = 'Scalloped',
}

export enum EBodyArmBevelOption {
  None = 'None',
  Standard = 'Standard',
}

/** Scale options */

export enum EScaleLengthOption {
  Standard = 'Standard',
  // '24-7/8' = '24-7/8',
}

export enum EScaleAssymetrical {
  None = 'None',
  Assymetrical = 'Assymetrical',
}

export enum EScaleFretHeelJointOption {
  Fret14 = 'Fret14',
  Fret12 = 'Fret12',
}

/** Soundboard options */

export enum ESoundboardSoundHoleOption {
  Standard = 'Standard',
  None = 'None',
  FHole = 'FHole',
  Oval = 'Oval',
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
}

/** Sides options */

/** Binding options */

export enum EBindingThicknessOption {
  Standard = 'Standard',
  Thin = 'Thin',
}

/** Neck options */

export enum ENeckShapeOption {
  CShape = 'CShape',
  VShape = 'VShape',
}

export enum ENeckAssymmetricalOption {
  None = 'None',
  Asymmetrical = 'Asymmetrical',
}

/** Headstock options */

export enum EHeadstockShapeOption {
  Standard = 'Standard',
  // Reverse = 'Reverse',
  // Telecaster = 'Telecaster',
  // Stratocaster = 'Stratocaster',
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

export enum EBracePatternOption {
  X = 'X',
  VClass = 'V-Class',
  Fan = 'Fan',
  Ladder = 'Ladder',
  None = 'None',
}

export enum EKerflingVariant {
  Traditional = 'Traditional',
  Lining = 'Lining',
}

export enum EPurflingVariantOption {
  Standard = 'Standard',
  Herringbone = 'Herringbone',
}

export enum EFretTypeOption {
  Standard = 'Standard',
  Jumbo = 'Jumbo',
}

export enum ETonewoodOption {
  Mahogany = 'Mahogany',
}

export interface IBodyOptions {
  orientation: EBodyOrientationOption
  bodyShape: EBodyShapeOption
  bodyDepth: EBodyDepthOption
  cutaway: EBodyCutawayOption
  armBevel: EBodyArmBevelOption
}

export interface IScaleOptions {
  scaleLength: EScaleLengthOption
  assymetrical: EScaleAssymetrical
  fretHeelJoint: EScaleFretHeelJointOption
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
  headstockShape: EHeadstockShapeOption
}

export interface IFretboardOptions {
  radius: EFretboardRadiusOption
  extension: EFretboardExtensionOption
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
  bracePattern: EBracePatternOption
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

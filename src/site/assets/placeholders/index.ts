// Central helper for local placeholder assets
// Ensures no external network requests and maintains strict brand adherence

const BASE_PATH = '/assets/placeholders';

export const placeholderPaths: Record<string, string> = {
  heroLight: `${BASE_PATH}/hero-stone-light.svg`,
  heroDark: `${BASE_PATH}/hero-stone-dark.svg`,
  facadeLight: `${BASE_PATH}/facade-detail-light.svg`,
  facadeDark: `${BASE_PATH}/facade-detail-dark.svg`,
  textureHoned: `${BASE_PATH}/texture-honed.svg`,
  textureBushhammered: `${BASE_PATH}/texture-bushhammered.svg`,
  textureSandblasted: `${BASE_PATH}/texture-sandblasted.svg`,
  textureSawn: `${BASE_PATH}/texture-sawn.svg`,
  sampleBoard: `${BASE_PATH}/sample-board.svg`,
  inspectionCaliper: `${BASE_PATH}/inspection-caliper.svg`,
  workshopFloor: `${BASE_PATH}/workshop-floor.svg`,
  pointcloudExterior: `${BASE_PATH}/pointcloud-exterior.svg`,
  pointcloudInterior: `${BASE_PATH}/pointcloud-interior.svg`,
  beforeRaw: `${BASE_PATH}/before-raw.svg`,
  afterFinished: `${BASE_PATH}/after-finished.svg`,
  beforePhoto: `${BASE_PATH}/before-photo.svg`,
  afterPointcloud: `${BASE_PATH}/after-pointcloud.svg`,
  docsStructured: `${BASE_PATH}/docs-structured.svg`,
  cinematicTile1: `${BASE_PATH}/cinematic-tile-1.svg`,
  cinematicTile2: `${BASE_PATH}/cinematic-tile-2.svg`,
  cinematicTile3: `${BASE_PATH}/cinematic-tile-3.svg`,
  heroMarbleLight: `${BASE_PATH}/hero-marble-light.svg`,
  menuAbout: `${BASE_PATH}/menu-about.svg`,
  menuSolutions: `${BASE_PATH}/menu-solutions.svg`,
  menuEngineering: `${BASE_PATH}/menu-engineering.svg`,
  menuSupports: `${BASE_PATH}/menu-supports.svg`,
  menuContact: `${BASE_PATH}/menu-contact.svg`,
};

type PlaceholderKind = 'hero' | 'facade' | 'texture' | 'docs' | 'tile' | 'pointcloud' | 'slider' | 'menu';

export const getPlaceholder = (kind: PlaceholderKind, variant?: string): string => {
  switch (kind) {
    case 'hero':
      if (variant === 'lightmarble') return placeholderPaths.heroMarbleLight;
      return variant === 'light' ? placeholderPaths.heroLight : placeholderPaths.heroDark;
    case 'facade':
      return variant === 'light' ? placeholderPaths.facadeLight : placeholderPaths.facadeDark;
    case 'texture':
      const textures = [placeholderPaths.textureHoned, placeholderPaths.textureBushhammered, placeholderPaths.textureSandblasted, placeholderPaths.textureSawn];
      // Random deterministic-ish selection if no specific variant is matched
      return variant === 'honed' ? placeholderPaths.textureHoned : 
             variant === 'bushhammered' ? placeholderPaths.textureBushhammered :
             variant === 'sandblasted' ? placeholderPaths.textureSandblasted :
             variant === 'sawn' ? placeholderPaths.textureSawn : textures[Math.floor(Math.random() * textures.length)];
    case 'docs':
      return variant === 'structured' ? placeholderPaths.docsStructured : placeholderPaths.docsScattered;
    case 'tile':
      const tiles = [placeholderPaths.cinematicTile1, placeholderPaths.cinematicTile2, placeholderPaths.cinematicTile3];
      return tiles[Math.floor(Math.random() * tiles.length)];
    case 'pointcloud':
      return variant === 'interior' ? placeholderPaths.pointcloudInterior : placeholderPaths.pointcloudExterior;
    case 'slider':
      return variant === 'after' ? placeholderPaths.afterFinished : placeholderPaths.beforeRaw;
    default:
      return placeholderPaths.facadeLight;
  }
};

import { enableStandardPatches, enableAutoFreeze } from 'structurajs'

export {
  produce,
  produce as createNextState,
  produceWithPatches,
  snapshot as current,
  isDraft,
  isDraftable,
  applyPatches,
  freeze,
  original,
} from 'structurajs'
export type { UnFreeze as Draft, Patch } from 'structurajs'

enableStandardPatches(true)
enableAutoFreeze(true)

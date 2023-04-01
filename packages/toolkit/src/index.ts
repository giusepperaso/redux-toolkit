import { enableStandardPatches, enableAutoFreeze } from 'structurajs'

enableStandardPatches(true)
enableAutoFreeze(true)

export * from 'redux'
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

export { createSelector } from 'reselect'
export type {
  Selector,
  OutputParametricSelector,
  OutputSelector,
  ParametricSelector,
} from 'reselect'
export { createDraftSafeSelector } from './createDraftSafeSelector'
export type { ThunkAction, ThunkDispatch, ThunkMiddleware } from 'redux-thunk'

export {
  // js
  configureStore,
} from './configureStore'
export type {
  // types
  ConfigureEnhancersCallback,
  ConfigureStoreOptions,
  EnhancedStore,
} from './configureStore'
export type { DevToolsEnhancerOptions } from './devtoolsExtension'
export {
  // js
  createAction,
  getType,
} from './createAction'
export type {
  // types
  PayloadAction,
  PayloadActionCreator,
  ActionCreatorWithNonInferrablePayload,
  ActionCreatorWithOptionalPayload,
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
  ActionCreatorWithPreparedPayload,
  PrepareAction,
} from './createAction'
export {
  // js
  createReducer,
  buildCreateReducer,
} from './createReducer'
export type {
  // types
  Actions,
  CaseReducer,
  CaseReducers,
  CreateReducer,
  BuildCreateReducerConfiguration,
} from './createReducer'
export {
  // js
  createSlice,
  buildCreateSlice,
} from './createSlice'

export type {
  // types
  BuildCreateSliceConfiguration,
  CreateSlice,
  CreateSliceOptions,
  Slice,
  CaseReducerActions,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
  CaseReducerWithPrepare,
  SliceActionCreator,
} from './createSlice'
export {
  // js
  createImmutableStateInvariantMiddleware,
  isImmutableDefault,
} from './immutableStateInvariantMiddleware'
export type {
  // types
  ImmutableStateInvariantMiddlewareOptions,
} from './immutableStateInvariantMiddleware'
export {
  // js
  createSerializableStateInvariantMiddleware,
  findNonSerializableValue,
  isPlain,
} from './serializableStateInvariantMiddleware'
export type {
  // types
  SerializableStateInvariantMiddlewareOptions,
} from './serializableStateInvariantMiddleware'
export {
  // js
  getDefaultMiddleware,
} from './getDefaultMiddleware'
export type {
  // types
  ActionReducerMapBuilder,
} from './mapBuilders'
export { MiddlewareArray } from './utils'

export { createEntityAdapter } from './entities/create_adapter'
export type {
  Dictionary,
  EntityState,
  EntityAdapter,
  EntitySelectors,
  EntityStateAdapter,
  EntityId,
  Update,
  IdSelector,
  Comparer,
} from './entities/models'

export {
  createAsyncThunk,
  unwrapResult,
  miniSerializeError,
} from './createAsyncThunk'
export type {
  AsyncThunk,
  AsyncThunkOptions,
  AsyncThunkAction,
  AsyncThunkPayloadCreatorReturnValue,
  AsyncThunkPayloadCreator,
  SerializedError,
} from './createAsyncThunk'

export {
  // js
  isAllOf,
  isAnyOf,
  isPending,
  isRejected,
  isFulfilled,
  isAsyncThunkAction,
  isRejectedWithValue,
} from './matchers'
export type {
  // types
  ActionMatchingAllOf,
  ActionMatchingAnyOf,
} from './matchers'

export { nanoid } from './nanoid'

export { default as isPlainObject } from './isPlainObject'

export type {
  ListenerEffect,
  ListenerMiddleware,
  ListenerEffectAPI,
  ListenerMiddlewareInstance,
  CreateListenerMiddlewareOptions,
  ListenerErrorHandler,
  TypedStartListening,
  TypedAddListener,
  TypedStopListening,
  TypedRemoveListener,
  UnsubscribeListener,
  UnsubscribeListenerOptions,
  ForkedTaskExecutor,
  ForkedTask,
  ForkedTaskAPI,
  AsyncTaskExecutor,
  SyncTaskExecutor,
  TaskCancelled,
  TaskRejected,
  TaskResolved,
  TaskResult,
} from './listenerMiddleware/index'
export type { AnyListenerPredicate } from './listenerMiddleware/types'

export {
  createListenerMiddleware,
  addListener,
  removeListener,
  clearAllListeners,
  TaskAbortError,
} from './listenerMiddleware/index'

export {
  SHOULD_AUTOBATCH,
  prepareAutoBatched,
  autoBatchEnhancer,
} from './autoBatchEnhancer'
export type { AutoBatchOptions } from './autoBatchEnhancer'

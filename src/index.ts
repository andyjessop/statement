import { Machine } from 'xstate'
import {
  ActionObject,
  ActionType,
  Event,
  ParallelMachine,
  ParallelMachineConfig,
  StandardMachine,
  StandardMachineConfig,
  StateValue,
  MachineConfig
} from 'xstate/lib/types'

export interface ExtendedState {
  [propName: string]: any
}

export interface StateXAction {
  (event: Event, state: ExtendedState): any
}

export interface StateXActions {
  [propName: string]: StateXAction
}

export default (config: MachineConfig, actions?: StateXActions) => {
  const machine: StandardMachine | ParallelMachine = Machine(config)

  let currentState: StateValue = machine.initialState.value

  const extendedState = {}

  const dispatch = (event: Event) => {
    const nextState = machine.transition(currentState, event, extendedState)

    nextState.actions
      .map(action => (typeof action === 'string' ? action : action.type))
      .filter(key => actions && actions[key])
      .forEach(key => actions![key](event, dispatch))

    currentState = nextState.value
  }

  return {
    currentState,
    dispatch,
    machine,
    state: extendedState
  }
}

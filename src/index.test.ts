import createStore from './'
import mocks from './index.mocks'

describe('createStore', () => {
  test('should return dispatch function', () => {
    const store = createStore(mocks.minimal)

    expect(store.currentState).not.toBeUndefined()
    expect(store.dispatch).not.toBeUndefined()
    expect(store.machine).not.toBeUndefined()
    expect(store.state).not.toBeUndefined()
  })

  test('dispatching go should enter go state', () => {
    const store = createStore(mocks.minimal)
    debugger
    store.dispatch({ type: 'go' })
    expect(store.currentState).toEqual('go')
  })
})

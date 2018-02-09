import actions from './actions';
import createStore from './lib/create-store';
import machine from './machine';

export default createStore(machine, actions);

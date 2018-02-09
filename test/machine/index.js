import events from './events';
import states from './states';

export default {
  initial: states.IDLE,
  states: {
    [states.IDLE]: {
      on: {
        [events.PLAY]: states.PENDING_PLAY,
      },
    },
    [states.PENDING_PLAY]: {
      on: {
        [events.PLAY_CONFIRMED]: states.PLAY,
      },
    },
    [states.PLAY]: {
      on: {
        [events.STOP]: states.IDLE,
      },
    },
    [states.OBSERVE]: {
      on: {
        [events.STOP]: states.IDLE,
      },
    },
  },
};

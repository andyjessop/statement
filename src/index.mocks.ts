export default {
  minimal: {
    initial: 'start',
    states: {
      start: {
        on: {
          go: 'go'
        }
      },
      go: {
        on: {
          stop: 'start'
        }
      }
    }
  }
}

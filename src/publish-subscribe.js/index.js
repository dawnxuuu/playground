class EventHandler {
  constructor() {
    this.eventsPool = {}
  }

  on(eventName, callback) {
    if (typeof callback !== 'function') {
      console.log('必须传递回调函数')
    }
    const eventCallbacks = this.eventsPool[eventName]

    if (!eventCallbacks) this.eventsPool[eventName] = []

    this.eventsPool[eventName].push(callback)
  }

  emit(eventName, ...args) {
    if (!eventName) return
    if (this.eventsPool[eventName]) {
      this.eventsPool[eventName].map(event => event(...args))
    } else {
      console.log('没有此订阅事件。')
    }
  }

  off(eventName) {
    delete this.eventsPool[eventName]
  }
}

const eventInstance = new EventHandler()

eventInstance.on('eventZhang', (...args) => {
  console.log('===', args)
})

eventInstance.off('eventZhang')

eventInstance.emit('eventZhang', 'some', 123, { a: 4 }, [90])

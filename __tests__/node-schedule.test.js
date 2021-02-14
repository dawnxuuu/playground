const mocks = {
  nodeSchedule: {
    scheduleJob: jest.fn()
  }
}

jest.mock('node-schedule', () => mocks.nodeSchedule)
jest.spyOn(console, 'log')
jest.spyOn(console, 'warn')

test('执行', () => {
  mocks.nodeSchedule.scheduleJob.mockImplementation(() => 'k')

  require('../src/node-schedule.js')

  mocks.nodeSchedule.scheduleJob.mock.calls[0][1]()

  expect(mocks.nodeSchedule.scheduleJob).toHaveBeenCalledWith(
    '* * * * * *',
    expect.any(Function)
  )

  expect(console.log).toHaveBeenCalledWith('scheduleCronstyle')
  expect(console.warn).toHaveBeenCalledWith('k')
})

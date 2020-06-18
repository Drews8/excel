console.log('module.js')

async function start() {
  return await Promise.resolve('async working1f')
}

start().then(console.log)

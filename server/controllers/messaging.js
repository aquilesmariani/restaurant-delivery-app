const amqp = require('amqplib/callback_api')

const sendMessage = (message) => {
  amqp.connect('amqp://localhost', (err, conn) => {
    conn.createChannel((err, ch) => {
      if (err) {
        throw new Error(err)
      }
      const q = 'hello'

      ch.assertQueue(q, {durable: false})
      ch.sendToQueue(q, Buffer.from(message))
      console.log(' [x] Sent %s', message)
    })
    setTimeout(() => {
      conn.close()
    }, 500)
    if (err) {
      throw new Error(err)
    }
  })
}

module.exports = {
  sendMessage
}

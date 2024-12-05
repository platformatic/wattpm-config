import { createServer } from 'http';
import config from 'config'

config.get('foo')

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(config.get('foo'))
})

server.listen(3000)

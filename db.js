const { Client } = require('pg') // va a permitir hacer conexiones individuales , ocupa un solo item

const client = new Client({
host: 'localhost',
database: 'm6_m1_ejercicio2',
port: 5432,
user: 'postgresql',
password: '123456',
})


client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})
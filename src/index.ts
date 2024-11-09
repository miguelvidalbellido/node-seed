import dotenv from 'dotenv'

dotenv.config()

const test = 1123

const prueba = (a: number) => {
  console.log(process.env.PRUEBA)
  return a
} 

prueba(test)
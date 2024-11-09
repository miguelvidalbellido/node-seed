import dotenv from 'dotenv'

dotenv.config()

const test = 1123

export const prueba = (a: number): number => {
  console.log(process.env.PRUEBA)
  return a
} 

prueba(test)
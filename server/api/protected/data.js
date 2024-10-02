// server/api/protected/data.js
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  // Получаем заголовок Authorization
  const authHeader = getHeader(event, 'authorization')

  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: 'Authorization header missing' })
  }

  // Извлекаем токен из заголовка
  const token = authHeader.split(' ')[1]

  try {
    // Проверяем токен
    const decoded = jwt.verify(token, 'your-secret-key')

    // Токен действителен; продолжаем обработку запроса
    return { data: 'This is protected data' }
  } catch (err) {
    // Токен недействителен или истёк
    throw createError({ statusCode: 401, statusMessage: 'Invalid or expired token' })
  }
})

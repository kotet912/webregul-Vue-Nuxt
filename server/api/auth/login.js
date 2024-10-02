// server/api/auth/login.js
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  // Читаем данные из тела запроса
  const body = await readBody(event)
  const { username, password } = body

  // Проверяем учетные данные (используем дефолтные для этого примера)
  if (username === 'admin' && password === 'secret') {
    // Генерируем JWT токен
    const token = jwt.sign({ username }, 'your-secret-key', { expiresIn: '1h' })

    // Возвращаем токен клиенту
    return { token }
  } else {
    // Неверные учетные данные
    throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' })
  }
})

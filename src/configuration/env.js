export const config = {
  redis: {
    host: process.env.REDIS_URL || "localhost",
    port: parseInt(process.env.REDIS_PORT, 10) || 6379,
    password: process.env.REDIS_PASSWORD || undefined,
    secret: process.env.SESSION_SECRET || 'this is a secret'
  },
  isLocalhost: process.env.IS_LOCALHOST || true,
  port: process.env.PORT || "3000"
}
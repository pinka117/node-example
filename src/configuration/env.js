export const redisConfiguration = {
  host: process.env.REDIS_URL || "localhost",
  port: parseInt(process.env.REDIS_PORT, 10) || 6379,
  password: process.env.REDIS_PASSWORD || undefined,
};

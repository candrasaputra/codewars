SELECT
  DATE(created_at) as date,
  COUNT(created_at) as count,
  SUM(COUNT(created_at)) OVER (ORDER BY DATE(created_at))::integer as total
FROM posts
GROUP BY DATE(created_at)
ORDER BY DATE(created_at)
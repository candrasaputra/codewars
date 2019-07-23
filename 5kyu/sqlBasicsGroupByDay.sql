SELECT
  DATE(created_at) as day,
  description,
  COUNT(id) as count
FROM events
WHERE name = 'trained'
GROUP BY DATE(created_at), description
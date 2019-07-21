SELECT
    f.title
FROM film f
JOIN film_actor fa1 ON f.film_id = fa1.film_id
JOIN film_actor fa2 ON f.film_id = fa2.film_id
WHERE fa1.actor_id = 105
    AND fa2.actor_id = 122
ORDER BY f.title;
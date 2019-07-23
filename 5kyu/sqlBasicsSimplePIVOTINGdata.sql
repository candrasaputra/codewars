CREATE EXTENSION tablefunc;

SELECT *
FROM  crosstab(
      'SELECT
        p.name, detail, COUNT(d.id)
      FROM products p
      JOIN details d ON d.product_id = p.id
      GROUP BY p.id, d.detail
      ORDER BY 1,2')
AS ct (name text, bad bigint, good bigint, ok bigint)
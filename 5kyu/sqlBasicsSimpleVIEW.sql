CREATE VIEW members_approved_for_voucher AS
    SELECT 
        m.id as id,
        m.name as name,
        m.email as email,
        SUM(p.price) as total_spending
    FROM members m
    LEFT JOIN sales s ON s.member_id =  m.id
    LEFT JOIN products p ON p.id = s.product_id
    WHERE s.department_id IN (
        SELECT s.department_id
        FROM sales s
        LEFT JOIN products p ON p.id = s.product_id
        GROUP BY s.department_id
        HAVING SUM(p.price) > 10000
    )
    GROUP BY m.id
    HAVING SUM(p.price) > 1000
    ORDER BY m.id
;

SELECT * from members_approved_for_voucher;
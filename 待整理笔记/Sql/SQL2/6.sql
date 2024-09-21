-- 1 略

-- 商品分类统计，分类为低档商品，中档商品，高档商品
-- 分组统计
-- 低档商品：销售单价在 1000日元以下（T恤衫、办公用品、叉子、擦菜板、圆珠笔）
-- 中档商品：销售单价在 1001日元以上 3000日元以下（菜刀）
-- 高档商品：销售单价在 3001日元以上（运动 T恤、高压锅）

SELECT SUM(CASE WHEN sale_price <= 1000 THEN 1 ELSE 0 END)               AS low_price,
       SUM(CASE WHEN sale_price BETWEEN 1001 AND 3000 THEN 1 ELSE 0 END) AS mid_price,
       SUM(CASE WHEN sale_price >= 3001 THEN 1 ELSE 0 END)               AS high_price
 FROM Product;
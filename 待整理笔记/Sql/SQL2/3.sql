-- 1
语句书写顺序 select->from->where->group by -> having-> order by
执行顺序 from->where->group by -> having -> select -> order by

-- 销售单价（sale_price 列）合计值是进货单价（purchase_price 列）合计值 1.5 倍的商品种类
SELECT product_type, sum(sale_price), sum(purchase_price) FROM Product GROUP BY product_type 
HAVING sum(sale_price)>sum(purchase_price)*1.5;

-- 根据结果显示推测order by 子句
SELECT * from Product ORDER BY regist_date DESC, sale_price;
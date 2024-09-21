-- 创建名为ViewPractice5_1的试图
/* 条件 1：销售单价大于等于 1000 日元。
 * 条件 2：登记日期是 2009 年 9 月 20 日。
 * 条件 3：包含商品名称、销售单价和登记日期三列。
 */
CREATE VIEW ViewPractice5_1(product_name, sale_price, regist_date)
    AS SELECT product_name, sale_price, regist_date FROM Product
        WHERE sale_price>=1000 AND regist_date='2009-09-20';
--(product_name, sale_price, regist_date) 可以省略
SELECT * FROM ViewPractice5_1;


-- 往视图 ViewPractice5_1 插入
INSERT INTO ViewPractice5_1 VALUES ('刀子', 300, '2009-11-02');
-- 结果: 错误，因为要保持视图与表Product的一致性，虽然试图不是由GROUP BY 组织，
--但是，会尝试插入('刀子', 300, '2009-11-02')，而Product有些列是不能为空的。


-- 显示所有商品的平均价格
SELECT product_id, product_name, product_type, sale_price, 
    (SELECT AVG(sale_price) FROM Product) AS sale_price_all
    FROM Product;

-- 创建AvgPriceByType，显示商品各分组平均价格，使用关联子查询
CREATE VIEW AvgPriceByType AS
    SELECT product_id, product_name, product_type, sale_price, 
        (SELECT AVG(sale_price) FROM Product AS T2 WHERE T1.product_type=T2.product_type) 
            AS AVG_sale_price
    FROM Product AS T1;

SELECT * FROM  AvgPriceByType;
-- 在事务中查询更新内容，可以查找到更新内容

-- 对有主键的表使用INSERT...SELECT复制表本身，是错误的，因为主键存在约束

-- 创建表并插入内容
BEGIN TRANSACTION;
DELETE FROM Product;

INSERT INTO Product VALUES ('0001', 'T恤', '衣服', 1000, 500, '2009-09-20'),
     ('0002', '打孔器', '办公用品', 500, 320, '2009-09-11'),
     ('0003', '运动T恤', '衣服', 4000, 2800, NULL);

CREATE TABLE ProductMargin
(product_id     CHAR(4)       NOT NULL,
 product_name   VARCHAR(100)  NOT NULL,
 sale_price     INTEGER,
 purchase_price INTEGER,
 margin          INTEGER,
 PRIMARY KEY(product_id));
 
 INSERT INTO ProductMargin(product_id, product_name, sale_price, purchase_price,margin)
    SELECT product_id, product_name, sale_price, purchase_price, sale_price-purchase_price
        FROM Product;

SELECT * FROM ProductMargin;

-- 根据上述内容，将运动 T 恤的销售单价从 4000 日元下调至 3000 日元。
-- 根据上述结果再次计算运动 T 恤的利润。
UPDATE ProductMargin SET sale_price=3000 WHERE product_name='运动T恤';
UPDATE ProductMargin SET margin=sale_price-purchase_price WHERE product_name='运动T恤';

-- ROLLBACK;
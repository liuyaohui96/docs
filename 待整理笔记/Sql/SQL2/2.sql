-- 登记日期（regist_date）在 2009 年 4 月 28 日之后
-- 查询结果要包含 product_name 和 regist_date 两列
SELECT product_name, regist_date FROM Product WHERE regist_date>'2009-04-28';

-- 执行结果解释 略

-- 选出“销售单价（sale_price）比进货单价（purchase_price）高出 500日元以上”的商品
-- 查询结果包括包含product_name, sale_price, purchase_price 三列
SELECT product_name, sale_price, purchase_price FROM Product WHERE sale_price>=purchase_price+500;

-- 销售单价打九折之后利润高于 100 日元的办公用品和厨房用具
-- 查询结果要包括 product_name 列、product_type 列以及销售单价打九折之后的利润（别名设定为 profit)
SELECT product_name, product_type, sale_price*0.9-purchase_price AS profit FROM Product
    WHERE sale_price*0.9-purchase_price>100
        AND (product_type='办公用品' OR product_type='厨房用具');
[1]: 10000SQL-data-types.md
[2]: 20000SQL-operator.md
[3]: 30000SQL-expression.md
[4]: 40000SQL-function.md
[5]: 50000SQL-constraint.md

[0.0]: #SQL-Tutorial
[1.0]: #Terms-in-SQL
[2.0]: #SQL-syntax
[3.0]: #SQL-data-types
[4.0]: #SQL-operator
[5.0]: #SQL-expression
[6.0]: #SQL-function
[7.0]: #SQL-constraint
[8.0]: #Create--drop-Database
[9.0]: #Create--drop-table
[10.0]: #Insert-rows-into-table
[11.0]: #Delete-rows-in-the-table
[12.0]: #Alter-table
[13.0]: #Update-the-row-in-the-table
[14.0]: #Simple-select
[15.0]: #Create-&-drop-view
[16.0]: #Subqueries
[17.0]: #Set-operation
[18.0]: #Join



# SQL Tutorial
SQL, Structed Query Language, is used to magagement relational database. This tutorial cover the basic concepts of SQL.

1. [Terms in SQL][1.0]
2. [SQL syntax][2.0]
3. [SQL data types][3.0]
4. [SQL operator][4.0]
5. [SQL expression][5.0]
6. [SQL function][6.0]
7. [SQL constraint][7.0]
8. [Create & drop Database][8.0]
9. [Create & drop table][9.0]
10. [Insert rows into table][10.0]
11. [Delete rows in the table][11.0]
12. [Alter table][12.0]
13. [Update the row in the table][13.0]
14. [Simple select][14.0]
15. [Create & drop view][15.0]
16. [Subqueries][16.0]
17. [Set operation][17.0]
18. [Join][18.0]

## Terms in SQL
* SQL:SQL is the standard language for RDBS(Relational Database System). 
* RDBS is  a database management system that is absed on the relational model. RDMS types: MySQL, PostgreSQL, Oracle, SQL Server, MS access etc.
* **table**: Database objects that stores data and consists of **columns and rows**.
* **field**: specifying the information of **column** in the **table**.
* **record**: a **row** of data in the **table**.

#### [⬆ Back to top][0.0]

## SQL syntax
1. case insensitive
2. single-line comment: --

    multi-line comment: /* */

#### [⬆ Back to top][0.0]


## SQL data types
See [SQL data types][1]
#### [⬆ Back to top][0.0]


## SQL operator
See [SQL operator][2]
#### [⬆ Back to top][0.0]


## SQL expression
See [SQL expression][3]
#### [⬆ Back to top][0.0]


## SQL function
See [SQL function][4]
#### [⬆ Back to top][0.0]


## SQL constraint
See [SQL constraint][5]
#### [⬆ Back to top][0.0]


## Create & drop Database
```SQL
-- Create database
CREATE DATABASE <database>;
     
-- drop database
DROP DATABASE <database>

--------appendix
<database>: [a-z]\w*
```
#### [⬆ Back to top][0.0]


## Create & drop table
```SQL
-- create table
CREATE TABLE <table>(
    <column-definition>(, <column-definition>|, <constraint-function>)*
);

-- drop table
DROP TABLE <table>;

------------appendix
<table>: [a-z]\w*
<column-definition>: <column> <sql-data-type>( <constraint>)*
<column>: [a-z]\w*
```
`<sql-data-type>` see [SQL data types][1]

`<constraint>` and `<constraint-function>` see [SQL-constarint][5]
#### [⬆ Back to top][0.0]


## Insert rows into table
```SQL
/* If you want to insert all fileds(columns) within a new row into table.
 * You can obmit the <insert-column-list>
 */
INSERT INTO <table>(<insert-column-list>)? VALUES (<column-values-list>); 

--------appendix
<insert-column-list>: \(<column>(,\s<column>)*\)
<column-values-list>: <value>(,\s<value>)*
```
#### [⬆ Back to top][0.0]


## Delete rows in the table
```SQL
DELETE FROM <table>(\sWHERE <expression-list>)?

-- only delete all the rows in the table
-- TRUNCATE clause is more efficient than DELETE clause
TRUNCATE <table>;

-------appendix
<table>: [a-z]\w*

<expression-list>: <expression>(\s(AND|OR) <expression>)*
```
`<expression>` see [SQL expression][3]
#### [⬆ Back to top][0.0]


## Alter table
```SQL
-- alter table to add column
ALTER TABLE <table> ADD COLUMN <column-definition>;

-- alter table to drop column
ALTER TABLE <table> DROP COLUMN <column>;

-- alter table to rename table
ALTER TABLE <table> RENAME TO <table>;
-- In MySQL, rename table is different
RENAME TABLE <table> TO <table>;

-- alter table to add constraint
ALTER TABLE <table> ADD CONSTRAINT <constraint-name> <constraint-function>;

-- alter table to drop constraint
ALTER TABLE <table> DROP CONSTRAINT <constraint-name>;
-------------appendix
<table>: [a-z]\w*
<column-definition>: <column> <sql-data-type>( <constraint>)*
<column>:[a-z]\w*
<constraint>: NOT NULL|DEFAULT

<constraint-name>: [a-z]\w*
<constraint-function>: (UNIQUE|PRIMARY KEY)\(<column-list>\);
<column-list>:<column>(,\s<column>)*
```
`<sql-data-type>` see [SQL data types][1]
#### [⬆ Back to top][0.0]


## Update the row in the table
```SQL
UPDATE <table> SET <update-list>(\sWHERE <expression-list>);

----------appendix
<table>: [a-z]\w*
<update-list>: <column>=<value>(\s<column>=<value>)*

<expression-list>: <expression>(\s(AND|OR) <expression>)*
```
`<expression>` see [SQL expression][3]
#### [⬆ Back to top][0.0]


## Simple select
In a `<select>` statement, the excution order of its clause is:
1. **FROM** clause: specifying the `<table>`
2. **WHERE** clause: filtering the row by specifying `<expressioin-list>`
3. **GROUP BY** clause: according the `<group-list>`, divied into serveral groups.
4. **HAVING** clause: accroding the `<expression-list>` to filter the groups.
6. **SELECT** clause: specifying select which column by `select-column-list>`
7. **ORDER BY** clause: specifying order by `<order-list>`
```SQL
-- 'DISTINCT' used to prevent duplicate rows
-- Using chinese <alia-name>, you should surround with ''
-- AND operator take precedence over OR operator

/* when having GROUP BY clause, <select-column-list> can't exist the columns that
 * are not existing in <group-column-list> or aggregate functoin
 */ 

-- If you only want to get the groups and not need statistics, use 'DISTINCT'
/* If you want to get the groups and its statistics, use GROUP BY clause
 * and aggregate function.
 */

-- HAVING clause is fitter the groups.
-- ORDER BY defualt order is 'ASC'

/* Because of the excution order, the <alia-name> in <select-column-list>
 * can not distinguished by WHERE, GROUP BY & HAVING and can distinguished
 * by ORDER BY.
 */
SELECT (DISTINCT )?<select-column-list> FROM <table>
    \s(WHERE <expression-list>)?
    \s(GROUP BY <group-column-list>)?
    \s(HAVING <expression-list>)?
    \s(ORDER BY <order-column-list>);

---------appendix
<table>:[a-z]\w*
<expression-list>:<expression>(\s(AND|OR) <expression>)*

<select-column-list>: <select-column>( AS <alia-name>)?
                      (,\s<select-column>( AS <alia-name)?)*
                      |\*
    <select-column>: <column>|<SQL-function>|<value>

<group-list>: <column>(,\s<column>)*
<order-list>: <column>( DESC)?(,\s<column>( DESC)?)*
```
`<expression>` see [SQL expression][3]
`<SQL-function>` see [SQL function][4]
#### [⬆ Back to top][0.0]


## Create & drop view
What view save is the statements, not the table or data.

The view and table should update at the same time, so only having all the conditions below, the view can be updated
1. Not using 'DISTINCT'
2. In FROM clause, only one table
3. Not using GROUP BY & HAVING clause.

```SQL
-- create view
CREATE VIEW <view> <view-column-list> AS
    <SELECT>;

-- drop view
DROP VIEW <view>;

---------appendix
<view>:[a-z]\w*

<view-column-list>: \(<column>(,\s<column>)\)
```
#### [⬆ Back to top][0.0]


## Subqueries
```SQL
-- subqueries
<column>
-------->replace by 
(<SELECT>)
```
#### [⬆ Back to top][0.0]


## Set operation
```SQL
-- UNIION
-- UNITON set(并集)
<SELECT>
UNION( ALL)?
<SELECT>

--INTERSECT
-- complement set(交集)
<SELECT>
INTERSECT
<SELECT>

-- EXCEPT
-- subtractoin set(差集)
<SELECT>
EXCEPT?
<SELECT>
```
#### [⬆ Back to top][0.0]


## Join
According to the `<expression-list>` to select the colunms together.
```SQL
-- INNER JOIN
-- return rows that match in all table
SELECT <join-column-list> FROM <table>( AS <alia-name>)?
    INNER JOIN <table>( AS <alia-name>)? ON <expression-list>
    \s(WHERE <expression-list>)?

-- OUTER JOIN, return all rows from left without specifying 'RIGHT'
SELECT <join-column-list> FROM <table>( AS <alia-name>)?
    (RIGHT )OUTER JOIN <table>( AS <alia-name>)? ON <expression-list>
    \s(WHERE <expression-list>)?

-- CROSS JOIN
SELECT <join-column-list> FROM <table>( AS <alia-name>)?
    CROSS JOIN <table>( AS <alia-name>)? ON <expression-list>
    \s(WHERE <expression-list>)?

---------appendix
<expression-list>:<expression>(\s(AND|OR) <expression>)*
<join-column-list>: <table>\.<column>(,\s<table>\.<column>)*
```
#### [⬆ Back to top][0.0]


## Copy table
```SQl
INSERT INTO <table> (<insert-column-list>)? 
    <select>
```

## Transiaction
Transiaction has four Characteristic：
* Atomicity(原子). At the end of the transaction, the statements all excuted or all not excuted.
* Consistency(一致). The transiaction statements should obey the constraint before transiaction.
* Isolation(独立). Different transiaction is independent.
* Durability(持久). The data status will be saved before transiaction end.

```SQL
-- MySQL use 'START TRANSCATION'
BEGIN TRANSACTION|START TRANSACTION
    <statements>
COMMIT|ROLLBACK;
```
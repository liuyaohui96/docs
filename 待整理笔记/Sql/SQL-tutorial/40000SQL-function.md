# SQL function
```SQL
<SQL-function>: <aggregate-function>
                |<math-function>
                |<string-function>
                |<date-function>
                |<other-function>

-- aggregate function first get rid of 'NULL' value and excute later.
<aggregate-function>: (COUNT|SUM|AVG|MAX|MIN)\(<aggregate-function-parameters>\)
    <aggregate-function-parameters>: (DISTINCT)?<column>|\*

<math-function>: ABS|MOD|ROUND\(<column>\)

<string-function>: 
    <column> || <column> || ...
    LENGTH(<string>) 
    LOWER(<string>)
    UPPER(<string>)
    REPLACE(...)
    SUBSTRING(...)

<date-function>: CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP
                 EXTRACT(...)  -> YEAR MONTH DAY HOUR MINUTE SECOND

<other-function>: CAST(...)
```
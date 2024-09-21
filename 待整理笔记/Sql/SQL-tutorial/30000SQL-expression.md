[1]: 10000SQL-data-types.md
# SQL expression
```SQL
<expression>: <column> (<arithemetic-operator>|<comparison-operator>) <right-operand>
              |(NOT )IN\(<value>(,\s<value)\)
              |<column> IS (NOT )?NULL
              |<column> (NOT )? EXIST\(\)
              |<column> LIKE '\w*<sql-wildcard>\w*'  
              |<column> BETWEEN <expression> AND <expression>
              
     <right-operand>: <column>
                      |<column>( <arthemetic-operator> <column>)+
                      |'\w*'

<sql-wildcard>: %|_
```
`<arthemetic-operator>` and `<comparison-operator>` see [SQL operator][1]
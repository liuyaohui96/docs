
# Detail: str to dict
# Example: k:1|k1:2|k2:3|k3:4
# Tags: stc, dict
# Expertise: beginner

s = 'k:1|k1:2|k2:3|k3:4'
# for k,v in ([k], [v], ) 从元组中顺序提取kv
d = {k: int(v) for item in s.split('|') for k, v in (item.split(':'),)}

print(d)


# 方法二
d1 = {}
s1 = 'k:1|k1:2|k2:3|k3:4'
for item in s1.split('|'):
    key, value = item.split(':')
    d1[key] = int(value)
print(d1)

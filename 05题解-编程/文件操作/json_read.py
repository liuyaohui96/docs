

import json

with open('./test/1.json') as file_obj:
    obj = json.loads(file_obj.read())
    print(obj)

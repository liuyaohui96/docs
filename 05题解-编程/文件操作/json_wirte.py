

import json


person_info = {'name': 'liuyaohui'}
with open('./test/1.json', 'w') as file_obj:
    file_obj.write(json.dumps(person_info))

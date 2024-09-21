
# Detail: list all python file
# Example:
# Tags: file, path, os
# Expertise: beginner

import os

current_dir = './test'

python_file_list = [x for x in os.listdir(current_dir)
                    if os.path.isfile(os.path.join(current_dir, x)) and
                    os.path.splitext(os.path.join(current_dir, x))[1] == '.py']

print(python_file_list)

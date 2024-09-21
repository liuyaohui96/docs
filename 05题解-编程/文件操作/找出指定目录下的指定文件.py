
# Detail: list specified file in specified dir
# Example:
# Tags: file, path, os
# Expertise: beginner

import os



def list_file(dir, name):
    # 输出当前目录的file
    files = [x for x in os.listdir(dir)
             if os.path.isfile(os.path.join(dir, x))
             and name in os.path.splitext(os.path.join(dir, x))[0]]
    for f in files:
        print(os.path.join(dir, f))

    # 递归文件夹
    dirs = [x for x in os.listdir(dir)
            if os.path.isdir(os.path.join(dir, x))]
    for d in dirs:
        list_file(os.path.join(dir, d), name)


list_file('./test', 'test1')

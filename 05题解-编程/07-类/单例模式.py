
# Detail: singleton
# Example:
# Tags: class, singleton
# Expertise: beginner

class Singleton:
    # 类变量保存单一实例
    __instance = None

    def __new__(cls):
        if cls.__instance:
            return cls.__instance
        else:
            cls.__instance = object.__new__(cls)
            return cls.__instance

a = Singleton()
b = Singleton()

a.age = 20
print(b.age) # => 20


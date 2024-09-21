
# admin
# 类继承

from user2 import User


class Admin(User):
    """有管理权限的用户"""

    def __init__(self, name, email, location, password, privileges=[]):
        super().__init__(name, email, location, password)
        self.privileges = privileges

    def show_privileges(self):
        print(f'Admin {self.name} has privileges as follow:')
        for p in self.privileges:
            print(p)


privileges = {
    'change password',
    'reset password'
}
admin = Admin('liu', '1@gmail.com', 'guangzhou', '123', privileges)
admin.print_user_info()
admin.greet()

admin.show_privileges()

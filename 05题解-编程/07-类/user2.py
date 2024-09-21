
class User:
    """简单的用户管理类"""

    def __init__(self, name, email, location, password):
        self.name = name
        self.email = email
        self.location = location
        self.password = password
        self.login_attemp_count = 0
        self.login_max_count = 3

    def print_user_info(self):
        print('Print user info: ')
        print(f'username: {self.name}')
        print(f'email: {self.email}')
        print(f'location: {self.location}')
        print()

    def greet(self):
        print(f'Welcome, {self.name}')

    def login(self):
        while True:
            self.login_attemp_count += 1
            password = input(f"Input {self.name}'s password: \n")

            if password == self.password:
                print('Login success')
                self.login_attemp_count = 0
                break
            elif self.login_attemp_count >= self.login_max_count:
                print('Login failed, the login times attemp to max...')
                break
            else:
                print('Login failed... Your can try '
                      f'{self.login_max_count - self.login_attemp_count} times')

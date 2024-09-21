
# Detail: throw custrom exception
# Example: a > 2, throw custom exception
# Tags:
# Expertise: beginner

def throw_custom_exception(a):
    try:
        if a > 2:
            raise Exception('Error: a lt 2')
    except Exception as msg:
        print(msg)


throw_custom_exception(3)  # => Error: a lt 2

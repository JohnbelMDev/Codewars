def is_palindrone(s):
    r=""
    for c in s.lower():
        r = c +r
    for x in range(0, len(s )):
        if s[x] == r[x]:
            x = True
        else:
            return False
    return x
# print('he')

print(is_palindrone('j'))


# 录入编辑信息
# function 的应用例子
def make_album(artist, title, track=0):
    """返回专辑信息对象"""
    album = {
        'artist': artist,
        'title': title
    }

    if track:
        album['track'] = track
    return album


def record_album():
    album_list = []
    while True:
        artist = input('Input artist:\n')
        title = input('Input title\n')
        record = input('Input record\n')

        album_list.append(make_album(artist, title, record))

        print('\nthe album_list info is:')
        for album in album_list:
            print(f'{album}')
        again = input('\nWould you like to input another album(yes/no)\n')
        if again.lower() != 'yes':
            break


record_album()

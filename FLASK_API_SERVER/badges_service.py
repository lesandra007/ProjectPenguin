"""
This files manages the user's badges.
"""

userBadges = {
    'count': 6,
    'badges': [
        {'title': 'Pebbles Spotted', 'description': 'gained 10 pebble tokens'},
        {'title': 'Slip and Slide', 'description': 'completed a goal'},
        {'title': 'Waddle Waddle', 'description': 'acheived level 5'},
        {'title': 'Pebble Pile', 'description': 'gained 30 pebble tokens'},
        {'title': 'Step by Step', 'description': 'acheived level 10'},
        {'title': 'Persistent Climber', 'description': 'acheived level 20'}
    ]
}

def get_badges():
    return userBadges

if __name__ == '__main__':
    pp(get_badges())
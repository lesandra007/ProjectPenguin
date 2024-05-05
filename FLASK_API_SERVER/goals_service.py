"""
This files manages the user's goals and accomplishments.
"""

goalsData = {
    'badgesCount': 6,
    'badges': [
        {'title': 'Pebbles Spotted', 'description': 'gained 10 pebble tokens'},
        {'title': 'Slip and Slide', 'description': 'completed a goal'},
        {'title': 'Waddle Waddle', 'description': 'acheived level 5'},
        {'title': 'Pebble Pile', 'description': 'gained 30 pebble tokens'},
        {'title': 'Step by Step', 'description': 'acheived level 10'},
        {'title': 'Persistent Climber', 'description': 'acheived level 20'}
    ],
    'goals': [
        {'title': 'Hacker Alert', 'description': 'Complete 2 Hacking problems.', 'completed': 1, 'goal': 2},
        {'title': 'Side Quest', 'description': 'Purchase 5 shop items.', 'completed': 1, 'goal': 5}
    ],
    'tasks': [
        {'id': 1,'title': 'Finish resume for Project Penguin'},
        {'id': 2, 'title': 'Complete the Interview Question of the day'},
        {'id': 3, 'title': 'Post about Kickstarter program on Linkedin'},
    ]
}

def get_goals():
    return goalsData

def add_task(title):
    db = get_goals()
    task_id = db['tasks'][-1]["id"] + 1
    new_task = {'id': task_id, 'title': title}
    db['tasks'].append(new_task)
    return {'newTasks': db['tasks']}

# if __name__ == '__main__':
    # pp(get_goals())
"""
This file manages the user's stats.
"""
from tokens_service import add_tokens

statsData = {
    'applications': 28,
    'interviews': 2,
    'questions': 10,
    'hackings': 7,
}

def get_stats():
    return statsData

def add_stats(method):
    print("arg type: ", type(method))
    db = get_stats()
    db[method] = db[method] + 1
    print("new stats: ", db[method])
    tokenDict = add_tokens(method)
    return {'updatedCount': db[method]} 

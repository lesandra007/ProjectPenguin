"""
This file manages the user's earned tokens.
"""

tokensData = {
    'tokensCount': 1230,
    'storeInventoryPrices': [
        {'type': 'glasses', 'cost': 100},
        {'type': 'hats', 'cost': 100},
        {'type': 'hair', 'cost': 200},
        {'type': 'tops', 'cost': 300},
        {'type': 'bottoms', 'cost': 300},
        {'type': 'luggage', 'cost': 300},
        {'type': 'fullfit', 'cost': 400},
        {'type': 'outerlayer', 'cost': 400},
    ],
    'earnings': [
        {'method': 'applications', 'reward': 20},
        {'method': 'interviews', 'reward': 50},
        {'method': 'questions', 'reward': 20},
        {'method': 'hackings', 'reward': 40},
    ]
}

def get_tokens():
    return tokensData

def add_tokens(method):
    db = get_tokens()
    earnings = 0
    for index, earning in enumerate(db['earnings']):
        if earning['method'] == method:
            db['tokensCount'] = db['tokensCount'] + earning['reward']
            break
    print("new tokens: ", db['tokensCount'])
    return {'updatedCount': db['tokensCount']}

def remove_tokens(itemType):
    db = get_tokens()
    cost = 0
    print(type(itemType))
    for index, item in enumerate(db['storeInventoryPrices']):
        if item['type'] == itemType:
            cost = item['cost']
            print(cost)
            break
    if (cost <= db['tokensCount']):
        db['tokensCount'] = db['tokensCount'] - cost
    print("new token count: ", db['tokensCount'])
    return {'updatedCount': db['tokensCount']}
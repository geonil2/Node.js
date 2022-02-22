let tweets = [
    {
        id: "1",
        text: 'Let`s start',
        createdAt: Date.now().toString(),
        name: 'Bob',
        username: 'bob',
        url: 'https://picsum.photos/600/300',
    },
    {
        id: "1",
        text: 'Let`s start2',
        createdAt: Date.now().toString(),
        name: 'Geonil',
        username: 'geonil',
        url: 'https://picsum.photos/600/300',
    }
];

export async function getAll() {
    return tweets;
}

export async function getAllByUsername(username) {
    return tweets.filter(t => t.username === username);
}

export async function getById(id) {
    const tweet = tweets.find(t => t.id === id);
    return tweet;
}

export async function create(text, name, username) {
    const tweet = {
        id: Date.now().toString(),
        text,
        createAt: new Date(),
        name,
        username,
    };
    tweets = [tweet, ...tweets];
    return tweet;
}

export async function update(id, text) {
    const tweet = tweets.find(t => t.id === id);
    if(tweet) {
        tweet.text = text;
    }
    return tweet;
}

export async function remove(id) {
    tweets = tweets.filter(t => t.id !== id);
}
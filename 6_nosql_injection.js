// Vulnerable code

app.get('/user', (req, res) => {
    db.collection('users').findOne(
        { username: req.query.username },
        (err, user) => {
            if (err) throw err;
            res.json(user);
        }
    );
});


// Secure code

app.get('/user', (req, res) => {
    const username = req.query.username;

    if (typeof username !== 'string') {
        return res.status(400).json({
            error: 'Invalid username'
        });
    }

    db.collection('users').findOne(
        { username: username },
        (err, user) => {
            if (err) {
                return res.status(500).json({
                    error: 'Database error'
                });
            }

            res.json(user);
        }
    );
});
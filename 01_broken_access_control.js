// Vulnerable code

app.get('/profile/:userId', (req, res) => {
    User.findById(req.params.userId, (err, user) => {
        if (err) return res.status(500).send(err);
        res.json(user);
    });
});

//Secure code

app.get('/profile/:userId', (req, res) => {

    if (!req.user) {
        return res.status(401).json({ error: 'Authentication required' });
    }

    if (req.user.id !== req.params.userId) {
        return res.status(403).json({ error: 'Access denied' });
    }

    User.findById(req.params.userId, (err, user) => {
        if (err) {
            return res.status(500).send(err);
        }

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    });
});
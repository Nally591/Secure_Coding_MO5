# Vulnerable code

@app.route('/reset-password', methods=['POST'])
def reset_password():
    email = request.form['email']
    new_password = request.form['new_password']

    user = User.query.filter_by(email=email).first()

    user.password = new_password

    db.session.commit()

    return 'Password reset'


# Secure code

@app.route('/reset-password', methods=['POST'])
def reset_password_secure():
    token = request.form['token']
    new_password = request.form['new_password']

    user = User.query.filter_by(reset_token=token).first()

    if not user:
        return 'Invalid reset token', 403

    user.password = hash_password(new_password)
    user.reset_token = None

    db.session.commit()

    return 'Password reset'
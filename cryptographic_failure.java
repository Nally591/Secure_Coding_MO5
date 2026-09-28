// Vulnerable Code 

@app.route('/account/<user_id>')
def get_account(user_id):
    user = db.query(User).filter_by(id=user_id).first()
    return jsonify(user.to_dict())

//Secure code

@app.route('/account/<user_id>')
def get_account(user_id):

    if not current_user.is_authenticated:
        return jsonify({"error": "Authentication required"}), 401

    if str(current_user.id) != user_id:
        return jsonify({"error": "Access denied"}), 403

    user = db.query(User).filter_by(id=user_id).first()

    if not user:
        return jsonify({"error": "User not found"}), 404

    return jsonify(user.to_dict())
    
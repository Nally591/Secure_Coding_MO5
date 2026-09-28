// Vulnerable code

if (inputPassword.equals(user.getPassword())) {
    // Login success
}


// Secure code

if (BCrypt.checkpw(inputPassword, user.getPasswordHash())) {
    // Login success
}
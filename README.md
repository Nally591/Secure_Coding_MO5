1. Broken Access Control – JavaScript
Security Flaw

The vulnerable code allows a user to request any profile by changing the userId in the URL. The application retrieves the requested profile without checking whether the logged-in user is actually authorized to access it. This could allow someone to view another user's information.

How the Fix Improves Security

The secure version checks whether the user is authenticated and then compares the logged-in user's ID with the profile ID being requested. If the IDs do not match, access is denied. This prevents users from viewing profiles that do not belong to them.

OWASP Reference

OWASP Top 10:2021 – A01: Broken Access Control

https://top10.owasp.org/2021/A01_2021-Broken_Access_Control  

2. Broken Access Control – Python
Security Flaw

The vulnerable code takes the user_id from the URL and uses it to retrieve an account without checking whether the logged-in user owns that account. A user could change the ID in the URL and possibly access another person's account information.

How the Fix Improves Security

The secure version first confirms that the user is logged in. It then checks that the authenticated user's ID matches the requested account ID. If the user is not authorized, the request is denied.

OWASP Reference

OWASP Top 10:2021 – A01: Broken Access Control
OWASP A01: Broken Access Control
https://top10.owasp.org/2025/ 

OWASP identifies unauthorized access to another user's records as a broken access-control problem and recommends enforcing ownership checks.

3. Cryptographic Failures – Java
Security Flaw

The vulnerable code uses MD5 to hash passwords. MD5 is an outdated and weak hashing algorithm and is not appropriate for secure password storage.

How the Fix Improves Security

The secure version uses PBKDF2 with SHA-256 and a randomly generated salt. A salt makes password hashes more resistant to precomputed attacks, while PBKDF2 intentionally requires more work to calculate than MD5, making password guessing more difficult.

OWASP Reference

OWASP Top 10:2021 – A02: Cryptographic Failures
OWASP A02: Cryptographic Failures

4. Cryptographic Failures – Python
Security Flaw

The vulnerable code uses SHA-1 to hash a password. SHA-1 is not designed for secure password storage and can be attacked much more quickly than modern password-hashing algorithms.

How the Fix Improves Security

The secure version uses bcrypt. Bcrypt is specifically designed for password storage and automatically uses a salt. It is also intentionally slower, which makes large-scale password guessing more difficult.

OWASP Reference

OWASP Top 10:2021 – A02: Cryptographic Failures
OWASP A02: Cryptographic Failures

5. Injection – SQL Injection
Security Flaw

The vulnerable code directly combines the username entered by the user with a SQL query. Because the input becomes part of the SQL statement, an attacker could enter specially crafted SQL commands that change how the query works.

How the Fix Improves Security

The secure version uses a PreparedStatement and a parameterized query. The username is treated as data instead of executable SQL code. This prevents user input from changing the structure of the SQL command.

OWASP Reference

OWASP Top 10:2021 – A03: Injection
OWASP A03: Injection

6. Injection – NoSQL Injection
Security Flaw

The vulnerable code directly uses a query parameter provided by the user in a NoSQL database query. The input is not checked first, which could allow specially structured input to change the meaning of the database query.

How the Fix Improves Security

The secure version checks that the username is a normal string before using it in the database query. Invalid input is rejected instead of being sent directly to the database.

OWASP Reference

OWASP Top 10:2021 – A03: Injection
OWASP A03: Injection


7. Insecure Design – Password Reset
Security Flaw

The vulnerable password-reset function allows someone to provide an email address and immediately set a new password. It does not verify that the person requesting the reset actually owns the account. The password is also assigned directly instead of being securely hashed.

How the Fix Improves Security

The secure design requires a valid password-reset token before allowing the password to be changed. This adds a verification step so that knowing someone's email address is not enough to reset the account. The new password is also hashed before being stored.

OWASP Reference

OWASP Top 10:2021 – A04: Insecure Design
OWASP A04: Insecure Design


8. Software and Data Integrity Failures
Security Flaw

The vulnerable HTML loads a JavaScript library from an external CDN without checking whether the file has been modified. If the external source is compromised, malicious JavaScript could be delivered and executed by the website.

How the Fix Improves Security

The secure version uses Subresource Integrity, or SRI, by including an expected cryptographic hash in the integrity attribute. The browser checks the downloaded file against that hash. If the file has been modified, the browser will refuse to load it.

OWASP Reference

OWASP Top 10:2021 – A08: Software and Data Integrity Failures
OWASP A08: Software and Data Integrity Failures


9. Server-Side Request Forgery (SSRF)
Security Flaw

The vulnerable code allows the user to enter any URL and then makes the server send a request to that address. Because the destination is not validated, an attacker could try to make the server communicate with unexpected or internal resources.

How the Fix Improves Security

The secure version validates the URL before making the request. It only accepts HTTP or HTTPS and checks that the destination hostname is on an approved list. Requests to unauthorized destinations are rejected.

OWASP Reference

OWASP Top 10:2021 – A10: Server-Side Request Forgery (SSRF)
OWASP A10: SSRF



10. Identification and Authentication Failures
Security Flaw

The vulnerable code directly compares the password entered by the user with the password stored for the account. This suggests that the application may be storing or handling the actual password insecurely.

How the Fix Improves Security

The secure version uses BCrypt to compare the entered password with a stored password hash. The original password does not need to be stored in the database. This reduces the risk of exposing users' passwords if the database is compromised.

OWASP Reference

OWASP Top 10:2021 – A07: Identification and Authentication Failures
OWASP A07: Identification and Authentication Failures


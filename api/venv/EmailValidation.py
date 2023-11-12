import requests
import smtplib
import random
import string
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime, timedelta

verification_codes = {}


def generate_verification_code():
    # Generate a random 6-character alphanumeric code for verification
    return "".join(random.choices(string.ascii_letters + string.digits, k=6))


# determines if the email is valid
def valid_email(email, fname, lname):
    if "@" not in email:
        return False

    # restricts valid emails to emails that begin with a letter
    email = email.lower()
    if ord(email[0]) < 97 or ord(email[0]) > 122:
        return False

    components = email.split("@")
    if len(components) > 2:
        return False

    domain = components[1]
    domain_components = domain.split(".")
    if len(domain_components) > 2:
        return False

    if domain_components[0] == "wisc" and domain_components[1] == "edu":
        response = requests.get(
            "https://www.wisc.edu/directories/?q=" + fname + "+" + lname
        )
        url = (
            "https://api.www.wisc.cloud/directory/wisc-ldap-lookup?name="
            + fname
            + "+"
            + lname
        )
        response = requests.get(url)

        matches = response.json()["records"]
        i = 0
        while i < len(matches) and matches[i]["emails"][0] != email:
            i += 1

    return i < len(matches)


# sends a verification email to the user
def send_email(email, fname):
    # configuring the SMTP
    smtp_server = "smtp-mail.outlook.com"
    smtp_port = 587
    smtp_username = "madhivestudy@outlook.com"
    smtp_password = "Badgers123!"

    subject = "Your MadHive Verification Code [DO NOT REPLY]"
    verification_code = generate_verification_code()

    # Store the verification code and its expiration time in the global dictionary
    expiration_time = datetime.now() + timedelta(minutes=5)
    verification_codes[email] = {
        "code": verification_code,
        "expiration_time": expiration_time,
    }

    # Updated email body
    body = f"""
Hi {fname},

Here is your one-time verification code.

{verification_code}

This verification code can only be used once, and will expire in 5 minutes.

If you did not make this request, please contact our Viewer Experience team for further assistance.
Thanks!
MadHive Team
"""
    # Set up the MIME
    message = MIMEMultipart()
    message["From"] = smtp_username
    message["To"] = email
    message["Subject"] = subject

    # Attach the body to the email
    message.attach(MIMEText(body, "plain"))

    # Connect to the SMTP server
    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()
        # Log in to the SMTP server
        server.login(smtp_username, smtp_password)

        # Send the email
        server.sendmail(smtp_username, email, message.as_string())

    return verification_code


def verify_email(email, code):
    # Check if the email address exists in the global dictionary
    if email in verification_codes:
        stored_code = verification_codes[email]["code"]
        expiration_time = verification_codes[email]["expiration_time"]

        # Check if the input code matches the stored code and has not expired
        if code == stored_code and datetime.now() <= expiration_time:
            # Remove the verification code entry after successful verification
            del verification_codes[email]
            return True

    return False


# Example Usage
recipient_email = "nsimhadri@wisc.edu"
recipient_name = "Nihar"
verification_code = send_email(recipient_email, recipient_name)
print(
    f"Verification email sent to {recipient_email}. Verification code: {verification_code}"
)

# Simulate verification after 3 minutes
input_code = input("Enter the verification code: ")
if verify_email(recipient_email, input_code):
    print("Email verified successfully!")
else:
    print("Email verification failed or code expired.")
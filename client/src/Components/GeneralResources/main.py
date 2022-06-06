import smtplib 
from email.message import EmailMessage 
from flask import Flask,request

app = Flask(__name__)

app.config['CORS_HEADERS'] = 'Content-Type'

def sendEmail(billInfo):
    
    email_subject = billInfo['subject']
    sender_email_address = "appcinepolis@gmail.com" 
    receiver_email_address = billInfo['clientEmail']
    email_smtp = "smtp.gmail.com" 
    email_password = "admin2022" 

    # Create an email message object 
    message = EmailMessage() 

    # Configure email headers 
    message['Subject'] = email_subject 
    message['From'] = sender_email_address 
    message['To'] = receiver_email_address 

    # Set email body text 
    message.set_content(billInfo['text']) 

    # Set smtp server and port 
    server = smtplib.SMTP(email_smtp, '587') 

    # Identify this client to the SMTP server 
    server.ehlo() 

    # Secure the SMTP connection 
    server.starttls() 

    # Login to email account 
    server.login(sender_email_address, email_password) 

    # Send email 
    server.send_message(message) 

    # Close connection to server 
    server.quit()

@app.route('/')
def index(methods=['POST']):
    test = {'x':"hola"}
    return test

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=5000,debug=True)
    

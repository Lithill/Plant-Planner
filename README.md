   1. Expected behaviour: Form is visible when navigating to test_pw.html
   2. Actual behaviour: Jinja error - AttributeError: 'PasswordForm' object has no attribute 'validate_on_submit'
   3. Solution: Import FlaskForm from flask_wtf, and pass FlaskForm into the form.
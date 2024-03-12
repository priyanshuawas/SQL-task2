from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

mysql_host = 'localhost'
mysql_user = 'your_mysql_username'
mysql_password = 'your_mysql_password'
mysql_database = 'survey_db'

db = mysql.connector.connect(
    host=mysql_host,
    user=mysql_user,
    password=mysql_password,
    database=mysql_database
)

@app.route('/select-gender', methods=['POST'])
def select_gender():
    data = request.json
    gender = data['gender']
    # Save selected gender to session or database (if needed)
    return jsonify({'success': True})


@app.route('/answer-question', methods=['POST'])
def answer_question():
    data = request.json
    question_number = data['question_number']
    option_selected = data['option_selected']
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)

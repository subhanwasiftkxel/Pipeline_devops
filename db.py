import sqlite3

# Connect to a database (or create it if it doesn't exist)
conn = sqlite3.connect('mydatabase.db')

# Create a cursor object using the cursor() method
cursor = conn.cursor()

# Create table (as an example)
cursor.execute('''CREATE TABLE IF NOT EXISTS attendance_records
             (id INTEGER PRIMARY KEY,
              name TEXT NOT NULL,
              date DATE NOT NULL,
              check_in_time TIME,
              check_out_time TIME,
              working_time INTEGER)''')

# Commit the changes and close the connection
conn.commit()
conn.close()


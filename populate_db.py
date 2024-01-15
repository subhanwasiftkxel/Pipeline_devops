import sqlite3
from datetime import datetime

# Connect to the SQLite database
conn = sqlite3.connect('attendance25.db')
cursor = conn.cursor()

# Sample data to insert into the table
data = [
    (8, "Me", "2024-01-17", "1", "4", 3),
    (9, "Me", "2024-01-18", "1", "3", 2),
    (10, "My Friend", "2024-01-21", "2", "7", 5),
    (11, "ME", "2024-01-19", "0", "8", 8),
    (12, "Me", "2024-01-20", "1", "4", 3),
    (13, "ME", "2024-01-21", "0", "8", 8)
]

# Insert data into the table
cursor.executemany('''
    INSERT INTO attendance_records 
    (id, name, date, check_in_time, check_out_time, working_time) 
    VALUES (?, ?, ?, ?, ?, ?)
''', data)

# Commit the changes and close the connection
conn.commit()
conn.close()

"Sample data has been successfully inserted into the 'attendance_records' table."

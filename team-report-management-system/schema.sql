CREATE TABLE employees(employee_id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(100));
CREATE TABLE teams(team_id INT AUTO_INCREMENT PRIMARY KEY,team_name VARCHAR(100));
CREATE TABLE employee_team(employee_id INT,team_id INT,PRIMARY KEY(employee_id,team_id),
FOREIGN KEY(employee_id) REFERENCES employees(employee_id),
FOREIGN KEY(team_id) REFERENCES teams(team_id));
CREATE TABLE reports(report_id INT AUTO_INCREMENT PRIMARY KEY,employee_id INT,
report_name VARCHAR(255),s3_key VARCHAR(255),
upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY(employee_id) REFERENCES employees(employee_id));
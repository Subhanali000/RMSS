CREATE TABLE candidates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    experience_years INT NOT NULL,
    skills TEXT,
    previous_role VARCHAR(100)
);

CREATE TABLE evaluations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id INT,
    crisis_management_score INT,
    sustainability_score INT,
    team_motivation_score INT,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id)
);

CREATE TABLE rankings (
    candidate_id INT PRIMARY KEY,
    total_score INT,
    rank_position INT,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id)
);

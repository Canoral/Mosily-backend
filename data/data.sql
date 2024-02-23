-- Suppression des tables si elles existent déjà
DROP TABLE IF EXISTS Accounts_Tips;
DROP TABLE IF EXISTS Tips;
DROP TABLE IF EXISTS Accounts_Alerts;
DROP TABLE IF EXISTS Alerts;
DROP TABLE IF EXISTS Accounts_Advices;
DROP TABLE IF EXISTS Advices;

-- Début de la transaction
BEGIN;

-- Création de la table Advices
CREATE TABLE Advices (
    id INTEGER PRIMARY KEY,
    language VARCHAR(10),
    advice_formula VARCHAR(255),
    advice_text TEXT
);

-- Insertion des données dans la table Advices
INSERT INTO Advices (id, language, advice_formula, advice_text)
VALUES
    (1, 'fr-FR', 'IF(NOT(CASH_FLOW.category=''Telecom'') AND (CASH_FLOW.date_and_time<45j))', 'Vous pouvez vous abonner à un forfait téléphonique professionnel afin de déduire cette charge personnelle grace à votre entreprise'),
    (2, 'fr-FR', 'IF((CASH_FLOW.category=''Loan'') AND (SUM(CASH_FLOW.amount_it>60%)))', 'Vos charges de loyer représentent plus de 60% de vos dépenses totales : Avez-vous pensé à acheter ?');

-- Création de la table Accounts_Advices
CREATE TABLE Accounts_Advices (
    id INTEGER PRIMARY KEY,
    id_account INTEGER,
    id_advice INTEGER,
    status VARCHAR(10),
    FOREIGN KEY (id_advice) REFERENCES Advices(id)
);

-- Insertion des données dans la table Accounts_Advices
INSERT INTO Accounts_Advices (id, id_account, id_advice, status)
VALUES
    (8, 30, 1, 'New'),
    (9, 30, 2, 'Read'),
    (10, 30, 2, 'New');

-- Création de la table Alerts
CREATE TABLE Alerts (
    id INTEGER PRIMARY KEY,
    language VARCHAR(10),
    alert_formula VARCHAR(255),
    alert_text TEXT
);

-- Insertion des données dans la table Alerts
INSERT INTO Alerts (id, language, alert_formula, alert_text)
VALUES
    (11, 'fr-FR', 'IF((SUM(CASH_FLOW.amount_it<=0)) AND (CASH_FLOW.date_and_time<30j))', 'Vous avez perdu de l''argent sur 30 jours glissants !'),
    (12, 'fr-FR', 'IF((COUNT(CASH_FLOW.amount_it=0)) AND (CASH_FLOW.date_and_time<30j))', 'Est-ce que le bateau coule ?');

-- Création de la table Accounts_Alerts
CREATE TABLE Accounts_Alerts (
    id INTEGER PRIMARY KEY,
    id_account INTEGER,
    id_alert INTEGER,
    status VARCHAR(10),
    FOREIGN KEY (id_alert) REFERENCES Alerts(id)
);

-- Insertion des données dans la table Accounts_Alerts
INSERT INTO Accounts_Alerts (id, id_account, id_alert, status)
VALUES
    (13, 30, 12, 'New');

-- Création de la table Tips
CREATE TABLE Tips (
    id INTEGER PRIMARY KEY,
    language VARCHAR(10),
    tip_formula VARCHAR(255),
    tip_text TEXT
);

-- Insertion des données dans la table Tips
INSERT INTO Tips (id, language, tip_formula, tip_text)
VALUES
    (14, 'fr-FR', '', 'Savez vous que vous pouvez déduire une partie de votre facture d''électricité si vous travaillez chez vous ?'),
    (15, 'fr-FR', '', 'Savez vous que vous pouvez déduire plus de frais kilométriques avec un véhicule électrique ?');

-- Création de la table Accounts_Tips
CREATE TABLE Accounts_Tips (
    id INTEGER PRIMARY KEY,
    id_account INTEGER,
    id_tip INTEGER,
    status VARCHAR(10),
    FOREIGN KEY (id_tip) REFERENCES Tips(id)
);

-- Insertion des données dans la table Accounts_Tips
INSERT INTO Accounts_Tips (id, id_account, id_tip, status)
VALUES
    (16, 30, 14, 'New'),
    (17, 30, 15, 'New');

-- Fin de la transaction
COMMIT;

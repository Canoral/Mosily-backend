-- Suppression des tables si elles existent déjà
DROP TABLE IF EXISTS Accounts_Tips;
DROP TABLE IF EXISTS Tips;

-- Supprimer la contrainte de clé étrangère
ALTER TABLE Accounts_Alerts
DROP CONSTRAINT accounts_alerts_id_alert_fkey;

-- Suppression des tables
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
    formula VARCHAR(255),
    text TEXT
);

-- Insertion des données dans la table Advices
INSERT INTO Advices (id, language, formula, text)
VALUES
    (1, 'fr-FR', 'IF(NOT(CASH_FLOW.category=''Telecom'') AND (CASH_FLOW.date_and_time<45j))', 'Vous pouvez vous abonner à un forfait téléphonique professionnel afin de déduire cette charge personnelle grace à votre entreprise'),
    (2, 'fr-FR', 'IF((CASH_FLOW.category=''Loan'') AND (SUM(CASH_FLOW.amount_it>60%)))', 'Vos charges de loyer représentent plus de 60% de vos dépenses totales : Avez-vous pensé à acheter ?'),
    (3, 'fr-FR', 'IF((CASH_FLOW.category=''Food'') AND (CASH_FLOW.amount_it > 100))', 'Vos dépenses alimentaires dépassent 100 euros. Pensez à réduire vos coûts en cuisinant chez vous.'),
    (4, 'fr-FR', 'IF((CASH_FLOW.category=''Transport'') AND (CASH_FLOW.amount_it > 200))', 'Vos dépenses en transport sont élevées. Envisagez de chercher des moyens de transport alternatifs ou regroupez vos déplacements pour économiser.'),
    (5, 'fr-FR', 'IF((CASH_FLOW.category=''Entertainment'') AND (CASH_FLOW.amount_it > 50))', 'Vous dépensez beaucoup en divertissement. Cherchez des activités moins coûteuses ou limitez-vous à un budget mensuel pour ces dépenses.');
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
    (10, 30, 2, 'New'),
    (11, 30, 3, 'New'),
    (12, 30, 4, 'New'),
    (13, 30, 5, 'New');

-- Création de la table Alerts
CREATE TABLE Alerts (
    id INTEGER PRIMARY KEY,
    language VARCHAR(10),
    formula VARCHAR(255),
    text TEXT
);

-- Insertion des données dans la table Alerts
INSERT INTO Alerts (id, language, formula, text)
VALUES
    (11, 'fr-FR', 'IF((SUM(CASH_FLOW.amount_it<=0)) AND (CASH_FLOW.date_and_time<30j))', 'Vous avez perdu de l''argent sur 30 jours glissants !'),
    (12, 'fr-FR', 'IF((COUNT(CASH_FLOW.amount_it=0)) AND (CASH_FLOW.date_and_time<30j))', 'Est-ce que le bateau coule ?'),
    (14, 'fr-FR', 'IF((SUM(CASH_FLOW.amount_it<=0)) AND (CASH_FLOW.date_and_time<15j))', 'Attention ! Votre solde est négatif depuis 15 jours !'),
    (15, 'fr-FR', 'IF((COUNT(CASH_FLOW.amount_it=0)) AND (CASH_FLOW.date_and_time<15j))', 'Avez-vous vérifié vos comptes récemment ?');

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
    (14, 30, 11, 'New'),
    (13, 30, 12, 'New'),
    (16, 31, 14, 'New'),
    (17, 32, 15, 'New');

-- Création de la table Tips
CREATE TABLE Tips (
    id INTEGER PRIMARY KEY,
    language VARCHAR(10),
    formula VARCHAR(255),
    text TEXT
);

-- Insertion des données dans la table Tips
INSERT INTO Tips (id, language, formula, text)
VALUES
    (14, 'fr-FR', '', 'Savez vous que vous pouvez déduire une partie de votre facture d''électricité si vous travaillez chez vous ?'),
    (15, 'fr-FR', '', 'Savez vous que vous pouvez déduire plus de frais kilométriques avec un véhicule électrique ?'),
    (18, 'fr-FR', '', 'Planifiez vos repas à l"avance pour économiser sur les achats impulsifs.'),
    (19, 'fr-FR', '', 'Utilisez les transports en commun pour réduire les frais de déplacement.');


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
    (17, 30, 15, 'New'),
    (20, 31, 18, 'New'),
    (21, 32, 19, 'New');

-- Fin de la transaction
COMMIT;

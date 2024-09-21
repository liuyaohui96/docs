-- create table
CREATE TABLE Addressbook(
    regist_no INTEGER NO NULL,
    PRiMARY KEY (regist_no),
    name VARCHAR(128) NO NULL,
    address VARCHAR(256) NO NULL,
    tel_no CHAR(10),
    mail_addrsss CHAR(20)
);

-- alter table add a column
ALTER TABLE Addressbook ADD COLUMN postal_code CHAR(8) NOT NULL;

-- delete table
DROP TABLE Addressbook;

-- 
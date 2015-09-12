DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

/* TABLES DEFINED BELOW */

DROP TABLE IF EXISTS `messages`;

CREATE TABLE messages (
  `M_ID` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `text` VARCHAR(200) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `object_id` VARCHAR(10) NULL DEFAULT NULL,
  `U_ID_users` INTEGER NULL DEFAULT NULL,
  `R_ID_rooms` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`M_ID`)
);

DROP TABLE IF EXISTS `rooms`;

CREATE TABLE rooms (
  `R_ID` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `roomname` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`R_ID`)
);

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `U_ID` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`U_ID`)
);

DROP TABLE IF EXISTS `user_user`;

CREATE TABLE `user_user` (
  `U_U_ID` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `U_ID_friender` INTEGER NULL DEFAULT NULL,
  `U_ID_friended` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`U_U_ID`)
);

/* FOREIGN KEY RELATIONSHIPS BELOW */

ALTER TABLE `messages` ADD FOREIGN KEY (U_ID_users) REFERENCES `users` (`U_ID`);
ALTER TABLE `messages` ADD FOREIGN KEY (R_ID_rooms) REFERENCES `rooms` (`R_ID`);
ALTER TABLE `user_user` ADD FOREIGN KEY (U_ID_friended) REFERENCES `users` (`U_ID`);
ALTER TABLE `user_user` ADD FOREIGN KEY (U_ID_friender) REFERENCES `users` (`U_ID`);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


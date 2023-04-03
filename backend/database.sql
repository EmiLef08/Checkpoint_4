-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (x86_64)
--
-- Host: 127.0.0.1    Database: leo_base
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actions`
--

DROP TABLE IF EXISTS `actions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `date_realisation` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actions`
--

LOCK TABLES `actions` WRITE;
/*!40000 ALTER TABLE `actions` DISABLE KEYS */;
INSERT INTO `actions` VALUES (1,'Cabaret Vert','2022-08-18'),(2,'World Clean Up Day','2022-09-17'),(3,'Convention Nationale LEO Vannes','2022-10-29'),(4,'Banques Alimentaires','2022-11-27'),(5,'Distribution de la collecte de jouets et livres','2022-12-20'),(6,'Dépistage du Diabète','2023-02-25'),(7,'Journées de Printemps LEO Strasbourg','2023-03-18'),(8,'Atelier nichoirs','2023-03-25'),(9,'Atelier nichoirs 2','2023-04-29'),(10,'Rencontre interclubs','2023-05-20'),(11,'Vente de fleurs','2023-06-03'),(12,'Journée LCIF et LIONS','2023-06-10'),(13,'Atelier avec les enfants','2023-07-22');
/*!40000 ALTER TABLE `actions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `function` varchar(100) NOT NULL,
  `profile_picture` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (1,'Louis-Victor','GARNOTEL','Membre','Louis-Victor.jpeg'),(2,'Emeline','LEFEBVRE','Présidente','Emeline.jpeg'),(3,'Angelina','PISANO','Secrétaire','Angelina.jpeg'),(4,'Sanaë','RICHEZ','Membre','Sanae.jpeg'),(5,'Fouzi Camille','ZEGHAR','Trésorier','Fouzi.jpeg');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participation`
--

DROP TABLE IF EXISTS `participation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `participation` (
  `members_id` int NOT NULL,
  `actions_id` int NOT NULL,
  KEY `participation_FK` (`members_id`),
  KEY `participation_FK_1` (`actions_id`),
  CONSTRAINT `participation_FK` FOREIGN KEY (`members_id`) REFERENCES `members` (`id`),
  CONSTRAINT `participation_FK_1` FOREIGN KEY (`actions_id`) REFERENCES `actions` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participation`
--

LOCK TABLES `participation` WRITE;
/*!40000 ALTER TABLE `participation` DISABLE KEYS */;
INSERT INTO `participation` VALUES (2,1),(2,2),(2,3),(2,4),(3,4),(4,4),(2,5),(4,5),(2,6),(4,6),(2,7),(3,7),(4,7),(5,7),(2,8),(4,8),(5,8);
/*!40000 ALTER TABLE `participation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photos`
--

DROP TABLE IF EXISTS `photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `picture` varchar(250) NOT NULL,
  `actions_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `photos_FK` (`actions_id`),
  CONSTRAINT `photos_FK` FOREIGN KEY (`actions_id`) REFERENCES `actions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photos`
--

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;
INSERT INTO `photos` VALUES (1,'Cabaret_1.jpeg',1),(2,'Cabaret_2.jpeg',1),(3,'Cabaret_3.jpeg',1),(4,'Cabaret_4.jpeg',1),(5,'cnl_vannes_1.JPG',3),(6,'cnl_vannes_.JPG',3),(7,'cnl_vannes_1.jpg',3),(8,'banques_1.JPG',4),(9,'banques_2.JPG',4),(10,'jouets.JPG',5),(11,'diabete.JPG',6),(12,'jdp_strasbourg_1.jpeg',7),(13,'jdp_strasbourg_2.jpeg',7),(14,'jdp_strasbourg_3.jpeg',7),(15,'nichoirs_1.JPG',8),(16,'nichoirs_2.JPG',8),(17,'nichoirs_3.JPG',8),(18,'nichoirs_4.JPG',8);
/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-03 23:59:22

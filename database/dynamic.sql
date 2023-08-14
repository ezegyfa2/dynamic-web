-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.33 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table dynamic_web.clients
CREATE TABLE IF NOT EXISTS `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(20) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=211 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table dynamic_web.presentation_website_orders
CREATE TABLE IF NOT EXISTS `presentation_website_orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `has_contact_us_page` bit(1) DEFAULT NULL,
  `has_catalog_page` bit(1) DEFAULT NULL,
  `has_login` bit(1) DEFAULT NULL,
  `has_admin` bit(1) DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_presentation_website_orders_clients` (`client_id`),
  CONSTRAINT `FK_presentation_website_orders_clients` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table dynamic_web.webshop_orders
CREATE TABLE IF NOT EXISTS `webshop_orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `has_contact_us_page` bit(1) DEFAULT NULL,
  `has_excel_product_import` bit(1) DEFAULT NULL,
  `has_related_products` bit(1) DEFAULT NULL,
  `has_product_filters` bit(1) DEFAULT NULL,
  `has_product_ratings` bit(1) DEFAULT NULL,
  `has_favorite_products` bit(1) DEFAULT NULL,
  `has_featured_products` bit(1) DEFAULT NULL,
  `has_coupon` bit(1) DEFAULT NULL,
  `has_delivery_method` bit(1) DEFAULT NULL,
  `has_login` bit(1) DEFAULT NULL,
  `has_facebook_login` bit(1) DEFAULT NULL,
  `has_product_admin` bit(1) DEFAULT NULL,
  `has_buyer_admin` bit(1) DEFAULT NULL,
  `has_admin_log` bit(1) DEFAULT NULL,
  `has_buy_statistics` bit(1) DEFAULT NULL,
  `has_buy_notifications` bit(1) DEFAULT NULL,
  `has_news_blog` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__clients` (`client_id`),
  CONSTRAINT `FK__clients` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table dynamic_web.website_types
CREATE TABLE IF NOT EXISTS `website_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

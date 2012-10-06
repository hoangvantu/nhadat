-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Sam 06 Octobre 2012 à 21:11
-- Version du serveur: 5.1.41
-- Version de PHP: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `nhadat`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `adminid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `lastlogin` datetime NOT NULL,
  PRIMARY KEY (`adminid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Contenu de la table `admin`
--

INSERT INTO `admin` (`adminid`, `username`, `password`, `lastlogin`) VALUES
(1, 'admin', 'admin', '0000-00-00 00:00:00'),
(2, 'admin2', 'admin', '2012-09-26 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `district`
--

CREATE TABLE IF NOT EXISTS `district` (
  `districtid` int(11) NOT NULL AUTO_INCREMENT,
  `districtname` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `provinceid` int(11) NOT NULL,
  PRIMARY KEY (`districtid`),
  KEY `provinceid` (`provinceid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Contenu de la table `district`
--

INSERT INTO `district` (`districtid`, `districtname`, `provinceid`) VALUES
(1, 'Hai Bà Trưng', 1),
(2, 'Hoàng Mai', 1),
(3, 'Thanh Xuân', 2);

-- --------------------------------------------------------

--
-- Structure de la table `khunggia`
--

CREATE TABLE IF NOT EXISTS `khunggia` (
  `khunggiaid` int(11) NOT NULL AUTO_INCREMENT,
  `KhungGiaName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`khunggiaid`),
  KEY `khunggiaid` (`khunggiaid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Contenu de la table `khunggia`
--

INSERT INTO `khunggia` (`khunggiaid`, `KhungGiaName`) VALUES
(1, '1tr-2tr');

-- --------------------------------------------------------

--
-- Structure de la table `loainha`
--

CREATE TABLE IF NOT EXISTS `loainha` (
  `LoainhaID` int(11) NOT NULL AUTO_INCREMENT,
  `TenLoaiNha` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`LoainhaID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `loainha`
--

INSERT INTO `loainha` (`LoainhaID`, `TenLoaiNha`) VALUES
(1, 'Nhà ở/Nhà trọ'),
(2, 'Văn phòng làm việc');

-- --------------------------------------------------------

--
-- Structure de la table `loainhucau`
--

CREATE TABLE IF NOT EXISTS `loainhucau` (
  `nhucauid` int(11) NOT NULL AUTO_INCREMENT,
  `nhucauname` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`nhucauid`),
  KEY `nhucauid` (`nhucauid`),
  KEY `nhucauid_2` (`nhucauid`),
  KEY `nhucauid_3` (`nhucauid`),
  KEY `nhucauid_4` (`nhucauid`),
  KEY `nhucauid_5` (`nhucauid`),
  KEY `nhucauid_6` (`nhucauid`),
  KEY `nhucauid_7` (`nhucauid`),
  KEY `nhucauid_8` (`nhucauid`),
  KEY `nhucauid_9` (`nhucauid`),
  KEY `nhucauid_10` (`nhucauid`),
  KEY `nhucauid_11` (`nhucauid`),
  KEY `nhucauid_12` (`nhucauid`),
  KEY `nhucauid_13` (`nhucauid`),
  KEY `nhucauid_14` (`nhucauid`),
  KEY `nhucauid_15` (`nhucauid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Contenu de la table `loainhucau`
--

INSERT INTO `loainhucau` (`nhucauid`, `nhucauname`) VALUES
(2, 'can ban');

-- --------------------------------------------------------

--
-- Structure de la table `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `NewsID` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Content` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `TimeAction` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `DistrictID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `Display` tinyint(1) NOT NULL DEFAULT '0',
  `ViewCount` int(11) NOT NULL DEFAULT '0',
  `PhoneNumber` varchar(20) NOT NULL,
  `loainhaid` int(11) NOT NULL,
  `nhucauid` int(11) NOT NULL,
  `khunggia` int(11) NOT NULL,
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `GiaNha` varchar(100) DEFAULT NULL,
  `lat` float(10,6) DEFAULT NULL,
  `lng` float(10,6) DEFAULT NULL,
  PRIMARY KEY (`NewsID`),
  KEY `DistrictID` (`DistrictID`),
  KEY `UserID` (`UserID`),
  KEY `nhucauid` (`nhucauid`),
  KEY `loaigia` (`khunggia`),
  KEY `nhucauid_2` (`nhucauid`),
  KEY `khunggia` (`khunggia`),
  KEY `loainhaid` (`loainhaid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=37 ;

--
-- Contenu de la table `news`
--

INSERT INTO `news` (`NewsID`, `Title`, `Content`, `TimeAction`, `DistrictID`, `UserID`, `Display`, `ViewCount`, `PhoneNumber`, `loainhaid`, `nhucauid`, `khunggia`, `address`, `GiaNha`, `lat`, `lng`) VALUES
(36, '2323', '32323232', '2012-10-06 16:40:52', 1, 1, 0, 0, '2323233232', 1, 2, 1, '232323323232', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `news_image`
--

CREATE TABLE IF NOT EXISTS `news_image` (
  `ImageID` int(11) NOT NULL AUTO_INCREMENT,
  `NewsID` int(11) NOT NULL,
  `Image__URL` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `IMG_desc` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `thumbnail_url` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ImageID`),
  KEY `NewsID` (`NewsID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Contenu de la table `news_image`
--

INSERT INTO `news_image` (`ImageID`, `NewsID`, `Image__URL`, `IMG_desc`, `thumbnail_url`) VALUES
(3, 36, 'http://localhost:82/nhadat/smarty/templates/styleAdmin/blueadmin/upload/server/php/files/Water%20lilies%20%282%29.jpg', 'http://localhost:82/nhadat/smarty/templates/styleAdmin/blueadmin/upload/server/php/files/Water%20lilies%20%282%29.jpg', 'http://localhost:82/nhadat/smarty/templates/styleAdmin/blueadmin/upload/server/php/files/Water%20lilies%20%282%29.jpg'),
(4, 36, 'http:\\/\\/localhost:82\\/nhadat\\/smarty\\/templates\\/styleAdmin\\/blueadmin\\/upload\\/server\\/php\\/files\\/Blue%20hills%20%282%29.jp', 'http:\\/\\/localhost:82\\/nhadat\\/smarty\\/templates\\/styleAdmin\\/blueadmin\\/upload\\/server\\/php\\/files\\/Blue%20hills%20%282%29.jphttp:\\/\\/localhost:82\\/nhadat\\/smarty\\/templates\\/styleAdmin\\/blueadmin\\/u', 'http:\\/\\/localhost:82\\/nhadat\\/smarty\\/templates\\/styleAdmin\\/blueadmin\\/upload\\/server\\/php\\/files\\/Blue%20hills%20%282%29.jp');

-- --------------------------------------------------------

--
-- Structure de la table `province`
--

CREATE TABLE IF NOT EXISTS `province` (
  `ProvinceID` int(11) NOT NULL AUTO_INCREMENT,
  `ProvinceName` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ProvinceID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `province`
--

INSERT INTO `province` (`ProvinceID`, `ProvinceName`) VALUES
(1, 'Hà Nội'),
(2, 'TP Ho Chi Minh');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `UserID` int(11) NOT NULL AUTO_INCREMENT,
  `Email` varchar(50) CHARACTER SET latin1 NOT NULL,
  `Password` varchar(50) CHARACTER SET latin1 NOT NULL,
  `Name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `EmailList` tinyint(1) NOT NULL,
  `Telephone` varchar(12) CHARACTER SET latin1 NOT NULL,
  `EmailHide` tinyint(1) NOT NULL,
  `TimeRegister` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL,
  `activestring` varchar(50) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`UserID`, `Email`, `Password`, `Name`, `EmailList`, `Telephone`, `EmailHide`, `TimeRegister`, `active`, `activestring`) VALUES
(1, 'hoangvantu', 'homendvn', '22', 0, '22', 1, '2012-09-27 08:53:02', 0, '0'),
(3, 'hoangvantundvn@gmail.com1', 'matkhautest', 'HOMENDVN', 1, '0973341574', 0, '2012-09-26 20:31:23', 0, '0'),
(4, 'hoangvantundvn@gmail.com', 'homendvn', 'homendvn', 1, '0973341574', 0, '0000-00-00 00:00:00', 0, '0'),
(5, 'hoangvantundvn@gmail.com', 'vietnammobile', 'hoangvantu', 0, '0973341574', 0, '2012-10-06 16:48:11', 1, '');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `district`
--
ALTER TABLE `district`
  ADD CONSTRAINT `district_ibfk_1` FOREIGN KEY (`provinceid`) REFERENCES `province` (`ProvinceID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `news_ibfk_1` FOREIGN KEY (`khunggia`) REFERENCES `khunggia` (`khunggiaid`),
  ADD CONSTRAINT `news_ibfk_2` FOREIGN KEY (`nhucauid`) REFERENCES `loainhucau` (`nhucauid`),
  ADD CONSTRAINT `news_ibfk_3` FOREIGN KEY (`DistrictID`) REFERENCES `district` (`districtid`),
  ADD CONSTRAINT `news_ibfk_4` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`),
  ADD CONSTRAINT `news_ibfk_5` FOREIGN KEY (`loainhaid`) REFERENCES `loainha` (`LoainhaID`);

--
-- Contraintes pour la table `news_image`
--
ALTER TABLE `news_image`
  ADD CONSTRAINT `news_image_ibfk_1` FOREIGN KEY (`NewsID`) REFERENCES `news` (`NewsID`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

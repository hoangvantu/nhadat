-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 05, 2012 at 11:56 AM
-- Server version: 5.5.24-log
-- PHP Version: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `nhadat`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=36 ;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`NewsID`, `Title`, `Content`, `TimeAction`, `DistrictID`, `UserID`, `Display`, `ViewCount`, `PhoneNumber`, `loainhaid`, `nhucauid`, `khunggia`, `address`, `GiaNha`, `lat`, `lng`) VALUES
(25, '11', '111111111111', '2012-10-05 11:43:22', 1, 3, 0, 0, '12112', 2, 22, 1, '22', '22222222', 10000.000000, 10000.000000),
(32, '1', '11111111111111', '2012-10-05 11:46:01', 1, 3, 1, 1, '12112', 1, 22, 1, '1', NULL, NULL, NULL),
(35, '121', '``11111111111111111111111111', '2012-10-05 11:53:36', 3, 3, 0, 0, '0912221', 1, 22, 1, '133444', '5 trieu dong', NULL, NULL);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `news_ibfk_11` FOREIGN KEY (`nhucauid`) REFERENCES `loainhucau` (`nhucauid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `news_ibfk_10` FOREIGN KEY (`khunggia`) REFERENCES `khunggia` (`khunggiaid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `news_ibfk_6` FOREIGN KEY (`DistrictID`) REFERENCES `district` (`districtid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `news_ibfk_7` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `news_ibfk_8` FOREIGN KEY (`loainhaid`) REFERENCES `loainha` (`LoainhaID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

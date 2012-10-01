-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 01, 2012 at 12:08 PM
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
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `adminid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `lastlogin` datetime NOT NULL,
  PRIMARY KEY (`adminid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`adminid`, `username`, `password`, `lastlogin`) VALUES
(1, 'admin', 'admin', '0000-00-00 00:00:00'),
(2, 'admin2', 'admin', '2012-09-26 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `district`
--

CREATE TABLE IF NOT EXISTS `district` (
  `districtid` int(11) NOT NULL AUTO_INCREMENT,
  `districtname` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `provinceid` int(11) NOT NULL,
  PRIMARY KEY (`districtid`),
  KEY `provinceid` (`provinceid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Dumping data for table `district`
--

INSERT INTO `district` (`districtid`, `districtname`, `provinceid`) VALUES
(1, 'Hai Bà Trưng', 1),
(2, 'Hoàng Mai', 1),
(3, 'Thanh Xuân', 1);

-- --------------------------------------------------------

--
-- Table structure for table `khunggia`
--

CREATE TABLE IF NOT EXISTS `khunggia` (
  `khunggiaid` int(11) NOT NULL AUTO_INCREMENT,
  `KhungGiaName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`khunggiaid`),
  KEY `khunggiaid` (`khunggiaid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `khunggia`
--

INSERT INTO `khunggia` (`khunggiaid`, `KhungGiaName`) VALUES
(1, '1tr-2tr');

-- --------------------------------------------------------

--
-- Table structure for table `loainha`
--

CREATE TABLE IF NOT EXISTS `loainha` (
  `LoainhaID` int(11) NOT NULL AUTO_INCREMENT,
  `TenLoaiNha` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`LoainhaID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `loainha`
--

INSERT INTO `loainha` (`LoainhaID`, `TenLoaiNha`) VALUES
(1, 'Nhà ở/Nhà trọ'),
(2, 'Văn phòng làm việc');

-- --------------------------------------------------------

--
-- Table structure for table `loainhucau`
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `loainhucau`
--

INSERT INTO `loainhucau` (`nhucauid`, `nhucauname`) VALUES
(1, 'Cần bán');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`NewsID`, `Title`, `Content`, `TimeAction`, `DistrictID`, `UserID`, `Display`, `ViewCount`, `PhoneNumber`, `loainhaid`, `nhucauid`, `khunggia`, `address`, `GiaNha`, `lat`, `lng`) VALUES
(9, 'Cho thuê phong tro sinh vien khu Khương Đình chính chủ, Khương Đình, Quận Thanh Xuân Hà nội\n', 'Cho thuê phòng trọ Khương Đình, Thanh Xuân. Địa chỉ: Khương Đình, Thanh Xuân, Hà Nội (cách ngã 4 Sở khoảng 1km). Mình có phòng trọ 1.5tr/tháng (dạng chung cư mini, khep kín, mới xây, điện nước theo giá nhà nước...nói chung là tốt). Mình đang ở một mình, muốn thêm một bạn nử nữa ở cùng mình cho vui và chia sẻ tiền nhà (mỗi người 750.000/tháng). Liên hệ: 0972943806\n', '2012-09-26 16:47:00', 2, 1, 0, 178, '1212121', 1, 1, 1, 'Số 57 ngõ 11 tổ 82 Hoàng Văn Thái, Khương Trung, Quận Thanh Xuân\n', '1,5 trieu / thang', 21.002354, 105.870026),
(10, 'Tieu de 21', 'http://farm8.static.flickr.com/7074/7151890791_5d7df30d88_m.jpg\r\nTieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21Tieu de 21', '2012-09-26 16:47:45', 2, 4, 1, 2, '', 1, 1, 1, '', '', 0.000000, 0.000000),
(12, 'tieu de', 'noi dung', '2012-09-26 16:47:47', 1, 3, 1, 0, '', 1, 1, 1, '', '', 0.000000, 0.000000),
(13, 'tieu de', 'noi dung', '2012-09-26 16:47:51', 1, 3, 1, 0, '', 1, 1, 1, '', '', 0.000000, 0.000000),
(14, 'Tieu de tin dang', 'Noi dung tin dang', '2012-09-26 16:50:00', 1, 3, 1, 0, '', 1, 1, 1, '', '', 0.000000, 0.000000),
(15, 'Tieu de tin dang', 'Tieu de tin dang', '2012-09-26 16:51:31', 2, 3, 0, 0, '12121212', 1, 1, 1, '', NULL, NULL, NULL),
(16, 'Tieu de tin dang', 'Tieu de tin dang', '2012-09-26 16:52:25', 1, 1, 1, 1, '1', 1, 1, 1, '1111111111', '11111111111111111111111', 10000.000000, 10000.000000),
(17, 'Tieu de tin dang', 'Tieu de tin dang', '2012-09-26 16:52:45', 1, 1, 1, 1, '1', 1, 1, 1, '1111111111', '11111111111111111111111', 10000.000000, 10000.000000);

-- --------------------------------------------------------

--
-- Table structure for table `news_image`
--

CREATE TABLE IF NOT EXISTS `news_image` (
  `ImageID` int(11) NOT NULL AUTO_INCREMENT,
  `NewsID` int(11) NOT NULL,
  `Image__URL` int(11) NOT NULL,
  `IMG_desc` int(11) NOT NULL,
  PRIMARY KEY (`ImageID`),
  KEY `NewsID` (`NewsID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `province`
--

CREATE TABLE IF NOT EXISTS `province` (
  `ProvinceID` int(11) NOT NULL AUTO_INCREMENT,
  `ProvinceName` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ProvinceID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `province`
--

INSERT INTO `province` (`ProvinceID`, `ProvinceName`) VALUES
(1, 'Hà Nội');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `UserID` int(11) NOT NULL AUTO_INCREMENT,
  `Email` varchar(50) CHARACTER SET latin1 NOT NULL,
  `Password` varchar(50) CHARACTER SET latin1 NOT NULL,
  `Name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Telephone` varchar(12) CHARACTER SET latin1 NOT NULL,
  `TimeRegister` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL,
  `activestring` varchar(50) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `Email`, `Password`, `Name`, `Telephone`, `TimeRegister`, `active`, `activestring`) VALUES
(1, 'hoangvantu', 'homendvn', '22', '22', '2012-09-27 00:53:26', 0, '0'),
(3, 'hoangvantundvn@gmail.com1', 'matkhautest', 'HOMENDVN', '0973341574', '2012-09-26 12:31:47', 0, '0'),
(4, 'hoangvantundvn@gmail.com', 'homendvn', 'homendvn', '0973341574', '0000-00-00 00:00:00', 0, '0'),
(5, 'thanhcut@gmail.com', 'thanhancut', 'thanhcut', '12121221', '2012-10-01 11:58:35', 0, ''),
(6, 'thanhcut@gmail.com', 'thanhancut', 'thanhcut', '12121221', '2012-10-01 11:59:00', 1, ''),
(7, 'hoangvantundvn@gmail.com', 'homendvn', 'hoang van tu', '123123123123', '2012-10-01 12:05:44', 1, '');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `district`
--
ALTER TABLE `district`
  ADD CONSTRAINT `district_ibfk_1` FOREIGN KEY (`provinceid`) REFERENCES `province` (`ProvinceID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `news_ibfk_1` FOREIGN KEY (`DistrictID`) REFERENCES `district` (`districtid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `news_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `news_ibfk_3` FOREIGN KEY (`nhucauid`) REFERENCES `news` (`nhucauid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `news_ibfk_4` FOREIGN KEY (`khunggia`) REFERENCES `khunggia` (`khunggiaid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `news_ibfk_5` FOREIGN KEY (`loainhaid`) REFERENCES `loainha` (`LoainhaID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `news_image`
--
ALTER TABLE `news_image`
  ADD CONSTRAINT `news_image_ibfk_1` FOREIGN KEY (`NewsID`) REFERENCES `news` (`NewsID`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

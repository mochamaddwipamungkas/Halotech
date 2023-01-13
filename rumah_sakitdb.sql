-- Adminer 4.8.1 MySQL 5.7.33 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `babies`;
CREATE TABLE `babies` (
  `id_baby` int(11) NOT NULL,
  `id_pasien` int(11) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `panjang` float NOT NULL,
  `berat` float NOT NULL,
  `status` varchar(255) NOT NULL,
  `tanggal_lahir` varchar(255) NOT NULL,
  `jam_lahir` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_baby`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `babies` (`id_baby`, `id_pasien`, `gender`, `panjang`, `berat`, `status`, `tanggal_lahir`, `jam_lahir`, `createdAt`, `updatedAt`) VALUES
(1,	1,	'Laki-laki',	47,	3.9,	'Sehat',	'12-02-2022',	'16.00',	'2023-01-13 21:25:35',	'2023-01-13 23:19:31'),
(2,	2,	'Perempuan',	34.5,	25.6,	'Meninggal',	'16-02-2022',	'02.00',	'2023-01-13 21:26:24',	'2023-01-13 23:20:39'),
(3,	3,	'Laki-laki',	42,	3.5,	'Sehat',	'29-02-2022',	'22.00',	'2023-01-13 23:02:10',	'2023-01-13 23:19:51'),
(4,	4,	'Perempuan',	39,	3.2,	'Sehat',	'20-03-2022',	'12.00',	'2023-01-13 23:04:00',	'2023-01-13 23:20:08'),
(5,	5,	'Laki-laki',	40,	3.7,	'Sehat',	'04-04-2022',	'02.30',	'2023-01-13 23:04:51',	'2023-01-13 23:04:59'),
(6,	5,	'Laki-laki',	37,	3.5,	'Sehat',	'04-04-2022',	'02.45',	'2023-01-13 23:12:42',	'2023-01-13 23:13:24'),
(7,	6,	'Perempuan',	34,	2.9,	'Cacat',	'15-04-2022',	'16.00',	'2023-01-13 23:14:44',	'2023-01-13 23:20:32'),
(8,	7,	'Perempuan',	37,	3.4,	'Sehat',	'24-04-2022',	'12.30',	'2023-01-13 23:15:38',	'2023-01-13 23:15:38'),
(9,	8,	'Perempuan',	35,	3.1,	'Sehat',	'02-05-2022',	'21.20',	'2023-01-13 23:16:35',	'2023-01-13 23:16:44'),
(10,	9,	'Perempuan',	36,	3.2,	'Cacat',	'14-05-2022',	'23.00',	'2023-01-13 23:18:00',	'2023-01-13 23:18:00'),
(11,	10,	'Perempuan',	40,	3.5,	'Sehat',	'27-05-2022',	'20.50',	'2023-01-13 23:19:04',	'2023-01-13 23:19:04');

DROP TABLE IF EXISTS `pasiens`;
CREATE TABLE `pasiens` (
  `id_pasien` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `usia` double NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `telpon_darurat` varchar(255) NOT NULL,
  `usia_kehamilan` double NOT NULL,
  `proses_partus` varchar(255) NOT NULL,
  `jumlah_bayi` double NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_pasien`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `pasiens` (`id_pasien`, `nama`, `usia`, `alamat`, `telpon_darurat`, `usia_kehamilan`, `proses_partus`, `jumlah_bayi`, `createdAt`, `updatedAt`) VALUES
(1,	'Dewi Kartika',	27,	'Jl. Pegangsaan no. 17, Jakarta Barat',	'08158955734',	261,	'Normal',	1,	'2023-01-13 22:33:13',	'2023-01-13 22:57:27'),
(2,	'Rahma Anjani',	30,	'Jl. Dingingrejo No. 13, Jakarta TImur',	'08124384965',	230,	'Caesar',	1,	'2023-01-13 22:34:57',	'2023-01-13 22:57:35'),
(3,	'Siti Aminah',	25,	'Jl. Dipenogoro No. 009 , Jakarta Utara',	'08982777849',	259,	'Normal',	1,	'2023-01-13 22:45:28',	'2023-01-13 22:45:28'),
(4,	'Rosi Komalasari',	26,	'Jl. Trimurti No. 67 , Jakarta Barat',	'08157682883',	235,	'Dibantu alat',	1,	'2023-01-13 22:47:34',	'2023-01-13 22:47:34'),
(5,	'Indah Sri Dewi',	32,	'Jl. Bondowoso No. 23, Jakarta Selatan',	'0812784332236',	257,	'Normal',	2,	'2023-01-13 22:50:57',	'2023-01-13 22:50:57'),
(6,	'Nurlela Sudirjo',	24,	'Jl. Gajah Mungkur No. 29, Jakarta Utara',	'08136767489',	263,	'Waterbirth',	1,	'2023-01-13 22:53:35',	'2023-01-13 22:53:35'),
(7,	'Ningsih Angkasari',	28,	'Jl. Hj. Selamet No. 33, Jakarta Timur',	'08996729783',	222,	'Caesar',	1,	'2023-01-13 22:55:23',	'2023-01-13 22:55:37'),
(8,	'Diah Prasuaji',	34,	'Jl. Satria Mandala no. 11, Jakarta Utara',	'08984561878',	266,	'Normal',	1,	'2023-01-13 22:57:13',	'2023-01-13 22:57:13'),
(9,	'Citra Kirana',	29,	'Jl. Krakatau V No. 4, Jakarta Selatan',	'08158172998',	257,	'Normal',	1,	'2023-01-13 22:58:31',	'2023-01-13 22:58:31'),
(10,	'Elrlina Erlen',	26,	'Jl. Batu Raya No. 7, Jakarta Barat',	'08389447239',	263,	'Normal',	1,	'2023-01-13 23:00:05',	'2023-01-13 23:00:05');

-- 2023-01-13 23:24:01

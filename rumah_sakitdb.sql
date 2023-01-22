-- Adminer 4.8.1 MySQL 5.7.33 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `babies`;
CREATE TABLE `babies` (
  `id_baby` varchar(5) NOT NULL,
  `id_pasien` varchar(5) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `panjang` float NOT NULL,
  `berat` float NOT NULL,
  `status` varchar(255) NOT NULL,
  `anak_ke` int(11) DEFAULT NULL,
  `tanggal_lahir` varchar(255) NOT NULL,
  `jam_lahir` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_baby`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `babies` (`id_baby`, `id_pasien`, `gender`, `panjang`, `berat`, `status`, `anak_ke`, `tanggal_lahir`, `jam_lahir`, `createdAt`, `updatedAt`) VALUES
('B001',	'P001',	'Laki-laki',	47,	3.9,	'Sehat',	1,	'2022-01-12',	'12:25',	'2023-01-13 21:25:35',	'2023-01-22 22:45:43'),
('B002',	'P002',	'Perempuan',	34.5,	25.6,	'Meninggal',	1,	'2022-02-16',	'05:35',	'2023-01-13 21:26:24',	'2023-01-21 15:34:21'),
('B003',	'P003',	'Laki-laki',	42,	3.5,	'Sehat',	1,	'2022-03-14',	'22:05',	'2023-01-13 23:02:10',	'2023-01-21 15:34:45'),
('B004',	'P004',	'Perempuan',	39,	3.2,	'Sehat',	1,	'2022-04-19',	'12:30',	'2023-01-13 23:04:00',	'2023-01-21 15:35:00'),
('B005',	'P005',	'Laki-laki',	40,	3.7,	'Sehat',	1,	'2022-05-10',	'04:30',	'2023-01-13 23:04:51',	'2023-01-21 15:35:14'),
('B006',	'P005',	'Laki-laki',	37,	3.5,	'Sehat',	2,	'2022-05-10',	'04:45',	'2023-01-13 23:12:42',	'2023-01-21 15:35:26'),
('B007',	'P006',	'Perempuan',	34,	2.9,	'Cacat',	1,	'2022-07-28',	'10:30',	'2023-01-13 23:14:44',	'2023-01-21 15:35:44'),
('B008',	'P007',	'Perempuan',	37,	3.4,	'Sehat',	1,	'2022-08-23',	'01:15',	'2023-01-13 23:15:38',	'2023-01-21 15:37:02'),
('B009',	'P008',	'Perempuan',	35,	3.1,	'Sehat',	1,	'2022-09-21',	'20:45',	'2023-01-13 23:16:35',	'2023-01-21 15:36:52'),
('B010',	'P009',	'Perempuan',	36,	3.2,	'Cacat',	1,	'2022-10-02',	'04:30',	'2023-01-13 23:18:00',	'2023-01-21 15:41:36'),
('B011',	'P010',	'Perempuan',	40,	3.5,	'Sehat',	1,	'2022-11-17',	'10:35',	'2023-01-13 23:19:04',	'2023-01-21 15:42:50');

DROP TABLE IF EXISTS `pasiens`;
CREATE TABLE `pasiens` (
  `id_pasien` varchar(5) NOT NULL,
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
('P001',	'Dewi Kartika',	27,	'Jl. Pegangsaan no. 17, Jakarta Barat',	'08158955734',	261,	'Normal',	1,	'2023-01-13 22:33:13',	'2023-01-22 22:45:43'),
('P002',	'Rahma Anjani',	30,	'Jl. Dingingrejo No. 13, Jakarta TImur',	'08124384965',	230,	'Caesar',	1,	'2023-01-13 22:34:57',	'2023-01-21 15:43:56'),
('P003',	'Siti Aminah',	25,	'Jl. Dipenogoro No. 009 , Jakarta Utara',	'08982777849',	259,	'Normal',	1,	'2023-01-13 22:45:28',	'2023-01-21 15:44:01'),
('P004',	'Rosi Komalasari',	26,	'Jl. Trimurti No. 67 , Jakarta Barat',	'08157682883',	235,	'Dibantu alat',	1,	'2023-01-13 22:47:34',	'2023-01-21 15:44:05'),
('P005',	'Indah Sri Dewi',	32,	'Jl. Bondowoso No. 23, Jakarta Selatan',	'0812784332236',	257,	'Normal',	2,	'2023-01-13 22:50:57',	'2023-01-21 15:44:10'),
('P006',	'Nurlela Sudirjo',	24,	'Jl. Gajah Mungkur No. 29, Jakarta Utara',	'08136767489',	263,	'Waterbirth',	1,	'2023-01-13 22:53:35',	'2023-01-21 15:44:15'),
('P007',	'Ningsih Angkasari',	28,	'Jl. Hj. Selamet No. 33, Jakarta Timur',	'08996729783',	222,	'Caesar',	1,	'2023-01-13 22:55:23',	'2023-01-21 15:44:19'),
('P008',	'Diah Prasuaji',	34,	'Jl. Satria Mandala no. 11, Jakarta Utara',	'08984561878',	266,	'Normal',	1,	'2023-01-13 22:57:13',	'2023-01-21 15:44:24'),
('P009',	'Citra Kirana',	29,	'Jl. Krakatau V No. 4, Jakarta Selatan',	'08158172998',	257,	'Normal',	1,	'2023-01-13 22:58:31',	'2023-01-21 15:44:28'),
('P010',	'Elrlina Erlen',	26,	'Jl. Batu Raya No. 7, Jakarta Barat',	'08389447239',	263,	'Normal',	1,	'2023-01-13 23:00:05',	'2023-01-21 15:43:51');

-- 2023-01-22 23:58:29

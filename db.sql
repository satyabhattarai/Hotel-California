-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 23, 2025 at 05:18 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `backend`
--

-- --------------------------------------------------------

--
-- Table structure for table `alert:rollback`
--

CREATE TABLE `alert:rollback` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `alerts`
--

CREATE TABLE `alerts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `rank` enum('CHEF','CLIENT') NOT NULL DEFAULT 'CHEF',
  `message` text DEFAULT NULL,
  `table_number` text DEFAULT NULL,
  `status` enum('PENDING','COMPLETED') NOT NULL DEFAULT 'PENDING',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `alerts`
--

INSERT INTO `alerts` (`id`, `rank`, `message`, `table_number`, `status`, `created_at`, `updated_at`) VALUES
(1, 'CLIENT', 'why are you late', '7', 'COMPLETED', '2025-01-06 12:00:12', '2025-01-06 12:01:34'),
(2, 'CLIENT', 'why are you late', '7', 'COMPLETED', '2025-01-06 12:00:30', '2025-01-06 12:05:32'),
(3, 'CLIENT', 'why are you late', '7', 'COMPLETED', '2025-01-06 12:01:05', '2025-01-06 12:05:38'),
(5, 'CLIENT', 'i nedd qwater', '6', 'COMPLETED', '2025-01-06 21:12:20', '2025-01-06 21:13:16'),
(6, 'CLIENT', 'my food', '3', 'COMPLETED', '2025-01-07 02:55:23', '2025-01-07 02:55:43'),
(7, 'CLIENT', NULL, '3', 'COMPLETED', '2025-01-09 00:07:21', '2025-01-10 11:23:21'),
(8, 'CLIENT', 'spoon', '3', 'COMPLETED', '2025-01-10 11:32:40', '2025-01-10 22:11:12'),
(9, 'CLIENT', 'hi', '3', 'COMPLETED', '2025-01-23 10:22:38', '2025-01-23 10:22:49'),
(10, 'CLIENT', NULL, '3', 'COMPLETED', '2025-01-23 10:23:04', '2025-01-23 10:23:57');

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_number` varchar(255) NOT NULL,
  `rank` enum('CHEF','STAFF','Manager') NOT NULL,
  `date` date NOT NULL DEFAULT curdate(),
  `status` enum('PRESENT','ABSENT') NOT NULL DEFAULT 'ABSENT',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`id`, `user_name`, `user_number`, `rank`, `date`, `status`, `created_at`, `updated_at`) VALUES
(1, 'CHEF motu', '981677', 'CHEF', '2025-01-23', 'PRESENT', NULL, NULL),
(2, 'Rohit staff', '1234', 'STAFF', '2025-01-23', 'PRESENT', NULL, NULL),
(3, 'satya staff', '345', 'STAFF', '2025-01-23', 'ABSENT', NULL, NULL),
(4, 'chef test', '3456', 'CHEF', '2025-01-23', 'PRESENT', NULL, NULL),
(5, 'chef motu', '1234', 'CHEF', '2025-01-22', 'ABSENT', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `auth`
--

CREATE TABLE `auth` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `rank` enum('MANAGER','CHEF','STAFF') NOT NULL DEFAULT 'STAFF',
  `address` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `auth`
--

INSERT INTO `auth` (`id`, `name`, `password`, `rank`, `address`, `image`, `phone`, `created_at`, `updated_at`) VALUES
(7, 'Rohit Staff\r\n', '1234', 'STAFF', 'Dhulikhel', 'images/wNXQgXr2MN4apY6jVzcM5iIZ8gAJI4ldxBkUUcCb.jpg', '1', '2025-01-10 10:26:11', '2025-01-10 10:26:11'),
(8, 'Chef Motu', '1234', 'CHEF', 'Dhulikhel', 'images/BcJPtM2a0LfHzACjsUUuR2uxk8Felza0niYQmfCB.jpg', '2', '2025-01-10 10:26:32', '2025-01-10 10:26:32'),
(9, 'Manager hero', '1234', 'MANAGER', 'Dhulikhel', 'images/De01bv00j23nwcAywTDPzmEKkVrQiPfSlN4xXxxG.jpg', '3', '2025-01-10 10:26:53', '2025-01-10 10:26:53'),
(10, 'Satya Bhattarai', '1234', 'STAFF', 'dhulikhel', 'images/sLYBNHcPyIWWqIgf6FBM3dph0VLQt8lbh4AWk9lz.jpg', '14', '2025-01-23 09:45:28', '2025-01-23 09:45:28');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `number` bigint(20) UNSIGNED NOT NULL,
  `visits` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`id`, `name`, `number`, `visits`, `created_at`, `updated_at`) VALUES
(1, 'Utsav Shrestha', 9816778950, 9, '2025-01-06 10:36:28', '2025-01-23 09:35:24'),
(2, 'Satya', 9847039601, 1, '2025-01-06 21:07:20', '2025-01-06 21:07:20'),
(4, 'Test', 1234, 2, '2025-01-10 11:18:33', '2025-01-12 06:19:58'),
(5, 'Test', 980, 5, '2025-01-10 11:20:20', '2025-01-10 11:32:00');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `table_number` varchar(255) NOT NULL,
  `user_number` varchar(255) NOT NULL,
  `payment_date` varchar(255) NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `file_path` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `user_name`, `table_number`, `user_number`, `payment_date`, `total_amount`, `file_path`, `created_at`, `updated_at`) VALUES
(1, 'Satya', '6', '9847039601', '1/7/2025', 48.00, 'history/jj72thq4G0DBgST41ft9KCXlbzKrkdzSBtQf4oYV.pdf', '2025-01-06 21:13:45', '2025-01-06 21:13:45'),
(2, 'TEst', '4', '1234', '1/7/2025', 327.00, 'history/YvdMOCggS7sgwVgEdlriGS1kQ9eAOncQhrAoXiPe.pdf', '2025-01-07 02:51:30', '2025-01-07 02:51:30'),
(3, 'Test', '1', '980', '1/10/2025', 73.00, 'history/iZZFVB0gYenh6NgcuffMDt296oFWKa1xAqOxXZoe.pdf', '2025-01-10 11:26:41', '2025-01-10 11:26:41'),
(4, 'Test', '2', '980', '1/10/2025', 820.00, 'history/DPXL3aiUWi0NmcyCRPUEkGE17Kv4zKy0yx3vfKrB.pdf', '2025-01-10 11:31:44', '2025-01-10 11:31:44');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `category` text NOT NULL,
  `alt` varchar(255) DEFAULT NULL,
  `waiting_time` int(11) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `price` decimal(8,2) NOT NULL,
  `ingredients` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `name`, `image`, `category`, `alt`, `waiting_time`, `desc`, `price`, `ingredients`, `created_at`, `updated_at`) VALUES
(8, 'Strawberry Pancake', 'menu_images/nkLkoz19n0Z57AbRh0yU9Z2fFGqbTcPK3BOtkRHy.jpg', 'Breakfast', 'Pancake', 14, 'This is sweet, healthy and well balanced breakfast', 250.00, 'Wheet,\r\nMilk,\r\nHoney', '2025-01-23 08:13:03', '2025-01-23 08:13:03'),
(9, 'Egg salad', 'menu_images/y3w8BmiR3X81LYfNfiuB38pgNhvU89A9UtrsiywG.jpg', 'Breakfast', 'Egg salad', 10, 'A healthy protein breakfast', 150.00, 'egg,\r\nonion,\r\nleaves,\r\ncarrots,', '2025-01-23 08:14:43', '2025-01-23 08:14:43'),
(10, 'Croissant (Plain)', 'menu_images/WmypzkKnQR9lVEFBm86vcThJCCTIRFeCSItfT0EQ.jpg', 'Breakfast', 'croisssant', 8, 'a light weight breakfast', 80.00, 'wheet,\r\nmilk,\r\nsalt,', '2025-01-23 08:16:24', '2025-01-23 08:16:24'),
(11, 'Breakfast combo (Milk Coffee, Croissant, toast)', 'menu_images/S0fhwBFd4Ua7NMtehF9XbYqFJeZOVsQKewRB6CnK.jpg', 'Breakfast', 'this is good', 15, 'everything is healthy', 250.00, 'wheet,\r\nwater,\r\nmilk,\r\ncoffee', '2025-01-23 08:18:29', '2025-01-23 08:18:29'),
(12, 'Strawberry Bowl', 'menu_images/5aNFN7MISI6Szl3CbpaleL0IcAK6zFP2XAZu3VvF.jpg', 'Breakfast', 'healthy', 14, 'A healthy compete meal for you', 150.00, 'strawberry,\r\ncurd,\r\ngraphes,\r\nnuts', '2025-01-23 08:20:28', '2025-01-23 08:20:28'),
(13, 'Maharaja Strawberry Pancake', 'menu_images/e30ym8s82yU1H8xtnWOPfXkXwGbWV8xmLt6YnJ7O.jpg', 'Breakfast', 'pancake', 18, 'Loaded with taste', 450.00, 'pancake,\r\nstrawberry,\r\nnuts', '2025-01-23 08:22:03', '2025-01-23 08:22:03'),
(14, 'Veg Momo', 'menu_images/a4jQaUmnQhuID5EgNrRmZuz40d1Ux6BwM0TDi6Cc.jpg', 'Momo', 'Burger', 14, 'Tasty and pure veg', 140.00, 'veggs,\r\nmaida', '2025-01-23 08:26:06', '2025-01-23 08:26:06'),
(15, 'Chicken Momo', 'menu_images/56pzAmCcH9AnKe73hIK8ra9RtNfbc4FQGi2j523W.jpg', 'Momo', 'momo', 14, 'Healthy and juicy', 130.00, 'chicken,\r\nveggis,\r\nmaida', '2025-01-23 08:27:16', '2025-01-23 08:27:16'),
(16, 'Pork Momo', 'menu_images/yCspqgIdOIzzzHOAnFqHkyVuBDJHcJZyDTUa3Joe.jpg', 'Momo', 'pork', 18, 'healthy and juicy', 150.00, 'pork,\r\nmaida', '2025-01-23 08:28:03', '2025-01-23 08:28:03'),
(17, 'Buff Momo', 'menu_images/LvBHnyWZvQH7JpEhBlNwBG0SyReRm36ghjh0eOrP.jpg', 'Momo', 'this is alt', 18, 'buffy', 180.00, 'buff,\r\nmaida', '2025-01-23 08:29:43', '2025-01-23 08:29:43'),
(18, 'Pizza Margherita', 'menu_images/CnRQgLUADYkRYGbsTKcjvJw7gVBjwVInm9Rvvdss.jpg', 'Pizza', 'pixxa', 21, 'healthy and loaded', 350.00, 'cheese,\r\nmaida', '2025-01-23 08:31:30', '2025-01-23 08:31:30'),
(19, 'Chicken Pizza', 'menu_images/xPSNrOxakDj4P7pYcdlRF1FCaH3xoPJhTSFKEzBi.jpg', 'Pizza', 'pizza', 12, 'loaded chicken', 230.00, 'maida,\r\nchicken,\r\npizza', '2025-01-23 08:33:18', '2025-01-23 08:33:18'),
(20, 'Chicken pizza', 'menu_images/8wDuUytfUipXuLC2CwvFG8U0s4VHLPhu5kQ3hlIM.jpg', 'Pizza', 'pizza', 13, 'this is healthy and loaded', 350.00, 'maida,\r\nchicken,\r\ncheese', '2025-01-23 09:10:20', '2025-01-23 09:10:20'),
(21, 'Double cheese Burger', 'menu_images/Yn51PlxXZ8bZBet2rg6GTu2jITvC7T9M4zLszRpm.jpg', 'Burger', 'burger', 15, 'cheese', 240.00, 'double cheese burger', '2025-01-23 09:24:16', '2025-01-23 09:24:16'),
(22, 'Cheese Burger', 'menu_images/KtbTTx6W2y7hLmMY4rULpBohxMVikqkj4rwhwRNh.jpg', 'Burger', 'burger', 16, 'this is healthy', 430.00, 'vegis\r\npotato\r\ncheese', '2025-01-23 09:25:05', '2025-01-23 09:25:05'),
(23, 'Black Coffee', 'menu_images/HzEOXOieYACMQ5PNyXligvk2ZytO9q08KaPmX1j1.jpg', 'Drinks', 'black', 8, 'good qualityu coffee', 80.00, 'black cofffee beans,\r\nsugar.', '2025-01-23 09:32:25', '2025-01-23 09:32:25'),
(24, 'Milk Coffee', 'menu_images/CMQY0I8L0GNmwXc3rs3oy6ST3oV92WYzYBfSeDWM.jpg', 'Drinks', 'milk coffeee', 12, 'Strong and tasty', 160.00, 'milk,\r\ncoffee beans,\r\nsugar', '2025-01-23 09:34:16', '2025-01-23 09:34:16');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(16, '2024_11_16_141953_create_menu_table', 1),
(32, '2024_12_27_105504_create_clean_alerts_table', 4),
(41, '2025_01_03_095019_create_alerts_table', 6),
(63, '0001_01_01_000000_create_users_table', 7),
(64, '0001_01_01_000001_create_cache_table', 7),
(65, '0001_01_01_000002_create_jobs_table', 7),
(66, '2024_11_16_074200_create_forms_table', 7),
(67, '2024_11_16_074535_create_personal_access_tokens_table', 7),
(68, '2024_11_16_084009_create_fetch_table', 7),
(70, '2024_12_25_091651_create_table_client_table', 7),
(71, '2024_12_25_125118_create_table_menu_table', 7),
(72, '2024_12_26_135835_create_orders_table', 7),
(73, '2024_12_30_024112_create_history_table', 7),
(74, '2025_01_03_072745_create_reservations_table', 7),
(75, '2025_01_03_094352_create_alerts_table', 7),
(76, '2025_01_04_154046_create_attendance_table', 7),
(78, '2024_11_16_095105_create_auth_table', 8);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_number` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `table_number` int(11) NOT NULL,
  `price` varchar(255) NOT NULL,
  `desc` text NOT NULL,
  `waiting_time` int(11) DEFAULT NULL,
  `status` enum('DELIVERED','PROGRESSING','PREPARED','PENDING') NOT NULL DEFAULT 'PENDING',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_number`, `name`, `quantity`, `table_number`, `price`, `desc`, `waiting_time`, `status`, `created_at`, `updated_at`) VALUES
(12, '1234', 'Pasta', 1, 4, '14.00', 'A classic Italian pasta dish made with eggs, Parmesan cheese, pancetta, and freshly ground black pepper.', 20, 'DELIVERED', '2025-01-08 05:05:35', '2025-01-23 10:14:11'),
(13, '1234', 'pizza', 1, 3, '12.00', 'A traditional Neapolitan pizza with fresh tomatoes, mozzarella cheese, basil leaves, and a crispy thin crust.', 15, 'DELIVERED', '2025-01-08 05:05:35', '2025-01-10 22:11:51'),
(14, '1234', 'Caesar Salad', 1, 3, '15.00', 'Crisp romaine lettuce tossed with Caesar dressing, grilled chicken breast, croutons, and parmesan cheese.', 10, 'DELIVERED', '2025-01-08 05:05:35', '2025-01-23 10:17:36'),
(15, '1234', 'Steak', 1, 3, '200.00', 'matoComes with side dis: Patato, Tamato', 20, 'DELIVERED', '2025-01-08 23:44:59', '2025-01-23 10:17:39'),
(27, '9816778950', 'Croissant (Plain)', 1, 3, '80.00', 'a light weight breakfast', 8, 'DELIVERED', '2025-01-23 09:38:32', '2025-01-23 10:17:41'),
(28, '9816778950', 'Chicken Momo', 2, 3, '130.00', 'Healthy and juicy', 14, 'DELIVERED', '2025-01-23 09:38:32', '2025-01-23 10:17:43'),
(29, '9816778950', 'Chicken Momo', 2, 3, '130.00', 'Healthy and juicy', 14, 'PREPARED', '2025-01-23 10:11:30', '2025-01-23 10:15:11');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `number` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `size` int(11) NOT NULL,
  `message` text DEFAULT NULL,
  `table_number` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `name`, `number`, `address`, `date`, `start_time`, `end_time`, `size`, `message`, `table_number`, `created_at`, `updated_at`) VALUES
(1, 'UTSAV', '987', 'DH', '2025-01-07', '14:14:00', '17:14:00', 1, 'GO', '1T1', '2025-01-07 02:44:55', '2025-01-07 02:44:55'),
(2, 'Utsav', '9816778950', 'DHULIKHEL', '2025-01-23', '21:00:00', '22:00:00', 6, 'CLEAN', '1N1', '2025-01-23 10:26:40', '2025-01-23 10:26:40'),
(3, 'TEST', '123', 'DHULIKHEL', '2025-01-23', '18:00:00', '20:57:00', 1, 'HI', '1N1', '2025-01-23 10:28:11', '2025-01-23 10:28:11');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('pHrxmd0K0gv208p5jLkx5lXmywIBcByN3CIag6DW', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieWM3eDZkelFRSTdNSmVLSG9CMG02WEtVc0hzbkhUYnRiMXlYelBXdyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736399246);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alert:rollback`
--
ALTER TABLE `alert:rollback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `alerts`
--
ALTER TABLE `alerts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_phone_unique` (`phone`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alert:rollback`
--
ALTER TABLE `alert:rollback`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `alerts`
--
ALTER TABLE `alerts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `auth`
--
ALTER TABLE `auth`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

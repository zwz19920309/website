/*
Navicat MySQL Data Transfer

Source Server         : app
Source Server Version : 50725
Source Host           : localhost:3306
Source Database       : spider

Target Server Type    : MYSQL
Target Server Version : 50725
File Encoding         : 65001

Date: 2019-09-24 16:54:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cates
-- ----------------------------
DROP TABLE IF EXISTS `cates`;
CREATE TABLE `cates` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` tinyint(4) DEFAULT '0' COMMENT '类别标记',
  `name` varchar(255) CHARACTER SET utf8mb4 DEFAULT '' COMMENT '类别名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of cates
-- ----------------------------
INSERT INTO `cates` VALUES ('1', '1', 'A股');
INSERT INTO `cates` VALUES ('2', '2', '港股');
INSERT INTO `cates` VALUES ('3', '3', '美股');

-- ----------------------------
-- Table structure for cont_type
-- ----------------------------
DROP TABLE IF EXISTS `cont_type`;
CREATE TABLE `cont_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` tinyint(4) DEFAULT '0' COMMENT '内容类型标记',
  `name` varchar(255) CHARACTER SET utf8mb4 DEFAULT '' COMMENT '内容类型',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of cont_type
-- ----------------------------
INSERT INTO `cont_type` VALUES ('1', '1', '文字');
INSERT INTO `cont_type` VALUES ('2', '2', 'JSON');
INSERT INTO `cont_type` VALUES ('3', '3', 'JSONP');

-- ----------------------------
-- Table structure for page
-- ----------------------------
DROP TABLE IF EXISTS `page`;
CREATE TABLE `page` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `pagesite` varchar(500) DEFAULT NULL COMMENT '页面起始网址',
  `pagetitle` varchar(500) DEFAULT NULL COMMENT '页面标题，默认为网页标题',
  `createtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '添加监控页面时间',
  `status` tinyint(4) DEFAULT '1' COMMENT '当前页面监控状态 0 没有监控1  正在监控  2 监控出问题了，创建页面默认就开始监控',
  `deltatime` int(10) DEFAULT '30000' COMMENT '页面爬取间隔，单位为毫秒，默认30秒钟爬取一次',
  `lastmodified` varchar(50) DEFAULT NULL COMMENT '页面上次修改时间',
  `channel` varchar(50) DEFAULT NULL COMMENT '同一个标题可能有多个不同的频道',
  `md5` varchar(50) DEFAULT NULL,
  `referer` varchar(255) DEFAULT NULL,
  `cate` varchar(30) DEFAULT '文章' COMMENT '分类',
  `queue` varchar(50) DEFAULT 'LIST_LINK_TASK' COMMENT '队列',
  `followlink` int(11) DEFAULT '1' COMMENT '是否抓取链接内容，1表示抓取默认值，0表示不抓取，只抓取链接就入库',
  `group` varchar(20) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `cate` (`cate`)
) ENGINE=InnoDB AUTO_INCREMENT=2529 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of page
-- ----------------------------

-- ----------------------------
-- Table structure for page_new
-- ----------------------------
DROP TABLE IF EXISTS `page_new`;
CREATE TABLE `page_new` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `pagesite` varchar(500) DEFAULT NULL COMMENT '页面起始网址',
  `realsite` mediumtext COMMENT '抓取真正网址',
  `sitemd5` varchar(50) DEFAULT NULL COMMENT '根据网址生成的唯一md5',
  `pagetitle` varchar(500) DEFAULT NULL COMMENT '页面标题，默认为网页标题',
  `status` tinyint(4) DEFAULT '5' COMMENT '当前页面监控状态 0 没有监控1  正在监控  2 监控出问题了，创建页面默认就开始监控',
  `deltatime` int(10) DEFAULT '30000' COMMENT '页面爬取间隔，单位为毫秒，默认30秒钟爬取一次',
  `channel` varchar(50) DEFAULT NULL COMMENT '同一个标题可能有多个不同的频道',
  `headers` text,
  `cates` varchar(50) DEFAULT '文章' COMMENT '分类',
  `followlink` int(11) DEFAULT '1' COMMENT '是否抓取链接内容，1表示抓取默认值，0表示不抓取，只抓取链接就入库',
  `ctype` int(11) DEFAULT '1' COMMENT '内容类型，1文本，2json，3jsonp',
  `encoding` varchar(20) DEFAULT 'UTF-8',
  `link_unique_by` int(11) DEFAULT '1' COMMENT '1 通过链接，2通过文字',
  `linkrule` varchar(255) DEFAULT NULL COMMENT '链接规则，内容为text时为css规则，内容为json时【数组名#内容规则#链接规则】',
  `titlerule` varchar(50) DEFAULT NULL COMMENT '标题抓取规则',
  `contentrule` varchar(50) DEFAULT NULL COMMENT '内容抓取规则',
  `createtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '添加监控页面时间',
  `priority` int(11) DEFAULT '50' COMMENT '页面优先级',
  `foreign` int(11) DEFAULT '0',
  `group` varchar(20) DEFAULT '1' COMMENT '1 ',
  `updateat` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `skip_error` int(11) DEFAULT '0',
  `as_special` int(11) DEFAULT '0',
  `detail_encoding` varchar(20) DEFAULT 'UTF-8',
  `extra` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cate` (`cates`)
) ENGINE=InnoDB AUTO_INCREMENT=1519 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of page_new
-- ----------------------------
INSERT INTO `page_new` VALUES ('1500', 'http://zcgls.mof.gov.cn/zhengwuxinxi/zhengcefabu/', '', '1', '财政部', '1', '100000', '资产管理部', '', 'A股', '0', '1', 'GBK', '1', '.ZITI a', '1', '1', null, '50', '0', '1', null, '0', '0', 'UTF-8', '');
INSERT INTO `page_new` VALUES ('1501', 'http://www.mohurd.gov.cn/wjfb/index.html', '', '1', '住建部', '1', '100000', '政策发布', '', '美股', '0', '2', 'UTF-8', '1', 'table tbody tr:nth-child(2) table tbody tr:nth-child(2) table tbody tr td:nth-child(2) a', '1', '1', null, '50', '1', '1', null, '0', '0', 'UTF-8', '');
INSERT INTO `page_new` VALUES ('1508', 'http://www.most.gov.cn/mostinfo/xinxifenlei/fgzc/', '', '', '科技部', '1', '10000', '法政法规', '', '港股', '0', '1', 'UTF-8', '1', '.rowInRecord table tr td a', '', '', null, '50', '0', '1', null, '0', '0', 'UTF-8', '');
INSERT INTO `page_new` VALUES ('1517', 'http://www.most.gov.cn/mostinfo/xinxifenlei/fgzc/', '', '', '科技部', '1', '10000', '法政法规', '', '港股', '0', '1', 'UTF-8', '1', '.rowInRecord table tr td a', '', '', null, '5100', '0', '1', null, '0', '0', 'UTF-8', '');
INSERT INTO `page_new` VALUES ('1518', 'http://www.most.gov.cn/mostinfo/xinxifenlei/fgzc/', '', '', '科技部', '1', '5000', '法政法规', '', '港股', '0', '1', 'UTF-8', '1', '.rowInRecord table tr td a', '', '', null, '50', '0', '1', null, '0', '0', 'UTF-8', '');

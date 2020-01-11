/*
Navicat MySQL Data Transfer

Source Server         : app
Source Server Version : 50725
Source Host           : localhost:3306
Source Database       : collect

Target Server Type    : MYSQL
Target Server Version : 50725
File Encoding         : 65001

Date: 2019-10-18 15:18:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for form
-- ----------------------------
DROP TABLE IF EXISTS `form`;
CREATE TABLE `form` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `info` varchar(4000) CHARACTER SET utf8 DEFAULT '' COMMENT '中文翻译',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of form
-- ----------------------------
INSERT INTO `form` VALUES ('1', 'test');
INSERT INTO `form` VALUES ('2', '委员会将依照法定的目标,寻求促进就业最大化和物价稳定。鉴于全球经济发展对经济前景的影响以及通胀压力迟滞,委员会决定下调联邦基金利率目标区间25 个基点至2.00-2.25%  1.75-2.00%。该行动支持委员会的观点,即认为经济活动持续扩张、就业市场状况强劲以及通胀接近委员会 2%对称目标是最有可能的结果,但该前景仍有不确定性。委员会在考虑联邦基金利率目标区间的未来路径时,将继续关注之后获得的信息对经济前景的影响,并将采取适当行动维持经济扩张,劳动力市场强劲,通胀接近 2%的对称目标。');

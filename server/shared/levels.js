/*jshint globalstrict:true, es5:true, node:true, sub:true*/
/*globals XSS*/
'use strict';

// Generated on Fri, 25 Jan 2013 22:30:53 GMT
// Generate file: `node build/levels.js`
// Template file: source/templates/levels.js.tpl

module.exports = [
    {file: "01_blank.png", width: 63, height: 33, spawns: [192, 1886, 248, 1830, 1011, 1067], directions: [2, 0, 0, 2, 2, 0], unreachables: [], walls: []}, 
    {file: "02_lines.png", width: 63, height: 33, spawns: [192, 1886, 248, 1830, 1011, 1067], directions: [2, 0, 0, 2, 2, 0], unreachables: [], walls: [[570, 23], [603, 23], [1452, 23], [1485, 23]]}, 
    {file: "03_crosshair.png", width: 63, height: 33, spawns: [192, 1886, 248, 1830, 948, 1130], directions: [2, 0, 0, 2, 2, 0], unreachables: [], walls: [94, 157, 220, 283, 346, 409, 472, 535, [1009, 23], [1046, 23], 1480, 1543, 1606, 1669, 1732, 1795, 1858, 1921, 1984]}, 
    {file: "04_poles.png", width: 63, height: 33, spawns: [192, 1886, 248, 1830, 1011, 1067], directions: [2, 0, 0, 2, 2, 0], unreachables: [], walls: [201, 242, 264, 305, 327, 368, 390, 431, 453, 494, 516, 557, 579, 620, 642, 683, 705, 746, 768, 809, 831, 872, 894, 935, 957, 998, 1020, 1061, 1083, 1124, 1146, 1187, 1209, 1250, 1272, 1313, 1335, 1376, 1398, 1439, 1461, 1502, 1524, 1565, 1587, 1628, 1650, 1691, 1713, 1754, 1776, 1817, 1839, 1880]}, 
    {file: "05_traps.png", width: 63, height: 33, spawns: [192, 1886, 248, 1830, 1011, 1067], directions: [2, 0, 0, 2, 2, 0], unreachables: [], walls: [7, 31, 55, 70, 94, 118, 133, 157, 181, 220, 259, 283, 307, 322, 346, 370, 385, 409, 433, [441, 7], 472, [496, 7], [527, 16], [756, 7], [779, 6], [789, 6], [811, 7], 826, 874, 889, 937, 952, 1000, [1031, 6], [1041, 6], 1078, 1126, 1141, 1189, 1204, 1252, [1260, 7], [1283, 6], [1293, 6], [1315, 7], [1535, 16], [1575, 7], 1606, [1630, 7], 1645, 1669, 1693, 1708, 1732, 1756, 1771, 1795, 1819, 1858, 1897, 1921, 1945, 1960, 1984, 2008, 2023, 2047, 2071]}, 
    {file: "06_noise.png", width: 63, height: 33, spawns: [192, 1886, 248, 1830, 1011, 1067], directions: [2, 0, 0, 2, 2, 0], unreachables: [], walls: [[4, 1], 8, 19, 46, 49, 58, 63, 89, [98, 1], [101, 1], 114, 134, [147, 1], [155, 1], 159, 164, 175, 178, 188, 213, 224, 280, 303, 322, 329, 369, 394, 416, 429, 442, 455, 462, 467, 483, 486, 496, 504, 507, [513, 1], 531, 534, 552, 558, 573, [582, 1], 598, 602, 604, 616, [635, 1], 645, 653, 665, 667, 680, [685, 2], 693, [698, 1], 704, [715, 1], 734, 743, 746, 750, 756, 765, 769, 775, 782, 785, 787, 798, 805, 819, 822, 832, [834, 1], 846, 855, 862, 875, 881, 884, [901, 1], 908, 916, 955, 986, 1032, 1054, 1072, 1092, 1099, 1102, 1104, [1114, 1], [1117, 1], 1132, 1148, 1163, 1178, [1180, 1], 1186, 1199, [1204, 1], 1251, 1259, 1280, 1284, 1286, 1288, 1293, 1295, 1304, [1308, 1], [1313, 1], [1327, 1], [1330, 1], 1351, 1356, 1378, [1395, 1], 1401, 1405, 1416, [1420, 1], 1434, 1438, 1442, 1448, 1467, 1469, [1478, 2], 1483, 1499, 1502, 1517, 1542, [1551, 1], [1554, 2], 1561, 1566, [1572, 1], 1576, 1585, 1588, 1590, 1594, 1603, 1606, 1627, [1634, 1], 1644, 1646, 1651, 1661, 1674, 1686, [1692, 1], 1710, 1755, 1806, 1808, 1811, 1818, 1826, 1828, 1860, 1871, [1888, 1], [1903, 1], 1907, [1919, 1], [1927, 2], [1932, 3], 1941, 1969, 1988, 1994, 2014, 2017, 2023, 2038, 2043]}, 
    {file: "07_tetris.png", width: 63, height: 33, spawns: [192, 1886, 248, 1830, 1011, 1067], directions: [2, 0, 0, 2, 2, 0], unreachables: [27], walls: [[20, 1], 28, 84, [90, 1], [136, 2], 147, 153, [162, 2], [166, 2], [176, 1], 200, [219, 3], 226, 229, 240, [268, 3], [277, 1], [297, 2], 303, [341, 1], 361, 377, 398, 409, 440, 446, 461, [471, 1], 476, 503, [508, 2], [518, 2], 524, 534, 539, [548, 1], [559, 1], 566, 583, 587, 592, [601, 1], 605, 612, 617, [623, 1], 642, [655, 1], [667, 2], 675, 680, 705, 718, [743, 1], [757, 3], [768, 1], 778, [789, 1], 816, [826, 2], [840, 1], [847, 1], 852, [859, 2], [869, 3], [879, 2], 890, 904, 911, 915, 923, [957, 2], 974, 1021, 1047, [1092, 2], [1109, 1], [1116, 2], [1121, 1], 1155, [1167, 1], 1172, 1180, 1185, 1214, 1231, 1248, [1267, 3], 1277, 1287, 1294, 1317, 1340, [1350, 1], [1379, 2], 1391, 1403, 1414, [1426, 1], [1452, 2], 1459, 1469, [1490, 1], 1522, [1530, 2], [1559, 2], 1575, 1585, [1610, 3], 1616, 1624, [1638, 1], 1648, [1662, 2], [1678, 1], [1692, 2], 1701, [1717, 1], 1726, 1730, 1734, 1741, [1750, 2], 1756, 1777, [1781, 1], 1785, 1793, [1796, 1], [1839, 1], [1848, 2], 1856, 1859, 1902, 1919, [1930, 3], 1952, 1989, 2015, [2051, 2], [2077, 1]]}, 
    {file: "08_space_invaders.png", width: 63, height: 33, spawns: [1956, 1989, 2011, 1978, 1967, 2000], directions: [1, 1, 1, 1, 1, 1], unreachables: [[133, 1], [148, 1], [163, 1], [178, 1], 195, 198, 210, 213, 225, 228, 240, 243, 257, 262, 272, 277, 287, 292, 302, 307, 319, 326, 334, 341, 349, 356, 364, 371, 381, 384, 387, 390, 396, 399, 402, 405, 411, 414, 417, 420, 426, 429, 432, 435, 444, 453, 459, 468, 474, 483, 489, 498, [508, 1], [511, 1], [514, 1], [523, 1], [526, 1], [529, 1], [538, 1], [541, 1], [544, 1], [553, 1], [556, 1], [559, 1], 571, 573, 576, 578, 586, 588, 591, 593, 601, 603, 606, 608, 616, 618, 621, 623, 635, [637, 1], 640, 642, 648, 650, [652, 1], 655, 665, [667, 1], 670, 672, 678, 680, [682, 1], 685, 699, 702, 704, 712, 714, 717, 729, 732, 734, 742, 744, 747, 887, 893, 902, 908, 917, 923, 932, 938, 949, 951, 955, 957, [963, 1], 966, 970, [972, 1], 979, 981, 985, 987, [993, 1], 996, 1000, [1002, 1], 1013, [1015, 2], 1019, 1025, [1027, 1], [1030, 2], [1034, 1], 1037, 1043, [1045, 2], 1049, 1055, [1057, 1], [1060, 2], [1064, 1], 1067, 1075, 1083, 1088, 1090, 1098, 1100, 1105, 1113, 1118, 1120, 1128, 1130, 1137, 1140, 1144, 1147, 1151, 1155, 1159, 1163, 1167, 1170, 1174, 1177, 1181, 1185, 1189, 1193, 1199, 1211, 1214, 1226, 1229, 1241, 1244, 1256, 1262, 1264, 1272, 1274, 1278, 1288, 1292, 1294, 1302, 1304, 1308, 1318, 1325, 1327, [1329, 4], 1335, 1337, 1342, [1344, 4], 1350, 1355, 1357, [1359, 4], 1365, 1367, 1372, [1374, 4], 1380, 1389, 1391, 1394, 1397, 1399, 1404, 1406, 1412, 1414, 1419, 1421, 1424, 1427, 1429, 1434, 1436, 1442, 1444, [1455, 1], [1458, 1], 1468, 1476, [1485, 4], 1498, 1506], walls: [[196, 1], [211, 1], [226, 1], [241, 1], [258, 3], [273, 3], [288, 3], [303, 3], [320, 5], [335, 5], [350, 5], [365, 5], [382, 1], [385, 1], [388, 1], [397, 1], [400, 1], [403, 1], [412, 1], [415, 1], [418, 1], [427, 1], [430, 1], [433, 1], [445, 7], [460, 7], [475, 7], [490, 7], 510, 513, 525, 528, 540, 543, 555, 558, 572, [574, 1], 577, 587, [589, 1], 592, 602, [604, 1], 607, 617, [619, 1], 622, 636, 639, 641, 649, 651, 654, 666, 669, 671, 679, 681, 684, 950, 956, 965, 971, 980, 986, 995, 1001, 1014, 1018, 1026, 1029, 1033, 1036, 1044, 1048, 1056, 1059, 1063, 1066, [1076, 6], 1089, [1091, 6], 1099, [1106, 6], 1119, [1121, 6], 1129, [1138, 1], [1141, 2], [1145, 1], [1152, 2], [1156, 2], [1160, 2], [1168, 1], [1171, 2], [1175, 1], [1182, 2], [1186, 2], [1190, 2], [1200, 10], [1215, 10], [1230, 10], [1245, 10], 1263, [1265, 6], 1273, [1279, 8], 1293, [1295, 6], 1303, [1309, 8], 1326, 1328, 1334, 1336, 1343, 1349, 1356, 1358, 1364, 1366, 1373, 1379, [1392, 1], [1395, 1], 1405, 1413, [1422, 1], [1425, 1], 1435, 1443]}, 
    {file: "09_onion_jack.png", width: 63, height: 33, spawns: [64, 2014, 250, 1828, 1009, 1069], directions: [2, 0, 0, 2, 2, 0], unreachables: [[141, 12], [161, 12], [206, 10], [224, 10], [271, 8], [287, 8], [336, 6], [350, 6], [401, 4], [413, 4], [466, 2], [476, 2], 506, 531, 539, [569, 2], 627, [632, 4], [688, 2], [695, 6], [749, 4], [758, 8], [810, 6], [1262, 6], [1312, 8], [1325, 4], [1377, 6], [1388, 2], [1442, 4], 1451, [1507, 2], 1539, 1547, 1572, [1600, 2], [1610, 2], [1661, 4], [1673, 4], [1722, 6], [1736, 6], [1783, 8], [1799, 8], [1844, 10], [1862, 10], [1905, 12], [1925, 12]], walls: [[70, 21], [97, 25], [135, 5], 154, 160, [174, 9], [200, 5], 217, 223, [235, 9], [265, 5], 280, 286, [296, 9], [316, 1], [330, 5], 343, 349, [357, 9], [379, 3], [395, 5], 406, 412, [418, 9], [438, 1], [442, 5], [460, 5], 469, 475, [479, 9], [499, 3], 505, [507, 5], [525, 5], 532, 538, [540, 9], [560, 5], 568, [572, 5], [590, 5], [601, 9], [621, 5], 628, 631, [637, 5], [655, 3], [664, 7], [682, 5], 691, 694, [702, 5], [720, 1], [727, 5], [743, 5], 754, 757, [767, 5], [790, 3], [804, 5], 817, [820, 17], [853, 1], [865, 15], [1198, 15], [1224, 1], [1241, 17], 1261, [1269, 5], [1285, 3], [1306, 5], 1321, 1324, [1330, 5], [1346, 5], [1357, 1], [1371, 5], 1384, 1387, [1391, 5], [1407, 7], [1420, 3], [1436, 5], 1447, 1450, [1452, 5], [1468, 9], [1483, 5], [1501, 5], 1510, [1513, 5], [1529, 9], 1540, 1546, [1548, 5], [1566, 5], 1573, [1576, 3], [1590, 9], 1603, 1609, [1613, 5], [1631, 5], [1639, 1], [1651, 9], 1666, 1672, [1678, 5], [1696, 3], [1712, 9], 1729, 1735, [1743, 5], [1761, 1], [1773, 9], 1792, 1798, [1808, 5], [1834, 9], 1855, 1861, [1873, 5], [1895, 9], 1918, 1924, [1938, 5], [1956, 25], [1987, 21]]}, 
    {file: "10_pacman.png", width: 63, height: 33, spawns: [129, 1949, 185, 1893, 1011, 1067], directions: [2, 0, 0, 2, 2, 0], unreachables: [[63, 26], [99, 27], 152, 162, [188, 1], [191, 12], [205, 4], [211, 2], [215, 10], [227, 2], [231, 4], [237, 12], [251, 1], 254, 266, 268, 272, 274, 276, 290, 292, 294, 298, 300, 312, [314, 1], 317, [319, 10], 331, 333, 335, 337, [339, 14], 355, 357, 359, 361, [363, 10], 375, [377, 1], 380, 382, 394, 396, 398, 400, 418, 420, 422, 424, 436, 438, [440, 1], [443, 2], [447, 8], 457, 459, 461, [463, 18], 483, 485, 487, [489, 8], [499, 2], [503, 1], 510, 518, 520, 522, 524, 546, 548, 550, 552, 560, [566, 1], [569, 4], [575, 4], 581, 583, 585, 587, [589, 18], 609, 611, 613, 615, [617, 4], [623, 4], [629, 1], 632, 644, 646, 648, 650, 652, 670, 672, 674, 676, 678, 690, [692, 1], [695, 10], 707, 709, 711, 713, [715, 18], 735, 737, 739, 741, [743, 10], [755, 1], 768, 770, 772, 776, 798, 802, 804, 806, [818, 11], 831, 833, [835, 4], [841, 8], [851, 8], [861, 4], 867, 869, [871, 10], 892, 894, 896, 904, 912, 914, 922, 930, 932, 934, [945, 10], 957, [959, 6], 967, [969, 14], 985, [987, 6], 995, [997, 11], 1020, 1028, 1030, 1032, [1036, 1], [1041, 1], 1046, 1048, 1050, 1058, [1071, 10], 1083, [1085, 6], 1093, 1095, 1099, 1101, 1103, 1105, 1109, 1111, [1113, 6], 1121, [1123, 10], 1144, 1146, 1148, 1156, 1158, 1162, 1168, 1172, 1174, 1182, 1184, 1186, [1197, 8], 1207, 1209, 1211, [1213, 4], 1219, 1221, 1225, 1227, 1229, 1231, 1235, 1237, [1239, 4], 1245, 1247, 1249, [1251, 9], 1268, 1270, 1272, 1274, 1276, 1280, 1282, 1284, [1288, 6], 1298, 1300, 1302, 1306, 1308, 1310, 1312, 1314, [1322, 1], [1325, 4], 1331, 1333, 1335, 1337, 1339, 1341, 1343, 1345, [1347, 14], 1363, 1365, 1367, 1369, 1371, 1373, 1375, 1377, [1379, 4], [1385, 1], 1388, 1392, 1394, 1396, 1398, 1400, 1402, 1404, 1406, 1408, 1426, 1428, 1430, 1432, 1434, 1436, 1438, 1440, 1442, 1446, [1448, 1], 1451, 1453, 1455, 1457, 1459, 1461, 1463, 1465, 1467, 1469, [1471, 18], 1491, 1493, 1495, 1497, 1499, 1501, 1503, 1505, 1507, 1509, [1511, 1], 1514, 1516, 1518, 1520, 1522, 1524, 1526, 1528, 1530, 1532, 1554, 1556, 1558, 1560, 1562, 1564, 1566, 1568, 1570, 1572, [1574, 1], 1577, 1579, 1581, [1583, 2], [1587, 2], 1591, 1593, 1595, [1597, 18], 1617, 1619, 1621, [1623, 2], [1627, 2], 1631, 1633, 1635, [1637, 1], 1640, 1642, 1644, 1654, 1656, 1658, 1660, 1678, 1680, 1682, 1684, 1694, 1696, 1698, [1700, 1], 1703, 1705, [1707, 8], 1717, 1719, 1721, 1723, [1725, 14], 1741, 1743, 1745, 1747, [1749, 8], 1759, 1761, [1763, 1], 1766, 1778, 1780, 1784, 1786, 1788, 1802, 1804, 1806, 1810, 1812, 1824, [1826, 1], [1829, 12], [1843, 4], [1849, 2], [1853, 10], [1865, 2], [1869, 4], [1875, 12], [1889, 1], 1916, 1926, [1952, 27], [1989, 26]], walls: [[0, 62], [90, 8], [153, 8], [255, 10], [269, 2], 275, 291, [295, 2], [301, 10], 318, 332, 334, 338, 354, 358, 360, 374, 381, 395, 397, [401, 16], 421, 423, 437, 458, 460, 484, 486, [511, 6], 521, 523, 547, 549, [553, 6], 574, 580, 584, 586, 610, 612, 616, 622, [633, 10], 647, 649, [653, 16], 673, 675, [679, 10], 706, 710, 712, 736, 738, 742, 769, [773, 2], [799, 2], 805, 832, 868, [882, 9], 895, [905, 6], [915, 6], 931, [935, 9], 958, 968, 984, 994, [1021, 6], 1031, [1038, 2], 1047, [1051, 6], 1084, 1094, 1100, 1102, 1104, 1110, 1120, [1134, 9], 1147, 1157, [1163, 4], 1173, 1183, [1187, 9], 1206, 1210, 1220, 1226, 1228, 1230, 1236, 1246, 1250, 1269, 1273, [1277, 2], 1283, 1299, [1303, 2], 1309, 1313, 1332, 1336, 1340, 1342, 1346, 1362, 1366, 1368, 1372, 1376, [1389, 2], 1395, 1399, 1403, 1405, [1409, 16], 1429, 1431, 1435, 1439, [1443, 2], 1452, 1454, 1458, 1462, 1466, 1468, 1492, 1494, 1498, 1502, 1506, 1508, 1515, 1517, 1521, 1525, 1529, 1531, 1555, 1557, 1561, 1565, 1569, 1571, 1578, 1580, 1592, 1594, 1618, 1620, 1632, 1634, 1641, 1643, 1655, 1657, [1661, 16], 1681, 1683, 1695, 1697, 1704, 1706, 1718, 1720, 1724, 1740, 1744, 1746, 1758, 1760, [1767, 10], [1781, 2], 1787, 1803, [1807, 2], [1813, 10], [1917, 8], [1980, 8], [2016, 62]]}, 
    {file: "11_borobudur.png", width: 63, height: 33, spawns: [192, 1886, 248, 1830, 1011, 1067], directions: [2, 0, 0, 2, 2, 0], unreachables: [10, 16, 31, 46, 52, 73, 79, 94, 109, 115, 136, 142, 157, 172, 178, 199, 205, 220, 235, 241, 262, 268, 283, 298, 304, 325, 331, 346, 361, 367, 382, 388, 394, [399, 5], 409, [414, 5], 424, 430, 436, 445, 457, 462, 482, 487, 499, 508, 520, 525, 545, 550, 562, 571, 583, 613, 625, 634, 646, 676, 688, 697, 703, 709, [719, 2], [727, 2], 739, 745, 751, 760, 766, 772, 782, 792, 802, 808, 814, 823, 829, 835, 840, 845, 855, 860, 865, 871, 877, 892, 903, 923, 934, 955, 966, 986, 997, 1018, 1029, 1039, 1049, 1060, 1081, 1092, 1112, 1123, 1144, 1155, 1175, 1186, 1201, 1207, 1213, 1218, 1223, 1233, 1238, 1243, 1249, 1255, 1264, 1270, 1276, 1286, 1296, 1306, 1312, 1318, 1327, 1333, 1339, [1349, 2], [1357, 2], 1369, 1375, 1381, 1390, 1402, 1432, 1444, 1453, 1465, 1495, 1507, 1516, 1528, 1533, 1553, 1558, 1570, 1579, 1591, 1596, 1616, 1621, 1633, 1642, 1648, 1654, [1659, 5], 1669, [1674, 5], 1684, 1690, 1696, 1711, 1717, 1732, 1747, 1753, 1774, 1780, 1795, 1810, 1816, 1837, 1843, 1858, 1873, 1879, 1900, 1906, 1921, 1936, 1942, 1963, 1969, 1984, 1999, 2005, 2026, 2032, 2047, 2062, 2068], walls: [3, 5, 9, 11, 15, 17, 30, 32, 45, 47, 51, 53, 57, 59, [66, 2], 72, 74, 78, 80, 93, 95, 108, 110, 114, 116, [120, 2], 135, 137, 141, 143, 156, 158, 171, 173, 177, 179, 198, 200, 204, 206, 219, 221, 234, 236, 240, 242, 261, 263, 267, 269, 282, 284, 297, 299, 303, 305, [318, 2], 324, 326, 330, 332, [335, 7], 345, 347, [350, 7], 360, 362, 366, 368, [372, 2], 381, 383, 387, 389, 393, 395, 398, 405, 408, 410, 413, 420, 423, 425, 429, 431, 435, 437, 444, 446, [450, 2], 456, 458, 461, [463, 5], [471, 2], [476, 5], 483, 486, 488, [492, 2], 498, 500, 507, 509, 519, 521, 524, 526, 544, 546, 549, 551, 561, 563, 570, 572, 582, 584, [587, 2], [607, 2], 612, 614, 624, 626, 633, 635, [639, 2], 645, 647, [655, 4], [663, 4], 675, 677, [681, 2], 687, 689, 696, 698, 702, 704, 708, 710, 718, 722, 726, 730, 738, 740, 744, 746, 750, 752, 759, 761, 765, 767, 771, 773, [776, 2], 781, [783, 2], [789, 2], 793, [796, 2], 801, 803, 807, 809, 813, 815, 822, 824, 828, 830, 834, 836, 839, 841, 844, 846, 854, 856, 859, 861, 864, 866, 870, 872, 876, 878, [885, 2], 891, 893, [897, 2], 902, 904, [907, 2], [917, 2], 922, 924, [927, 2], 933, 935, [939, 2], 954, 956, 965, 967, [975, 2], 985, 987, 996, 998, 1017, 1019, 1028, 1030, 1038, 1040, 1048, 1050, 1059, 1061, 1080, 1082, 1091, 1093, [1101, 2], 1111, 1113, 1122, 1124, [1137, 2], 1143, 1145, [1149, 2], 1154, 1156, [1159, 2], [1169, 2], 1174, 1176, [1179, 2], 1185, 1187, [1191, 2], 1200, 1202, 1206, 1208, 1212, 1214, 1217, 1219, 1222, 1224, 1232, 1234, 1237, 1239, 1242, 1244, 1248, 1250, 1254, 1256, 1263, 1265, 1269, 1271, 1275, 1277, [1280, 2], 1285, [1287, 2], [1293, 2], 1297, [1300, 2], 1305, 1307, 1311, 1313, 1317, 1319, 1326, 1328, 1332, 1334, 1338, 1340, 1348, 1352, 1356, 1360, 1368, 1370, 1374, 1376, 1380, 1382, 1389, 1391, [1395, 2], 1401, 1403, [1411, 4], [1419, 4], 1431, 1433, [1437, 2], 1443, 1445, 1452, 1454, 1464, 1466, [1469, 2], [1489, 2], 1494, 1496, 1506, 1508, 1515, 1517, 1527, 1529, 1532, 1534, 1552, 1554, 1557, 1559, 1569, 1571, 1578, 1580, [1584, 2], 1590, 1592, 1595, [1597, 5], [1605, 2], [1610, 5], 1617, 1620, 1622, [1626, 2], 1632, 1634, 1641, 1643, 1647, 1649, 1653, 1655, 1658, 1665, 1668, 1670, 1673, 1680, 1683, 1685, 1689, 1691, 1695, 1697, [1704, 2], 1710, 1712, 1716, 1718, [1721, 7], 1731, 1733, [1736, 7], 1746, 1748, 1752, 1754, [1758, 2], 1773, 1775, 1779, 1781, 1794, 1796, 1809, 1811, 1815, 1817, 1836, 1838, 1842, 1844, 1857, 1859, 1872, 1874, 1878, 1880, 1899, 1901, 1905, 1907, 1920, 1922, 1935, 1937, 1941, 1943, [1956, 2], 1962, 1964, 1968, 1970, 1983, 1985, 1998, 2000, 2004, 2006, [2010, 2], 2019, 2021, 2025, 2027, 2031, 2033, 2046, 2048, 2061, 2063, 2067, 2069, 2073, 2075]}
];

if (typeof XSS !== 'undefined') {
    XSS.levels = module.exports;
}
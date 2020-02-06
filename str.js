
var strategy_B1 = [
  { name: 'move', point: [1035.937, 870.163, 0.261] },
  { name: 'take', bouy_id: 6, place_id: 5, delay: TAKE_DELAY },
  { name: 'move', point: [1823.437, 753.0614, 0] },
  { name: 'take', bouy_id: 18, place_id: 0, delay: TAKE_DELAY },
  { name: 'move', point: [1696.875, 1094.999, 0.523] },
  { name: 'take', bouy_id: 19, place_id: 1, delay: TAKE_DELAY },
  { name: 'move', point: [1378.125, 1249.573, -1.047] },
  { name: 'take', bouy_id: 7, place_id: 2, delay: TAKE_DELAY },
  { name: 'move', point: [351.5625, 1301.0985, 0.261] },
  { name: 'take', bouy_id: 4, place_id: 4, delay: TAKE_DELAY },
  { name: 'move', point: [482.812, 1249.573, -0.5235]},
  { name: 'move', point: [506.2499, 1169.944, -0.523]},
  { name: 'take', bouy_id: 3, place_id: 3, delay: TAKE_DELAY },
  { name: 'move', point: [117.18749, 1600, -3.1415] },
  { name: 'sleep', time: 4500 },
  { name: 'move', point: [190, 1240, -4.71238] },
  { name: 'put5', bouys: ['red', 'green', 'red', 'green', 'red'], time: 1800},
  { name: 'addscore', score: 5+3+12},
  { name: 'move', point: [182.8125, 1849.1360, 1.570] },
  { name: 'move', point: [759.375, 1858.50, 1.57] },
  { name: 'sleep', time: 800 },
  { name: 'move', point: [928.12, 1352.6234, 2.3561] },
  { name: 'addscore', score: 5},
  { name: 'move', point: [1840.124, 1352.6234, 2.356] },
  { name: 'addscore', score: 10},
  { name: 'move', point: [1840, 1720, 2.6179] },
  { name: 'drop', places: [3, 4], time: DROP_DELAY, offsets: [80, -80] },
  { name: 'addscore', score: 6},
  { name: 'move', point: [1840-45, 1720-40, 2.6179+2*Math.PI/3] },
  { name: 'drop', places: [5, 0], time: DROP_DELAY, offsets: [80, -80] },
  { name: 'addscore', score: 6},
  { name: 'move', point: [1840-90, 1720-80.932, 2.6179+4*Math.PI/3] },
  { name: 'drop', places: [1, 2], time: DROP_DELAY, offsets: [80, -80] },
  { name: 'addscore', score: 6},
  { name: 'move', point: [1560.9375, 1394.78, 2.6179+4*Math.PI/3] },
  { name: 'move', point: [229.68, 1291.7303] },
  { name: 'addscore', score: 5},
  { name: 'move', point: [229.687, 1291.73, 1000] },
  { name: 'finish'}
]

let strategy_B2 = [
  { name: 'move', point: [342.1875, 551.6456253419037, 3.1415926535897936]},
  { name: 'take', bouy_id: 1, place_id: 2, delay: TAKE_DELAY/2},
  { name: 'take', bouy_id: 2, place_id: 3, delay: TAKE_DELAY/2},
  { name: 'move', point: [867.1875, 462.64808704868716, 1.0471975511965979]},
  { name: 'take', bouy_id: 5, place_id: 1, delay: TAKE_DELAY},
  { name: 'move', point: [735.9375, 200.3395531318381, 1.5707963267948966]},
  { name: 'take', bouy_id: 0, place_id: 0, delay: TAKE_DELAY},
  { name: 'move', point: [464.06249999999994, 92.60569098741797, 1.5707963267948966]},
  { name: 'sleep', time: 4500},
  { name: 'move', point: [445.31249999999994, 181.6032292806346, 1.5707963267948966]},
  { name: 'move', point: [234.37499999999997, 92.60569098741797, 1.5707963267948966]},
  { name: 'sleep', time: 300},
  { name: 'addscore', score: 15},
  { name: 'move', point: [170, 350.2301439414661, -1.570796326794896]},
  { name: 'put5', bouys: ['green', 'red', 'green', 'red', 'green'], time: 1800},
  { name: 'addscore', score: 10},
  { name: 'move', point: [628.125, 350.2301439414661, -1.8325957145940457]},
  { name: 'move', point: [1739.0625, 1099.6830979896063, -1.8325957145940457]},
  { name: 'move', point: [1710.9375, 1554.038951381291, -3.6651914291880927]},
  { name: 'take', bouy_id: 21, place_id: 5, delay: TAKE_DELAY},
  { name: 'move', point: [1828.1249999999998, 1497.8299798276805, -3.6651914291880927]},
  { name: 'move', point: [1893.7499999999998, 1558.723032344092, -3.6651914291880927]},
  { name: 'take', bouy_id: 20, place_id: 4, delay: TAKE_DELAY},
  { name: 'move', point: [1800-30, 1863, -3.6651914291880927]},
  { name: 'drop', places: [4, 5], delay: DROP_DELAY, offsets: [80, -80] },
  { name: 'addscore', score: 6},
  { name: 'move', point: [1814+30, 1863 - 36, -3.6651914291880927+2*Math.PI/3]},
  { name: 'drop', places: [0, 1], delay: DROP_DELAY, offsets: [80, -80] },
  { name: 'addscore', score: 6},
  { name: 'move', point: [1814-30, 1863-72, -3.6651914291880927+4*Math.PI/3]},
  { name: 'drop', places: [2, 3], delay: DROP_DELAY, offsets: [80, -80] },
  { name: 'addscore', score: 6},
  { name: 'move', point: [1874.9999999999998, 1544.6707894556894, -3.6651914291880927+2*Math.PI/3]},
  { name: 'move', point: [2798.4375, 1357.3075509436544, 1]},
  { name: 'addscore', score: 5},
  { name: 'addscore', score: 10},
  { name: 'move', point: [2798.4375, 1357.3075509436544, 1000]},
  { name: 'finish'}
]
var strategy_A1 = [
  { name: 'move', point: [314, 940, 0.2618] },
  { name: 'move', point: [1017.19, 874.83, 0.26], speed: 200 },
  { name: 'take', bouy_id: 6, place_id: 5, delay: TAKE_DELAY },
  { name: 'move', point: [1260.94, 1080.96, -1.05]},
  { name: 'take', bouy_id: 7, place_id: 0, delay: TAKE_DELAY },
  { name: 'move', point: [1635.94, 1549.43, 1.05]},
  { name: 'take', bouy_id: 21, place_id: 3, delay: TAKE_DELAY },
  { name: 'move', point: [1823.44, 1647.80, 1.57]},
  { name: 'take', bouy_id: 20, place_id: 1, delay: TAKE_DELAY },
  { name: 'move', point: [1659.38, 1807.08, 2.62]},
  { name: 'move', point: [1654.69, 1853.93, 2.62]},
  { name: 'take', bouy_id: 23, place_id: 4, delay: TAKE_DELAY },
  { name: 'move', point: [1860.94, 1797.71, 2.62]},
  { name: 'move', point: [1945.31, 1797.71, 2.62]},
  { name: 'move', point: [1950.00, 1840, 2.62]},
  //{ name: 'drop', places: [4], time: DROP_DELAY, offsets: [OFF_L[3]] },
  { name: 'take', bouy_id: 22, place_id: 3, delay: TAKE_DELAY },
  { name: 'move', point: [1950.00, 1769.61, 2.62]},
  { name: 'move', point: [1650.00, 1840, 2.62]},
  //{ name: 'drop', places: [3], time: DROP_DELAY, offsets: [OFF_R[3]] },
  { name: 'move', point: [1795.31, 1785, 2.62]},
  { name: 'move', point: [1795.31, 1785, 4.71]},
  //{ name: 'drop', places: [0, 5], time: DROP_DELAY, offsets: [OFF_L[5], OFF_R[5]] },
  { name: 'move', point: [1795.31, 1745, 4.71]},
  { name: 'move', point: [1795.31, 1745, 6.81] },
  //{ name: 'drop', places: [2, 1], time: DROP_DELAY, offsets: [OFF_L[4], OFF_R[4]] },
  {name: 'dynamixel', values: [4, 4, 4, 4, 4, 4], delay: DYNAMIXEL_DELAY},
  { name: 'move', point: [2807.81, 1821.14, 0.00] },
  { name: 'finish'}
]

let strategy_A2 = [
  { name: 'move', point: [178.13, 500.06, 2.62] },
  { name: 'move', point: [215.25, 481.32, 2.36], speed: 200 },
  { name: 'take', bouy_id: 1, place_id: 2, delay: TAKE_DELAY },
  { name: 'move', point: [346.88, 495.37, 2.36] },
  { name: 'take', bouy_id: 2, place_id: 3, delay: TAKE_DELAY },
  { name: 'move', point: [839.06, 429.79, 0.79] },
  { name: 'take', bouy_id: 5, place_id: 1, delay: TAKE_DELAY },
  { name: 'move', point: [717.19, 195.55, 1.57] },
  { name: 'take', bouy_id: 0, place_id: 0, delay: TAKE_DELAY },
  //{ name: 'move', point: [787.50, 247.08, -0.52] },
  //{ name: 'move', point: [843.75, 106.54, -0.52] },

  //{ name: 'move', point: [792.19, 298.61, -0.52] },
  { name: 'move', point: [740.63, 556.27, 2.09] },
  { name: 'move', point: [459.37, 973.21, 2.09] },
  { name: 'take', bouy_id: 3, place_id: 4, delay: TAKE_DELAY },
  { name: 'move', point: [384.38, 1132.49, 2.09] },
  { name: 'take', bouy_id: 4, place_id: 5, delay: TAKE_DELAY },
  { name: 'move', point: [1090.62, 1480.52, -1.57] },
  { name: 'sleep', time: 3500 },
  { name: 'move', point: [1790.62, 1480.52, -1.57] },

  { name: 'move', point: [1800.50, 1675.91, -1.57] },
  { name: 'drop', places: [1, 0], time: DROP_DELAY, offsets: [-115, 115] },
  { name: 'move', point: [1832.81, 1610.33, -1.57] },
  { name: 'move', point: [1832.81, 1610.33, -3.67] },
  
  { name: 'move', point: [1800.00, 1660.12, -3.67] },
  { name: 'drop', places: [5, 4], time: DROP_DELAY, offsets: [-30, 30] },
  { name: 'move', point: [1823.44, 1574.11, -3.67] },
  { name: 'move', point: [1814.06, 1578.80, -5.76] },
  { name: 'move', point: [1814.06, 1590.80, -5.76] },
  { name: 'drop', places: [3, 2], time: DROP_DELAY, offsets: [-50, 50] },

  /*{ name: 'move', point: [1790.62, 1480.52, -1.57] },
  { name: 'move', point: [1790.62, 1480.52, -1.57] },*/
  
  { name: 'finish'}
]

let test_take_bot6 = [
  { name: 'move', point: [248.44, 921.68, -1.05]},
  { name: 'dynamixel', values: [2, 0, 0, 0, 0, 2], delay: DYNAMIXEL_DELAY},
  { name: 'sleep', time: 0.5},
  { name: 'move', point: [271.88, 1010.69, -0.79] },
  { name: 'move', point: [389.06, 1160.60, -0.79] },
  { name: 'dynamixel', values: [1, 15, 15, 15, 15, 1], delay: DYNAMIXEL_DELAY},
  { name: 'take', bouy_id: 3, place_id: 5, delay: 0 },
  { name: 'take', bouy_id: 4, place_id: 0, delay: 0 },
  { name: 'sleep', time: 0.5},

  { name: 'move', point: [656.25, 1179.34, -2.09] },
  { name: 'dynamixel', values: [15, 15, 15, 15, 2, 15], delay: DYNAMIXEL_DELAY},
  { name: 'sleep', time: 0.5},
  { name: 'move', point: [1096.88, 1155.91, -2.09] },
  { name: 'move', point: [1265.63, 1155.91, -2.09] },
  { name: 'dynamixel', values: [15, 15, 15, 2, 1, 15], delay: DYNAMIXEL_DELAY},
  { name: 'sleep', time: 0.5},
  { name: 'take', bouy_id: 7, place_id: 4, delay: 0 },
  { name: 'move', point: [1546.88, 1221.50, -2.09] },
  { name: 'move', point: [1725.00, 1235.55, -2.09] },
  { name: 'dynamixel', values: [15, 15, 15, 1, 15, 15], delay: DYNAMIXEL_DELAY},
  { name: 'sleep', time: 0.5},
  { name: 'take', bouy_id: 19, place_id: 3, delay: 0 },

  { name: 'move', point: [1804.69, 1399.52, 0.52] },
  { name: 'move', point: [1710.94, 1460.42, 0.52] },
  { name: 'dynamixel', values: [15, 15, 2, 15, 15, 15], delay: DYNAMIXEL_DELAY},
  { name: 'sleep', time: 0.5},
  { name: 'move', point: [1701.56, 1605.64, 0.52] },
  { name: 'dynamixel', values: [15, 15, 1, 15, 15, 15], delay: DYNAMIXEL_DELAY},
  { name: 'sleep', time: 0.5},
  { name: 'take', bouy_id: 21, place_id: 2, delay: 0 },
  { name: 'move', point: [1809.37, 1465.10, 0.52] },
  { name: 'move', point: [1893.75, 1460.42, 0.52] },
  { name: 'dynamixel', values: [15, 2, 15, 15, 15, 15], delay: DYNAMIXEL_DELAY},
  { name: 'sleep', time: 0.5},
  { name: 'move', point: [1884.37, 1615.01, 0.52] },
  { name: 'take', bouy_id: 20, place_id: 1, delay: 0 },
]

let test_put_first6 = [
  { name: 'move', point: [1814.06, 1708.70, -1.57] },
  { name: 'sleep', time: 0.5},
  { name: 'move', point: [1743.75, 1830.51, -1.57] },
  { name: 'sleep', time: 0.5},
  { name: 'dynamixel', values: [4, 15, 15, 15, 15, 4], delay: DYNAMIXEL_DELAY},
  { name: 'sleep', time: 0.5},
  { name: 'move', point: [1743.75, 1740, -1.57] },
  { name: 'dynamixel', values: [0, 15, 15, 15, 15, 0], delay: DYNAMIXEL_DELAY},
  { name: 'sleep', time: 0.5},
  { name: 'move', point: [1743.75, 1740, 0.52] },
  { name: 'sleep', time: 0.5},
  { name: 'move', point: [1743.75+60, 1780, 0.52] },
  { name: 'dynamixel', values: [15, 4, 4, 15, 15, 15], delay: DYNAMIXEL_DELAY},
  { name: 'sleep', time: 0.5},
  { name: 'move', point: [1743.75+60, 1690, 0.52] },
  { name: 'dynamixel', values: [15, 0, 0, 15, 15, 15], delay: DYNAMIXEL_DELAY},
  { name: 'sleep', time: 0.5},
  { name: 'move', point: [1743.75+60, 1690, 2.62] },
  { name: 'sleep', time: 0.5},
  { name: 'move', point: [1743.75+60+40, 1720, 2.62] },
  { name: 'sleep', time: 0.5},
  { name: 'dynamixel', values: [15, 15, 15, 4, 4, 15], delay: DYNAMIXEL_DELAY},
  { name: 'sleep', time: 0.5},
  { name: 'move', point: [1800, 1550, 2.62] },
]

let test_lift_up_windsocks = [
  { name: 'move', point: [150, 1450, 1.57] },
  { name: 'move', point: [150, 1860, 1.57] },
  { name: 'move', point: [150, 1860, 1.57] },
  { name: 'stm', cmd: "dropLeverWindsocks", cmd_params: ""},
  { name: 'sleep', time: 0.2},
  { name: 'move', point: [680, 1860, 1.57] },
  { name: 'sleep', time: 0.5},
  { name: 'stm', cmd: "hideLever", cmd_params: ""},
  { name: 'sleep', time: 0.2},
]

let test_castling = [
  { name: 'move', point: [1800.00, 1400, -1.57], speed: ROBOT_SPEED_SLOW },
  { name: 'move', point: [1800.00, 1745, -1.57], speed: ROBOT_SPEED_SLOW },
  { name: 'dynamixel', values: [2, 15, 15, 15, 15, 2], delay: DYNAMIXEL_DELAY},

  { name: 'move', point: [1650.00, 1770, -1.57], speed: ROBOT_SPEED_SLOW },
  { name: 'move', point: [1650.00, 1840, -1.57], speed: ROBOT_SPEED_SLOW },
  { name: 'take', bouy_id: 23, place_id: 0, delay: 0 },
  { name: 'dynamixel', values: [1, 15, 15, 15, 15, 15], delay: DYNAMIXEL_DELAY},
  { name: 'move', point: [1650.00, 1770, -1.57], speed: ROBOT_SPEED_SLOW },

  { name: 'move', point: [1800.00, 1745, -1.57], speed: ROBOT_SPEED_SLOW },

  { name: 'move', point: [1950.00, 1770, -1.57], speed: ROBOT_SPEED_SLOW },
  { name: 'move', point: [1950.00, 1840, -1.57], speed: ROBOT_SPEED_SLOW },
  { name: 'take', bouy_id: 22, place_id: 5, delay: 0 },
  { name: 'dynamixel', values: [3, 15, 15, 15, 15, 1], delay: DYNAMIXEL_DELAY},
  { name: 'move', point: [1950.00, 1770, -1.57], speed: ROBOT_SPEED_SLOW },

  { name: 'move', point: [1800.00, 1745, -1.57], speed: ROBOT_SPEED_SLOW },

  { name: 'move', point: [1650.00, 1770, -1.57], speed: ROBOT_SPEED_SLOW },
  { name: 'move', point: [1650.00, 1840, -1.57], speed: ROBOT_SPEED_SLOW },
  { name: 'dynamixel', values: [0, 15, 15, 15, 15, 3], delay: DYNAMIXEL_DELAY},
  { name: 'move', point: [1650.00, 1770, -1.57], speed: ROBOT_SPEED_SLOW },

  { name: 'move', point: [1800.00, 1745, -1.57], speed: ROBOT_SPEED_SLOW },
  { name: 'dynamixel', values: [0, 15, 15, 15, 15, 0], delay: DYNAMIXEL_DELAY},
  { name: 'move', point: [1800.00, 1400, -1.57], speed: ROBOT_SPEED_SLOW }
]

let test_take_top6 = [
  { name: 'move', point: [145.31, 631.23, 0.00-2.09], speed: ROBOT_SPEED_SLOW }, 
  { name: 'dynamixel', values: [15, 15, 15, 2, 2, 15], delay: DYNAMIXEL_DELAY},
  { name: 'move', point: [140.63, 457.89, 0.00-2.09], speed: ROBOT_SPEED_SLOW },
  { name: 'move', point: [426.56, 448.52, 0.00-2.09], speed: ROBOT_SPEED_SLOW },
  { name: 'take', bouy_id: 1, place_id: 3, delay: 0 },
  { name: 'take', bouy_id: 2, place_id: 4, delay: 0 },
  { name: 'dynamixel', values: [15, 15, 15, 1, 1, 15], delay: DYNAMIXEL_DELAY},
  { name: 'move', point: [717.19, 457.89, -1.57-2.09], speed: ROBOT_SPEED_SLOW },
  { name: 'dynamixel', values: [15, 2, 2, 15, 15, 15], delay: DYNAMIXEL_DELAY},
  { name: 'move', point: [895.31, 368.89, -1.57-2.09], speed: ROBOT_SPEED_SLOW },
  { name: 'dynamixel', values: [15, 15, 1, 15, 15, 15], delay: DYNAMIXEL_DELAY},
  { name: 'take', bouy_id: 5, place_id: 2, delay: 0 },
  { name: 'move', point: [895.31, 368.89, 0.26-2.09], speed: ROBOT_SPEED_SLOW },
  { name: 'move', point: [773.44, 242.40, 0.26-2.09], speed: ROBOT_SPEED_SLOW },
  { name: 'move', point: [707.81, 251.77, -2.62], speed: ROBOT_SPEED_SLOW },
  { name: 'move', point: [707.81, 172.13, -2.62], speed: ROBOT_SPEED_SLOW },
  { name: 'dynamixel', values: [15, 1, 15, 15, 15, 15], delay: DYNAMIXEL_DELAY},
  { name: 'take', bouy_id: 0, place_id: 1, delay: 0 },
]
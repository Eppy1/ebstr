
let score = 0;

let robot1 = {
  coords: [314, 940, 0.2618],
  container: ['none', 'none', 'none', 'none', 'none', 'none'],
  dynamixels: [0, 0, 0, 0, 0, 0],
  curr_state: 0,
  strategy: test_take_bot6.concat(test_put_first6).concat({name:'finish'})
}

let robot2 = {
  coords: [215.625, 664.06, 3.14],
  container: ['none', 'none', 'none', 'none', 'none', 'none'],
  dynamixels: [0, 0, 0, 0, 0, 0],
  curr_state: 0,
  strategy: strategy_A2
}

let buoys = [
  [670, 100, 'red'],
  [300, 400, 'red'],
  [450, 510, 'green'],
  [450, 1080, 'red'],
  [300, 1200, 'green'],
  [950, 400, 'green'],
  [1100, 800, 'red'],
  [1270, 1200, 'green'],
  [1065, 1650, 'green'],
  [1355, 1650, 'red'],
  [1005, 1955, 'red'],
  [1395, 1955, 'green']
]

let euc = (p1, p2) => Math.hypot(p1[0]-p2[0], p1[1]-p2[1])

function controlRobot(robot) {
  c = robot.strategy[robot.curr_state];

    if(c.name == 'move') {
      var dist = euc(robot.coords, c.point);
      var ort = [(c.point[0]-robot.coords[0])/dist, (c.point[1]-robot.coords[1])/dist];

      if(dist >= ROBOT_SPEED_STD * (DT/1000)) {
        robot.coords[0] += ROBOT_SPEED_STD * (DT/1000) * ort[0];
        robot.coords[1] += ROBOT_SPEED_STD * (DT/1000) * ort[1];
      }

      if(Math.abs(robot.coords[2] - c.point[2]) >= 0.15) {
        robot.coords[2] += ANGULAR_SPEED_STD * (DT/1000) * Math.sign(c.point[2] - robot.coords[2]);
      }

      if(dist < ROBOT_SPEED_STD * (DT/1000) && Math.abs(robot.coords[2] - c.point[2]) < 0.15) {
        robot.coords[0] = c.point[0];
        robot.coords[1] = c.point[1];
        robot.coords[2] = c.point[2];
        robot.curr_state++;
      }
    }

    if(c.name == 'take') {
      if(c.delay > 0) {
        c.delay -= DT;
      } else {
        buoys[c.bouy_id][0] = -1000;
        robot.container[c.place_id] = buoys[c.bouy_id][2];
        robot.curr_state++;
      }
    }
    
    if(c.name == 'sleep') {
      if(c.time > 0) {
        c.time -= DT;
      } else {
        robot.curr_state++;
      }
    }

    if(c.name == 'put5') {
      if(c.time > 0) {
        c.time -= DT;
      } else {
        for(var i=0; i<5; i++) {

          px = robot.coords[0]+165*cos(robot.coords[2])+(75*i-165)*sin(robot.coords[2]);
          py = robot.coords[1]-165*sin(robot.coords[2])+(75*i-165)*cos(robot.coords[2]);

          buoys.push([px, py, c.bouys[i]]);
        }
        robot.curr_state++;
      }
    }
    
    if(c.name == 'dynamixel') {
      if(c.time > 0) {
        c.time -= DT;
      } else {

        for(let i=0; i<6; i++) {
          if(c.values[i] != 15) robot.dynamixels[i] = c.values[i]

          if(c.values[i] >=3 && c.values[i] <= 5) {
            drop(robot, i, CONT_PERIMETER[i], (i%2 == 0 ? OFF_L : OFF_R)[c.values[i]])
          }
        }
        robot.curr_state++;
      }
    }

    if(c.name == 'drop') {
      if(c.time > 0) {
        c.time -= DT;
      } else {
        c.places.forEach((b, i, bs) => drop(robot, b, CONT_PERIMETER[b], c.offsets[i]));

        robot.curr_state++;
      }
    }
    
    if(c.name == 'addscore') {
      score += c.score;

      document.getElementById('score').innerHTML='<b>SCORE: </b>' + round(score)+'<span style="color:gray;">(abs max 129)</span>';

      robot.curr_state++;
    }
}

function drop(robot, i, bouy_pos, offset) { 
  px = robot.coords[0]+bouy_pos[0]*cos(robot.coords[2])+bouy_pos[1]*sin(robot.coords[2]) + offset[0];
  py = robot.coords[1]-bouy_pos[0]*sin(robot.coords[2])+bouy_pos[1]*cos(robot.coords[2]) + offset[1];
  
  buoys.push([px, py, robot.container[i]/*(i>0? 'green' : 'red')*/]);
  robot.container[i] = 'none';
}

time = 0;

function setup() {
  setupBoard();

  for(var i=0; i<12; i++) buoys.push([3000 - buoys[i][0], buoys[i][1], buoys[i][2] == 'red' ? 'green' : 'red']);

  document.getElementById('text_json1').innerHTML =
  JSON.stringify({strategy1: robot1.strategy, strategy2: robot2.strategy}, null, '\t');

  setInterval(() => controlRobot(robot1), DT);

  //setInterval(() => controlRobot(robot2), DT);

  setInterval(() => document.getElementById('time').innerHTML='<b>TIME: </b>' + ((time+=1)/50), 20);
}

function restart() {
  time = 0;
  score = 0;

  robot1.coords = [314, 940, 0.2618];
  robot2.coords = [215.625, 664.06, 3.14];

  robot1.container = ['none', 'none', 'none', 'none', 'none', 'none'];
  robot2.container = ['none', 'none', 'none', 'none', 'none', 'none'];

  robot1.curr_state = 0;
  robot2.curr_state = 0;

  buoys = [
    [670, 100, 'red'],
    [300, 400, 'red'],
    [450, 510, 'green'],
    [450, 1080, 'red'],
    [300, 1200, 'green'],
    [950, 400, 'green'],
    [1100, 800, 'red'],
    [1270, 1200, 'green'],
    [1065, 1650, 'green'],
    [1355, 1650, 'red'],
    [1005, 1955, 'red'],
    [1395, 1955, 'green']
  ];

  for(var i=0; i<12; i++) buoys.push([3000 - buoys[i][0], buoys[i][1], buoys[i][2] == 'red' ? 'green' : 'red']);

  /*
  var json = JSON.parse(document.getElementById('text_json1').value);
  robot1.strategy = json.strategy1;
  robot2.strategy = json.strategy2;
  */
  robot1.strategy = strategy_A1;
  robot1.strategy = strategy_A2;

  document.getElementById('text_json1').value =
    JSON.stringify(json, null, '\t');
}

let sample_x = 0, sample_y = 0, sample_w = 0;

let mouse_locked = false

let mouse_inside = () => sample_x <= 3000 && sample_y <=2000 && sample_x >=0 && sample_y >=0

function mousePressed() {
  if (!mouse_locked && mouse_inside()) {
    mouse_locked = true;
    txt = document.getElementById('text_json1');
    start = txt.selectionStart;
    txt.value = txt.value.substring(0, start) +
    '\r\n\n{\r\n"name":"move",\r\n"point": ['+sample_x+', '+sample_y+', '+sample_w+']\r\n},\r\n' +
    txt.value.substring(start, txt.value.length)

    console.log('['+ 
    Number(sample_x, 0.05).toFixed(2) + ', ' +
    Number(sample_y, 0.05).toFixed(2) + ', ' +
    Number(sample_w, 0.05).toFixed(2) + ']');

  } else {
    mouse_locked = false;
  }
}

function keyPressed() {
  if (key =='a') sample_w += Math.PI / 12;
  if (key =='d') sample_w -= Math.PI / 12;
}

function makePatternFromStrategy(strategy, comment = 'test') {
  str = strategy.slice(0);
  output = {priority: 100, comment: comment, commands: []}

  for(cmd of str) {
    action = undefined

    if(cmd.name == 'move') {
      action = {
        x: +(cmd.point[0]/1000).toFixed(3),
        y: +(2-cmd.point[1]/1000).toFixed(3),
        yaw: +(cmd.point[2]).toFixed(3),
        speed: +((cmd.speed ? cmd.speed : ROBOT_SPEED_STD)/1000).toFixed(3)
      };

      if(cmd.comment) action.comment = cmd.comment;
      output.commands[output.commands.length] = {'move': action};
    }

    if(cmd.name == 'dynamixel') {
      action = {
        cmd: "SetLowDynamixelsPoses",
        cmd_params: ""
      };

      cmd.values.forEach(val => action.cmd_params += val == 15 ? 'f' : val);
      
      output.commands[output.commands.length] = {'send_stm_cmd': action};
    }

    if(cmd.name == 'sleep') {
      action = {time: cmd.time<0 ? 0.5 : cmd.time};

      output.commands[output.commands.length] = {'sleep': action}
    }
  }

  //console.log(output);
  console.log(JSON.stringify(output, null, '\t'));
}
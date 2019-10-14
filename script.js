
let BTAB = 15;
let WIDTH = 640, HEIGHT = WIDTH*2/3;
let SCALE = WIDTH / 3000;
let BUOY_R = 36;
let DT = 25;
let ROBOT_SPEED_STD = 400;

let ROBOT_PERIMETER = [
  [93, 101], [41, 131], [-134, 30], [-134, -30], [41, -131], [93, -101]
]

let CONT_PERIMETER = [
  [90, -36], [90, 36], [-14, 96], [-76, 60], [-76, -60], [-14, -96]
]

let score = 0;

let robot1 = {
  coords: [314, 940, 0.2618],
  container: ['none', 'none', 'none', 'none', 'none', 'none'],
  curr_state: 0,
  strategy: strategy111
}

let robot2 = {
  coords: [215.625, 664.06, 3.14],
  container: ['none', 'none', 'none', 'none', 'none', 'none'],
  curr_state: 0,
  strategy: strategy222
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
        robot.coords[2] += 0.1 * Math.sign(c.point[2] - robot.coords[2]);
      }

      if(dist < ROBOT_SPEED_STD * (DT/1000) && Math.abs(robot.coords[2] - c.point[2]) < 0.15) {
        robot.coords[0] = c.point[0];
        robot.coords[1] = c.point[1];
        robot.coords[2] = c.point[2];
        robot.curr_state++;
        //console.log(curr_state[0]);
      }
    }

    if(c.name == 'take') {
      //console.log(c, container);
      if(c.delay > 0) {
        c.delay -= DT;
      } else {
        buoys[c.bouy_id][0] = -1000;
        robot.container[c.place_id] = buoys[c.bouy_id][2];
        robot.curr_state++;
      }
    }
    
    if(c.name == 'sleep') {
      //console.log(c, container);
      if(c.time > 0) {
        c.time -= DT;
      } else {
        robot.curr_state++;
      }
    }

    if(c.name == 'put5') {
      //console.log(c, container);
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
    
    if(c.name == 'drop') {
      //console.log(c, container);
      if(c.time > 0) {
        c.time -= DT;
      } else {
        c.places.forEach(function(b, i, bs) { 
          px = robot.coords[0]+CONT_PERIMETER[b][0]*cos(robot.coords[2])+CONT_PERIMETER[b][1]*sin(robot.coords[2]) + (i==0? 40 : -40);
          py = robot.coords[1]-CONT_PERIMETER[b][0]*sin(robot.coords[2])+CONT_PERIMETER[b][1]*cos(robot.coords[2]);
          
          buoys.push([px, py, (i>0? 'green' : 'red')]);
          robot.container[b] = 'none';
        });

        robot.curr_state++;
      }
    }
    
    if(c.name == 'addscore') {
      score += c.score;

      document.getElementById('score').innerHTML='<b>SCORE: </b>' + round(score)+'<span style="color:gray;">(abs max 129)</span>';

      robot.curr_state++;
    }
}

time = 0;

function setup() {
  var canvas = createCanvas(WIDTH+BTAB*2, HEIGHT+BTAB*2);
  canvas.parent('sketch-holder');
  frameRate(30);

  for(var i=0; i<12; i++) buoys.push([3000 - buoys[i][0], buoys[i][1], buoys[i][2] == 'red' ? 'green' : 'red']);

  document.getElementById('text_json1').innerHTML =
  JSON.stringify({strategy1: robot1.strategy, strategy2: robot2.strategy}, null, '\t');

  setInterval(() => controlRobot(robot1), DT);

  setInterval(() => controlRobot(robot2), DT);

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

  var json = JSON.parse(document.getElementById('text_json1').value);
  robot1.strategy = json.strategy1;
  robot2.strategy = json.strategy2;

  document.getElementById('text_json1').value =
    JSON.stringify(json, null, '\t');
}

var RED = '#ED2939', GREEN = '#4CB017';

var _rect = (x, y, w, h) => rect(x*SCALE, y*SCALE, w*SCALE, h*SCALE);

function drawBuoy(x, y, color) {
  strokeWeight(1);
  fill(color == 'red' ? RED : GREEN);
  ellipse(x * SCALE, y * SCALE, 2 * BUOY_R * SCALE);
}

function drawBuoys() {
  buoys.forEach(function(b, i, bs) { 
    drawBuoy(b[0], b[1], b[2]);
    strokeWeight(0);
    fill("#000");
    text(''+i, b[0]*SCALE+BUOY_R*SCALE, b[1]*SCALE-BUOY_R*SCALE)
  });
}

function drawRobot(coords, container, transparent) {
  if(container != undefined && !transparent) {
    CONT_PERIMETER.forEach(function(p, i, ps) {
      if(container[i] != 'none') {   
        px = coords[0]+p[0]*cos(coords[2])+p[1]*sin(coords[2]);
        py = coords[1]-p[0]*sin(coords[2])+p[1]*cos(coords[2]);
        
        drawBuoy(px, py, container[i]);
      }
    });
  }

  if(transparent) {
    strokeWeight(1);
    noFill();

    line(SCALE * coords[0], 
      SCALE * coords[1],
      SCALE * (coords[0] + 100*cos(coords[2])),
      SCALE * (coords[1] - 100*sin(coords[2])));
  } else {
    strokeWeight(0);
    fill('#4663ac');
  }
  beginShape();

  ROBOT_PERIMETER.forEach(function(p, i, ps) { 
    px = SCALE * (coords[0]+p[0]*cos(coords[2])+p[1]*sin(coords[2]));
    py = SCALE * (coords[1]-p[0]*sin(coords[2])+p[1]*cos(coords[2]));
    vertex(px, py);
  });

  endShape(CLOSE);

  if(container != undefined && !transparent) {
    CONT_PERIMETER.forEach(function(p, i, ps) {
      if(true/*container[i] != 'none'*/) {   
        px = coords[0]+p[0]*cos(coords[2])+p[1]*sin(coords[2]);
        py = coords[1]-p[0]*sin(coords[2])+p[1]*cos(coords[2]);
        fill("#000");
        text(''+i, px*SCALE+BUOY_R*SCALE, py*SCALE-BUOY_R*SCALE)
      }
    });
  }
}

function draw() {
  background('#e1f1fd');
  translate(BTAB, BTAB);

  stroke('#000');
  strokeWeight(2);
  fill('#C1D8F0')
  rect(0, 0, WIDTH, HEIGHT)

  strokeWeight(0);
  fill(RED);
  _rect(0, 1070, 400, 30);
  _rect(2600, 1070, 400, 30);
  _rect(1250, 1700, 100, 300);
  _rect(1850, 1700, 100, 300);

  fill(GREEN);
  _rect(2600, 500, 400, 30);
  _rect(0, 500, 400, 30);
  _rect(1050, 1700, 100, 300);
  _rect(1650, 1700, 100, 300);

  drawBuoys();

  drawRobot(robot1.coords, robot1.container, false);
  drawRobot(robot2.coords, robot2.container, false);

  sample_x = (mouseX-BTAB)/SCALE;
  sample_y = (mouseY-BTAB)/SCALE;

  drawRobot([sample_x-BTAB, sample_y, sample_w], undefined, true);

  document.getElementById('coords').innerHTML =
  '<b>X:</b> ' + round(sample_x) +
  '&emsp;&emsp;<b>Y:</b> ' + round(sample_y)+
  '&emsp;&emsp;<b>W:</b> ' + (sample_w).toFixed(2);
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
  } else {
    mouse_locked = false;
  }
}

function keyPressed() {
  if (key =='a') sample_w += Math.PI / 12;
  if (key =='d') sample_w -= Math.PI / 12;
}
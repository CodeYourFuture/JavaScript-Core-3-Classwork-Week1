let launchReady = false;
let fuelLevel = 22000;
let thrustOn = false;
let secondsTolaunch = 10;
let interval;

const countDown = () => {
  console.log(secondsTolaunch);
  switch (secondsTolaunch) {
    case 7:
      console.log('Close Davy Jones' Locker..');
      break;
    case 3:
      console.log('Ignition...');
      break;
    case 0:
      console.log('Liftoff!');
      clearInterval(interval);
      break;
    default:
      break;
  }
  
};


if (fuelLevel >= 20000) {
   console.log(('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}
if (launchReady){
  interval = setInterval(countDown, 1000)
}

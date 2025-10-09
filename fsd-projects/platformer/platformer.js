$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300,700,100,12)
    createPlatform(500,600,100,12)
createPlatform(800,500,100,12)
createPlatform(1000,400,100,12)
createPlatform(800,300,100,12)
createPlatform(500,200,100,12)
createPlatform(300,200,100,12)
createPlatform(100,300,100,12)
createPlatform(1300,300,100,12)
  createPlatform(1100,200,100,12)
  createPlatform(100,500,100,12)
  createPlatform(600,500,100,12)
  createPlatform(400,400,100,12)
  createPlatform(200, 200, 10, 120)
  createPlatform(100,200,10,200)
  
// TODO 3 - Create Collectables
createCollectable('steve',1300,260)
createCollectable('diamond',100,260)
createCollectable('max',100,460)
createCollectable('grace',400,360)


    
    // TODO 4 - Create Cannons
createCannon("left",460,1000)
createCannon('bottom',1200,900)
createCannon('top',800,800)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

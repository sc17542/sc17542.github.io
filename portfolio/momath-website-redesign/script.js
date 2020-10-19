$(document).ready(function() {
    $('#by-subway').click(function() {
        $('#by-subway-panel').slideToggle();
    });
    
    $('#by-bus').click(function() {
        $('#by-bus-panel').slideToggle();
    });
    
    $('#by-car').click(function() {
        $('#by-car-panel').slideToggle('slow');
    });
    
    
    
    //variables for exhibit description items
    var exhibitDescriptionIcon0 = document.getElementById('exhibit-description-icon-0');
    
    var exhibitDescriptionHeader0 = document.getElementById('exhibit-description-header-0');
    
    var exhibitDescription0 = document.getElementById('exhibit-description-0');
    
    var exhibitDescriptionIcon1 = document.getElementById('exhibit-description-icon-1');
    
    var exhibitDescriptionHeader1 = document.getElementById('exhibit-description-header-1');
    
    var exhibitDescription1 = document.getElementById('exhibit-description-1');
    
    
    //coaster rollers
    var coasterRollers = document.getElementById('coaster-rollers');
    
    coasterRollers.addEventListener('mouseover', function() {
        coasterRollers.src = 'images/coaster-rollers-hover.png';
        coasterRollers.style.cursor = 'pointer';
    });
    
    coasterRollers.addEventListener('mouseout', function() {
        coasterRollers.src = 'images/coaster-rollers.png';
    });
    
    coasterRollers.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/Coaster-Rollers-Icon.jpg';
        exhibitDescriptionHeader0.innerText = 'Coaster Rollers';
        exhibitDescription0.innerText = 'Roll over the unusually shaped acorns and have a smooth ride due to their constant diameter.';
    });
    
    
    //dynamic wall
    var dynamicWall = document.getElementById('dynamic-wall');
    
    dynamicWall.addEventListener('mouseover', function() {
        dynamicWall.src = 'images/dynamic-wall-hover.png';
        dynamicWall.style.cursor = 'pointer';
    });
    
    dynamicWall.addEventListener('mouseout', function() {
        dynamicWall.src = 'images/dynamic-wall.png';
    });
    
    dynamicWall.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/Dynamic-Wall-Icon.jpg';
        exhibitDescriptionHeader0.innerText = 'Dynamic Wall';
        exhibitDescription0.innerText = 'Enjoy a kinetic showcase as this moving, computer-controlled wall displays a wide variety of wave phenomena, combinatorial algorithms, and more.';
    });
    
    
    //formula morph
    var formulaMorph = document.getElementById('formula-morph');
    
    formulaMorph.addEventListener('mouseover', function() {
        formulaMorph.src = 'images/formula-morph-hover.png';
        formulaMorph.style.cursor = 'pointer';
    });
    
    formulaMorph.addEventListener('mouseout', function() {
        formulaMorph.src = 'images/formula-morph.png';
    });
    
    formulaMorph.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/Formula-Morph-Icon.jpg';
        exhibitDescriptionHeader0.innerText = 'Formula Morph';
        exhibitDescription0.innerText = 'Bring formulas to life by exploring the multiple number of unusual three-dimensional surfaces they can create.';
    });
    
    
    //hoop curves
    var hoopCurves = document.getElementById('hoop-curves');
    
    hoopCurves.addEventListener('mouseover', function() {
        hoopCurves.src = 'images/hoop-curves-hover.png';
        hoopCurves.style.cursor = 'pointer';
    });
    
    hoopCurves.addEventListener('mouseout', function() {
        hoopCurves.src = 'images/hoop-curves.png';
    });
    
    hoopCurves.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/Hoop-Curves-Icon.jpg';
        exhibitDescriptionHeader0.innerText = 'Hoop Curves';
        exhibitDescription0.innerText = 'Take a shot with math! Use visitor throw statistics and a robotic basketball-shooter to take your best shot in this regulation-size free throw space.';
    });
    
    
    //hyper hyperboloid
    var hyperHyperboloid = document.getElementById('hyper-hyperboloid');
    
    hyperHyperboloid.addEventListener('mouseover', function() {
        hyperHyperboloid.src = 'images/hyper-hyperboloid-hover.png';
        hyperHyperboloid.style.cursor = 'pointer';
    });
    
    hyperHyperboloid.addEventListener('mouseout', function() {
        hyperHyperboloid.src = 'images/hyper-hyperboloid.png';
    });
    
    hyperHyperboloid.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/Hyper-Hyperboloid-Icon.jpg';
        exhibitDescriptionHeader0.innerText = 'Hyper Hyperboloid';
        exhibitDescription0.innerText = 'Enter the cylindrical chamber and spin in the chair, creating a curved surface made entirely out of straight lines.';
    });
    
    
    //light grooves
    var lightGrooves = document.getElementById('light-grooves');
    
    lightGrooves.addEventListener('mouseover', function() {
        lightGrooves.src = 'images/light-grooves-hover.png';
        lightGrooves.style.cursor = 'pointer';
    });
    
    lightGrooves.addEventListener('mouseout', function() {
        lightGrooves.src = 'images/light-grooves.png';
    });
    
    lightGrooves.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/Light-Grooves-Icon.jpg';
        exhibitDescriptionHeader0.innerText = 'Light Grooves';
        exhibitDescription0.innerText = 'Change the angle of the light to animate stunning stereographic images, created by precisely engraved reflective grooves in metal plates.';
    });
    
    
    //momath logo generator
    var momathLogoGenerator = document.getElementById('momath-logo-generator');
    
    momathLogoGenerator.addEventListener('mouseover', function() {
        momathLogoGenerator.src = 'images/momath-logo-generator-hover.png';
        momathLogoGenerator.style.cursor = 'pointer';
    });
    
    momathLogoGenerator.addEventListener('mouseout', function() {
        momathLogoGenerator.src = 'images/momath-logo-generator.png';
    });
    
    momathLogoGenerator.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/MoMath-Logo-Generator-Icon.jpg';
        exhibitDescriptionHeader0.innerText = 'MoMath Logo Generator';
        exhibitDescription0.innerText = 'Manipulate mathematical symbols symmetrically to create a unique MoMath-style logo.';
    });
    
    
    //the mathenaeum
    var theMathenaeum = document.getElementById('the-mathenaeum');
    
    theMathenaeum.addEventListener('mouseover', function() {
        theMathenaeum.src = 'images/the-mathenaeum-hover.png';
        theMathenaeum.style.cursor = 'pointer';
    });
    
    theMathenaeum.addEventListener('mouseout', function() {
        theMathenaeum.src = 'images/the-mathenaeum.png';
    });
    
    theMathenaeum.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/Mathenaeum-Icon.jpg';
        exhibitDescriptionHeader0.innerText = 'The Mathenaeum';
        exhibitDescription0.innerText = 'Apply a pallet of operations to transform basic shapes into unique three-dimensional sculptures.';
    });
    
    
    //math flash
    var mathFlash = document.getElementById('math-flash');
    
    mathFlash.addEventListener('mouseover', function() {
        mathFlash.src = 'images/math-flash-hover.png';
        mathFlash.style.cursor = 'pointer';
    });
    
    mathFlash.addEventListener('mouseout', function() {
        mathFlash.src = 'images/math-flash.png';
    });
    
    mathFlash.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/Math-Flash-Icon.jpg';
        exhibitDescriptionHeader0.innerText = 'Math Flash';
        exhibitDescription0.innerText = 'See breaking news from the world of mathematics.';
    });
    
    
    //motionscape
    var motionscape = document.getElementById('motionscape');
    
    motionscape.addEventListener('mouseover', function() {
        motionscape.src = 'images/motionscape-hover.png';
        motionscape.style.cursor = 'pointer';
    });
    
    motionscape.addEventListener('mouseout', function() {
        motionscape.src = 'images/motionscape.png';
    });
    
    motionscape.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/Motionscape-Icon.jpg';
        exhibitDescriptionHeader0.innerText = 'Motionscape';
        exhibitDescription0.innerText = 'Explore the relationship between position, velocity, and acceleration with a full-body movement experience.';
    });
    
    
    //pattern mesh
    var patternMesh = document.getElementById('pattern-mesh');
    
    patternMesh.addEventListener('mouseover', function() {
        patternMesh.src = 'images/pattern-mesh-hover.png';
        patternMesh.style.cursor = 'pointer';
    });
    
    patternMesh.addEventListener('mouseout', function() {
        patternMesh.src = 'images/pattern-mesh.png';
    });
    
    patternMesh.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/Pattern-Mesh-Icon.jpg';
        exhibitDescriptionHeader0.innerText = 'Pattern Mesh';
        exhibitDescription0.innerText = 'Rotate one pattern over another to create changing and surprising new patterns.';
    });
    
    
    //pattern pants
    var patternPants = document.getElementById('pattern-pants');
    
    patternPants.addEventListener('mouseover', function() {
        patternPants.src = 'images/pattern-pants-hover.png';
        patternPants.style.cursor = 'pointer';
    });
    
    patternPants.addEventListener('mouseout', function() {
        patternPants.src = 'images/pattern-pants.png';
    });
    
    patternPants.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/Pattern-Pants-Icon.jpg';
        exhibitDescriptionHeader0.innerText = 'Pattern Pants';
        exhibitDescription0.innerText = 'Dress yourself in a symmetrical pattern.';
    });
    
    
    //polypaint
    var polypaint = document.getElementById('polypaint');
    
    polypaint.addEventListener('mouseover', function() {
        polypaint.src = 'images/polypaint-hover.png';
        polypaint.style.cursor = 'pointer';
    });
    
    polypaint.addEventListener('mouseout', function() {
        polypaint.src = 'images/polypaint.png';
    });
    
    polypaint.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/Polypaint-Icon.jpg';
        exhibitDescriptionHeader0.innerText = 'Polypaint';
        exhibitDescription0.innerText = 'Use a paintbrush on the digital canvas to create intricate and colorful patterns that emerge from symmetry.';
    });
    
    
    //seeing math
    var seeingMath = document.getElementById('seeing-math');
    
    seeingMath.addEventListener('mouseover', function() {
        seeingMath.src = 'images/seeing-math-hover.png';
        seeingMath.style.cursor = 'pointer';
    });
    
    seeingMath.addEventListener('mouseout', function() {
        seeingMath.src = 'images/seeing-math.png';
    });
    
    seeingMath.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/Seeing-Math-Icon.jpg';
        exhibitDescriptionHeader0.innerText = 'Seeing Math';
        exhibitDescription0.innerText = 'Observe how math shows up in everyday scenes from the world around us.';
    });
    
    
    //shapes of space
    var shapesOfSpace = document.getElementById('shapes-of-space');
    
    shapesOfSpace.addEventListener('mouseover', function() {
        shapesOfSpace.src = 'images/shapes-of-space-hover.png';
        shapesOfSpace.style.cursor = 'pointer';
    });
    
    shapesOfSpace.addEventListener('mouseout', function() {
        shapesOfSpace.src = 'images/shapes-of-space.png';
    });
    
    shapesOfSpace.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/Shapes-of-Space-Icon.jpg';
        exhibitDescriptionHeader0.innerText = 'Shapes of Space';
        exhibitDescription0.innerText = 'Fit together shapes on differently curved surfaces and observe the differences among them.';
    });
    
    
    //square-wheeled trike
    var squareWheeledTrike = document.getElementById('square-wheeled-trike');

    squareWheeledTrike.addEventListener('mouseover', function() {
        squareWheeledTrike.src = 'images/square-wheeled-trike-hover.png';
        squareWheeledTrike.style.cursor = 'pointer';
    });
    
    squareWheeledTrike.addEventListener('mouseout', function() {
        squareWheeledTrike.src = 'images/square-wheeled-trike.png';
    });
    
    squareWheeledTrike.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/Square-Wheeled-Trike-Icon.jpg';
        
        exhibitDescriptionHeader0.innerText = 'Square-Wheeled Trike';
        
        exhibitDescription0.innerText = 'Take a smooth ride on square wheels.';
    });
    
    
    //string product
    var stringProduct0 = document.getElementById('string-product-0');

    stringProduct0.addEventListener('mouseover', function() {
        stringProduct0.src = 'images/string-product-0-hover.png';
        stringProduct0.style.cursor = 'pointer';
    });
    
    stringProduct0.addEventListener('mouseout', function() {
        stringProduct0.src = 'images/string-product-0.png';
    });
    
    stringProduct0.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/String-Product-Icon.jpg';
        
        exhibitDescriptionHeader0.innerText = 'String Product';
        
        exhibitDescription0.innerText = 'Light up the line connecting two numbers on a special curve called a parabola, and see how it crosses the center pole exactly at the product of those two numbers.';
    });
    
    
    //structure studio
    var structureStudio = document.getElementById('structure-studio');

    structureStudio.addEventListener('mouseover', function() {
        structureStudio.src = 'images/structure-studio-hover.png';
        structureStudio.style.cursor = 'pointer';
    });
    
    structureStudio.addEventListener('mouseout', function() {
        structureStudio.src = 'images/structure-studio.png';
    });
    
    structureStudio.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/Structure-Studio-Icon.jpg';
        
        exhibitDescriptionHeader0.innerText = 'Structure Studio';
        
        exhibitDescription0.innerText = 'Make some cool mathematical structures with these uncommon construction toys.';
    });
    
    
    //tracks of galileo
    var tracksOfGalileo = document.getElementById('tracks-of-galileo');

    tracksOfGalileo.addEventListener('mouseover', function() {
        tracksOfGalileo.src = 'images/tracks-of-galileo-hover.png';
        tracksOfGalileo.style.cursor = 'pointer';
    });
    
    tracksOfGalileo.addEventListener('mouseout', function() {
        tracksOfGalileo.src = 'images/tracks-of-galileo.png';
    });
    
    tracksOfGalileo.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/Tracks-of-Galileo-Icon.jpg';
        
        exhibitDescriptionHeader0.innerText = 'Tracks of Galileo';
        
        exhibitDescription0.innerText = 'Adjust the track and find the fastest path down to the bottom.';
    });
    
    
    //twisted thruway
    var twistedThruway = document.getElementById('twisted-thruway');

    twistedThruway.addEventListener('mouseover', function() {
        twistedThruway.src = 'images/twisted-thruway-hover.png';
        twistedThruway.style.cursor = 'pointer';
    });
    
    twistedThruway.addEventListener('mouseout', function() {
        twistedThruway.src = 'images/twisted-thruway.png';
    });
    
    twistedThruway.addEventListener('click', function() {
        exhibitDescriptionIcon0.src = 'images/Twisted-Thruway-Icon.jpg';
        
        exhibitDescriptionHeader0.innerText = 'Twisted Thruway';
        
        exhibitDescription0.innerText = 'Get behind the wheel and enjoy a “driver’s eye” view while exploring the surfaces of a Möbius strip and a trefoil knot.';
    });
    
    
    
    //3d doodle
    var threeDDoodle = document.getElementById('three-d-doodle');

    threeDDoodle.addEventListener('mouseover', function() {
        threeDDoodle.src = 'images/3d-doodle-hover.png';
        threeDDoodle.style.cursor = 'pointer';
    });
    
    threeDDoodle.addEventListener('mouseout', function() {
        threeDDoodle.src = 'images/3d-doodle.png';
    });
    
    threeDDoodle.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/3-D-Doodle-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = '3-D Doodle';
        
        exhibitDescription1.innerText = 'Fit two-dimensional cross-sections together to create three-dimensional forms 3-D Doodle.';
    });
    
    
    //beaver run
    var beaverRun = document.getElementById('beaver-run');

    beaverRun.addEventListener('mouseover', function() {
        beaverRun.src = 'images/beaver-run-hover.png';
        beaverRun.style.cursor = 'pointer';
    });
    
    beaverRun.addEventListener('mouseout', function() {
        beaverRun.src = 'images/beaver-run.png';
    });
    
    beaverRun.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Beaver-Run-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = 'Beaver Run';
        
        exhibitDescription1.innerText = 'No matter how you turn the tracks, can you ever make the beavers meet?';
    });
    
    
    //edge fx
    var edgeFx = document.getElementById('edge-fx');

    edgeFx.addEventListener('mouseover', function() {
        edgeFx.src = 'images/edge-fx-hover.png';
        edgeFx.style.cursor = 'pointer';
    });
    
    edgeFx.addEventListener('mouseout', function() {
        edgeFx.src = 'images/edge-fx.png';
    });
    
    edgeFx.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Edge-FX-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = 'Edge FX';
        
        exhibitDescription1.innerText = 'Put a small bias into the bounce of each ball, and watch as your profits plummet or soar.';
    });
    
    
    //enigma cafe
    var enigmaCafe = document.getElementById('enigma-cafe');

    enigmaCafe.addEventListener('mouseover', function() {
        enigmaCafe.src = 'images/enigma-cafe-hover.png';
        enigmaCafe.style.cursor = 'pointer';
    });
    
    enigmaCafe.addEventListener('mouseout', function() {
        enigmaCafe.src = 'images/enigma-cafe.png';
    });
    
    enigmaCafe.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Enigma-Cafe-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = 'Enigma Café';
        
        exhibitDescription1.innerText = 'Sit down and enjoy one of the many mathematical puzzles on the menu.';
    });
    
    
    //feedback fractals
    var feedbackFractals = document.getElementById('feedback-fractals');

    feedbackFractals.addEventListener('mouseover', function() {
        feedbackFractals.src = 'images/feedback-fractals-hover.png';
        feedbackFractals.style.cursor = 'pointer';
    });
    
    feedbackFractals.addEventListener('mouseout', function() {
        feedbackFractals.src = 'images/feedback-fractals.png';
    });
    
    feedbackFractals.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Feedback-Fractals-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = 'Feedback Fractals';
        
        exhibitDescription1.innerText = 'Move the three cameras, zoom in and out, and apply different color filters to create an amazing variety of fractal patterns using a video feedback loop.';
    });
    
    
    //finding fifteen
    var findingFifteen = document.getElementById('finding-fifteen');

    findingFifteen.addEventListener('mouseover', function() {
        findingFifteen.src = 'images/finding-fifteen-hover.png';
        findingFifteen.style.cursor = 'pointer';
    });
    
    findingFifteen.addEventListener('mouseout', function() {
        findingFifteen.src = 'images/finding-fifteen.png';
    });
    
    findingFifteen.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Finding-Fifteen-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = 'Finding Fifteen';
        
        exhibitDescription1.innerText = 'Use simple arithmetic to find a winning strategy in this head-to-head game, then learn its hidden yet simple secret.';
    });
    
    
    //harmony of the spheres
    var harmonyOfTheSpheres = document.getElementById('harmony-of-the-spheres');

    harmonyOfTheSpheres.addEventListener('mouseover', function() {
        harmonyOfTheSpheres.src = 'images/harmony-of-the-spheres-hover.png';
        harmonyOfTheSpheres.style.cursor = 'pointer';
    });
    
    harmonyOfTheSpheres.addEventListener('mouseout', function() {
        harmonyOfTheSpheres.src = 'images/harmony-of-the-spheres.png';
    });
    
    harmonyOfTheSpheres.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Harmony-of-the-Spheres-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = 'Harmony of the Spheres';
        
        exhibitDescription1.innerText = 'Create a harmonic soundscape using this interactive musical sculpture, which takes its shape from the symmetries of the 12-tone musical scale.';
    });
    
    
    //human tree
    var humanTree = document.getElementById('human-tree');

    humanTree.addEventListener('mouseover', function() {
        humanTree.src = 'images/human-tree-hover.png';
        humanTree.style.cursor = 'pointer';
    });
    
    humanTree.addEventListener('mouseout', function() {
        humanTree.src = 'images/human-tree.png';
    });
    
    humanTree.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Human-Tree-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = 'Human Tree';
        
        exhibitDescription1.innerText = 'See successively smaller copies of yourself combined to make a dynamic fractal tree that sways in response to your motion.';
    });
    
    
    //in plane sight
    var inPlaneSight = document.getElementById('in-plane-sight');

    inPlaneSight.addEventListener('mouseover', function() {
        inPlaneSight.src = 'images/in-plane-sight-hover.png';
        inPlaneSight.style.cursor = 'pointer';
    });
    
    inPlaneSight.addEventListener('mouseout', function() {
        inPlaneSight.src = 'images/in-plane-sight.png';
    });
    
    inPlaneSight.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/In-Plane-Sight-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = 'In Plane Sight';
        
        exhibitDescription1.innerText = 'Use cross-sections to figure out the shape of an invisible solid.';
    });
    
    
    //math square
    var mathSquare = document.getElementById('math-square');

    mathSquare.addEventListener('mouseover', function() {
        mathSquare.src = 'images/math-square-hover.png';
        mathSquare.style.cursor = 'pointer';
    });
    
    mathSquare.addEventListener('mouseout', function() {
        mathSquare.src = 'images/math-square.png';
    });
    
    mathSquare.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Math-Square-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = 'Math Square';
        
        exhibitDescription1.innerText = 'Step into the world of mathematical games, controlled by the movement of your feet.';
    });
    
    
    //mind over measure
    var mindOverMeasure = document.getElementById('mind-over-measure');

    mindOverMeasure.addEventListener('mouseover', function() {
        mindOverMeasure.src = 'images/mind-over-measure-hover.png';
        mindOverMeasure.style.cursor = 'pointer';
    });
    
    mindOverMeasure.addEventListener('mouseout', function() {
        mindOverMeasure.src = 'images/mind-over-measure.png';
    });
    
    mindOverMeasure.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Mind-Over-Measure-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = 'Mind Over Measure';
        
        exhibitDescription1.innerText = 'Move balls from one canister to another, or fill or empty canisters, as you try to solve a challenging range of classic water-pouring puzzles.';
    });
    
    
    //monkey around
    var monkeyAround = document.getElementById('monkey-around');

    monkeyAround.addEventListener('mouseover', function() {
        monkeyAround.src = 'images/monkey-around-hover.png';
        monkeyAround.style.cursor = 'pointer';
    });
    
    monkeyAround.addEventListener('mouseout', function() {
        monkeyAround.src = 'images/monkey-around.png';
    });
    
    monkeyAround.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Monkey-Around-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = 'Monkey Around';
        
        exhibitDescription1.innerText = 'Count the monkeys, turn the handle, and count again — what happened?';
    });
    
    
    //rhythms of life
    var rhythmsOfLife = document.getElementById('rhythms-of-life');

    rhythmsOfLife.addEventListener('mouseover', function() {
        rhythmsOfLife.src = 'images/rhythms-of-life-hover.png';
        rhythmsOfLife.style.cursor = 'pointer';
    });
    
    rhythmsOfLife.addEventListener('mouseout', function() {
        rhythmsOfLife.src = 'images/rhythms-of-life.png';
    });
    
    rhythmsOfLife.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Rhythms-of-Life-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = 'Rhythms of Life';
        
        exhibitDescription1.innerText = 'Piece together fractions to fill circular disks, which you can play as musical rhythms using an unusual selection of sounds.';
    });
    
    
    //robot swarm
    var robotSwarm = document.getElementById('robot-swarm');

    robotSwarm.addEventListener('mouseover', function() {
        robotSwarm.src = 'images/robot-swarm-hover.png';
        robotSwarm.style.cursor = 'pointer';
    });
    
    robotSwarm.addEventListener('mouseout', function() {
        robotSwarm.src = 'images/robot-swarm.png';
    });
    
    robotSwarm.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Robot-Swarm-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = 'Robot Swarm';
        
        exhibitDescription1.innerText = 'Interact with dozens of small, glowing robots who react to your presence and one another, generating lifelike behavior from simple mathematical rules.';
    });
    
    
    //shape ranger
    var shapeRanger = document.getElementById('shape-ranger');

    shapeRanger.addEventListener('mouseover', function() {
        shapeRanger.src = 'images/shape-ranger-hover.png';
        shapeRanger.style.cursor = 'pointer';
    });
    
    shapeRanger.addEventListener('mouseout', function() {
        shapeRanger.src = 'images/shape-ranger.png';
    });
    
    shapeRanger.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Shape-Ranger-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = 'Shape Ranger';
        
        exhibitDescription1.innerText = 'Arrange tile shapes inside various boundaries to try to set a MoMath record.';
    });
    
    
    //sixth sense
    var sixthSense = document.getElementById('sixth-sense');

    sixthSense.addEventListener('mouseover', function() {
        sixthSense.src = 'images/sixth-sense-hover.png';
        sixthSense.style.cursor = 'pointer';
    });
    
    sixthSense.addEventListener('mouseout', function() {
        sixthSense.src = 'images/sixth-sense.png';
    });
    
    sixthSense.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Sixth-Sense-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = 'Sixth Sense';
        
        exhibitDescription1.innerText = 'Choose six numbers and see how the machine predicted what their sum would be before the first number was even chosen.';
    });
    
    
    //string product
    var stringProduct1 = document.getElementById('string-product-1');

    stringProduct1.addEventListener('mouseover', function() {
        stringProduct1.src = 'images/string-product-1-hover.png';
        stringProduct1.style.cursor = 'pointer';
    });
    
    stringProduct1.addEventListener('mouseout', function() {
        stringProduct1.src = 'images/string-product-1.png';
    });
    
    stringProduct1.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/String-Product-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = 'String Product';
        
        exhibitDescription1.innerText = 'Light up the line connecting two numbers on a special curve called a parabola, and see how it crosses the center pole exactly at the product of those two numbers.';
    });
    
    
    //tessellation station
    var tessellationStation = document.getElementById('tessellation-station');

    tessellationStation.addEventListener('mouseover', function() {
        tessellationStation.src = 'images/tessellation-station-hover.png';
        tessellationStation.style.cursor = 'pointer';
    });
    
    tessellationStation.addEventListener('mouseout', function() {
        tessellationStation.src = 'images/tessellation-station.png';
    });
    
    tessellationStation.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Tessellation-Station-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = 'Tessellation Station';
        
        exhibitDescription1.innerText = 'No description available.';
    });
    
    
    //tile factory
    var tileFactory = document.getElementById('tile-factory');

    tileFactory.addEventListener('mouseover', function() {
        tileFactory.src = 'images/tile-factory-hover.png';
        tileFactory.style.cursor = 'pointer';
    });
    
    tileFactory.addEventListener('mouseout', function() {
        tileFactory.src = 'images/tile-factory.png';
    });
    
    tileFactory.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Tile-Factory-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = 'Tile Factory';
        
        exhibitDescription1.innerText = 'No description available.';
    });
    
    
    //time tables
    var timeTables = document.getElementById('time-tables');

    timeTables.addEventListener('mouseover', function() {
        timeTables.src = 'images/time-tables-hover.png';
        timeTables.style.cursor = 'pointer';
    });
    
    timeTables.addEventListener('mouseout', function() {
        timeTables.src = 'images/time-tables.png';
    });
    
    timeTables.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Time-Tables-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = 'Time Tables';
        
        exhibitDescription1.innerText = 'Puzzle over Pythagoras, rotate a bird to explore geometric transformations, and decipher messages using a WWII-era encryption machine.';
    });
    
    
    //twist 'n' roll
    var twistNRoll = document.getElementById('twist-n-roll');

    twistNRoll.addEventListener('mouseover', function() {
        twistNRoll.src = 'images/twist-n-roll-hover.png';
        twistNRoll.style.cursor = 'pointer';
    });
    
    twistNRoll.addEventListener('mouseout', function() {
        twistNRoll.src = 'images/twist-n-roll.png';
    });
    
    twistNRoll.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Twist-N-Roll-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = "Twist 'n' Roll";
        
        exhibitDescription1.innerText = 'Twist these shapes apart and change how they fit together to make dramatic changes in how they roll.';
    });
    
    
    //wall of fire
    var wallOfFire = document.getElementById('wall-of-fire');

    wallOfFire.addEventListener('mouseover', function() {
        wallOfFire.src = 'images/wall-of-fire-hover.png';
        wallOfFire.style.cursor = 'pointer';
    });
    
    wallOfFire.addEventListener('mouseout', function() {
        wallOfFire.src = 'images/wall-of-fire.png';
    });
    
    wallOfFire.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Wall-of-Fire-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = "Wall of Fire";
        
        exhibitDescription1.innerText = 'Highlight the sometimes-surprising cross-sections of different objects by using a plane of laser light to cut through their surfaces.';
    });
    
    
    //water frieze
    var waterFrieze = document.getElementById('water-frieze');

    waterFrieze.addEventListener('mouseover', function() {
        waterFrieze.src = 'images/water-frieze-hover.png';
        waterFrieze.style.cursor = 'pointer';
    });
    
    waterFrieze.addEventListener('mouseout', function() {
        waterFrieze.src = 'images/water-frieze.png';
    });
    
    waterFrieze.addEventListener('click', function() {
        exhibitDescriptionIcon1.src = 'images/Water-Frieze-Icon.jpg';
        
        exhibitDescriptionHeader1.innerText = "Water Frieze";
        
        exhibitDescription1.innerText = 'No description available.';
    });
    
    
    
    //home page image scroll
    var homeMainImages = document.getElementsByClassName('home-main-image');
    
    var homeMainImage1 = document.getElementById('home-main-image-1');
    
    function scrollHomeImages() {
        var oldRight = parseInt(homeMainImage1.style.right);
        
        var newRight = oldRight + 1;
        
        homeMainImage1.style.right = newRight + 'px';
    };
    
    window.setInterval(scrollHomeImages, 100);
});




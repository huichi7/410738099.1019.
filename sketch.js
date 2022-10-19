function setup() {
  createCanvas(windowWidth, windowHeight);
}
var x = 25
var y = 25
function draw(){
    background("#005AB5");
    strokeWeight(4)
    noFill()
    stroke("#AE0000")
    ellipse(x,y,50)
    rectMode(CENTER)
    rect(50,20,50)
    ellipse(25,50,25)
}
function draw() {
background("#336666");  
noFill()
stroke(255)  
ellipse(25,25,50)  
rectMode(CENTER)
rect(25,25,50) 
ellipse(50,50,20)
strokeWeight(8)
//for(var i=0;i<8;i++){
        //ellipse(25+(i*50),25,50)        
       // rect(25+(i*50),25,50)
       // ellipse(50+(i*50),50,20) 
	//for(var j=-1;j<2;j++){ 
      //ellipse(25+(i*50),25+(j*50),50)
       // rect(25+(i*50),25+(j*50),50)
       // ellipse(50+(i*50),50+(j*50),20) 
//	}
  //  }	
	for(var j=-1;j<int(height/(50));j++){
    for(var i=-1;i<int(width/(50));i++){		
        ellipse(25+(i*50),25+(j*50),50+mouseX/10)
			stroke("#005AB5")
        rect(25+(i*50),25+(j*50),50)
			stroke("#AE0000")
        ellipse(50+(i*50),50+(j*50),20+mouseY/5) 
			stroke(255)
    }    
  }
}


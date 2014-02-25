#pragma strict
//reference to the bomb prefab.  We will
//drag the bomb prefab into this slot
var bombToGenerate1:Rigidbody;



function makeBomb()
{
	//y position
	var ypos:int;
	
	//x position
	var xpos:float;
	
	//y position is the top of the screen
	ypos = 5;
	
	//x position should be random between the left most and the right most
	xpos = Random.Range(-1.5,1.5);
	
	//to create 1 bomb
	Instantiate(bombToGenerate1,Vector3(xpos,ypos,0),Quaternion.identity);
	
	
}



function Start () {
	//this will create one bomb
	//makeBomb();
	
	//this will create one bomb after a second and 
	//a bomb every 0.5 seconds after that
	InvokeRepeating("makeBomb",1.0,0.5);
}

function Update () {

}
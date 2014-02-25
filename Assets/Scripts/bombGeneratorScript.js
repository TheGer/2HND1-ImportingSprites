#pragma strict
//reference to the bomb prefab.  We will
//drag the bomb prefab into this slot
var bombToGenerate1:Rigidbody;
var bombToGenerate2:Rigidbody;
var bombToGenerate3:Rigidbody;
var bombToGenerate4:Rigidbody;



function makeBomb()
{
	//random number to choose bomb
	var whichbomb:int;
	
	//y position
	var ypos:int;
	
	//x position
	var xpos:float;
	
	//y position is the top of the screen
	ypos = 5;
	
	//x position should be random between the left most and the right most
	xpos = Random.Range(-1.5,1.5);
	
	//range from 1-4
	whichbomb = Random.Range(1,5);
	
	//to create 1 bomb
	if (whichbomb == 1)
	{
		Instantiate(bombToGenerate1,Vector3(xpos,ypos,0),Quaternion.identity);
	}
	
	if (whichbomb == 2)
	{
		Instantiate(bombToGenerate2,Vector3(xpos,ypos,0),Quaternion.identity);
	}
	
	if (whichbomb == 3)
	{
		Instantiate(bombToGenerate3,Vector3(xpos,ypos,0),Quaternion.identity);
	}
	
	if (whichbomb == 4)
	{
		Instantiate(bombToGenerate4,Vector3(xpos,ypos,0),Quaternion.identity);
	}
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
#pragma strict
var barSpeed:int;

//string
//int
//float

var score:int;

function OnTriggerEnter(bomb:Collider)
{
	//this is the code that happens when the bomb hits the paddle
	if (bomb.gameObject.tag == "cherry")
	{
		//increment score by 15
		score = score + 15;
	
	}
	//remove the bomb
	Destroy(bomb.gameObject);

}



function Start () {
	//reset score to 0
	score = 0;
	yield playForThirtySeconds();
	
}

function OnGUI()
{
	//show the score on the top left corner of the screen.	
	GUI.Label(Rect(5,5,100,20),"Score: "+score);
}



function playForThirtySeconds ()
{
	yield WaitForSeconds(30);
	//after 30 seconds go back to the menu scene
	Application.LoadLevel(0);
}


function Update () {

	//control the stripy bar using the mouse
	transform.position.x = Camera.main.ScreenToWorldPoint(Input.mousePosition).x;
	
}
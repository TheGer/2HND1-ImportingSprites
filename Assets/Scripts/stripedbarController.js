#pragma strict
var barSpeed:int;


function Start () {
	yield playForThirtySeconds();
	
}

function OnGUI()
{
	//show the score on the top left corner of the screen.
}



function playForThirtySeconds ()
{
	yield WaitForSeconds(30);
	//after 30 seconds go back to the menu scene
	Application.LoadLevel(0);
}


function Update () {

	//control the stripy bar using the arrow keys
	transform.Translate(Vector3.right * barSpeed * Input.GetAxis("Horizontal") * Time.deltaTime);

}
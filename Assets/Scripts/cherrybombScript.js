#pragma strict

function OnBecameInvisible()
{
	//delete the cherry if it goes off screen
	Destroy(this.gameObject);
}


function Start () {

}

function Update () {

}
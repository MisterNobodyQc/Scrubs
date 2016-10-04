
module.exports.loop = function () {

//Determine wich creep you need

// var body="[WORK, CARRY, MOVE]";
// var role="{role: 'harvester'}";

// Determine if you can create a creep 

if(Spawn1.canCreateCreep([WORK, CARRY, MOVE], null) == OK) {
	//Create a creep
	Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE], null, {role: 'harvester'});
}

}


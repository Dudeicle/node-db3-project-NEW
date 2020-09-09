const db = require("../data/db-config.js");

module.exports = {
	getSchemes,
	getSchemeByID,
	getSchemeStepsByID,
	addScheme,
	addSchemeSteps,
	updateScheme,
	deleteScheme,
};

function getSchemes() {
	return db("schemes");
} // WORKING

function getSchemeByID(id) {
	return db("schemes").where("id", "=", id);
} // WORKING

function getSchemeStepsByID(id) {
	return db("steps").where("scheme_id", "=", id);
} // WORKING

function addScheme(scheme) {
	return db("schemes").insert(scheme);
} // WORKING

function addSchemeSteps(stepData, id) {
	return db("steps").insert(stepData).where("id", "=", id);
} // WORKING

function updateScheme(changes, id) {
	return db("schemes").update(changes).where("id", "=", id);
} // WORKING

function deleteScheme(id) {
	return db("schemes").where("id", "=", id).del();
} // WORKING

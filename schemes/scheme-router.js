const express = require("express");

const Schemes = require("./scheme-model.js");

const router = express.Router();

router.get("/", (req, res) => {
	Schemes.getSchemes()
		.then((schemes) => {
			res.json(schemes);
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to get schemes" });
		});
}); // WORKING

router.get("/:id", (req, res) => {
	const { id } = req.params;

	Schemes.getSchemeByID(id)
		.then((scheme) => {
			if (scheme) {
				res.json(scheme);
			} else {
				res.status(404).json({ message: "Could not find scheme with given id." });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to get schemes" });
		});
}); // WORKING

router.get("/:id/steps", (req, res) => {
	const { id } = req.params;

	Schemes.getSchemeStepsByID(id)
		.then((steps) => {
			if (steps.length) {
				res.json(steps);
			} else {
				res.status(404).json({ message: "Could not find steps for given scheme" });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to get steps" });
		});
}); // WORKING

router.post("/", (req, res) => {
	const schemeData = req.body;

	Schemes.addScheme(schemeData)
		.then((scheme) => {
			res.status(201).json(scheme);
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to create new scheme" });
		});
}); // WORKING

router.post("/:id/steps", (req, res) => {
	const stepData = req.body;
	const { id } = req.params;

	Schemes.getSchemeByID(id)
		.then((scheme) => {
			if (scheme) {
				Schemes.addSchemeSteps(stepData, id).then((step) => {
					res.status(201).json(step);
				});
			} else {
				res.status(404).json({ message: "Could not find scheme with given id." });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to create new step" });
		});
}); // WORKING

router.put("/:id", (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	Schemes.getSchemeByID(id)
		.then((scheme) => {
			if (scheme) {
				Schemes.updateScheme(changes, id).then((updatedScheme) => {
					res.json(updatedScheme);
				});
			} else {
				res.status(404).json({ message: "Could not find scheme with given id" });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to update scheme" });
		});
}); // WORKING

router.delete("/:id", (req, res) => {
	const { id } = req.params;

	Schemes.deleteScheme(id)
		.then((deleted) => {
			if (deleted) {
				res.json({ removed: deleted });
			} else {
				res.status(404).json({ message: "Could not find scheme with given id" });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to delete scheme" });
		});
}); // WORKING

module.exports = router;

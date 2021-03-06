const express = require("express");
const router = express.Router();

//logic methods:
const logic = require("../logic/index");

//get client by Id:
router.get("/id=:id", async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    if (!id) {
      res.status(400).send({ error: "Bad request or invalid id" });
      return;
    }

    let client = await logic.findClientById(id);

    if (!client) {
      res.status(404).send({ error: "Client not found!" });
      return;
    }

    res.status(200).json({ client });
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

//get client by name:
router.get("/name=:name", async (req, res) => {
  const {
    params: { name }
  } = req;

  try {
    if (!name) {
      res.status(400).send({ error: "Bad request or invalid name" });
      return;
    }

    let client = await logic.findClientByName(name);

    if (!client) {
      res.status(404).send({ error: "Client not found!" });
      return;
    }

    res.status(200).json({ client });
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

module.exports = router;

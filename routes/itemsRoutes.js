const authenticateToken = require("../middlewares/authenticateToken");

const router = require("express").Router();
const items = [];
router.get("/", async (request, response) => {
  return response.status(200).json({ data: items });
});

router.get("/:id", async (request, response) => {
  const foundItem = items.find((obj) => obj.id === Number(request.params.id));

  if (!foundItem) {
    return response.status(404).json({ message: "Item not found" });
  }
  return response.status(200).json({ data: foundItem });
});

router.post("/", authenticateToken, async (request, response) => {
  const obj = {
    id: items.length + 1,
    name: request.body.name,
  };

  items.push(obj);

  return response.status(201).json({ message: "Successfully added new item." });
});

module.exports = router;

function post(path, ...args) {}

import express from "express";
import Yugi from "../db/yugi.mjs";

const router = express.Router();

router.post("/", async (req, res) => {
  const newCard = await Yugi.create(req.body);
  res.json(newCard);
});

router.get("/", async (req, res) => {
  const card = await Yugi.find();
  res.json(card);
});

router.get("/:id", async (req, res) => {
  const yugi = await Yugi.findById(req.params.id);
  res.json(yugi);
});

router.put("/:id", async (req, res) => {
  const yugi = await Yugi.findByIdAndUpdate(req.params.id, req.body);
  res.json(Yugi);
});

router.delete("/:id", async (req, res) => {
  const yugi = await Yugi.findByIdAndDelete(req.params.id);
  res.json("deleted");
});

export default router;
import express from "express";
import { 
  getEquips, 
  getTotalEquips,
  getWithFilter,
  getWithFilterOS,
  addOrdem,
  addEquip, 
  updateEquip, 
  updateOS,
  deleteEquip,
  getOrdens,
  getTotalOS,
  deleteOrdem
} from "../controllers/queries.js";

const router = express.Router();

router.get("/ordens/get/:abertura.:unidade.:equipamento.:marca.:modelo.:setor.:patrimonio.:tecnico.:limit.:offset", getWithFilterOS);

router.get("/equipamentos/:nome.:setor.:marca.:modelo.:patrimonio.:serie.:limit.:offset", getWithFilter);

router.get("/:limit/:offset", getEquips);

router.get("/equipamento", getTotalEquips);

router.get("/ordens/:limit/:offset", getOrdens);

router.get("/ordens", getTotalOS);

router.post("/criarOrdem", addOrdem);

router.post("/", addEquip);

router.put("/:id", updateEquip);

router.put("/ordem/:id", updateOS);

router.delete("/:id", deleteEquip);

router.delete("/ordem/:id", deleteOrdem);

export default router;

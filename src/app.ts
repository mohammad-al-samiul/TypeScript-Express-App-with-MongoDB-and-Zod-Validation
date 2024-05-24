import { Request, Response } from "express";

import express from "express";
import { ProductRoutes } from "./app/config/modules/product/product.route";
import { OrderRoutes } from "./app/config/modules/orders/order.route";
const app = express();
//parser
app.use(express.json());

app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;

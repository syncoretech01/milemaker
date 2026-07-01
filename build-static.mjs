import { copyFile, cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

await copyFile(path.join(root, "MileMaker.dc.html"), path.join(dist, "index.html"));
await copyFile(path.join(root, "MileMaker.dc.html"), path.join(dist, "MileMaker.dc.html"));
await copyFile(path.join(root, "Chrome.dc.html"), path.join(dist, "Chrome.dc.html"));
await copyFile(path.join(root, "support.js"), path.join(dist, "support.js"));
await cp(path.join(root, "screenshots"), path.join(dist, "screenshots"), { recursive: true });


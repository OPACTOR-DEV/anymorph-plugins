import { cpSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The skill is written once; the plugin folder and the Gemini CLI context file are copies of it.
const skill = readFileSync("skills/anymorph/SKILL.md", "utf8");
mkdirSync("plugins/anymorph/skills/anymorph", { recursive: true });
cpSync("skills/anymorph/SKILL.md", "plugins/anymorph/skills/anymorph/SKILL.md");
writeFileSync("GEMINI.md", skill.replace(/^---\n[\s\S]*?\n---\n\n/u, ""));

# Anymorph plugins

Plugins that connect AI agents to your [Anymorph](https://anymorph.ai) workspace: AI visibility and mention rates by engine, the AI answers and the sources they cite, tracked prompts, competitors, pages and traffic, CSV exports for reports, and changes to prompts and pages where your workspace allows them.

Every client talks to the remote MCP server `https://mcp.anymorph.ai`. The first time the agent uses it, your browser opens the Anymorph sign-in page; choose the workspaces and permissions to allow, and the agent is connected. Workspace admins turn the server and changes from AI apps on or off in **Settings > Integrations** on the Anymorph dashboard, where you can also see and disconnect connected apps.

## Install

Claude Code:

```bash
claude plugin marketplace add OPACTOR-DEV/anymorph-plugins
claude plugin install anymorph@anymorph
```

Then run `/mcp` and choose Authenticate for `anymorph`.

Codex:

```bash
codex plugin marketplace add OPACTOR-DEV/anymorph-plugins
codex plugin add anymorph@anymorph
codex mcp login anymorph
```

The last command opens the sign-in page in your browser.

Cursor:

```bash
cursor-agent plugin marketplace add https://github.com/OPACTOR-DEV/anymorph-plugins
```

Then open `/plugins` in Cursor Agent and install `anymorph`, and sign in from `/mcp` by choosing Anymorph and Login.

Gemini CLI:

```bash
gemini extensions install https://github.com/OPACTOR-DEV/anymorph-plugins
```

Then run `/mcp auth anymorph`.

Any other MCP client, such as Claude, ChatGPT or Cursor without the plugin: add a remote MCP server at `https://mcp.anymorph.ai`. Clients that support MCP authorization sign in on their own. Agents that read Agent Skills can use [skills/anymorph/SKILL.md](skills/anymorph/SKILL.md).

## Layout

- `plugins/anymorph/`: the plugin for Claude Code, Codex and Cursor (manifests, MCP config, skill, icons).
- `gemini-extension.json`, `GEMINI.md`: the Gemini CLI extension at the repository root.
- `skills/anymorph/`: the skill, copied into `plugins/anymorph/skills/` and `GEMINI.md` by `node scripts/sync-skill.mjs`.

Guide: https://docs.anymorph.ai/ai-agents/coding-agents. License: MIT.

---
name: anymorph
description: Read and act on an Anymorph workspace through the Anymorph MCP tools. AI visibility and mention rates by engine, the AI answers and the sources they cite, tracked prompts, competitors, pages and traffic, CSV exports for reports, and changes to prompts and pages where the workspace allows them. Use when the user asks about their brand's AI visibility, citations, prompts or pages in Anymorph, wants Anymorph data in a spreadsheet, or wants to edit, publish or take down an Anymorph page.
---

# Anymorph

Anymorph measures how AI answer engines (ChatGPT, Gemini, Perplexity, Google AI Overviews and others) mention and cite a brand, and runs the brand's GEO pages. The tools come from the `anymorph` MCP server at `https://mcp.anymorph.ai`, which connects by signing in to Anymorph and choosing the workspaces and permissions the agent may use.

## Pick the tool

- Start with `list_workspaces`. Every other tool takes one of its workspace ids, or a page id.
- Overall AI visibility: `get_visibility_dashboard` for mention rate, share of voice and counts by engine, and `get_visibility_trend` for the daily rate.
- Prompts the brand loses, and to whom: `get_prompt_visibility`.
- Whether a difference is real: `compare_answer_rates`, which gives counts and a 95% interval for each group.
- Sources AI answers cite: `get_citation_domains`, `get_citation_timeseries` and `get_citation_intelligence`.
- Rows behind the numbers: `query_dataset` with `ai_responses` (answers), `citations` (cited sources), `prompts`, `competitors`, `pages` or `page_traffic`. `get_data_catalog` and `describe_dataset` list the datasets and their filters.
- The data in a spreadsheet or a report: `export_dataset` with the same dataset, filters and period. It returns a link to a CSV file that works for one hour; give the link to the user unchanged. For a long period, export one week or one month at a time.
- Pages: `list_managed_pages`, `get_page`, `get_page_content` and `get_page_visibility`.
- Outside research: `web_search`, `web_scrape`, `search_keywords` and the Search Console tools. They need the research permission, cost money and allow 200 calls a day.

## Changes

- Change tools such as `manage_prompt`, `edit_managed_page`, `update_page_content`, `publish_page` and `unpublish_page` appear only when a workspace admin turned on changes from AI apps and the user allowed changes when connecting.
- A change that reaches the live site or spends budget first answers `confirmRequired` with a preview. Show the preview, and call again with the `confirmToken` only after the user explicitly agrees. Never confirm on their behalf.

## Working rules

- Answer from the workspace's own records before the outside research tools.
- A refusal names the setting or permission that stopped the call. Tell the user what it says instead of retrying.
- Use the dashboard's terms (AI visibility, mentions, citations, prompts, pages) and show ids only when the user asks.
- If the `anymorph` tools are missing or a call says the server needs authentication, ask the user to sign in: `/mcp` in Claude Code, `codex mcp login anymorph` in Codex, `/mcp auth anymorph` in Gemini CLI, or Login on Anymorph under `/mcp` in Cursor.
- Guide: https://docs.anymorph.ai/ai-agents/overview

# PRD — Anushka Saha × Conduct (Communications Strategist work-sample site)

## Original problem statement
Build from scratch a personal portfolio / work-sample website for Anushka Saha's application to Conduct's Communications Strategist role (London/NYC). Not a CV, not a SaaS page — an editorial digital-zine that DEMONSTRATES the JD's asks (generalist, writer, builder, community, execution) through her real artefacts: 70K Wattpad community, press-on nail experiment, supper club, and the Conduct Growth Operating System (https://conduct-growth-os.vercel.app/), ending in the Conduct 3rd-anniversary experiment (8 Jan 2027) and a mailto CTA (Anushkabsaha@gmail.com).

## User personas
- Primary: Conduct founders/hiring team evaluating if Anushka can do the job.
- Secondary: Anushka iterating on her own narrative.

## Architecture
- Frontend-only React SPA (single long editorial page, anchor nav). Backend template left untouched (only /api health used).
- Stack: React 19 + Tailwind + framer-motion (reveals, masked hero, accordions) + lenis (smooth scroll).
- Design system: ink #16100B base, linen #F9E8D4 paper sections, tangelo #D54C15 primary accent, botticelli #8DB6C7 sparing secondary, chocolate #663924 depth sections. Anton display / Instrument Serif italic / Space Mono.
- Real user assets only: nail illustration, supper-club Polaroid, anniversary invitation reference (recreated in CSS).
- Sections (v2 order): Hero ("slightly annoying habit") → orange question marquee → Evidence wall (70K readers, 37→7 escalations, £17K found, £50K deal, Growth OS, 6 agents) → Growth OS ("I didn't wait for a comms brief", stats, outsider test framed as observation/hypothesis, Black Box questions, understanding→memory→curiosity→action) → Instinct ("If I were there, what would I do differently?" problem/instinct/test/learn/next cards + observe→repeat loop) → Opportunity Radar (9 categories × why/who/make/where/measure) → Same product different person (6 audience tabs) + Product×Comms (pipeline + engineer/CIO/customer lenses) + One story → 10 outputs → Writing (before/after edit demo, labelled demonstration copy; 3 samples) → Live Agent Desk (sidebar views: Today/Ana, Content, Product/Edith checklist, Opportunities/Catherine, Challenge/Diana; info-flow pipeline; operator framing + demo disclaimer) → Ops (week board, filming multiplier, realistic day timeline) → Personal community story (Wattpad/nails/supper club, condensed, real images) → dark loop marquee → Anniversary experiment → Firsts (empty editorial archive, honest placeholders) → Dinner (invitation + conversation cards) → understated Final + mailto.

## Implemented (2026-10-06)
- v1: full site per original narrative arc; all real Growth OS figures; interactive reveals; SVG mark + favicon; marquees; grain; dark↔paper rhythm. Verified at 375/768/1366.
- v2 (same day): full restructure per refinement brief — personality-first hero, evidence wall, Growth OS moved early, "if I were there" section, category-based radar, audience translation tabs, editing demonstration, live agent desk with working interactions (Ana filter reasoning, Yes/Not-yet reply, Catherine investigate/park, Diana kill-test, Edith checklist), week board + filming multiplier, realistic day timeline, condensed personal story, anniversary late with conversation cards and empty Firsts archive. All interactions Playwright-verified.
- v3 (same day): the real "operating layer" diagram from the OS added to the desk section as a framed artefact; agent roster titles and Ana/Catherine descriptions aligned word-for-word with the diagram.
- v4 (same day): the "why" layer — new sections WhyRole (why this role: communication/community/movement; why Conduct, personal; "I haven't had the title, I've been doing the work"; role↔me translation table; "making things move"; overlap diagram) and Scenarios ("If I were there…", 3 Conduct scenarios, tabbed). Agent desk rebuilt with scripted live activity (Substack edit exchange, Edith customer-story thread with 9/14 checklist, Diana challenger exchange), 8 sidebar views, judgement strip (observe → agents find signal → Anushka questions → agents challenge → Anushka calls → execute → measure → learn → repeat), architecture exhibit moved after the live desk. GrowthOS reframed ("I wasn't given a brief. I was curious. So I built one.") with why-I-built-it block; Black Box ladder now Understand/Remember/Care/Act. PersonalStory gains world/voice/belonging + closing triad. Final section rewritten quiet-confident. All views + interactions Playwright-verified.

## Hard rules (from user — do not break)
- Name: Anushka Saha. Agent names fixed: Ana, Agatha, Berdine, Catherine, Diana, Edith. No new agents, no "AI employees" framing.
- Never invent Conduct employees, quotes, metrics, events. Use labelled placeholders.
- Keep 70K Wattpad figure; keep Conduct OS figures exact; anniversary = 8 Jan 2027, Conduct London HQ.
- No "Conduct Lounge". Real Polaroid only, no AI imagery. Nail section stays playful but truthful (experiment ended; story was the product).
- Palette is a design system, not content.

## Backlog
- P0: none blocking.
- P1: swap in the real Lovable screen-recording reference details if Anushka shares it; add real nail photographs if supplied; anchor-scroll offset polish under fixed nav.
- P2: OG/share image; print stylesheet; subtle cursor treatment; case-study deep-links per artefact.

## Next tasks
1. Collect any missing real assets (more nail photos, Founder POV samples).
2. Add per-section share/OG metadata.
3. Deploy when Anushka is happy with preview.

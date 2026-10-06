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
- Sections: Hero → Marquee → Built (+Wattpad) → Nails (interactive) → Supper Club → Growth OS (stats, outsider test, exhibits: SAP Score/Black Box/90 Days/Edith checklist) → Comms Loop stepper → Opportunity Radar (interactive) → Product × Comms → Content Engine → Day in my Life → Agents (interactive, Ana/Agatha/Berdine/Catherine/Diana/Edith, Anushka = operator) → Writing samples → Community → Founder comms → Employer brand → Integrated campaigns → Anniversary experiment → Meet the Conduct Firsts (honest placeholders) → Anniversary Dinner (CSS invitation) → Final + mailto.

## Implemented (2026-10-06)
- Full site per narrative arc above; all real Growth OS figures (38 posts, 7,079 likes, 1,045 comments, 251 reposts, ~8,375 interactions, 10 people / five posts outsider test).
- All interactive reveals verified: nails hover/click, radar, agents, OS exhibits, loop stepper.
- SVG ascending-bars logo mark + favicon; two editorial marquees; grain overlay; dark↔paper zine rhythm.
- Verified: backend /api health OK; screenshots at 375/768/1366; interaction clicks verified via Playwright.

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

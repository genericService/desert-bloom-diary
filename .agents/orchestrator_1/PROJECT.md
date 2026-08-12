# Project: Desert Bloom Diary Character Lore & Web Integration

## Architecture
- Character documentation: Markdown files in `docs/character/`
- Data layer: TypeScript file `src/data/diaryEntries.ts`
- Type system: `src/types/index.ts`
- Web pages: Next.js pages in `src/app/`

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Maya's Hobbies | Sonoran botanical watercolor sketching, vintage pottery hunting at East Valley thrift shops, iced ginger-lemon herbal teas | M1, M2 | R1 |
| 2 | Alex's Hobbies | Home automation enthusiast (smart thermostat wars in 109° heat), manual espresso brewing, desert mountain trail biking | M1, M2 | R1 |
| 3 | Shared Interests & Date Spots | Kiwanis Park lake picnics, Valley Art Theater on Mill Ave, late-night Mesa taco trucks, College Ave citrus walks | M1, M2 | R1 |
| 4 | Pet Peeves | 115° car steering wheel burns, client scope creep on freelance design deadlines, Alex leaving coffee mugs on drafting table, Cholla stealing clean laundry socks | M1, M2 | R1 |
| 5 | Cholla Rescue Dog Lore | Desert wheat tan rescue mix, origin story, nudging open bathroom doors, resting chin on bump, stealing laundry socks | M1, M2 | R1 |
| 6 | Recurring Domestic & Career Drama | Thermostat battles in summer, assembling IKEA nursery drawers without instructions, client deadlines vs Alex's late-night software engineering on-call pages | M1, M2 | R1 |
| 7 | Zero Em Dashes Rule | Absolutely zero em dashes (—) anywhere in docs or code | M1, M2 | R2 |
| 8 | Contemporaneous Consistency | Zero future knowledge, natural self-conscious journaling apologies | M1, M2 | R2 |
| 9 | Grounded Couple Dynamics | Realistic bickering, heat/expense/deadline stress, natural resolutions (making coffee, "sorry I snapped", quiet hugs). Absolutely NO therapy talk (no "holding space", "validating boundaries", "processing triggers", "emotional labor") | M1, M2 | Follow-up |
| 10 | Build & Quality Verification | `pnpm build` passes with zero errors | M3 | Acceptance Criteria |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Docs Lore Expansion | Expand character docs in `docs/character/` (01, 02, 03, 04) | Survey | DONE |
| M2 | Diary Entries Web Integration | Update `src/data/diaryEntries.ts` with new lore | M1 | IN_PROGRESS |
| M3 | Gate & Build Verification | Review, challenge, audit, and run `pnpm build` | M2 | PLANNED |

## Code Layout
- `docs/character/01_maya_rivera_biography.md`
- `docs/character/02_personality_and_voice_guide.md`
- `docs/character/03_relationships_and_cast.md`
- `docs/character/04_pregnancy_timeline_and_lore.md`
- `src/data/diaryEntries.ts`

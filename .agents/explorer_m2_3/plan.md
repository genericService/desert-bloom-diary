# Plan — Explorer M2-3 (Lore & Search Integration)

## Objective
Formulate tag additions, symptom updates, and search term integration for `src/data/diaryEntries.ts` to ensure all new lore features (hobbies, date spots, pet peeves, Cholla lore, domestic/career drama, couple dynamics) are fully searchable via `filterDiaryEntries` in `src/lib/utils.ts`, schema compatible with `src/types/index.ts`, and compliant with all negative constraints.

## Investigation & Design Methodology
1. **Entry-by-Entry Lore & Search Mapping**:
   - Analyze each of the 13 entries in `src/data/diaryEntries.ts` (Week 5 to Week 40).
   - Define specific tag additions to `entry.tags`.
   - Define symptom updates to `entry.symptoms`.
   - Map exact search query targets satisfied by `filterDiaryEntries` (query matching title, excerpt, content, tags, symptoms, location, highlight title).

2. **Schema Verification**:
   - Validate structure against `DiaryEntry` interface in `src/types/index.ts`.
   - Ensure `tags` and `symptoms` remain string arrays without broken types.
   - Confirm `careType` values remain strictly within allowed union type.

3. **Negative Constraint Audit**:
   - Zero em dashes (`—`).
   - Zero therapy talk ("holding space", "validating boundaries", "processing triggers", "emotional labor").
   - Zero future knowledge / strict contemporaneous journaling.
   - Adherence to user global style rules (no em dashes, no forbidden words, no "not X, but Y").

4. **Deliverables**:
   - `plan.md`: Strategy and entry mapping breakdown.
   - `handoff.md`: 5-component report detailing observations, logic chain, caveats, conclusion, and verification method.
   - `send_message`: Handoff notification to parent agent.

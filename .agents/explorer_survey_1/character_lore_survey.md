# Release 1 Character Lore Survey & Expansion Plan

> **Author**: Explorer 1 (teamwork_preview_explorer)  
> **Working Directory**: `/home/matthias/github/desert-bloom-diary/.agents/explorer_survey_1`  
> **Target Directory**: `docs/character/`  
> **Reference File**: `src/data/diaryEntries.ts`  
> **Date**: August 12, 2026  

---

## 1. Executive Summary

This survey provides a comprehensive analysis of the existing character documentation in `docs/character/` and diary entry data in `src/data/diaryEntries.ts` for **Desert Bloom Diary**. 

The goal of Release 1 (R1) is to systematically expand the personality, hobbies, shared interests, pet peeves, rescue dog lore, and recurring domestic/career drama for Maya and Alex Rivera. This report documents the current state of all character assets, highlights existing lore strengths, identifies exact gaps against R1 requirements, and presents a file-by-file expansion blueprint to guide downstream documentation updates and web integration.

---

## 2. Current Character Lore Inventory

### File 1: `docs/character/01_maya_rivera_biography.md` (63 lines, 3,779 bytes)
* **Current Content**:
  * Executive summary establishing Maya Rivera (29, Mexican-American freelance graphic designer), Alex Rivera (30, software engineer), rescue dog Cholla, and due date (April 22, 2026 for baby Mateo Sun Rivera).
  * Personal history: East Valley upbringing, Mama in Mesa (*"tienes que comer, mija"*), B.F.A. in Graphic Design from ASU Herberger Institute (2018), independent studio work out of South Tempe home.
  * Aesthetic & creative philosophy: Desert modernism, terracotta, Sonoran sage, warm sand, natural linen.
  * Timeline chart (Mermaid): 1996 birth to 2026 delivery.
  * Daily routines: Morning walks at Kiwanis Park, iced ginger lemon tea, studio work, evening walks at Tempe Town Lake pedestrian bridge.
* **Status**: Solid foundational profile, but lacks explicit sections for Maya's creative hobbies (watercolors, pottery hunting) and pet peeves.

### File 2: `docs/character/02_personality_and_voice_guide.md` (70 lines, 4,640 bytes)
* **Current Content**:
  * Core personality profile table: Observant, grounded, self-conscious journaler, warm, self-aware humor, culturally rooted.
  * Voice and tone rules: Real-time realism (contemporaneous rule with zero future knowledge), self-conscious journaler apologies rule (apologizing for gaps, brain fog, short scribbles, complaining), natural intros and sign-offs (`xo, Maya`).
  * Strict constraints chart & anti-tells: Zero em dashes, zero corporate buzzwords, zero rigid weekly schedules, zero hindsight spoiling.
  * Voice contrast table comparing corporate copy with authentic voice.
* **Status**: Excellent structural and stylistic foundation. Needs minor expansion examples for how Maya self-consciously journal-apologizes about new R1 drama (thermostat wars, scope creep, stolen socks).

### File 3: `docs/character/03_relationships_and_cast.md` (55 lines, 2,878 bytes)
* **Current Content**:
  * Alex Rivera: 30, software engineer, calm, practical, quiet, dark hair. Helps with ginger tea, dog walking, crib assembly, paint, timing contractions.
  * Cholla: Desert wheat/tan mix rescue dog adopted 2022, senses pregnancy early, chin on bump, nursery furniture inspection.
  * Mama: Lives in Mesa, chicken broth, MomDoc recommendation.
  * MomDoc Care Team: Clinic details at 1634 S. Priest Dr., Tempe, AZ.
* **Status**: Good baseline profiles. Severely lacking Alex's personal hobbies/tech habits, Cholla's full origin story & sock-stealing habit, and domestic dynamic friction points.

### File 4: `docs/character/04_pregnancy_timeline_and_lore.md` (56 lines, 4,896 bytes)
* **Current Content**:
  * 40-Week Milestone Master Log table (Weeks 5, 7, 9, 12, 15, 18, 20, 24, 28, 32, 36, 38, 40).
  * Sonoran Desert Growth Scale Benchmarks chart (Saguaro Seed to Harvest Pumpkin).
  * Mateo Sun Rivera birth story lore.
* **Status**: Complete timeline. Needs narrative touchpoints mapped across specific weeks for the new R1 lore elements.

### Web Code Base: `src/data/diaryEntries.ts` (583 lines, 26,437 bytes)
* **Current Content**: 12 structured `DiaryEntry` objects covering W5 through W40.
* **Status**: Reflects core milestones, MomDoc visits, and basic dog/husband interactions. Needs subtle weave-ins of new hobbies, pet peeves, date spots, and lighthearted domestic friction.

---

## 3. Requirement Mapping: Existing Lore vs. Needed R1 Expansions

| R1 Category | Required Concrete Details | Existing Lore Status | Needed Expansions for R1 |
| :--- | :--- | :--- | :--- |
| **Maya's Hobbies & Creative Outlets** | Sonoran botanical watercolor sketching, vintage pottery hunting at East Valley thrift shops, iced ginger-lemon herbal teas. | Iced ginger-lemon tea mentioned in daily routines (01) and W7 entry. Botanical watercolor sketching and pottery hunting are absent. | Explicitly add Sonoran botanical watercolor sketching (plein air Palo Verde/saguaro sketches) and East Valley vintage pottery hunting (Mesa/Chandler thrift finds) into `01_maya_rivera_biography.md` Section 3 and daily routines. |
| **Alex's Hobbies & Tech Habits** | Home automation enthusiast (smart thermostat wars in 109° heat), manual espresso brewing, desert mountain trail biking. | Basic software engineer profile in `03_relationships_and_cast.md`. No mention of home automation, espresso brewing, or trail biking. | Add Section 1 subsections to `03_relationships_and_cast.md` detailing smart thermostat routines, manual lever espresso machine obsession, and early morning Papago/South Mountain trail biking. |
| **Shared Interests & Tempe Date Spots** | Kiwanis Park lake picnics, Valley Art Theater on Mill Ave, late-night Mesa taco trucks, College Ave citrus walks. | Kiwanis Park lake walks (01, 04, W12) and College Ave citrus walks (04, W32) exist. Valley Art Theater and Mesa taco trucks are absent. | Expand shared interests in `03_relationships_and_cast.md` and `01_maya_rivera_biography.md` to feature Valley Art Theater indie movie dates and late-night Mesa birria/carne asada taco truck runs. |
| **Pet Peeves** | 115° car steering wheel burns, client scope creep on freelance design deadlines, Alex leaving coffee mugs on her drafting table, Cholla stealing clean laundry socks. | None documented in character docs. | Create a dedicated "Pet Peeves & Daily Friction" section in `01_maya_rivera_biography.md` and `03_relationships_and_cast.md`. |
| **Cholla the Rescue Dog Lore** | Desert wheat tan rescue mix, origin story, quirky habit of nudging open bathroom doors and resting her chin on Maya's bump. | Tan mix breed, pregnancy sensing (W5 door nudge), and chin on bump (W15, 01, 03) exist. Rescue origin story details and laundry sock stealing are missing. | Expand Cholla's profile in `03_relationships_and_cast.md` with her 2022 East Valley shelter rescue story (found stray near Salt River) and sock-stealing antics. |
| **Recurring Domestic & Career Drama** | Lighthearted thermostat battles in summer, assembling IKEA nursery drawers without instructions, balancing client deadlines with Alex's late-night software engineering on-call pages. | General client deadlines mentioned in W15/01. Thermostat wars, IKEA assembly without manuals, and engineer on-call pagerDuty alerts are absent. | Document these three recurring drama arcs in `03_relationships_and_cast.md` under a new "Domestic Dynamics & Work-Life Friction" header. |

---

## 4. File-by-File Expansion Blueprint for R1

### 1. `docs/character/01_maya_rivera_biography.md`
* **Add Section 3.1: Hobbies & Creative Outlets**:
  * *Sonoran Botanical Watercolor Sketching*: Keeps spiral-bound cold-press watercolor journals filled with Sonoran flora (palo verde blossoms, saguaro ribs, agave bloom stalks).
  * *East Valley Vintage Pottery Hunting*: Spends Saturday mornings searching Mesa and Chandler thrift stores for mid-century terracotta vases and handmade Arizona stoneware.
  * *Iced Ginger-Lemon Herbal Teas*: Daily afternoon brewing ritual to settle digestive waves and mark work-to-rest transitions.
* **Add Section 3.2: Personal Pet Peeves**:
  * Grabbing a 115° leather steering wheel after parking under the Tempe summer sun.
  * Freelance client scope creep asking for "just one quick layout tweak" right before a Friday evening date.
  * Alex leaving half-empty espresso mugs on her wooden drafting table next to fresh watercolor washes.
  * Cholla silently sneaking into the laundry basket to steal single clean wool socks.

### 2. `docs/character/02_personality_and_voice_guide.md`
* **Expand Section 3: Anti-Tells & Self-Conscious Journaling Apologies**:
  * Add specific journal apology examples related to new lore:
    * *Thermostat friction*: "Sorry for venting about Alex turning the AC down to 72 while I shiver under a linen blanket..."
    * *Pottery/Watercolor messes*: "Forgive the hasty entry today, my hands are stained with Sonoran sage watercolor pigment..."
    * *On-call pages*: "Apologies for the scattered thoughts, Alex had three PagerDuty alerts last night..."

### 3. `docs/character/03_relationships_and_cast.md`
* **Expand Section 1: Alex Rivera Profile**:
  * Tech Habits & Hobbies: Smart home enthusiast who monitors ambient sensor data and wages gentle thermostat wars; manual espresso brewing ritual with a lever machine; weekend mountain biking at Papago Park and South Mountain trails.
* **Expand Section 2: Cholla Profile**:
  * Origin Story: Rescued in autumn 2022 from an East Valley rescue shelter after being found as a desert stray near the Salt River.
  * Behavioral Quirks: Nudging bathroom doors, resting chin on bump, and hoarding stolen clean socks in her floor bed.
* **Add Section 5: Shared Interests & Tempe Date Spots**:
  * Kiwanis Park lake picnics under pecan trees.
  * Catching vintage/indie matinees at Valley Art Theater on Mill Ave.
  * Late-night Mesa taco truck stops for birria tacos after long design sessions.
  * College Ave citrus walks during spring bloom.
* **Add Section 6: Domestic Dynamics & Work-Life Friction**:
  * Thermostat battles in 109° heat (74° smart automation vs. Maya's preferred 77° warm blanket comfort).
  * Assembling IKEA nursery drawers without reading instructions (Alex insisting he understands the dowels while Maya keeps score).
  * Balancing client deadlines with Alex's late-night software engineering on-call PagerDuty alerts.

### 4. `docs/character/04_pregnancy_timeline_and_lore.md`
* **Update Section 1 (Milestone Master Log)**:
  * Annotate specific entries where lore expansions naturally surface across the 40 weeks (e.g. W5 thermostat battles, W12 Kiwanis picnic & watercolor sketching, W15 Mesa taco truck date, W24 IKEA drawer assembly, W28 coffee mug pet peeve & on-call page night).

### 5. Integration Blueprint for `src/data/diaryEntries.ts`
* Weave subtle, organic references into existing entry content arrays without disturbing the established core timeline or MomDoc highlights:
  * **W5**: Mention Alex's smart thermostat schedule adjusting to 109° heat and Cholla's sock habit.
  * **W7**: Add Alex's manual espresso brewing scent contrasting with Maya's ginger-lemon tea.
  * **W12**: Reference watercolor sketchbook packed for Kiwanis Park lake picnic.
  * **W15**: Mention Friday date night at Valley Art Theater on Mill Ave interrupted by client scope creep email.
  * **W20**: Mention late-night Mesa taco truck stop after sunset lake walk.
  * **W24**: Mention assembling IKEA nursery drawers without instructions and finding Alex's stray coffee mug.
  * **W28**: Mention Alex's late-night on-call PagerDuty page causing brain fog.

---

## 5. Constraints & Integrity Verification

To maintain codebase integrity, all downstream modifications must adhere strictly to the following rules:

1. **Zero Em Dashes**: No em dashes in markdown docs or TypeScript files. Use commas, parentheses, or separate sentences instead.
2. **Zero Future Knowledge**: Maya's voice must remain strictly contemporaneous in all diary entries.
3. **Authentic Voice**: Preserve natural self-conscious journaling apologies.
4. **Build Integrity**: Ensure `pnpm build` executes cleanly with zero TypeScript errors or broken references.

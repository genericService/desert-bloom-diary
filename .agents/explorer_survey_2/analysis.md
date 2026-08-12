# Diary Entries Survey & Lore Integration Analysis Report

## Overview
This report provides a comprehensive survey of `src/data/diaryEntries.ts` and related codebase files in `src/` for Desert Bloom Diary. It analyzes the structure of `DiaryEntry` data models, timeline coverage, existing tone and topics, em dash compliance, and entry-by-entry opportunities for integrating expanded character lore for Maya & Alex Rivera and Cholla the rescue dog.

---

## 1. Structure of Diary Entries

### Data Model & Interface (`src/types/index.ts`)
The core data structure for diary entries is defined by the `DiaryEntry` interface:

```typescript
export type Trimester = 1 | 2 | 3 | "postpartum";

export interface DiaryEntry {
  id: string; // Unique identifier (e.g., "week-5", "week-40-birth")
  weekNumber: number; // Gestational week (4 to 40)
  trimester: Trimester; // 1, 2, 3, or "postpartum"
  date: string; // ISO format YYYY-MM-DD
  formattedDate: string; // Human-readable date (e.g., "August 18, 2025")
  title: string; // Entry headline
  excerpt: string; // 1-2 sentence preview text for cards/search
  content: string[]; // Array of paragraph strings, ending with "xo, Maya"
  tags: string[]; // Category tags (e.g., "First Trimester", "MomDoc Care")
  symptoms: string[]; // Tracked symptoms (e.g., "Nausea", "Fetal Kicks")
  babySize: {
    name: string; // Fruit/veggie size name
    desertFruit: string; // Desert-themed comparison
    length: string; // Imperial length string
    weight: string; // Imperial weight string
    milestone: string; // Developmental milestone description
  };
  momdocHighlight: {
    title: string; // Care highlight title
    summary: string; // Care highlight summary
    careType:
      | "Ultrasound"
      | "OB Checkup"
      | "Midwife Visit"
      | "Glucose Test"
      | "Birth Plan"
      | "Postpartum Check";
  };
  tempeSpotlight: {
    location: string; // Tempe/East Valley landmark or spot
    description: string; // Description of activity/setting
  };
  moodScore: number; // Rating 1-5
  energyLevel: number; // Rating 1-5
  readTime: string; // Reading time string (e.g., "3 min read")
  coverImage: string; // Image path (e.g., "/images/...")
  isMilestone?: boolean; // Optional boolean flag for major milestones
}
```

### Content Conventions
- **Journaling Style**: `content` is an array of paragraph strings representing Maya's personal journal entries.
- **Sign-off**: Almost every entry ends with `"xo, Maya"` as the final line in the paragraph array.
- **Self-Conscious Apologies**: Entries naturally open or conclude with human journaling notes, such as `"Sorry I have been so quiet..."` or `"Forgive my scattered writing today..."`.

---

## 2. Timeline and Dates Covered

`DIARY_ENTRIES` contains 13 entries spanning from August 18, 2025 through April 22, 2026:

| # | Entry ID | Week | Trimester | ISO Date | Formatted Date | Title |
|---|---|---|---|---|---|---|
| 1 | `week-5` | 5 | 1 | 2025-08-18 | August 18, 2025 | Two Pink Lines and a Very Confused Rescue Dog |
| 2 | `week-7` | 7 | 1 | 2025-09-02 | September 2, 2025 | Sorry I've Been Quiet: Nausea Has Arrived |
| 3 | `week-9` | 9 | 1 | 2025-09-16 | September 16, 2025 | The Living Room at Priest Dr and a Tiny Heartbeat |
| 4 | `week-12` | 12 | 1 | 2025-10-07 | October 7, 2025 | Catching My Breath as Trimester One Winds Down |
| 5 | `week-15` | 15 | 2 | 2025-10-28 | October 28, 2025 | Life Got Busy: Design Deadlines and Maternity Trousers |
| 6 | `week-18` | 18 | 2 | 2025-11-18 | November 18, 2025 | A Sudden Twinge and the Relief of Same-Day Care |
| 7 | `week-20` | 20 | 2 | 2025-12-02 | December 2, 2025 | Halfway There: The Anatomy Scan and Real Kicks |
| 8 | `week-24` | 24 | 2 | 2026-01-02 | January 2, 2026 | Ringing in 2026 with Sage Green Paint and Glucose Tests |
| 9 | `week-28` | 28 | 3 | 2026-01-30 | January 30, 2026 | Home Stretch: Welcome to Trimester Three |
| 10 | `week-32` | 32 | 3 | 2026-02-27 | February 27, 2026 | Citrus Blossoms and Birth Plans |
| 11 | `week-36` | 36 | 3 | 2026-03-27 | March 27, 2026 | Catching Up Again: Weekly Checkups and Hospital Bags |
| 12 | `week-38` | 38 | 3 | 2026-04-10 | April 10, 2026 | Wildflowers, Patience, and Palo Verde Gold |
| 13 | `week-40-birth` | 40 | 3 | 2026-04-22 | April 22, 2026 | He Is Here: Mateo Sun Rivera Arrived on His Due Date |

### Seasonal Arc
- **Late Summer 2025 (Aug - Sept)**: Severe Arizona heat (109°F), early pregnancy discovery, nausea.
- **Autumn 2025 (Oct - Nov)**: High temperatures drop below 95°F, Kiwanis Park walks, energy returning, freelance design season.
- **Winter 2025/2026 (Dec - Jan)**: 20-week anatomy scan, New Year 2026, nursery painting in sage green.
- **Spring 2026 (Feb - Apr)**: College Ave citrus blossoms in February, Palo Verde yellow gold in March/April, delivery on April 22, 2026.

---

## 3. Tone and Current Topics

- **Voice**: Warm, intimate, grounded, authentic first-person voice. Maya writes directly to her unborn desert baby while sharing real struggles (nausea, fatigue, sudden twinges, brain fog).
- **MomDoc Integration**: MomDoc Tempe on S. Priest Dr is featured as a warm, comforting medical sanctuary ("Living Room" lobby, supportive midwives, rapid same-day checkups, glucose testing, birth plan review).
- **Tempe / Sonoran Desert Setting**: Strong local flair with references to Hayden Butte, Daley Park, Kiwanis Park, Mill Ave, Hayden Flour Mill, Tempe Town Lake, College Ave, and desert flora (saguaros, prickly pear, orange blossoms, palo verde).

---

## 4. Em Dash Audit Result

- **Query**: Searched `src/data/diaryEntries.ts` for em dashes (`—`).
- **Result**: Exactly **0** em dashes exist in `src/data/diaryEntries.ts`.
- **Global `src/` Search**: Only 1 occurrence was found in `src/app/kitchen-sink/page.tsx`, which is a documentation label stating `"No Em Dashes: Never use '—'"`.

---

## 5. Lore Integration Plan (Entry-by-Entry Strategy)

To satisfy `ORIGINAL_REQUEST.md`, new lore details can be woven into the existing 13 entries without disturbing the established narrative arc:

1. **Maya's Hobbies**:
   - *Sonoran botanical watercolor sketching*: Integrate in Week 7, 18, and 38 (sketching saguaro blooms, prickly pear, and palo verde at her drafting table).
   - *Vintage pottery hunting at East Valley thrift shops*: Integrate in Week 12 or Week 28 (finding terracotta vases/pots for the nursery shelf).
   - *Iced ginger-lemon herbal tea*: Mention in Week 5, Week 7, Week 32, and Week 38.

2. **Alex's Hobbies & Tech Habits**:
   - *Smart thermostat wars in 109° heat*: Weave into Week 5 (Alex setting smart thermostat to 78° vs Maya wanting 74° during her heat spikes).
   - *Manual espresso brewing*: Mention in Week 5 and Week 32 (Alex brewing espresso while Maya sips ginger-lemon tea).
   - *Desert mountain trail biking*: Mention in Week 15 (Alex heading out to South Mountain trails).

3. **Shared Interests & Tempe Spots**:
   - *Kiwanis Park lake picnics*: Weave into Week 12 (autumn lake picnic).
   - *Valley Art Theater on Mill Ave*: Mention in Week 15 or Week 20 (date night after anatomy scan).
   - *Late-night Mesa taco trucks*: Integrate in Week 9 (celebrating ultrasound with late-night tacos).
   - *College Ave citrus walks*: Already present in Week 32; can be enhanced with iced ginger-lemon tea.

4. **Pet Peeves**:
   - *115° car steering wheel burns*: Weave into Week 7 (errands during peak September heat).
   - *Client scope creep on freelance deadlines*: Weave into Week 15 (freelance client asking for 5th logo revision).
   - *Alex leaving coffee mugs on drafting table*: Weave into Week 7 or Week 18 (clearing mugs off her drafting table to paint).
   - *Cholla stealing clean laundry socks*: Weave into Week 12 or Week 24 (Cholla running off with nursery socks).

5. **Cholla the Rescue Dog Lore**:
   - *Desert wheat tan rescue mix & origin story*: Weave into Week 5 (recalculating her adoption anniversary / desert origin).
   - *Quirky habit of nudging bathroom door open and resting chin on Maya's bump*: Mention in Week 5, Week 15, and Week 20.

6. **Domestic & Career Drama**:
   - *Thermostat battles*: Week 5.
   - *Assembling IKEA nursery drawers without instructions*: Weave into Week 24 (crib and drawer setup).
   - *Balancing client deadlines with Alex's late-night software engineering on-call pages*: Weave into Week 9 or Week 24.

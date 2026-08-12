import os
import re
import glob

docs_dir = "/home/matthias/github/desert-bloom-diary/docs/character"
md_files = sorted(glob.glob(os.path.join(docs_dir, "*.md")))

lore_points = [
    ("Sonoran botanical watercolors", r"Sonoran botanical watercolor|Sonoran botanical watercolors|watercolor"),
    ("East Valley thrift pottery", r"East Valley thrift|vintage pottery|thrift pottery"),
    ("iced ginger lemon tea", r"iced ginger-lemon|iced ginger lemon"),
    ("smart thermostat wars in 109° heat", r"smart thermostat|109°"),
    ("manual espresso", r"manual espresso|manual lever espresso"),
    ("mountain biking", r"mountain biking|mountain trail biking|trail biking|trail ride"),
    ("Kiwanis Park", r"Kiwanis Park"),
    ("Valley Art Theater", r"Valley Art Theater"),
    ("Mesa taco trucks", r"Mesa taco truck"),
    ("College Ave citrus walks", r"College Ave|citrus walks|citrus blossom"),
    ("115° steering wheel burns", r"115°|steering wheel"),
    ("client scope creep", r"scope creep"),
    ("coffee mugs on drafting table", r"coffee mug|espresso|drafting table"),
    ("Cholla stealing socks", r"sock|socks|laundry sock"),
    ("Cholla origin story", r"rescue|Salt River|2022"),
    ("Cholla bathroom door nudge", r"bathroom door|nudge"),
    ("Cholla chin on bump", r"chin on.*bump|chin on Maya's bump|head on Maya's knee|rests her chin"),
    ("thermostat battles", r"thermostat battle|thermostat war"),
    ("IKEA nursery drawers", r"IKEA"),
    ("client deadlines vs PagerDuty on-call pages", r"PagerDuty|on-call")
]

print("=== LORE POINTS EMPIRICAL CHECK ===")
files_content = {}
for filepath in md_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        files_content[os.path.basename(filepath)] = f.read()

missing_lore = []
for name, regex in lore_points:
    found = False
    matches = []
    for fname, content in files_content.items():
        for i, line in enumerate(content.splitlines(), 1):
            if re.search(regex, line, re.IGNORECASE):
                matches.append(f"{fname}:{i}")
                found = True
    if found:
        print(f"[PASS] {name} -> Found in {', '.join(matches[:3])}")
    else:
        print(f"[FAIL] {name} NOT FOUND!")
        missing_lore.append(name)

print("\n=== EM DASH CHECK (`—` / \\u2014) ===")
em_dash_found = []
for fname, content in files_content.items():
    for i, line in enumerate(content.splitlines(), 1):
        if "—" in line or "\u2014" in line or "&mdash;" in line:
            print(f"[FAIL EM DASH] {fname}:{i} -> {line.strip()}")
            em_dash_found.append((fname, i, line))

if not em_dash_found:
    print("[PASS] Zero em dashes found in docs/character/")

print("\n=== FORBIDDEN THERAPY & MARKETING BUZZWORDS CHECK IN NARRATIVE ===")
forbidden_phrases = [
    "holding space",
    "validating boundaries",
    "processing triggers",
    "emotional labor",
    "active listening",
    "unpacking",
    "Delve",
    "Unlock",
    "Unleash",
    "Elevate",
    "Revolutionize",
    "testament to",
    "game-changer",
    "In the rapidly evolving landscape"
]

narrative_violations = []
for fname, content in files_content.items():
    for i, line in enumerate(content.splitlines(), 1):
        # Skip meta rule definitions and negative contrast tables
        is_rule_def = any(term in line for term in ["NO Therapy", "Forbidden", "Forbidden Patterns", "Forbidden Therapy", "STRICT NO-THERAPY-TALK RULE", "NO Marketing Buzzwords", "Never use words like"])
        
        # Parse table line if applicable
        table_cells = [cell.strip() for cell in line.split("|")]
        is_forbidden_table_col = False
        if len(table_cells) >= 4:
            # Table cell 2 (index 2) is forbidden column in voice table
            forbidden_cell = table_cells[2]
            for phrase in forbidden_phrases:
                if re.search(r'\b' + re.escape(phrase) + r'\b', forbidden_cell, re.IGNORECASE):
                    is_forbidden_table_col = True

        for phrase in forbidden_phrases:
            if re.search(r'\b' + re.escape(phrase) + r'\b', line, re.IGNORECASE):
                if is_rule_def or is_forbidden_table_col:
                    print(f"[META/RULE EXPLICIT SPEC] '{phrase}' at {fname}:{i} (Negative Spec)")
                else:
                    print(f"[VIOLATION] '{phrase}' at {fname}:{i} -> {line.strip()}")
                    narrative_violations.append((phrase, fname, i, line))

print("\n=== FINAL VERDICT EVALUATION ===")
print(f"1. Lore Points: {len(lore_points) - len(missing_lore)}/{len(lore_points)} present -> {'PASS' if len(missing_lore) == 0 else 'FAIL'}")
print(f"2. Em Dashes: {len(em_dash_found)} found -> {'PASS' if len(em_dash_found) == 0 else 'FAIL'}")
print(f"3. Therapy/Marketing Buzzwords in Narrative: {len(narrative_violations)} found -> {'PASS' if len(narrative_violations) == 0 else 'FAIL'}")

if len(missing_lore) == 0 and len(em_dash_found) == 0 and len(narrative_violations) == 0:
    print("\nOVERALL VERDICT: APPROVE")
else:
    print("\nOVERALL VERDICT: REJECT")

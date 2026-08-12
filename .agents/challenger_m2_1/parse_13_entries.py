#!/usr/bin/env python3
import sys
import re

with open('src/data/diaryEntries.ts', 'r', encoding='utf-8') as f:
    code = f.read()

# Split by id: "week-
entry_blocks = re.split(r'\{\s*id:\s*"', code)
print(f"Total entries found: {len(entry_blocks) - 1}\n")

lore_checks = {
    "Sonoran watercolor": ["botanical", "watercolor"],
    "Vintage pottery": ["pottery", "thrift"],
    "Ginger lemon tea": ["ginger", "tea"],
    "Thermostat wars": ["thermostat", "109", "115"],
    "Manual espresso": ["espresso"],
    "Trail biking": ["biking", "bike", "trail"],
    "Kiwanis Park": ["kiwanis"],
    "Valley Art Theater": ["valley art"],
    "Mesa taco trucks": ["taco"],
    "College Ave citrus": ["college ave", "citrus"],
    "115 steering wheel": ["115", "steering wheel"],
    "Scope creep": ["scope creep", "freelance"],
    "Mugs on drafting table": ["drafting", "mug"],
    "Laundry socks": ["sock", "laundry"],
    "Cholla rescue lore / nudge": ["chin", "nudge", "cholla"],
    "IKEA nursery drawers": ["ikea", "drawer"],
    "On-call pages": ["on-call", "pager", "call page"]
}

for i, block in enumerate(entry_blocks[1:], 1):
    id_val = block.split('"')[0]
    week_m = re.search(r'weekNumber:\s*(\d+)', block)
    week_num = week_m.group(1) if week_m else "?"
    date_m = re.search(r'date:\s*"([^"]+)"', block)
    date_val = date_m.group(1) if date_m else "?"
    title_m = re.search(r'title:\s*"([^"]+)"', block)
    title_val = title_m.group(1) if title_m else "?"
    
    print(f"Entry {i}: ID='{id_val}' (Week {week_num}, Date: {date_val})")
    print(f"  Title: {title_val}")
    
    found = []
    block_lower = block.lower()
    for lore, keywords in lore_checks.items():
        if any(kw in block_lower for kw in keywords):
            found.append(lore)
            
    print(f"  Lore elements found ({len(found)}): {', '.join(found)}\n")


#!/usr/bin/env python3
import sys

with open('src/data/diaryEntries.ts', 'r', encoding='utf-8') as f:
    code = f.read()

# We can parse the entries using TS/JS object parsing or regex
import re

# Split by id: 'entry-
entries_raw = re.split(r'\{\s*id:\s*[\'"]entry-', code)

print(f"Total entries found in file: {len(entries_raw) - 1}")

entries = []
for idx, chunk in enumerate(entries_raw[1:], 1):
    id_m = re.search(r'^([^\'"]+)', chunk)
    entry_id = f"entry-{id_m.group(1)}" if id_m else f"entry-{idx}"
    
    title_m = re.search(r'title:\s*[\'"]([^\'"]+)[\'"]', chunk)
    title = title_m.group(1) if title_m else "N/A"
    
    date_m = re.search(r'date:\s*[\'"]([^\'"]+)[\'"]', chunk)
    date = date_m.group(1) if date_m else "N/A"
    
    gw_m = re.search(r'gestationalWeek:\s*(\d+)', chunk)
    gw = gw_m.group(1) if gw_m else "N/A"
    
    print(f"\n--- Entry {idx}: ID={entry_id} | Week {gw} | Date={date} ---")
    print(f"Title: {title}")
    
    # Check lore items present in this chunk
    lore_keywords = {
        "Watercolor": ["watercolor", "botanical", "sketch"],
        "Pottery": ["pottery", "thrift"],
        "Ginger Tea": ["ginger", "tea"],
        "Thermostat": ["thermostat", "109", "115", "ac", "a/c"],
        "Espresso": ["espresso", "grinder"],
        "Trail Biking": ["trail", "bike", "biking"],
        "Kiwanis Park": ["kiwanis"],
        "Valley Art": ["valley art", "mill ave"],
        "Mesa Taco": ["taco", "mesa"],
        "College Ave Citrus": ["college ave", "citrus"],
        "115 Steering Wheel": ["steering wheel", "115"],
        "Scope Creep": ["scope creep", "client"],
        "Drafting Mugs": ["drafting", "mug"],
        "Laundry Socks": ["sock", "laundry"],
        "Cholla Nudge/Chin": ["chin", "nudge", "bump", "bathroom door", "rescue"],
        "IKEA Nursery": ["ikea", "drawer", "nursery"],
        "On-Call Pages": ["on-call", "pager", "call"]
    }
    
    found_in_entry = []
    chunk_lower = chunk.lower()
    for lore, kws in lore_keywords.items():
        if any(kw in chunk_lower for kw in kws):
            found_in_entry.append(lore)
            
    print("Lore present: " + (", ".join(found_in_entry) if found_in_entry else "None"))


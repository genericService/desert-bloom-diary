#!/usr/bin/env python3
import os
import re
import glob

def check_em_dashes(directories):
    em_dash_violations = []
    em_dash_char = "—" # U+2014
    
    for d in directories:
        for ext in ['*.ts', '*.tsx', '*.md']:
            for filepath in glob.glob(os.path.join(d, '**', ext), recursive=True):
                with open(filepath, 'r', encoding='utf-8') as f:
                    lines = f.readlines()
                    for idx, line in enumerate(lines, 1):
                        if em_dash_char in line:
                            em_dash_violations.append((filepath, idx, line.strip()))
    return em_dash_violations

def check_therapy_talk(directories):
    therapy_phrases = [
        "holding space",
        "validating boundaries",
        "processing triggers",
        "emotional labor",
        "my truth",
        "safe space",
        "hold space",
        "validate boundaries",
        "process triggers"
    ]
    therapy_violations = []
    
    for d in directories:
        for ext in ['*.ts', '*.tsx', '*.md']:
            for filepath in glob.glob(os.path.join(d, '**', ext), recursive=True):
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    content_lower = content.lower()
                    for phrase in therapy_phrases:
                        if phrase in content_lower:
                            # find line numbers
                            lines = content.split('\n')
                            for idx, line in enumerate(lines, 1):
                                if phrase in line.lower():
                                    therapy_violations.append((filepath, idx, phrase, line.strip()))
    return therapy_violations

def check_r1_lore_in_entries(diary_file):
    with open(diary_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We want to check lore items across entries and docs
    lore_items = {
        "Maya Hobbies - Watercolor": ["botanical", "watercolor", "sketch"],
        "Maya Hobbies - Vintage Pottery": ["vintage pottery", "thrift shop", "east valley"],
        "Maya Hobbies - Iced Ginger Lemon Tea": ["iced ginger", "ginger-lemon", "ginger lemon"],
        "Alex Hobbies - Home Automation / Thermostat": ["thermostat", "home automation", "109"],
        "Alex Hobbies - Manual Espresso": ["espresso", "manual espresso", "grind"],
        "Alex Hobbies - Desert Mountain Biking": ["trail biking", "mountain trail", "desert mountain bike"],
        "Date Spots - Kiwanis Park": ["kiwanis", "kiwanis park"],
        "Date Spots - Valley Art Theater": ["valley art", "mill ave"],
        "Date Spots - Mesa Taco Trucks": ["mesa taco", "taco truck"],
        "Date Spots - College Ave Citrus": ["college ave", "citrus walk"],
        "Pet Peeves - 115 Steering Wheel": ["115", "steering wheel"],
        "Pet Peeves - Client Scope Creep": ["scope creep", "freelance design", "client deadline"],
        "Pet Peeves - Mugs on Drafting Table": ["drafting table", "coffee mug"],
        "Pet Peeves - Cholla Laundry Socks": ["sock", "laundry"],
        "Cholla Lore - Origin / Rescue Mix": ["desert wheat", "rescue mix", "shelter"],
        "Cholla Lore - Bathroom Nudge / Chin on Bump": ["chin on", "nudge open", "bump", "bathroom door"],
        "Domestic Drama - Thermostat Battles": ["thermostat", "ac", "109", "115"],
        "Domestic Drama - IKEA Nursery Drawers": ["ikea", "nursery drawer", "instructions"],
        "Domestic Drama - On-Call Pages vs Deadlines": ["on-call", "pager", "software engineering"]
    }
    
    results = {}
    content_lower = content.lower()
    for item, keywords in lore_items.items():
        found = any(kw in content_lower for kw in keywords)
        results[item] = found
        
    return results

if __name__ == "__main__":
    dirs = ['src', 'docs']
    em_violations = check_em_dashes(dirs)
    therapy_violations = check_therapy_talk(dirs)
    lore_check = check_r1_lore_in_entries('src/data/diaryEntries.ts')
    
    print("=== EM DASH VIOLATIONS ===")
    if em_violations:
        for v in em_violations:
            print(f"{v[0]}:{v[1]}: {v[2]}")
    else:
        print("NONE - All clean!")
        
    print("\n=== THERAPY TALK VIOLATIONS ===")
    if therapy_violations:
        for v in therapy_violations:
            print(f"{v[0]}:{v[1]} Phrase '{v[2]}': {v[3]}")
    else:
        print("NONE - All clean!")
        
    print("\n=== LORE CHECK IN diaryEntries.ts ===")
    for item, found in lore_check.items():
        status = "PASS" if found else "FAIL"
        print(f"[{status}] {item}")

#!/usr/bin/env python3
import re
import json

def analyze_diary_entries(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    print(f"File size: {len(content)} bytes")
    
    # Check for em dash character U+2014 in diaryEntries.ts
    em_dashes = []
    for line_no, line in enumerate(content.splitlines(), 1):
        if '—' in line:
            em_dashes.append((line_no, line))
            
    print(f"Em dashes in diaryEntries.ts: {len(em_dashes)}")
    for lno, l in em_dashes:
        print(f"  Line {lno}: {l}")

    # Parse individual entries (assuming array of objects in TS file)
    # Let's extract entries using regex or simple parsing
    id_matches = list(re.finditer(r'id:\s*[\'"]([^\'"]+)[\'"]', content))
    title_matches = list(re.finditer(r'title:\s*[\'"]([^\'"]+)[\'"]', content))
    date_matches = list(re.finditer(r'date:\s*[\'"]([^\'"]+)[\'"]', content))
    gestational_matches = list(re.finditer(r'gestationalWeek:\s*(\d+)', content))
    
    print(f"Found {len(id_matches)} entries by ID match")
    
    # Check for therapy talk in diaryEntries.ts
    therapy_phrases = ["holding space", "validating boundaries", "processing triggers", "emotional labor", "my truth", "safe space"]
    therapy_hits = []
    for phrase in therapy_phrases:
        if phrase in content.lower():
            therapy_hits.append(phrase)
    print(f"Therapy talk hits in diaryEntries.ts: {therapy_hits}")

if __name__ == "__main__":
    analyze_diary_entries('src/data/diaryEntries.ts')

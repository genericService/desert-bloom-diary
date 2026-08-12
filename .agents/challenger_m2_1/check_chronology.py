#!/usr/bin/env python3
import re

with open('src/data/diaryEntries.ts', 'r', encoding='utf-8') as f:
    code = f.read()

entry_blocks = re.split(r'\{\s*id:\s*"', code)

for i, block in enumerate(entry_blocks[1:], 1):
    id_val = block.split('"')[0]
    week_m = re.search(r'weekNumber:\s*(\d+)', block)
    week_num = int(week_m.group(1)) if week_m else 0
    date_m = re.search(r'date:\s*"([^"]+)"', block)
    date_val = date_m.group(1) if date_m else "?"
    title_m = re.search(r'title:\s*"([^"]+)"', block)
    title_val = title_m.group(1) if title_m else "?"
    
    print(f"Week {week_num:02d} ({date_val}) - {title_val}")
    
    block_lower = block.lower()
    # Check for name 'Mateo' or 'boy' in early weeks
    if 'mateo' in block_lower and week_num < 20:
        print(f"  [WARNING] 'Mateo' mentioned early in Week {week_num}")
    if 'boy' in block_lower and week_num < 15:
        print(f"  [NOTE] 'boy' mentioned in Week {week_num}")
    

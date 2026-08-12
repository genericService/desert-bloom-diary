#!/usr/bin/env python3
import os
import glob

files_to_check = glob.glob('docs/character/*.md') + ['src/data/diaryEntries.ts']

print("=== CHECKING docs/character/*.md and src/data/diaryEntries.ts ===")
for fpath in files_to_check:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
        em_count = content.count('—')
        print(f"{fpath}: Em dashes count = {em_count}")


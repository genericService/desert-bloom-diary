#!/usr/bin/env python3
import os

em_dash = '—'
targets = ['src', 'docs']

print("=== DEEP EM DASH SEARCH IN src/ AND docs/ ===")
violations = []
for target in targets:
    for root, dirs, files in os.walk(target):
        for f in files:
            if f.endswith(('.ts', '.tsx', '.md', '.js', '.jsx', '.json', '.html', '.css')):
                fpath = os.path.join(root, f)
                with open(fpath, 'r', encoding='utf-8', errors='ignore') as file:
                    for lnum, line in enumerate(file, 1):
                        if em_dash in line:
                            violations.append((fpath, lnum, line.strip()))

print(f"Total violations found: {len(violations)}")
for v in violations:
    print(f"{v[0]}:{v[1]}: {v[2]}")


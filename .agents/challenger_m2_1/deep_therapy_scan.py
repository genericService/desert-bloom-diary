#!/usr/bin/env python3
import os

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

targets = ['src', 'docs']

print("=== DEEP THERAPY TALK SEARCH IN src/ AND docs/ ===")
violations = []
for target in targets:
    for root, dirs, files in os.walk(target):
        for f in files:
            if f.endswith(('.ts', '.tsx', '.md', '.js', '.jsx', '.json', '.html', '.css')):
                fpath = os.path.join(root, f)
                with open(fpath, 'r', encoding='utf-8', errors='ignore') as file:
                    for lnum, line in enumerate(file, 1):
                        line_lower = line.lower()
                        for phrase in therapy_phrases:
                            if phrase in line_lower:
                                violations.append((fpath, lnum, phrase, line.strip()))

print(f"Total therapy talk occurrences found: {len(violations)}")
for v in violations:
    print(f"{v[0]}:{v[1]} [Phrase: '{v[2]}']: {v[3]}")


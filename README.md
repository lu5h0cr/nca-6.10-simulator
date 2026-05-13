https://lu5h0cr.github.io/nca-6.10-simulator/

# NCA 6.10 Question Bank Update

This update fixes the issue where the correct answer appeared in option A every time.

## What changed

- Added the 99 questions from the uploaded `Nutanix NCA v6.10 - Nutanix Certified Associate v6.10 Exam.docx` file.
- Kept the previous custom practice questions where they were not exact duplicate question text.
- Randomized/balanced the correct answer positions across A, B, C, and D.
- Preserved the correct answer text and updated `correctAnswerIndex` so the simulator grades correctly.

## Files

- `nca610_question_bank.json`: merged bank with source questions + previous custom practice questions.
- `nca610_question_bank.js`: same bank for GitHub Pages simulator.
- `nca610_question_bank_source_questions_only.json`: only the uploaded source DOCX questions.
- `nca610_question_bank_source_questions_only.js`: same source-only bank for GitHub Pages.
- `nca610_question_bank_update_audit.csv`: quick audit of IDs, source status, topic, objective, answer and answer index.

## Counts

- Source questions parsed from DOCX: 99
- Total merged questions: 222

## Correct answer distribution in merged bank

- A: 56
- B: 56
- C: 55
- D: 55

## Recommended upload to GitHub

Replace these two files in the `data` folder:

- `data/nca610_question_bank.json`
- `data/nca610_question_bank.js`

Keep the same filenames so the current `index.html` continues working without changes.

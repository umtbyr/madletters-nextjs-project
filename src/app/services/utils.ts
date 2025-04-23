function removeDuplicatesByFirstWord(
  arr: { question: string; answer: string }[]
) {
  const seen = new Set<string>();

  return arr.filter((item) => {
    const firstWord = item.answer[0].toLowerCase();
    if (seen.has(firstWord)) return false;
    seen.add(firstWord);
    return true;
  });
}

function isDuplicate(text: string, RecentQuestionsSet: Set<string>): boolean {
  const normalized = text.toLowerCase().trim();
  return [...RecentQuestionsSet].some(
    (prev) => prev.includes(normalized) || normalized.includes(prev)
  );
}

export { removeDuplicatesByFirstWord, isDuplicate };

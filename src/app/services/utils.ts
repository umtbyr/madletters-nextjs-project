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

export { removeDuplicatesByFirstWord };

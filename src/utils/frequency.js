export const getFrequency = () => {
  return JSON.parse(localStorage.getItem("frequency")) || {};
};

export const updateFrequency = (taskName, isComplete) => {
  const freq = getFrequency();
  if (!freq[taskName]) freq[taskName] = { complete: 0, incomplete: 0 };
  if (isComplete) freq[taskName].complete += 1;
  else freq[taskName].incomplete += 1;
  localStorage.setItem("frequency", JSON.stringify(freq));
};

export const arrangeNotes = (notes) => {
  let pinnedNotes = [];
  let unPinnedNotes = [];
  notes.forEach((eachNote) => {
    if (eachNote[1].isPinned) pinnedNotes.push(eachNote);
    else unPinnedNotes.push(eachNote);
  });
  return [...pinnedNotes, ...unPinnedNotes];
};

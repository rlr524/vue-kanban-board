// we're generating a random number and converting it to a hex number which returns a 14-character hex including the 0. from the
// random 16 digit decimal that is generated; we slice off the first two characters to remove that prefix and leave a 12 character uuid
export function uuid() {
  let array = new Uint32Array(10);
  window.crypto.getRandomValues(array);
  for (let i = 0; i < array.length; i++) {
    return array[i];
  }
}

export function saveStatePlugin(store) {
  store.subscribe((mutation, state) => {
    localStorage.setItem("board", JSON.stringify(state.board));
  });
}

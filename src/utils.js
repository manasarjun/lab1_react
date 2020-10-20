
export default function getLocalStorage(addItem) {

  const getLocalStorage = JSON.parse(window.localStorage.getItem('items'));
  if (getLocalStorage) {
    addItem && getLocalStorage.push(addItem)
    window.localStorage.setItem('items', JSON.stringify(getLocalStorage));
    return getLocalStorage;
  }

  window.localStorage.setItem('items', JSON.stringify([]));
  return [];
};

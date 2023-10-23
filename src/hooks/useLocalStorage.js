
export default function useLocalStorage({ key, initialValue }) {


  const setLocalStorage = () => {
    localStorage.setItem(key, JSON.stringify(initialValue));
    console.log("Hello");
  }

  const removeLocalStorage = () => {

  }

  return [setLocalStorage, removeLocalStorage];
}

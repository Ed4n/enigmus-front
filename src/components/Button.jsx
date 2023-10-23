export default function Button({ func, children }) {
  return (
    <button
      className="w-[250px] px-5 py-3 bg-sphinx-yellow-200 text-sphinx-yellow-900 rounded-md hover:scale-105 hover:bg-sphinx-yellow-300 transition-all text-lg focus:bg-sphinx-yellow-300 focus:outline-none"
      onClick={func}
    >
      {children}
    </button>
  );
}

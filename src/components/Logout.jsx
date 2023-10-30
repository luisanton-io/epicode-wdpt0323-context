export default function Logout({ setCounter }) {
  return (
    <footer>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Logout and reset
      </button>
    </footer>
  );
}

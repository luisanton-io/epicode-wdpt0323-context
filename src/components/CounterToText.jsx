import numberToText from "number-to-text";
import "number-to-text/converters/en-us";
import Counter from "./Counter";

export default function CounterToText({ counter }) {
  // const counter ??????
  return (
    <div style={{ marginBlock: 16 }}>{numberToText.convertToText(counter)}</div>
  );
}

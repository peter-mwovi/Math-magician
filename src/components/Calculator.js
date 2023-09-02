import Button from './Button';

function Calculator() {
  return (
    <div className="calc">
      <span className="keys4">0</span>
      <Button text="AC" styling="key1" />
      <Button text="+/-" styling="key1" />
      <Button text="%" styling="key1" />
      <Button text="÷" styling="key1b" />
      <Button text="7" styling="key1" />
      <Button text="8" styling="key1" />
      <Button text="9" styling="key1" />
      <Button text="x" styling="key1b" />
      <Button text="4" styling="key1" />
      <Button text="5" styling="key1" />
      <Button text="6" styling="key1" />
      <Button text="-" styling="key1b" />
      <Button text="1" styling="key1" />
      <Button text="2" styling="key1" />
      <Button text="3" styling="key1" />
      <Button text="+" styling="key1b" />
      <Button text="0" styling="keys2" />
      <Button text="." styling="key1" />
      <Button text="=" styling="key1b" />
    </div>
  );
}

export default Calculator;

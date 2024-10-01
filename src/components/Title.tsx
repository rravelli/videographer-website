export function Title({ firstName, lastName }: { firstName: string; lastName: string }) {
  const delay = 1 / 50;
  return (
    <div className="keyboard">
      {firstName.split("").map((letter, index) => (
        <span className="key" style={{ animationDelay: index * delay + "s" }}>
          {letter}
        </span>
      ))}
      <span style={{ margin: 10 }} />
      {lastName.split("").map((letter, index) => (
        <span className="key" style={{ animationDelay: (index + lastName.length - 1) * delay + "s" }}>
          {letter}
        </span>
      ))}
    </div>
  );
}

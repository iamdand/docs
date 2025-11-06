export const ColorHeader = ({ addClass, title }) => {
  return (
    <h2
      id={title.toLowerCase().replace(/\s+/g, "-")}
      className={`font-semibold text-2xl px-5 py-5 text-left w-full outline-offset-[-1px] bg-primary/10  [text-shadow:-0.2px_0_0_currentColor,0.2px_0_0_currentColor] dark:bg-primary-light/10 ${addClass}`}
    >
      {title}
    </h2>
  );
};

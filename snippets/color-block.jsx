export const ColorBlock = ({ children, addClass, bgColor, title }) => {
  const colorClass = bgColor
    ? `bg-${bgColor}/10 dark:bg-${bgColor}/10`
    : "bg-gray-50 dark:bg-zinc-500/10";

  return (
    <div
      className={`callout my-2 px-5 py-4 overflow-hidden gap-3 ${colorClass} ${addClass}`}
    >
      {title && (
        <>
          <h3 className="font-semibold text-lg">{title}</h3>
          <hr className="my-2" />
        </>
      )}

      <div className="reset-lists">{children}</div>
    </div>
  );
};

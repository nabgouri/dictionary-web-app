export default function Footer({ word }) {
  return (
    <footer className="border-t-2 border-t-[#e9e9e9] pt-[19px] flex gap-5 items-center">
      <p className="text-[#757575] font-normal text-sm">Source</p>
      <a
        target="_blank"
        href={`https://en.wiktionary.org/wiki/${encodeURIComponent(word)}`}
        className="text-[#2d2d2d] text-sm font-normal underline"
      >
        https://en.wiktionary.org/wiki/{word}
      </a>
    </footer>
  );
}

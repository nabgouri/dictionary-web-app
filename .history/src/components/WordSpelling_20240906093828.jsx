export default function WordSpeeling({ wordInfo }) {
  const word = wordInfo?.word || "No word provided";
  const phonetics = wordInfo?.phonetics || [];
  let phoneticsIndex;
  phonetics.length === 1 ? (phoneticsIndex = 0) : (phoneticsIndex = 1);
  console.log(wordInfo);
  return (
    <div className="flex items-center justify-between my-10">
      <div>
        <h1 className=" text-3xl md:text-6xl  font-bold mb-2 dark:text-[#ffff]">
          {word}
        </h1>
        {phonetics.length > 0 ? (
          <span className="text-lg md:text-2xl  font-normal text-[#A445ED]">
            {phonetics[phoneticsIndex].text}
          </span>
        ) : (
          <span className="text-lg md:text-2xl  font-normal text-[#A445ED]">
            No phonetics available
          </span>
        )}
      </div>

      <audio id="audioElement" key={wordInfo?.word}>
        <source src={phonetics[phoneticsIndex]?.audio} type="audio/mpeg" />
      </audio>
      <button
        className="relative w-12 h-12  md:w-[4.6875rem] md:h-[4.6875rem] outline-none rounded-full audio-button hover:bg-[#a445ed] transition-colors duration-300 flex items-center justify-center group"
        onClick={() => {
          const audio = document.getElementById("audioElement");
          if (audio) audio.play();
        }}
      >
        <div className="w-0 h-0 border-t-[0.40625rem] md:border-t-[0.66rem] border-t-transparent border-l-[0.8125rem] md:border-l-[1.3125rem] border-l-[#a445ed] group-hover:border-l-[#ffffff] border-b-[0.40625rem] md:border-b-[0.66rem] border-b-transparent absolute"></div>
      </button>
    </div>
  );
}

// import { useState } from "react";
export default function WordInfo({
  title,
  definitions,
  synonyms,
  fetchSynonymsWord,
}) {
  return (
    <>
      <h2 className="text-lg md:text-2xl font-bold italic relative flex items-center after:content-[''] after:w-full after:h-[1px] after:bg-[#e9e9e9] after:ml-5 ">
        {title}
      </h2>
      <h3 className="mt-10 mb-6 text-[#757575] text-base md:text-xl font-normal">
        Meaning
      </h3>
      <ul className="list-disc  pl-5 space-y-3.5 md:ml-5 mb-10">
        {definitions.map((definition) => {
          console.log(definition);
          return (
            <>
              <li
                className="custom-bullet text-sm md:text-lg leading-6"
                key={definition.definition}
              >
                {definition.definition}
                {definition.example && (
                  <div className="text-[#757575] mt-[13px]   ">
                    {`"${definition.example}"`}
                  </div>
                )}
              </li>
            </>
          );
        })}
      </ul>
      {synonyms.length > 0 && (
        <section className=" flex  gap-[22px] mb-10">
          <h3 className="text-[#757575] text-base md:text-xl font-normal">
            Synonyms
          </h3>
          <ul className="flex flex-wrap gap-x-4  ">
            {synonyms.map((synonm, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => fetchSynonymsWord(synonm)}
                    className="text-[#A445ED] font-bold text-base md:text-xl focus:underline focus:decoration-[#A445ED]"
                  >
                    {synonm}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
}

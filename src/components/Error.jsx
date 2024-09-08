import angryImogi from "../assets/angryImogi.svg";

export default function Error() {
  return (
    <div className="text-center mt-20  ">
      <p className="text-6xl">😕</p>
      <h1 className="text-[#2d2d2d] font-bold text-xl mt-11 mb-6">
        No Definitions Found
      </h1>
      <p className="text-[#757575] text-lg leading-6 ">
        Sorry pal, we couldn`&apos;`t find definitions for the word you were
        looking for. You can try the search again at later time or head to the
        web instead.
      </p>
    </div>
  );
}

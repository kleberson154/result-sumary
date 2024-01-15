function Result() {
  return (
    <div className="shrink-0 flex flex-col items-center justify-between bg-gradient-to-b from-purple to-royal p-10 rounded-3xl w-96">
      <h1 className="text-xl text-lavender font-bold">Your Result</h1>
      <div className=" flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-violet to-persian w-40 h-40">
        <h1 className="text-6xl text-white font-extrabold">76</h1>
        <p className="text-lavender">of 100</p>
      </div>
      <h2 className="text-white text-3xl font-bold">Great</h2>
      <p className="text-wrap text-center text-lavender px-10">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  )
}

export default Result

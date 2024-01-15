function Summary() {
  return (
    <div className="shrink-0 p-10 w-96">
      <h1 className="text-xl font-bold text-gray">Summary</h1>
      <div className="flex flex-col gap-4 mt-6">
        {/* red */}
        <div className="flex flex-col flex-auto">
          <div className="flex bg-red-200 rounded-lg p-3 justify-between font-bold">
            <div className="flex gap-3 ">
              <img src="../../public/images/icon-reaction.svg" alt="Reaction" />
              <p className="text-red-100 ">Reaction</p>
            </div>

            <p className="text-lavender flex ">
              <strong className="text-gray mr-2">80</strong> / 100
            </p>
          </div>
        </div>
        {/* yellow */}
        <div className="flex flex-col flex-auto">
          <div className="flex bg-orange-200 rounded-lg p-3 justify-between font-bold">
            <div className="flex gap-3 ">
              <img src="../../public/images/icon-memory.svg" alt="Reaction" />
              <p className="text-orange-100 ">Memory</p>
            </div>

            <p className="text-lavender flex ">
              <strong className="text-gray mr-2">92</strong> / 100
            </p>
          </div>
        </div>
        {/* green */}
        <div className="flex flex-col flex-auto">
          <div className="flex bg-green-200 rounded-lg p-3 justify-between font-bold">
            <div className="flex gap-3 ">
              <img src="../../public/images/icon-verbal.svg" alt="Reaction" />
              <p className="text-green-100 ">Verbal</p>
            </div>

            <p className="text-lavender flex ">
              <strong className="text-gray mr-2">61</strong> / 100
            </p>
          </div>
        </div>
        {/* blue */}
        <div className="flex flex-col flex-auto">
          <div className="flex bg-blue-200 rounded-lg p-3 justify-between font-bold">
            <div className="flex gap-3 ">
              <img src="../../public/images/icon-visual.svg" alt="Reaction" />
              <p className="text-blue-100 ">Visual</p>
            </div>

            <p className="text-lavender flex ">
              <strong className="text-gray mr-2">72</strong> / 100
            </p>
          </div>
        </div>
        {/* button */}
        <button className="bg-gray rounded-3xl p-3 text-white mt-6">
          Continue
        </button>
      </div>
    </div>
  )
}

export default Summary

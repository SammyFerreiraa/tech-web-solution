import React from 'react'

const divisor = () => {
  return (
    <div>
      <h1 id="depoimentos" className="mb-0 text-transparent xl:mb-10">
        Divisor
      </h1>
      <div className="relative mb-24 h-24 w-full overflow-hidden">
        <div className="absolute -left-2 -top-10 z-40 h-3/4 w-[110vw] -rotate-2 bg-sky-950"></div>
        <div className="absolute -top-2 z-30 h-3/4 w-[110vw] bg-sky-700"></div>
        <div className="absolute top-1 z-20  h-full w-[110vw] rotate-2 bg-sky-500"></div>
        <div className="absolute top-[75%] z-10 h-3/4 w-full bg-sky-300"></div>
      </div>
    </div>
  )
}

export default divisor

export default function DesignSystem() {
  return (
    
    <main className="flex flex-col gap-12 bg-white p-6">
      <div className="font-marcellus">
        <div className="h4 font-sembold text-gray-700">Font Family: Marcellus SC</div>
        <div className="h1">3xl - Lorem ipsum dolor sit</div>
        <div className="h2">2xl - Lorem ipsum <a href="#">dolor sit</a>.</div>
        <div className="h3">xl - Lorem ipsum dolor sit</div>
        <div className="h4">lg - Lorem ipsum dolor sit</div>
        <div className="h5">md - Lorem ipsum dolor sit</div>
        <div className="p">base - Lorem ipsum dolor sit.</div>
        <div className="sm">Lorem ipsum dolor sit</div>
        <div className="xs">Lorem ipsum dolor sit</div>
      </div>
      <div className="font-marion">
        <div className="h4 font-sembold text-gray-700">Font Family: Marion</div>
        <div className="h1">3xl - Lorem ipsum dolor sit</div>
        <div className="h2">2xl - Lorem ipsum <a href="#">dolor sit</a>.</div>
        <div className="h3">xl - Lorem ipsum dolor sit</div>
        <div className="h4">lg - Lorem ipsum dolor sit</div>
        <div className="h5">md - Lorem ipsum dolor sit</div>
        <div className="p">base - Lorem ipsum dolor sit.</div>
        <div className="sm">Lorem ipsum dolor sit</div>
        <div className="xs">Lorem ipsum dolor sit</div>
      </div>
      <div className="font-dm-sans">
        <div className="h4 font-sembold text-gray-700">Font Family: DM Sans</div>
        <div className="h1">3xl - Lorem ipsum dolor sit</div>
        <div className="h2">2xl - Lorem ipsum <a href="#">dolor sit</a>.</div>
        <div className="h3">xl - Lorem ipsum dolor sit</div>
        <div className="h4">lg - Lorem ipsum dolor sit</div>
        <div className="h5">md - Lorem ipsum dolor sit</div>
        <div className="p">base - Lorem ipsum dolor sit.</div>
        <div className="sm">Lorem ipsum dolor sit</div>
        <div className="xs">Lorem ipsum dolor sit</div>
      </div>
      <div className="flex flex-wrap">
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-royal-blue-950"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-royal-blue-900"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-royal-blue-800"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-royal-blue-700"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-royal-blue-600"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-royal-blue-500"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-royal-blue-400"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-royal-blue-300"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-royal-blue-200"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-royal-blue-100"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-royal-blue-50"></div>
      </div>
      <div className="flex flex-wrap">
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-yellow-300"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-amber-200"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-yellow-200"></div>
      </div>
      <div className="flex flex-wrap">
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-gray-700"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-gray-500"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-gray-300"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-gray-200"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-gray-100"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-gray-50"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="flex flex-col gap-4 p-4 card-shadow rounded-2xl border overflow-hidden card-background-color card-border-color">
          <div className="flex-grow sm:flex sm:justify-center xl:justify-start z-20 rounded-full shadow">
            <div className="rounded-full shadow w-full">
              <a href="#" className="flex w-full items-center justify-center rounded-full border border-transparent bg-royal-blue-600 px-8 py-2.5 text-base font-medium text-white hover:bg-royal-blue-700 md:px-10 md:py-2.5 md:text-lg">Button - Default</a>
            </div>
          </div>
          <div className="flex-grow sm:flex sm:justify-center xl:justify-start z-20 rounded-full shadow">
            <div className="rounded-full shadow w-full">
              <a href="#" className="flex w-full items-center justify-center rounded-full border border-transparent  px-8 py-2.5 text-base font-medium text-white bg-royal-blue-700 md:px-10 md:py-2.5 md:text-lg">Button - Hover</a>
            </div>
          </div>
          <div className="sm:flex sm:justify-center xl:justify-start z-20 rounded-full shadow">
            <div className="rounded-full shadow">
              <p href="#" className="flex w-full items-center justify-center rounded-full border border-transparent px-8 py-2.5 text-base font-medium text-royal-blue-400 bg-royal-blue-50 md:px-10 md:py-2.5 md:text-lg">Button - Disabled</p>
            </div>
          </div>
          <div className="sm:flex sm:justify-center xl:justify-start z-20 rounded-full shadow">
            <a href="/about" title="" className="w-full inline-flex items-center justify-center px-4 py-2.5 text-lg font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:border-[1px] hover:border-yellow-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
              Navigation
            </a>
          </div>
        </div>
      </div>
    </main>
)
}

import Filters from "./Filters"
const stats = [
  { name: 'Total Sales', value: '$405,091', change: '+4.75%', changeType: 'positive' },
  { name: 'Returns', value: '$12,787', change: '+54.02%', changeType: 'negative' },
  { name: 'Net Sales', value: '$245,988', change: '-1.39%', changeType: 'positive' },
]

function classnames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AccountBalance() {
  return (
    <div className="font-marion text-white">
      <div>
        <h4 className="text-left px-3">Account</h4>
        <p className="p-3 text-base font-dm-sans">Click an item for details.</p>
      </div>
      <div className="font-dm-sans">
        <p className="text-left px-3 text-sm">Filter by Year / Month / Product</p>
        <Filters
          extraFilter={'product'}
        />
      </div>
      <dl className="m-1 grid grid-cols-1 gap-4 bg-gray-900/5 font-marion text-white">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-t-med-brown px-4 py-6 sm:px-6 xl:px-8 border border-t-orange rounded-xl font-dm-sans"
          >
            <dt className="text-base font-medium leading-6 text-white">{stat.name}</dt>
            <dd
              className={classnames(
                stat.changeType === 'negative' ? 'text-rose-600' : 'text-t-light-blue',
                'text-base font-medium',
              )}
            >
              {stat.change}
            </dd>
            <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-wide text-white text-center">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

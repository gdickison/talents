const stats = [
  { name: 'Available', value: '$405,091.00', change: '+4.75%', changeType: 'positive' },
  { name: 'Returns', value: '$12,787.00', change: '+54.02%', changeType: 'negative' },
  { name: 'Current', value: '$245,988.00', change: '-1.39%', changeType: 'positive' },
  { name: 'Pending', value: '$30,156.00', change: '+10.18%', changeType: 'positive' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AccountBalance() {
  return (
    <dl className="m-1 grid grid-cols-1 gap-4 bg-gray-900/5">
      <div>
        <h3 className="text-left px-3">Account</h3>
        <p className="py-3">Click an item for details.</p>
      </div>
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-t-med-brown px-4 py-6 sm:px-6 xl:px-8 border border-t-orange rounded-xl"
        >
          <dt className="text-sm font-medium leading-6 text-white">{stat.name}</dt>
          <dd
            className={classNames(
              stat.changeType === 'negative' ? 'text-rose-600' : 'text-t-light-blue',
              'text-xs font-medium',
            )}
          >
            {stat.change}
          </dd>
          <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-white">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

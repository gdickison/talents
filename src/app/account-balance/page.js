import AccountBalance from "@/components/AccountBalance";

import React from 'react'

function AccountBalancePage() {
  return (
    <div className='flex flex-col items-center mt-12 relative'>
      <div className="text-white text-[23px] font-normal font-['Marion']">
        <AccountBalance/>
      </div>
    </div>
  )
}

export default AccountBalancePage



// import Leftbar from '@/components/Admin/Leftbar'
// import Topbar from '@/components/Admin/Topbar'
// import React from 'react'
// import { Outlet } from 'react-router-dom'

// const AdminLayout = () => {
//   return (
//     <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
//       <Leftbar />
//       <div className='h-screen w-5/6 flex justify-center items-center flex-col'>
//         <Topbar />
//         <div className='h-[92vh] w-full'>
//         <Outlet />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AdminLayout


import Leftbar from '@/components/Admin/Leftbar'
import Topbar from '@/components/Admin/Topbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='h-screen w-screen overflow-hidden flex'>
      {/* Fixed Leftbar */}
      <div className='w-1/6 h-screen fixed top-0 left-0 overflow-y-auto'>
        <Leftbar />
      </div>

      {/* Main Content */}
      <div className='w-5/6 ml-[16.67%] h-screen flex flex-col'>
        <Topbar />
        <div className='flex-1 overflow-y-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout

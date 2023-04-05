<template>
  <div class="m-2 min-h-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">พัสดุค้างจำหน่าย</button>
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">พัสดุที่จำหน่ายแล้ว</button>
    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">เพิ่มพัสดุ</button>

    <form class="max-w-110">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">ชื่อผู้รับ/ชื่อห้อง/เลขพัสดุ</label>
      <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ชื่อผู้รับ/ชื่อห้อง/เลขพัสดุ" required>
          <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ค้นหาพัสดุ</button>
      </div>
    </form>

    <div class="m-2 min-h-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        <li class="pb-3 sm:pb-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                  <img class="w-20 md:w-20 rounded-full" src="https://demo-deploy-vue.azurewebsites.net/assets/box2.png" alt="Neil image">
              </div>
              <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    ห้อง 101
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    ชื่อ มิกกี้ คุง
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    หมายเลขพัสดุ AEQF1234Z
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    ขนส่ง : Kerry Express
                  </p>
                </div>
            </div>
        </li>
      </ul>
      <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        <li class="pb-3 sm:pb-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                  <img class="w-20 md:w-20 rounded-full" src="https://demo-deploy-vue.azurewebsites.net/assets/box2.png" alt="Neil image">
              </div>
              <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    ห้อง 102
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    ชื่อ อ๊บ ป้า
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    หมายเลขพัสดุ SDQF1624D
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    ขนส่ง : Kerry Express
                  </p>
                </div>
            </div>
        </li>
      </ul>
    </div>

  </div>
</template>
<template>
    <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <div class="w-full md:w-1/2 text-xl">
                        <label for="simple-search text-center">ใบแจ้งหนี้</label>
                    </div>

                    <NuxtLink to='/successfulPayment'><button type="button"
                            class="text-white bg-green-500 hover:bg-green-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-15 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">ชำระแล้ว</button>
                    </NuxtLink>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center">
                        <thead class="text-xm text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-4 py-3">ห้อง</th>
                                <th scope="col" class="px-4 py-3">สถานะ</th>
                                <th scope="col" class="px-4 py-3">จำนวน(บาท)</th>
                                <th scope="col" class="px-4 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">101</th>
                                <td class="px-4 py-3">
                                    <span
                                        class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">ยังไม่ได้ชำระ</span>
                                </td>
                                <td class="px-4 py-3 items-center">
                                    1000
                                </td>
                                <td class="px-4 py-3">
                                    <!-- Modal toggle -->
                                    <button data-modal-target="staticModal" data-modal-toggle="staticModal"
                                        class="text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-15 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                        type="button">รายละเอียด
                                    </button>

                                    <!-- Main modal -->
                                    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
                                        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                                        <div class="relative w-full h-full max-w-2xl md:h-auto">
                                            <!-- Modal content -->
                                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                <!-- Modal header -->
                                                <div
                                                    class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                                        รายละเอียดใบแจ้งหนี้ห้อง 103
                                                    </h3>
                                                    <button type="button"
                                                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                        data-modal-hide="staticModal">
                                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd"
                                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                                clip-rule="evenodd"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <!-- Modal body -->
                                                <div
                                                    class="flex flex-col md:flex-row justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                                                    <div class="w-full md:w-1/2">
                                                        <p class="whitespace-pre-line text-gray-500 dark:text-gray-400">
                                                            IT หอพัก
                                                            63/42 ต.XX อ.XX จ.XX 40XXX
                                                            โทร: 092-XXXXXXX
                                                            สถานะ ชำระแล้ว
                                                        </p>
                                                    </div>
                                                    <div class="w-full md:w-1/2">
                                                        <p class="whitespace-pre-line text-gray-500 dark:text-gray-400">
                                                            เลขที่/ON : 10XX
                                                            วันที่ date : 30/12/65
                                                            ห้อง : 103
                                                            ชำระก่อน Due date : 5/01/66
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="space-y-3 md:space-y-0 md:space-x-4 p-4">
                                                    <table
                                                        class="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center">
                                                        <thead
                                                            class="text-xm text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                                            <tr>
                                                                <th scope="col" class="px-4 py-3"></th>
                                                                <th scope="col" class="px-4 py-3">รายการ</th>
                                                                <th scope="col" class="px-4 py-3">จำนวนเงิน</th>
                                                                <th scope="col" class="px-4 py-3"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="border-b dark:border-gray-700">
                                                                <th scope="row"
                                                                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    1</th>
                                                                <td class="px-4 py-3">
                                                                    ค่าห้อง
                                                                </td>
                                                                <td class="px-4 py-3 items-center">
                                                                    4,000
                                                                </td>
                                                            </tr>
                                                            <tr class="border-b dark:border-gray-700">
                                                                <th scope="row"
                                                                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    2</th>
                                                                <td class="px-4 py-3">
                                                                    ค่าน้ำ
                                                                </td>
                                                                <td class="px-4 py-3">
                                                                    100
                                                                </td>
                                                            </tr>
                                                            <tr class="border-b dark:border-gray-700">
                                                                <th scope="row"
                                                                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    3</th>
                                                                <td class="px-4 py-3">
                                                                    ค่าไฟ
                                                                </td>
                                                                <td class="px-4 py-3">
                                                                    400
                                                                </td>
                                                            </tr>
                                                            <tr class="border-b dark:border-gray-700">
                                                                <th scope="row"
                                                                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    4</th>
                                                                <td class="px-4 py-3">
                                                                    ค่าจอดรถ
                                                                </td>
                                                                <td class="px-4 py-3">
                                                                    300
                                                                </td>
                                                            </tr>
                                                            <tr class="border-b dark:border-gray-700">
                                                                <th scope="row"
                                                                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    5</th>
                                                                <td class="px-4 py-3">
                                                                    ค่าอินเตอร์เน็ต
                                                                </td>
                                                                <td class="px-4 py-3">
                                                                    200
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        <thead
                                                            class="text-xm text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                                            <tr>
                                                                <th scope="col" class="px-4 py-3">ค่าบริการ</th>
                                                                <th scope="col" class="px-4 py-3">
                                                                    <input type="text" id="text"
                                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                        placeholder="รายการ">
                                                                </th>
                                                                <th scope="col" class="px-4 py-3">
                                                                    <input type="text" id="text"
                                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                        placeholder="จำนวนเงิน">
                                                                </th>
                                                                <th scope="col" class="px-4 py-3">
                                                                    <button type="button"
                                                                        class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">+
                                                                        เพิ่ม</button>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="border-b dark:border-gray-700">
                                                                <th></th>
                                                                <th></th>
                                                                <td class="px-4 py-3">
                                                                    ยอดค้างเก่า
                                                                </td>
                                                                <td class="px-4 py-3 items-center">
                                                                    5000
                                                                </td>
                                                            </tr>
                                                            <tr class="border-b dark:border-gray-700">
                                                                <th></th>
                                                                <th></th>
                                                                <td class="px-4 py-3">
                                                                    รวม
                                                                </td>
                                                                <td class="px-4 py-3 items-center">
                                                                    5000
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <!-- Modal footer -->
                                                <div
                                                    class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                    <button data-modal-hide="staticModal" type="button"
                                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">OK</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">102</th>
                                <td class="px-4 py-3">
                                    <span
                                        class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">ค่างชำระ</span>
                                </td>

                                <td class="px-4 py-3">
                                    1200
                                </td>
                                <td class="px-4 py-3">
                                    <button type="button"
                                        class="text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-15 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">รายละเอียด</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                    aria-label="Table navigation">
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Showing
                        <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
                        of
                        <span class="font-semibold text-gray-900 dark:text-white">100</span>
                    </span>
                    <ul class="inline-flex items-stretch -space-x-px">
                        <li>
                            <a href="#"
                                class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span class="sr-only">Previous</span>
                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="#"
                                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page"
                                class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                        </li>
                        <li>

                            <a href="#"
                                class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span class="sr-only">Next</span>

                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">

                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd" />

                                </svg>
                            </a>
                        </li>
                    </ul>

                </nav>
            </div>

        </div>

    </section>
</template>
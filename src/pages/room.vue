<template>
    <section class="bg-gray-50 dark:bg-gray-900  p-3 sm:p-5 ">
        <div class="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">
            <!-- Start coding here -->
            <div class="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                <div class="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                    <div class="w-full md:w-1/2">

                    </div>
                    <div
                        class="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">

                        <div class="flex items-center w-full space-x-3 md:w-auto">
                            <!-- Dropdown menu -->
                            <div class="flex items-center w-full space-x-3 md:w-auto">
                                <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown"
                                    class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    type="button">
                                    <svg class="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clip-rule="evenodd" fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                    เลือก
                                </button>
                                <div id="actionsDropdown"
                                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="actionsDropdownButton">
                                        <li>
                                            <a href="#"
                                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ห้องทั้งหมด</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ว่าง</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ไม่ว่าง</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">จองแล้ว</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ยังไม่ชำระ</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ชำระแล้ว</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ค้างชำระ</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <form class="flex items-center">
                                <label for="simple-search" class="sr-only">Search</label>
                                <div class="relative w-full">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search"
                                        class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Search">
                                </div>
                            </form>
                            <button type="button"
                                class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                ค้นหา
                            </button>
                        </div>
                    </div>
                </div>
                <hr class="p-2">
                <div
                    class="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3 p-3">
                    <div class="flex">
                        <il class="mr-4">
                            เลือก:
                        </il>
                        <div class="flex items-center mr-4">
                            <input id="inline-radio" type="radio" value="" name="inline-radio-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="inline-radio"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">แอร์</label>
                        </div>
                        <div class="flex items-center mr-4">
                            <input id="inline-2-radio" type="radio" value="" name="inline-radio-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="inline-2-radio"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">พัดลม</label>
                        </div>
                        <div class="flex items-center mr-4">
                            <input id="inline-2-radio" type="radio" value="" name="inline-radio-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="inline-2-radio"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">พัดลม+แอร์</label>
                        </div>

                    </div>
                </div>
            </div>
            <div class=" grid grid-cols-2 md:grid-cols-4">
                <div v-for="i in room" :key="i.number" :value="i.number">
                    <div id="defaultModalButton" data-modal-toggle="defaultModal"
                        class="m-4 p-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  shadow hover:bg-gray-100 ">
                        <div class="flex">
                            <div><a href="#">
                                    <h3 class=" mb-10 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        {{
                                            i.number
                                        }}
                                    </h3>
                                </a>
                            </div>
                            <div v-if="i.status !== 0">
                                <svg width="30" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd"
                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                                </svg>
                            </div>
                        </div>

                        <div class="flex items-center">
                            <div v-if="i.status === 0">
                                <span
                                    class="bg-gray-100 text-gray-800 text-md font-medium mr-2 px-2 rounded-full border border-gray-400 ">ว่าง</span>
                            </div>
                            <div v-if="i.status === 3">
                                <span
                                    class="bg-red-200 text-gray-800 text-md font-medium mr-2 px-2 rounded-full   border border-red-400">ค้างชำระ</span>
                            </div>
                            <div v-if="i.status === 2">
                                <span
                                    class="bg-yellow-200 text-gray-800 text-md font-medium mr-2 px-2 rounded-full border border-yellow-400 ">ไม่ว่าง</span>
                            </div>
                            <div v-if="i.status === 4">
                                <span
                                    class=" bg-green-200 text-gray-800 text-md font-medium mr-2 px-2 rounded-full border border-green-400 ">ชำระแล้ว</span>
                            </div>
                            <div v-if="i.status === 1">
                                <span
                                    class="bg-blue-200 text-gray-800 text-md font-medium mr-2 px-2 rounded-full border border border-blue-400">ไม่ว่าง</span>
                            </div>
                            <div v-if="i.status === 5">
                                <span
                                    class="bg-blue-500 text-white text-md font-medium mr-2 px-2 rounded-full border border border-blue-400">รอย้ายออก</span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div id="defaultModal" tabindex="-1" aria-hidden="true"
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full bg-gray-100">
                <div class="relative p-4 w-full max-w-1xl h-full md:h-auto">
                    <!-- Modal content -->
                    <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <!-- Modal header -->
                        <div
                            class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                จัดการห้องพัก
                            </h3>
                            <button type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="defaultModal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div class="flex gap-2 px-6 ">
                            <h1 class="px-auto text-lg font-semibold text-gray-900 dark:text-white">ห้อง 101</h1>
                            <svg width="20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                            </svg>
                            <span class="bg-blue-200 text-blue-800 text-md font-medium mr-2 px-2 rounded-full border border-blue-400 ">ไม่ว่าง</span>
                        </div>
                        <div class="bg-primary-100 mt-2">
                            <p class="px-6 text-lg ">ผู้เช่า</p>
                        </div>
                        <div class="grid grid-cols-3 px-6 mt-5 ">
                            <div class="">
                                <p class="mb-2">เวลาเข้าพัก</p>
                                <p class="mb-2">ราคาห้องพัก</p>
                                <p class="mb-2">ค่าประกัน</p>
                                <p class="mb-2">ชื่อ-สกุล </p>
                                <p class="mb-2">เบอร์ติดต่อ</p>
                            </div>
                            <div>
                                <p class="mb-2">05/15/23</p>
                                <p class="mb-2">4,000</p>
                                <p class="mb-2">2,000</p>
                                <p class="mb-2">ใจดี สุขใจ</p>
                                <p class="mb-2">09x-XXXXXXX</p>
                            </div>                            
                        </div>                        
                        <!-- Modal body -->
                        <form action="#">
                            <div class="gap-2 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-5 lg:px-6 ">
                                <NuxtLink to='/reserveRoom' type="submit"
                                    class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path
                                            d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z">
                                        </path>
                                    </svg>
                                    เพิ่มผู้เช้า
                                </NuxtLink>


                                <NuxtLink to='/reserveRoom' type="submit"
                                    class="text-white inline-flex items-center bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-500 dark:focus:ring-yellow-500">
                                    <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    จอง
                                </NuxtLink>
                                <NuxtLink to='/reserveRoom' type="submit"
                                    class="text-white inline-flex items-center bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-500 dark:focus:ring-yellow-500">
                                    <svg class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clip-rule="evenodd" fill-rule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z">
                                        </path>
                                    </svg>
                                    ย้ายออก
                                </NuxtLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
export default ({
    name: 'App',
    data() {
        return {
            room: [
                {
                    number: '101',
                    status: 0,
                },
                {
                    number: '102',
                    status: 1,
                },
                {
                    number: '103',
                    status: 2,
                },
                {
                    number: '104',
                    status: 3,
                },
                {
                    number: '105',
                    status: 4,
                },
                {
                    number: '106',
                    status: 5,
                },
            ]

        }
    }
})
</script>







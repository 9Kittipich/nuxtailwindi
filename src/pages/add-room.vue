<template>
  <div class="m-4 p-2">
    <div class="flex justify-end">
      <div>
        <button
          data-modal-target="type_room"
          data-modal-toggle="type_room"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          เพิ่มประเภทห้องพัก
        </button>

        <div
          id="type_room"
          tabindex="-1"
          class="fixed group top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
        >
          <div class="relative w-full h-full max-w-4xl md:h-auto">
            <!-- Modal content -->
            <div class="grid grid-cols-2 gap-2">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="relative w-full h-full max-w-md md:h-auto">
                  <div
                    class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                  >
                    <button
                      type="button"
                      class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      data-modal-hide="type_room"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                    <div class="px-6 py-6 lg:px-8">
                      <h3
                        class="mb-4 text-xl font-medium text-gray-900 dark:text-white"
                      >
                        เพิ่มประเภทของห้องพัก
                      </h3>
                      <form class="space-y-6" action="#">
                        <div>
                          <div>
                            <div class="mb-2">
                              <label
                                for="room_type"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >ประเภทห้อง</label
                              >
                              <input
                                type="text"
                                id="room_type"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=" "
                                required
                              />
                            </div>
                            <div class="mb-2">
                              <label
                                for="room_type"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >ราคา</label
                              >
                              <input
                                type="text"
                                id="room_type"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=" "
                                required
                              />
                            </div>
                          </div>

                          <div class="py-3">
                            <label
                              for="room_type"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >สิ่งอำนวยความสะดวก</label
                            >
                            <div class="grid grid-cols-2 gap-2">
                              <div class="flex items-center mb-2">
                                <input
                                  id="checkbox-1"
                                  type="checkbox"
                                  value=""
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-1"
                                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >ตู้เย็น</label
                                >
                              </div>
                              <div class="flex items-center mb-2">
                                <input
                                  id="checkbox-2"
                                  type="checkbox"
                                  value=""
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-2"
                                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >เครื่องทำน้ำอุ่น</label
                                >
                              </div>
                              <div class="flex items-center mb-2">
                                <input
                                  id="checkbox-3"
                                  type="checkbox"
                                  value=""
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-3"
                                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >เครื่องซักผ้า</label
                                >
                              </div>
                              <div class="flex items-center mb-2">
                                <input
                                  id="checkbox-4"
                                  type="checkbox"
                                  value=""
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-4"
                                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >ไมโครเวฟ</label
                                >
                              </div>
                            </div>
                          </div>

                          <div>
                            <label
                              for="room_type"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >ประเภทห้อง</label
                            >

                            <ul
                              class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            >
                              <li
                                class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
                              >
                                <div class="flex items-center pl-3">
                                  <input
                                    id="room_air"
                                    type="radio"
                                    value=""
                                    name="list-radio"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                  />
                                  <label
                                    for="room_air"
                                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >ห้องแอร์
                                  </label>
                                </div>
                              </li>
                              <li
                                class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
                              >
                                <div class="flex items-center pl-3">
                                  <input
                                    id="room_fan"
                                    type="radio"
                                    value=""
                                    name="list-radio"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                  />
                                  <label
                                    for="room_fan"
                                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >ห้องพัดลม</label
                                  >
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <button
                          type="submit"
                          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          เพิ่ม
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table
                    class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                  >
                    <thead
                      class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                    >
                      <tr>
                        <th scope="col" class="px-6 py-3">ประเภทของห้อง</th>
                        <th scope="col" class="px-6 py-3">ราคา</th>
                        <th scope="col" class="px-6 py-3">แก้ไข/ลบ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          ธรรมดา
                        </th>
                        <td class="px-6 py-4">2500</td>
                        <td class="px-6 py-4">
                          <a
                            href="#"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >แก้ไข</a
                          ><b> &nbsp;|&nbsp; </b>
                          <a
                            href="#"
                            class="font-medium text-red-600 dark:text-red-500 hover:underline"
                            >ลบ</a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          type="button"
          data-modal-target="add_room"
          data-modal-toggle="add_room"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          เพิ่มห้องพัก
        </button>
        <div
          id="add_room"
          tabindex="-1"
          aria-hidden="true"
          class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
        >
          <div class="relative w-full h-full max-w-md md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="add_room"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
              <div class="px-6 py-6 lg:px-8">
                <h3
                  class="mb-4 text-xl font-medium text-gray-900 dark:text-white"
                >
                  เพิ่มห้องพัก
                </h3>
                <form class="space-y-6" action="#">
                  <div>
                    <div class="grid grid-cols-2 gap-2">
                      <div>
                        <label
                          for="countries"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >ชั้นที่</label
                        >
                        <select
                          id="countries"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>เลือกชั้น</option>
                          <option value="1">ชั้นที่ 1</option>
                          <option value="2">ชั้นที่ 2</option>
                          <option value="3">ชั้นที่ 3</option>
                          <option value="4">ชั้นที่ 4</option>
                        </select>
                      </div>
                      <div>
                        <label
                          for="countries"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >เลือกประเภทห้องพัก</label
                        >
                        <select
                          id="countries"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>ประเภทห้อง</option>
                          <option value="3">ธรรมดา</option>
                          <option value="5">VIP</option>
                          <option value="7">First Class</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label
                        for="water_price"
                        class="block mb-2 pt-2 text-sm font-medium text-gray-900 dark:text-white"
                        >กำหนดหมายเลขห้อง</label
                      >
                      <input
                        type="text"
                        id="water_price"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=" "
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    เพิ่ม
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          data-modal-target="payment_date"
          data-modal-toggle="payment_date"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          กำหนดการชำระ
        </button>

        <div
          aria-labelledby="exampleModalFullscreenLabel"
          id="payment_date"
          tabindex="-1"
          aria-hidden="true"
          class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
        >
          <div class="relative w-full h-full max-w-md md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="payment_date"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
              <div class="px-6 py-6 lg:px-8">
                <h3
                  class="mb-4 text-xl font-medium text-gray-900 dark:text-white"
                >
                  กำหนดการชำระเงิน
                </h3>
                <form class="space-y-6" action="#">
                  <div>
                    <div>
                      <label>การชำระค่าปรับ</label>
                    </div>
                    <div>
                      <ul
                        class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      >
                        <li
                          class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
                        >
                          <div class="flex items-center pl-3">
                            <input
                              id="necessary"
                              type="radio"
                              value=""
                              name="list-radio"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="necessary"
                              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >จำเป็นต้องชำระ
                            </label>
                          </div>
                        </li>
                        <li
                          class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
                        >
                          <div class="flex items-center pl-3">
                            <input
                              id="unnecessary"
                              type="radio"
                              value=""
                              name="list-radio"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="unnecessary"
                              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >ไม่จำเป็นต้องชำระ</label
                            >
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div class="grid grid-cols-2 gap-1 mt-2">
                      <div>
                        <label
                          for="countries"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >วันสุดท้ายของการชำระ</label
                        >
                        <select
                          id="countries"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>เลือกวันที่</option>
                          <option value="3">วันที่ 3</option>
                          <option value="5">วันที่ 5</option>
                          <option value="7">วันที่ 7</option>
                        </select>
                      </div>
                      <div>
                        <div>
                          <label
                            for="late_fines"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >จำนวนค่าปรับ (บาท)</label
                          >
                          <input
                            type="text"
                            id="late_fines"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=" "
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label>การชำระค่าไฟฟ้า</label>
                    <div class="grid grid-cols-2 gap-1">
                      <div>
                        <label
                          for="countries"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >การคิดค่าไฟฟ้า</label
                        >
                        <select
                          id="countries"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>เลือกหน่วย</option>
                          <option value="1">แบบเหมาจ่าย</option>
                          <option value="2">ธนาคาร</option>
                        </select>
                      </div>
                      <div>
                        <div>
                          <label
                            for="late_fines"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >ราคาค่าไฟ (บาท)</label
                          >
                          <input
                            type="text"
                            id="late_fines"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=" "
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label>การชำระค่าน้ำ</label>
                    <div class="grid grid-cols-2 gap-1">
                      <div>
                        <label
                          for="countries"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >การคิดค่าน้ำ</label
                        >
                        <select
                          id="countries"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>เลือกหน่วย</option>
                          <option value="1">แบบเหมาจ่าย</option>
                          <option value="2">ธนาคาร</option>
                        </select>
                      </div>
                      <div>
                        <div>
                          <label
                            for="water_price"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >ราคาค่าน้ำ (บาท)</label
                          >
                          <input
                            type="text"
                            id="water_price"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=" "
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    บันทึก
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          data-modal-target="bank_account"
          data-modal-toggle="bank_account"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          ตั้งค่าบัญชีธนาคาร
        </button>

        <div
          id="bank_account"
          tabindex="-1"
          aria-hidden="true"
          class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
        >
          <div class="relative w-full h-full max-w-md md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="bank_account"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
              <div class="px-6 py-6 lg:px-8">
                <h3
                  class="mb-4 text-xl font-medium text-gray-900 dark:text-white"
                >
                  กำหนดบัญชีธนาคาร
                </h3>
                <form class="space-y-6" action="#">
                  <div>
                    <div class="grid grid-cols-2 gap-1">
                      <div>
                        <label
                          for="countries"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >ธนาคาร</label
                        >
                        <select
                          id="countries"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>เลือกธนาคาร</option>
                          <option value="1">ธนาคารกรุงไทย</option>
                          <option value="2">ธนาคารกรุงเทพ</option>
                          <option value="3">ธนาคารกสิกรไทย</option>
                          <option value="4">ธนาคารทหารไทยธนชาต</option>
                          <option value="6">ธนาคารไทยพาณิชย์</option>
                          <option value="7">ธนาคารเกียรตินาคินภัทร</option>
                        </select>
                      </div>
                      <div>
                        <label
                          for="account_name"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >ชื่อบัญชี</label
                        >
                        <input
                          type="text"
                          id="account_name"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=" "
                          required
                        />
                      </div>
                    </div>
                    <div class="mb-6 mt-2">
                      <label
                        for="account_number"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >เลขที่บัญชี</label
                      >
                      <input
                        id="account_number"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="1234567890"
                        required
                      />
                    </div>
                    <label
                      for="message"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >ขั้นตอนการแจ้งการชำระเงิน</label
                    >
                    <textarea
                      id="message"
                      rows="2"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="ระบุข้อความ"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    บันทึก
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">ห้อง</th>
            <th scope="col" class="px-6 py-3">สถานะ</th>
            <th scope="col" class="px-6 py-3">ประเภทของห้อง</th>
            <th scope="col" class="px-6 py-3">สิ่งอำนวยความสะดวก</th>
            <th scope="col" class="px-6 py-3">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              5401
            </th>
            <td class="px-6 py-4">จองแล้ว</td>
            <td class="px-6 py-4">ธรรมดา</td>
            <td class="px-6 py-4">ตู้เย็น, เครื่องทำน้ำอุ่น</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >&nbsp;|&nbsp;
              <a
                href="#"
                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                >Delete</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script></script>

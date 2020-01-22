import Vue from 'vue';

Vue.component('my-navbar', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `
    <div class="container">
        <nav class="flex items-center justify-between flex-wrap p-2 text-black ">
            <div class="flex items-center flex-shrink-0 mr-6">
                <span class="font-semibold text-2xl tracking-tight">KUESIONER - Semester Ganjil 2019/2020</span>
            </div>

            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                </div>

                <div class="mr-20">
                    <form class="w-full max-w-sm float-right">
                    <div class="flex items-center border-b border-b-2 border-gray-400 py-1">
                        <input class="appearance-none border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none rounded" type="text" placeholder="Masukan Nama Anda" aria-label="Full name">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Masuk
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </nav>
    </div>
    
    `
  })
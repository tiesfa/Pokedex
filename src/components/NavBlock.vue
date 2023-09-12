<template>
    <div class="flex flex-col gap-4 lg:gap-8">
            <div class="relative flex w-full flex-wrap items-stretch">
                <input type="search"
                    class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto p-2 md:p-4 text-xs md:text-sm text-dark outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-blue-500 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                    placeholder="Search" aria-label="Search" aria-describedby="button-addon3" />
                <button
                    class="bg-dark text-light text-xs md:text-sm p-2 md:p-4 relative z-[2] transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                    type="button" id="button-addon3" data-te-ripple-init>
                    Search
                </button>
            </div>

        <div class="flex gap-4 lg:gap-8">
            <button class="bg-dark text-light text-xs md:text-sm p-2 md:p-4 w-full">151 - Mew</button>
            <button class="bg-dark text-light text-xs md:text-sm p-2 md:p-4 w-full">002 - Ivysaur</button>
        </div>
    </div>
</template>
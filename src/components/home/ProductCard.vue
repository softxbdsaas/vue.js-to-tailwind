<template>
  <div
      class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img class="h-48 w-full object-cover object-center"
         src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
         :alt="product.name"/>
    <div class="p-4">
      <h2 class="mb-2 text-lg font-medium  text-gray-900">Product Name</h2>
      <p class="mb-2 text-base text-gray-700">Product description goes here.</p>
      <div class="flex items-center  w-ful">
        <p class="mr-2 text-lg font-semibold text-gray-900l">$20.00</p>
        <p class="text-base  font-medium text-gray-500 line-through ">$25.00</p>
        <p class="ml-auto text-base font-medium text-green-500">20% off</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
<template>
    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <!-- Footer Logo & Text -->
          <div class="mb-4 md:mb-0">
            <h1 class="text-2xl font-bold">MyApp</h1>
            <p class="text-sm text-gray-400">© 2025 MyApp. All rights reserved.</p>
          </div>
  
          <!-- Footer Links -->
          <ul class="flex gap-5">
            <li>
              <router-link to="/" class="hover:text-gray-300">Home</router-link>
            </li>
            <li>
              <router-link to="/about" class="hover:text-gray-300">About</router-link>
            </li>
            <li>
              <router-link to="/services" class="hover:text-gray-300">Services</router-link>
            </li>
            <li>
              <router-link to="/contact" class="hover:text-gray-300">Contact</router-link>
            </li>
          </ul>
  
          <!-- Social Media Icons -->
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="#" class="hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636A9 9 0 015.636 18.364M15.536 8.464A5 5 0 018.464 15.536M9 12h.01M15 12h.01M12 9v.01M12 15v.01M21 12a9 9 0 11-9-9" />
              </svg>
            </a>
            <a href="#" class="hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.93 3c-2.63 0-4.68 2.05-4.68 4.58 0 .36.04.72.12 1.06A13.2 13.2 0 013 4.75a4.52 4.52 0 00-.63 2.3c0 1.58.81 2.97 2.04 3.79a4.47 4.47 0 01-2.12-.57v.06c0 2.21 1.59 4.05 3.7 4.46-.39.11-.8.17-1.22.17-.3 0-.6-.03-.89-.08.6 1.85 2.34 3.2 4.4 3.23A9.05 9.05 0 012 20.34a12.82 12.82 0 007 2c8.39 0 12.98-6.88 12.98-12.85 0-.2-.01-.39-.02-.58A9.22 9.22 0 0023 3z" />
              </svg>
            </a>
            <a href="#" class="hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12v.01M12 12v.01M16 12v.01M12 20.24l-3.07-2.02a9 9 0 116.14 0L12 20.24z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
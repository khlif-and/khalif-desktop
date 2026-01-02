
export function renderSplash(): void {
  const splashContainer = document.getElementById('splash-screen');
  if (!splashContainer) return;

  splashContainer.innerHTML = `
    <div class="relative flex flex-col items-center p-4">
      <div class="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl animate-bounce flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-4 md:mb-6">
        <svg class="w-8 h-8 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </div>
      <h1 class="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight">KHALIF</h1>
      <p class="text-xs md:text-sm text-gray-400 mt-2 font-medium tracking-wide">Future of Innovation</p>
      
      <div class="absolute -bottom-20 w-8 h-8 rounded-full border-2 border-indigo-100 border-t-indigo-600 animate-spin"></div>
    </div>
  `;
}

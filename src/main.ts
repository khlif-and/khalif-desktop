import './style.css';
import { renderSplash } from './splash';
import { renderOnboarding } from './onboarding';

const appContainer = document.querySelector<HTMLDivElement>('#app');
if (appContainer) {
  appContainer.innerHTML = `
  <div class="p-8 text-center pt-24">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">Welcome to the App!</h1>
    <p class="text-gray-600">You have successfully completed onboarding.</p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank" class="inline-block mt-8 text-indigo-600 hover:underline">Documentation</a>
  </div>
`;
}

function startApp(): void {
  const splash = document.getElementById('splash-screen');
  const onboarding = document.getElementById('onboarding-screen');
  const app = document.getElementById('app');

  if (!splash || !onboarding || !app) {
    console.error("Required elements not found");
    return;
  }

  renderSplash();
  splash.classList.remove('hidden');

  setTimeout(() => {
    splash.classList.add('opacity-0');

    setTimeout(() => {
      splash.classList.add('hidden');
      onboarding.classList.remove('hidden');

      renderOnboarding(() => {
        onboarding.classList.add('opacity-0', 'transition-opacity', 'duration-500');

        setTimeout(() => {
          onboarding.classList.add('hidden');
          app.classList.remove('hidden');
          app.classList.add('animate-fade-in-up');
        }, 500);
      });

    }, 1000);

  }, 2500);
}

startApp();

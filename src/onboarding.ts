
interface Slide {
    title: string;
    description: string;
    icon: string;
}

const slides: Slide[] = [
    {
        title: "Welcome to Khalif",
        description: "Experience the future of digital innovation with our cutting-edge platform.",
        icon: "🚀"
    },
    {
        title: "Seamless Integration",
        description: "Connect your workflow effortlessly with our powerful tools and intuitive design.",
        icon: "⚡"
    },
    {
        title: "Get Started Today",
        description: "Join thousands of users who are transforming their productivity.",
        icon: "✨"
    }
];

let currentSlide = 0;

export function renderOnboarding(onComplete: () => void): void {
    const container = document.getElementById('onboarding-screen');
    if (!container) return;

    const render = () => {
        container.innerHTML = `
      <div class="w-full h-full flex flex-col items-center justify-between p-6 md:p-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        
        <div class="w-full flex justify-end">
             ${currentSlide < slides.length - 1 ? `<button id="btn-skip" class="text-sm md:text-base text-gray-500 font-medium hover:text-indigo-600 transition-colors">Skip</button>` : ''}
        </div>

        <div class="flex-1 flex flex-col items-center justify-center text-center max-w-xs md:max-w-md animate-fade-in-up">
           <div class="w-28 h-28 md:w-40 md:h-40 bg-white rounded-full shadow-xl shadow-indigo-100 flex items-center justify-center text-4xl md:text-6xl mb-6 md:mb-8 transform transition-transform hover:scale-110 duration-300">
             ${slides[currentSlide].icon}
           </div>
           <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">${slides[currentSlide].title}</h2>
           <p class="text-sm md:text-base text-gray-600 leading-relaxed">${slides[currentSlide].description}</p>
        </div>

        <div class="w-full flex flex-col items-center gap-4 md:gap-6">
            <div class="flex gap-2">
              ${slides.map((_, idx) => `
                <div class="h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 md:w-8 bg-indigo-600' : 'w-2 bg-gray-300'}"></div>
              `).join('')}
            </div>

            <button id="btn-next" class="w-full py-3 md:py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/40 hover:bg-indigo-700 active:scale-95 transition-all text-sm md:text-base">
               ${currentSlide === slides.length - 1 ? "Get Started" : "Continue"}
            </button>
        </div>
      </div>
    `;

        const nextBtn = document.getElementById('btn-next');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentSlide < slides.length - 1) {
                    currentSlide++;
                    render();
                } else {
                    onComplete();
                }
            });
        }

        const skipBtn = document.getElementById('btn-skip');
        if (skipBtn) {
            skipBtn.addEventListener('click', onComplete);
        }
    };

    render();
}

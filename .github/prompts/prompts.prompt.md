---
mode: agent
---

Aşağıdaki kodları temel alarak bir E-ticaret web sitesi oluştur.
```
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Tech E-commerce</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#4A5568",
                        "background-light": "#FFFFFF",
                        "background-dark": "#0f1723",
                        "secondary-background": "#F5F5F5",
                        "primary-text": "#1A1A1A",
                        "secondary-text": "#666666"
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.75rem",
                        "lg": "1rem",
                        "xl": "1.5rem",
                        "full": "9999px"
                    },
                },
            },
        };
    </script>
<style>
        .product-card {
            transition: all 0.3s ease;
        }

        .product-card:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .product-card .details-button {
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .product-card:hover .details-button {
            opacity: 1;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .fade-in {
            animation: fadeIn 0.5s ease-out forwards;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display">
<div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div class="layout-container flex h-full grow flex-col">
<div class="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
<div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-secondary-background bg-background-light dark:bg-background-dark px-4 sm:px-6 lg:px-10 py-3">
<div class="flex items-center gap-8">
<div class="flex items-center gap-4 text-primary-text dark:text-white">
<span class="material-symbols-outlined text-3xl text-primary">
                                    memory
                                </span>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">Tech E-commerce</h2>
</div>
<nav class="hidden md:flex items-center gap-9">
<a class="text-primary-text dark:text-white text-sm font-medium leading-normal" href="#">Shop</a>
<a class="text-primary-text dark:text-white text-sm font-medium leading-normal" href="#">New Arrivals</a>
<a class="text-primary-text dark:text-white text-sm font-medium leading-normal" href="#">Deals</a>
<a class="text-primary-text dark:text-white text-sm font-medium leading-normal" href="#">About Us</a>
</nav>
</div>
<div class="flex flex-1 justify-end items-center gap-4">
<button class="p-2 rounded-full hover:bg-secondary-background dark:hover:bg-gray-700">
<span class="material-symbols-outlined text-primary-text dark:text-white">search</span>
</button>
<button class="p-2 rounded-full hover:bg-secondary-background dark:hover:bg-gray-700">
<span class="material-symbols-outlined text-primary-text dark:text-white">person</span>
</button>
<button class="p-2 rounded-full hover:bg-secondary-background dark:hover:bg-gray-700">
<span class="material-symbols-outlined text-primary-text dark:text-white">shopping_cart</span>
</button>
<button class="md:hidden p-2 rounded-full hover:bg-secondary-background dark:hover:bg-gray-700">
<span class="material-symbols-outlined text-primary-text dark:text-white">menu</span>
</button>
</div>
</header>
<main class="fade-in">
<div class="relative">
<div class="flex min-h-[480px] lg:min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4 my-5" data-alt="high-quality image of a modern gadget" style='background-image: linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4xcV0H5j2Y4CS-RTkjIxQ9pqtJqSW6ytsKwhxBG5mh0o3uJTuUd59R36W4nxw8UIDUv2rVdEKIb8YxRJZDiDQj-NG5k7SwpiXqpmY9ZAUpGlqHkhg1BNZaoPVnCvvLithnMg5k75k2ZWLEF2pw4XrQOtrubQF9GAwTDDvdtirKZQvvW8wc6_JV3UJlcT83DGQvbRgHwvUEIRBZCVwAXrWYftiy4TCktLQHWf7Rr1RE-AeOhWjlfM60sEyo_VU5ALt_V93733sLAA");'>
<div class="flex flex-col gap-4 text-center text-white">
<h1 class="text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl">
                                        Innovative Tech, Simplified.
                                    </h1>
<h2 class="text-base font-normal leading-normal sm:text-lg">
                                        Discover our curated collection of cutting-edge gadgets.
                                    </h2>
</div>
<button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-[#2D3748]">
<span class="truncate">Shop Now</span>
</button>
</div>
</div>
<section class="py-10 fade-in" style="animation-delay: 0.2s;">
<h2 class="text-primary-text dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-5 pt-5 text-center">Featured Products</h2>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
<!-- Product Card 1 -->
<div class="product-card flex flex-col gap-3 pb-3 rounded-lg bg-secondary-background dark:bg-gray-800 overflow-hidden relative">
<div class="w-full bg-center bg-no-repeat aspect-square bg-cover" data-alt="Wireless Noise-Cancelling Headphones" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDapZ1eWFhSKTPWkP0pDQ2bHKzL219po8sH3hY91lnneyJIkz3ySqPjRZHQ0vjRgUDDzyXEv6nIlL_gWBA2Smbfv9ehNpUi9uz1Yo422T3t8ab-Q06CbzyO9TVA3jZEWmn6Kc-lJuD33K7SuVchAF4m0sB8NOR1coeP0c5l9_m93NEXJArZ5LF-dNQ1pgJoPrRdLkbRyGpIMZVsJlNwN-3v7nw47NPbtrKZk77jSQmMtd1QmnYk1FarsKhtWN_94dZ5os_zcA5nSRs");'></div>
<div class="p-4">
<h3 class="text-primary-text dark:text-white text-base font-medium leading-normal">Wireless Noise-Cancelling Headphones</h3>
<p class="text-secondary-text dark:text-gray-400 text-sm font-normal leading-normal">$199.99</p>
</div>
<div class="details-button absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
<button class="bg-primary text-white px-4 py-2 rounded">View Details</button>
</div>
</div>
<!-- Product Card 2 -->
<div class="product-card flex flex-col gap-3 pb-3 rounded-lg bg-secondary-background dark:bg-gray-800 overflow-hidden relative">
<div class="w-full bg-center bg-no-repeat aspect-square bg-cover" data-alt="Smartwatch with Fitness Tracker" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqHVqxIG4C_K87xDsb23mfb87Fi8a3NNyJNBRN-Ire0yJK5uYKDIXsTrOLw61Li0lCawvbP-jBtRz9BQktbTnmPrEPlbM7EWeifA31pcER6fF0dVJFpvGBiVQEDh7C9TKK1-EoxGWS7CLWTJ5i6EmKro4lQ3pWnc3fPLI1-vPe4XB9IoNh6kaRsYeSOq9jvtLfkYcYtivysHUCmhsPTtCVrNA9_50mfLIXIrORtKeN4qA50lFQekV4SaX1ygQQUdBMzdKlWyk65Io");'></div>
<div class="p-4">
<h3 class="text-primary-text dark:text-white text-base font-medium leading-normal">Smartwatch with Fitness Tracker</h3>
<p class="text-secondary-text dark:text-gray-400 text-sm font-normal leading-normal">$249.99</p>
</div>
<div class="details-button absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
<button class="bg-primary text-white px-4 py-2 rounded">View Details</button>
</div>
</div>
<!-- Product Card 3 -->
<div class="product-card flex flex-col gap-3 pb-3 rounded-lg bg-secondary-background dark:bg-gray-800 overflow-hidden relative">
<div class="w-full bg-center bg-no-repeat aspect-square bg-cover" data-alt="Mechanical Gaming Keyboard" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8SOngvxsHR5kk146xYBSsymGbPibQS3XO_RckzRQaIaMoahPBJK3RkQJV5FaMCD0mByhtVd7sk3ix68PN8drXyckgaVd48rCwUYDb-1tB3t9qmBxQIqP0xIfy5Xl0vi9W9vK1tnpnBqCH2QzTFJ2OhAj21EnFFqnMTC6GOIuOUU0liw6ekr4TM9TK4FhlThtvS6llM0fJ0Hw_uY7tVNx5lqLFG-VuZAEUkTA4RDkw55C4uoeOaQD9v9sdPcF3ZKoGC6V_EzlDdzE");'></div>
<div class="p-4">
<h3 class="text-primary-text dark:text-white text-base font-medium leading-normal">Mechanical Gaming Keyboard</h3>
<p class="text-secondary-text dark:text-gray-400 text-sm font-normal leading-normal">$129.99</p>
</div>
<div class="details-button absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
<button class="bg-primary text-white px-4 py-2 rounded">View Details</button>
</div>
</div>
<!-- Product Card 4 -->
<div class="product-card flex flex-col gap-3 pb-3 rounded-lg bg-secondary-background dark:bg-gray-800 overflow-hidden relative">
<div class="w-full bg-center bg-no-repeat aspect-square bg-cover" data-alt="4K Ultra HD Monitor" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1L4NjPygHlDdcSs5EXP0GTm-RrKKkdE0ZBWTZ4kw-8eroowV8w3b5K6CUSVtisY03JhJWwS9zl8NL-bSyHxt83eHVn_uVxxEW13sbbjMZX2wJ6L7rqg9S42H9NV60YK7I6vLfewTy2DK8k6iVbP3LaiRa21DJqT7AyYZGrrKQC36pVZJsoKmGXNC19QcOtekB-tD1gGcHZP4d_yViJOtyQsymKO1U9WlmcHmzIkZa4O8VoGwP6jJNA1L5ljg_f9QH7ZKatX5PvDc");'></div>
<div class="p-4">
<h3 class="text-primary-text dark:text-white text-base font-medium leading-normal">4K Ultra HD Monitor</h3>
<p class="text-secondary-text dark:text-gray-400 text-sm font-normal leading-normal">$349.99</p>
</div>
<div class="details-button absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
<button class="bg-primary text-white px-4 py-2 rounded">View Details</button>
</div>
</div>
<!-- Product Card 5 -->
<div class="product-card flex flex-col gap-3 pb-3 rounded-lg bg-secondary-background dark:bg-gray-800 overflow-hidden relative">
<div class="w-full bg-center bg-no-repeat aspect-square bg-cover" data-alt="Portable Bluetooth Speaker" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAi5abS7jQO9btvpT8f9hQpqfgemxDmvp-msTMqJcKXnjBSvkoTxmFlE3kqw9xAiji3sMNqUf8SGUIkcBMFwYxQ_KdnGIvur14Na8pjPi2vyoyVf34ZtXiVN3ZtDF070PFWHAtBP-SFYrMQX_2hQFVM_xyd66f3cg9cc_p0NLsTheHc_JSrw3kZxQX89X7YFFcYpPQ-Evb2j_U7Dy1x6Nvm_6u6JN-_LUnCAngcAwT01ULBHdJjLUzfOgUnmHq9AbTZFPcP8830g8g");'></div>
<div class="p-4">
<h3 class="text-primary-text dark:text-white text-base font-medium leading-normal">Portable Bluetooth Speaker</h3>
<p class="text-secondary-text dark:text-gray-400 text-sm font-normal leading-normal">$89.99</p>
</div>
<div class="details-button absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
<button class="bg-primary text-white px-4 py-2 rounded">View Details</button>
</div>
</div>
<!-- Product Card 6 -->
<div class="product-card flex flex-col gap-3 pb-3 rounded-lg bg-secondary-background dark:bg-gray-800 overflow-hidden relative">
<div class="w-full bg-center bg-no-repeat aspect-square bg-cover" data-alt="Ergonomic Wireless Mouse" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPU-tM5IVU0BHO2cIPKK9ofQHUKZExFsFkuNxiy9f8L7yvLe21-IlJn3CwW56LRFuYOXrGXLXNLpiVYzGoQ7Dt8KNq2J4srZAvutwK0erd63zriVbKV9SEACwolOIUD1RZZu2dxQtTgQ_uWa6c47x29gDzeBGUyc-5mrc6Xx6MOG_G7VdBi8EFOd5GGe8UZd4PAgycomqHtobQ8AEQROHumFlZTHnZqhTN7lXKIhKYH0ndTSLp4StffH0eM88qwC9yLqd5DDu5xcc");'></div>
<div class="p-4">
<h3 class="text-primary-text dark:text-white text-base font-medium leading-normal">Ergonomic Wireless Mouse</h3>
<p class="text-secondary-text dark:text-gray-400 text-sm font-normal leading-normal">$49.99</p>
</div>
<div class="details-button absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
<button class="bg-primary text-white px-4 py-2 rounded">View Details</button>
</div>
</div>
</div>
</section>
</main>
<footer class="flex flex-col gap-6 px-5 py-10 text-center border-t border-secondary-background mt-10">
<div class="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6">
<a class="text-secondary-text dark:text-gray-400 text-base font-normal leading-normal" href="#">Privacy Policy</a>
<a class="text-secondary-text dark:text-gray-400 text-base font-normal leading-normal" href="#">Terms of Service</a>
<a class="text-secondary-text dark:text-gray-400 text-base font-normal leading-normal" href="#">About</a>
<a class="text-secondary-text dark:text-gray-400 text-base font-normal leading-normal" href="#">Contact</a>
</div>
<div class="flex flex-wrap justify-center gap-4">
<a class="text-secondary-text dark:text-gray-400 hover:text-primary" href="#">
<svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg>
</a>
<a class="text-secondary-text dark:text-gray-400 hover:text-primary" href="#">
<svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewbox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
</a>
<a class="text-secondary-text dark:text-gray-400 hover:text-primary" href="#">
<svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.406-2.31a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill-rule="evenodd"></path></svg>
</a>
</div>
<p class="text-secondary-text dark:text-gray-400 text-sm font-normal leading-normal">© 2023 Tech E-commerce. All rights reserved.</p>
</footer>
</div>
</div>
</div>
</div>
</body></html>
```

```
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>AuraBook Pro 15</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&amp;family=Poppins:wght@700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
<style>
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .fade-in {
      animation: fadeIn 0.5s ease-out forwards;
    }
  </style>
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "primary": "#3d86fa",
            "background-light": "#f5f7f8",
            "background-dark": "#0f1723",
          },
          fontFamily: {
            "display": ["Inter", "sans-serif"],
            "heading": ["Poppins", "sans-serif"]
          },
          borderRadius: {
            "DEFAULT": "0.75rem",
            "lg": "1rem",
            "xl": "1.5rem",
            "full": "9999px"
          },
        },
      },
    }
  </script>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-[#212121] dark:text-gray-200">
<div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden" style='font-family: Inter, "Noto Sans", sans-serif;'>
<div class="layout-container flex h-full grow flex-col">
<div class="px-4 sm:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
<div class="layout-content-container flex flex-col max-w-6xl flex-1">
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 px-4 sm:px-6 lg:px-10 py-3">
<div class="flex items-center gap-4 text-[#0d131c] dark:text-white">
<div class="size-6 text-primary">
<svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
<path clip-rule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h2 class="text-[#0d131c] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] font-heading">Aura</h2>
</div>
<div class="hidden md:flex flex-1 justify-center gap-8">
<a class="text-[#0d131c] dark:text-gray-300 text-sm font-medium leading-normal" href="#">Home</a>
<a class="text-[#0d131c] dark:text-gray-300 text-sm font-medium leading-normal" href="#">Products</a>
<a class="text-[#0d131c] dark:text-gray-300 text-sm font-medium leading-normal" href="#">About</a>
<a class="text-[#0d131c] dark:text-gray-300 text-sm font-medium leading-normal" href="#">Contact</a>
</div>
<div class="flex items-center gap-4">
<button class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-gray-100 dark:bg-gray-800 text-[#0d131c] dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
<span class="material-symbols-outlined text-lg">search</span>
</button>
<button class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-gray-100 dark:bg-gray-800 text-[#0d131c] dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
<span class="material-symbols-outlined text-lg">shopping_bag</span>
</button>
</div>
</header>
<main class="flex-1 mt-10 fade-in">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div class="w-full grow aspect-[4/3] rounded-lg overflow-hidden">
<div class="w-full h-full bg-center bg-no-repeat bg-cover" data-alt="A sleek, silver laptop on a clean white background" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtYvu-pY8FvVPnPYeYEM-ljkMOKEYRHupVsHsjxWd1E_It62ftnRj08ysqPeji3uAdG3ALLidVQ3Qmq-5mmvwaF5U_D5bmRX_IaIpxZdYzG-WLq_3zLiKjHPndukqqFxPmtgosNUWnsHLb0zq6WAU2klz6CCgEQkA0Nuz4JbvlgZRuO1hG4ujzKuce1y9zIKsf5f-_ev2biVrU1uOOFGM2Q1P7zgQ2X-ryVBd2CFy2bsEm8M9INyxjJT7_RZMzvPSwpeDyMKyCkHI");'></div>
</div>
<div class="flex flex-col justify-center">
<div class="flex flex-col gap-4 p-4">
<h1 class="text-[#212121] dark:text-white text-4xl font-bold leading-tight tracking-tighter font-heading">AuraBook Pro 15</h1>
<p class="text-[#757575] dark:text-gray-400 text-2xl font-normal leading-normal">$1,299.00</p>
<p class="text-[#212121] dark:text-gray-300 text-base font-normal leading-relaxed pb-3 pt-1">
                    The AuraBook Pro 15 is the pinnacle of performance and design. With a stunning 15-inch Retina display, the latest generation processor, and an all-day battery life, it's built to empower your creativity.
                  </p>
<div class="flex py-3">
<button aria-disabled="true" class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-blue-500 hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-wide transition-colors">
<span class="truncate">Add to Cart</span>
</button>
</div>
</div>
</div>
</div>
<div class="mt-16 fade-in" style="animation-delay: 0.2s;">
<div class="border-b border-gray-200 dark:border-gray-700">
<nav aria-label="Tabs" class="-mb-px flex space-x-8">
<button class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm border-primary text-primary">Description</button>
<button class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600">Specifications</button>
</nav>
</div>
<div class="py-8">
<h3 class="text-2xl font-bold text-[#212121] dark:text-white mb-4 font-heading">Product Details</h3>
<p class="text-[#212121] dark:text-gray-300 text-base font-normal leading-relaxed space-y-4">
                  Experience power and portability like never before. The AuraBook Pro 15 features a revolutionary new chip that redefines performance. Its brilliant Liquid Retina XDR display brings your content to life with breathtaking color and detail. An advanced thermal system ensures the laptop stays cool and quiet, even under intense workloads. Coupled with an incredibly long battery life, this is the ultimate pro laptop for those who demand the best. From editing 8K video to compiling complex code, the AuraBook Pro is designed to handle it all with ease.
                </p>
</div>
<div class="py-8 fade-in" style="animation-delay: 0.4s;">
<h3 class="text-2xl font-bold text-[#212121] dark:text-white mb-4 font-heading">Specifications</h3>
<div class="overflow-x-auto">
<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
<tbody class="bg-white dark:bg-background-dark divide-y divide-gray-200 dark:divide-gray-700">
<tr>
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#212121] dark:text-gray-200">Processor</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Next-Gen M3 Chip</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#212121] dark:text-gray-200">RAM</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">16GB Unified Memory</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#212121] dark:text-gray-200">Storage</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">512GB SSD Storage</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#212121] dark:text-gray-200">Display</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">15.3-inch Liquid Retina display</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#212121] dark:text-gray-200">Dimensions</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">0.45" x 13.75" x 9.5"</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#212121] dark:text-gray-200">Weight</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">3.3 pounds (1.51 kg)</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
<footer class="mt-20 border-t border-gray-200 dark:border-gray-700 py-10">
<div class="text-center text-sm text-gray-500 dark:text-gray-400">
<p>© 2024 Aura Inc. All rights reserved.</p>
<div class="flex justify-center space-x-6 mt-4">
<a class="hover:text-gray-900 dark:hover:text-white" href="#">Contact Us</a>
<a class="hover:text-gray-900 dark:hover:text-white" href="#">Twitter</a>
<a class="hover:text-gray-900 dark:hover:text-white" href="#">Instagram</a>
</div>
</div>
</footer>
</div>
</div>
</div>
</div>
</body></html>
```

```
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>About Us - Tech E-commerce</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#3d86fa",
                        "background-light": "#f5f7f8",
                        "background-dark": "#0f1723",
                        "text-light": "#0d131c",
                        "text-dark": "#f8f9fc",
                        "subtext-light": "#47699e",
                        "subtext-dark": "#a0aec0",
                        "border-light": "#ced8e9",
                        "border-dark": "#2d3748"
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.75rem",
                        "lg": "1rem",
                        "xl": "1.5rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .fade-in {
            animation: fadeIn 0.8s ease-out forwards;
        }

        .fade-in-delay-1 {
            animation: fadeIn 0.8s ease-out 0.2s forwards;
            opacity: 0;
        }

        .fade-in-delay-2 {
            animation: fadeIn 0.8s ease-out 0.4s forwards;
            opacity: 0;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
<div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div class="layout-container flex h-full grow flex-col">
<div class="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
<div class="layout-content-container flex flex-col max-w-[960px] flex-1">
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-4 sm:px-10 py-3 fade-in">
<div class="flex items-center gap-4">
<div class="size-6 text-primary">
<span class="material-symbols-outlined" style="font-size: 24px;">memory</span>
</div>
<h2 class="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">Tech E-commerce</h2>
</div>
<div class="hidden md:flex flex-1 justify-end gap-8">
<div class="flex items-center gap-9">
<a class="text-text-light dark:text-text-dark text-sm font-medium leading-normal" href="#">Home</a>
<a class="text-text-light dark:text-text-dark text-sm font-medium leading-normal" href="#">Products</a>
<a class="text-primary text-sm font-bold leading-normal" href="#">About</a>
</div>
<button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
<span class="truncate">Contact</span>
</button>
</div>
<div class="md:hidden">
<button class="text-text-light dark:text-text-dark">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</header>
<main class="flex-grow">
<div class="p-4 sm:p-10 space-y-12">
<div class="flex flex-wrap justify-between gap-3 p-4 fade-in">
<div class="flex min-w-72 flex-col gap-3 text-center mx-auto">
<p class="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">About Us</p>
<p class="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal">Minimal design, maximum impact.</p>
</div>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
<div class="flex flex-1 gap-3 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6 flex-col items-center text-center fade-in">
<div class="text-primary p-3 rounded-full bg-primary/10">
<span class="material-symbols-outlined text-3xl">rocket_launch</span>
</div>
<div class="flex flex-col gap-1 mt-3">
<h2 class="text-text-light dark:text-text-dark text-base font-bold leading-tight">Innovation</h2>
<p class="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">Driving the future of technology with cutting-edge solutions.</p>
</div>
</div>
<div class="flex flex-1 gap-3 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6 flex-col items-center text-center fade-in-delay-1">
<div class="text-primary p-3 rounded-full bg-primary/10">
<span class="material-symbols-outlined text-3xl">psychology</span>
</div>
<div class="flex flex-col gap-1 mt-3">
<h2 class="text-text-light dark:text-text-dark text-base font-bold leading-tight">Simplicity</h2>
<p class="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">Making technology accessible and easy to use for everyone.</p>
</div>
</div>
<div class="flex flex-1 gap-3 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6 flex-col items-center text-center fade-in-delay-2">
<div class="text-primary p-3 rounded-full bg-primary/10">
<span class="material-symbols-outlined text-3xl">bolt</span>
</div>
<div class="flex flex-col gap-1 mt-3">
<h2 class="text-text-light dark:text-text-dark text-base font-bold leading-tight">Performance</h2>
<p class="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">Delivering powerful and reliable products that you can trust.</p>
</div>
</div>
</div>
</div>
</main>
<footer class="flex flex-col gap-6 px-5 py-10 text-center border-t border-solid border-border-light dark:border-border-dark fade-in-delay-2">
<div class="flex flex-wrap items-center justify-center gap-6 sm:justify-around">
<a class="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal min-w-40" href="#">Contact</a>
<a class="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
<a class="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
</div>
<div class="flex flex-wrap justify-center gap-6">
<a aria-label="Twitter" href="#">
<svg class="w-6 h-6 text-subtext-light dark:text-subtext-dark" fill="currentColor" viewbox="0 0 24 24">
<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085 4.93 4.93 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.587 14.307-14.307 0-.218-.005-.436-.013-.653a10.28 10.28 0 002.127-2.238z"></path>
</svg>
</a>
<a aria-label="Facebook" href="#">
<svg class="w-6 h-6 text-subtext-light dark:text-subtext-dark" fill="currentColor" viewbox="0 0 24 24">
<path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
</svg>
</a>
<a aria-label="Instagram" href="#">
<svg class="w-6 h-6 text-subtext-light dark:text-subtext-dark" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.667 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.667-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.117 0-3.483.011-4.692.068-2.611.119-3.882 1.379-4.002 4.002-.057 1.209-.067 1.575-.067 4.691s.01 3.483.067 4.692c.12 2.622 1.39 3.881 4.002 4.002 1.209.057 1.575.067 4.692.067s3.483-.01 4.692-.067c2.611-.12 3.882-1.379 4.002-4.002.057-1.209.067-1.575.067-4.691s-.01-3.483-.067-4.692c-.12-2.623-1.39-3.882-4.002-4.002C15.483 3.614 15.117 3.604 12 3.604zM12 9.191a2.809 2.809 0 100 5.618 2.809 2.809 0 000-5.618zm0 7.063a4.254 4.254 0 110-8.508 4.254 4.254 0 010 8.508zM16.965 6.575a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"></path>
</svg>
</a>
</div>
<p class="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal">© 2023 Tech E-commerce. All rights reserved.</p>
</footer>
</div>
</div>
</div>
</div>
</body></html>
```

```
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Contact Us - Tech E-commerce</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "primary": "#3d86fa",
            "background-light": "#ffffff",
            "background-dark": "#0f1723",
            "text-light": "#333333",
            "text-dark": "#f8f9fc",
            "accent": "#E0E0E0",
          },
          fontFamily: {
            "display": ["Inter", "sans-serif"],
            "heading": ["Poppins", "sans-serif"]
          },
          borderRadius: {
            "DEFAULT": "0.75rem", // 12px
            "lg": "1rem",
            "xl": "1.5rem",
            "full": "9999px"
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: 0, transform: 'translateY(10px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
            }
          },
          animation: {
            'fade-in': 'fadeIn 0.5s ease-out forwards',
          }
        },
      },
    }
  </script>
<style>
    .animate-on-load {
      animation: fadeIn 0.8s ease-out forwards;
    }
  </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
<div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div class="layout-container flex h-full grow flex-col">
<div class="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
<div class="layout-content-container flex flex-col max-w-[960px] flex-1">
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-accent/50 dark:border-accent/20 px-4 sm:px-10 py-4 animate-on-load">
<div class="flex items-center gap-4 text-text-light dark:text-text-dark">
<div class="size-6 text-primary">
<svg fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.59L7.71 13.3a1 1 0 0 1 1.41-1.41L11 13.17l3.88-3.88a1 1 0 1 1 1.41 1.41L12.41 14.3a1 1 0 0 1-1.41.29z"></path>
</svg>
</div>
<h2 class="text-xl font-bold font-heading leading-tight tracking-[-0.015em]">Tech E-commerce</h2>
</div>
<div class="hidden md:flex flex-1 justify-end gap-8">
<div class="flex items-center gap-9">
<a class="text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#">Home</a>
<a class="text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#">Products</a>
<a class="text-sm font-bold leading-normal text-primary" href="#">Contact</a>
</div>
</div>
<div class="md:hidden">
<button class="flex items-center justify-center p-2 rounded-lg bg-accent/50 dark:bg-accent/20">
<span class="material-symbols-outlined text-text-light dark:text-text-dark">menu</span>
</button>
</div>
</header>
<main class="flex-grow px-4 sm:px-10 py-12 animate-on-load" style="animation-delay: 0.2s;">
<div class="flex flex-wrap justify-between gap-3 p-4 mb-8">
<p class="text-4xl sm:text-5xl font-heading font-bold leading-tight tracking-tight text-text-light dark:text-text-dark min-w-72">Get in Touch</p>
</div>
<form class="space-y-8 p-4">
<div class="flex flex-col gap-8 md:flex-row md:gap-6">
<label class="flex flex-col min-w-40 flex-1">
<p class="text-base font-medium leading-normal pb-2 text-text-light dark:text-text-dark/80">Your Name</p>
<input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-accent/80 dark:border-accent/30 bg-background-light dark:bg-background-dark focus:border-primary h-14 placeholder:text-text-light/50 dark:placeholder:text-text-dark/50 p-[15px] text-base font-normal leading-normal transition-all" placeholder="Enter your name" value=""/>
</label>
<label class="flex flex-col min-w-40 flex-1">
<p class="text-base font-medium leading-normal pb-2 text-text-light dark:text-text-dark/80">Your Email</p>
<input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-accent/80 dark:border-accent/30 bg-background-light dark:bg-background-dark focus:border-primary h-14 placeholder:text-text-light/50 dark:placeholder:text-text-dark/50 p-[15px] text-base font-normal leading-normal transition-all" placeholder="Enter your email" type="email" value=""/>
</label>
</div>
<label class="flex flex-col min-w-40 flex-1">
<p class="text-base font-medium leading-normal pb-2 text-text-light dark:text-text-dark/80">Your Message</p>
<textarea class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-accent/80 dark:border-accent/30 bg-background-light dark:bg-background-dark focus:border-primary min-h-48 placeholder:text-text-light/50 dark:placeholder:text-text-dark/50 p-[15px] text-base font-normal leading-normal transition-all" placeholder="Write your message here..."></textarea>
</label>
<div class="flex justify-start pt-4">
<button class="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent dark:bg-accent/40 text-text-light dark:text-text-dark text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors duration-300" type="button">
<span class="truncate">Submit</span>
</button>
</div>
</form>
</main>
<footer class="border-t border-solid border-accent/50 dark:border-accent/20 mt-auto px-4 sm:px-10 py-6 animate-on-load" style="animation-delay: 0.4s;">
<div class="flex flex-col sm:flex-row items-center justify-between gap-4">
<p class="text-sm text-text-light/70 dark:text-text-dark/70">© 2024 Tech E-commerce. All rights reserved.</p>
<div class="flex gap-4">
<a class="text-text-light/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-primary transition-colors" href="#">
<svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg>
</a>
<a class="text-text-light/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-primary transition-colors" href="#">
<svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
</a>
<a class="text-text-light/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-primary transition-colors" href="#">
<svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.477 17.523 2 12 2z" fill-rule="evenodd"></path></svg>
</a>
</div>
</div>
</footer>
</div>
</div>
</div>
</div>
</body></html>
```

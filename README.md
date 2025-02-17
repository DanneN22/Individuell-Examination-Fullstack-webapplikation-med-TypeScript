README - Riddle Game med TypeScript

📌 Projektbeskrivning

Detta projekt är ett riddle-spel byggt med TypeScript. Användaren kan hämta gåtor, visa svar och få ledtrådar samtidigt som en poängräkning hålls. Data lagras lokalt med localStorage.

📂 Filstruktur

/project-root
│── src/
│   ├── index.ts (Huvudfilen för spelet)
│── dist/
│   ├── index.js (Kompilerad JavaScript-kod)
│── tsconfig.json (TypeScript-konfiguration)
│── README.md (Denna fil)

🔧 Installation och användning

Kloning av repository:

git clone <repo-url>
cd <repo-folder>

Installera TypeScript:

npm install -g typescript

Kompilera TypeScript-koden:

tsc

Öppna dist/index.js i en webbläsare eller server.

🚀 Funktionalitet

Hämta gåtor från en API-endpoint

Visa fråga, ledtrådar och svar

Poängsystem där användaren förlorar poäng vid ledtrådsanvändning

Lokal lagring av poäng och speldata

🛠️ Fixade buggar och förbättringar

✅ Lagt till null-säkerhet för querySelector
✅ Fixat dubblettfunktioner och variabelkonflikter
✅ Justerat tsconfig.json för att ignorera dist/
✅ Hanterat eventuella null-värden för DOM-element
✅ Lagt till korrekt typning för TypeScript-kompatibilitet

📜 TypeScript-konfiguration

Den uppdaterade tsconfig.json innehåller:

{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["./src"],
  "exclude": ["node_modules", "dist"]
}

🔄 Underhåll och framtida förbättringar

Möjlighet att spara högsta poäng

UI-förbättringar

Fler svårighetsnivåer för gåtor

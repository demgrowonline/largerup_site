import re
import os

with open('assets/logo-mark.svg', 'r', encoding='utf-8') as f:
    text = f.read()

paths = re.findall(r'<path d="([^"]+)"', text)
print(f'Total paths found: {len(paths)}')

os.makedirs('src/components', exist_ok=True)

with open('src/components/LargerUpLogo.tsx', 'w', encoding='utf-8') as out:
    out.write('''import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  withText?: boolean;
}

export function LargerUpLogo({ className = "text-white", size = 32, withText = true }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <div 
        style={{ width: size, height: size }} 
        className="relative flex items-center justify-center shrink-0"
      >
        <svg
          viewBox="470 120 590 760"
          fill="currentColor"
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
          xmlns="http://www.w3.org/2000/svg"
        >
''')
    for d in paths:
        out.write(f'          <path d="{d}" />\n')
    out.write('''        </svg>
      </div>
      {withText && (
        <span className="font-semibold tracking-tight text-white text-[17px] font-sans flex items-center">
          Larger<span className="text-zinc-400">Up</span>
        </span>
      )}
    </div>
  );
}
''')

print('Successfully generated src/components/LargerUpLogo.tsx')

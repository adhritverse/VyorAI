const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function replaceInFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Replace direct class references
  content = content.replace(/emerald-500/g, 'vyor-steel');
  content = content.replace(/emerald-400/g, 'vyor-light');
  content = content.replace(/emerald-300/g, 'vyor-light');
  content = content.replace(/emerald-100/g, 'vyor-silver');
  content = content.replace(/emerald-600/g, 'vyor-navy');
  
  content = content.replace(/teal-500/g, 'vyor-steel');
  content = content.replace(/teal-400/g, 'vyor-light');
  
  // Replace RGBA glows
  content = content.replace(/rgba\(16,185,129/g, 'rgba(71,84,106');
  content = content.replace(/rgba\(52,211,153/g, 'rgba(176,180,188');
  
  // Also fix "selection:bg-emerald-500/30" to "selection:bg-vyor-steel/30"
  // already covered by emerald-500

  // Replace selection:bg-purple-500/30 in layout.tsx to vyor-steel
  content = content.replace(/purple-500/g, 'vyor-steel');
  
  // In Products.tsx theme parsing: theme: 'emerald' -> 'vyor'
  content = content.replace(/theme:\s*["']emerald["']/g, 'theme: "vyor"');
  content = content.replace(/emerald:/g, 'vyor:');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + filePath);
  }
}

walkDir('./components', replaceInFile);
walkDir('./app', replaceInFile);

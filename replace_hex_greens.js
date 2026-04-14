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
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.js')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Replace raw hex codes
  content = content.replace(/#10B981/gi, '#B0B4BC'); // mapping everything to vyor-light/gray scale
  content = content.replace(/#34d399/gi, '#DDDFE1');
  content = content.replace(/#6ee7b7/gi, '#DDDFE1');
  content = content.replace(/#059669/gi, '#47546A');
  content = content.replace(/#047857/gi, '#122644');
  
  // Replace spaced RGBA (important for the hero gradient)
  // rgba(16, 185, 129 -> vyor-light (176, 180, 188)
  content = content.replace(/rgba\(\s*16\s*,\s*185\s*,\s*129/g, 'rgba(176, 180, 188');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + filePath);
  }
}

walkDir('./components', replaceInFile);
walkDir('./app', replaceInFile);

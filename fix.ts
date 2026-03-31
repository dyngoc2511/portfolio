import fs from 'fs';

const files = ['src/views/Home.tsx', 'src/views/CaseStudy.tsx'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace image: "./..." with image: import.meta.env.BASE_URL + "..."
  content = content.replace(/image:\s*"\.\/([^"]+)"/g, 'image: import.meta.env.BASE_URL + "$1"');
  
  // Replace heroImage: "./..." with heroImage: import.meta.env.BASE_URL + "..."
  content = content.replace(/heroImage:\s*"\.\/([^"]+)"/g, 'heroImage: import.meta.env.BASE_URL + "$1"');
  
  // Replace src="./..." with src={import.meta.env.BASE_URL + "..."}
  content = content.replace(/src="\.\/([^"]+)"/g, 'src={import.meta.env.BASE_URL + "$1"}');
  
  // Replace image="./..." with image={import.meta.env.BASE_URL + "..."}
  content = content.replace(/image="\.\/([^"]+)"/g, 'image={import.meta.env.BASE_URL + "$1"}');
  
  // Replace array elements "./..." with import.meta.env.BASE_URL + "..."
  content = content.replace(/"\.\/([^"]+)"/g, 'import.meta.env.BASE_URL + "$1"');
  
  fs.writeFileSync(file, content);
}
console.log('Done');

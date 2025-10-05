const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;
    
    
    // Remove trailing slash
    if (pathname.endsWith('/') && pathname !== '/') {
        pathname = pathname.slice(0, -1);
    }
    
    // Handle clean URLs
    if (pathname === '/menu' || pathname === '/reservation' || pathname === '/a-propos' || pathname === '/contact') {
        pathname = pathname + '.html';
    }
    
    // Default to index.html for root
    if (pathname === '/') {
        pathname = '/index.html';
    }
    
    // Determine file path based on file type
    let filePath;
    if (pathname.endsWith('.html')) {
        // HTML files are in public/pages/
        filePath = path.join(__dirname, '..', '..', 'public', 'pages', pathname);
    } else if (pathname.startsWith('/src/')) {
        // CSS and JS files are in src/
        filePath = path.join(__dirname, '..', '..', pathname);
    } else if (pathname.startsWith('/public/')) {
        // Assets are in public/
        filePath = path.join(__dirname, '..', '..', pathname);
    } else if (pathname.startsWith('/assets/')) {
        // Assets are in public/assets/
        filePath = path.join(__dirname, '..', '..', 'public', pathname);
    } else if (pathname === '/src/css/components/navbar.css') {
        // Special case for navbar.css - it's in src/css/components/
        filePath = path.join(__dirname, '..', '..', 'src', 'css', 'components', 'navbar.css');
    } else {
        // Try to serve from public/pages/ for other files
        filePath = path.join(__dirname, '..', '..', 'public', 'pages', pathname);
    }
    
    
    // Check if file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // File not found
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - Page Not Found</h1>');
            return;
        }
        
        // Get file extension
        const ext = path.extname(filePath);
        let contentType = 'text/html';
        
        switch (ext) {
            case '.css':
                contentType = 'text/css';
                break;
            case '.js':
                contentType = 'application/javascript';
                break;
            case '.json':
                contentType = 'application/json';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.jpg':
            case '.jpeg':
                contentType = 'image/jpeg';
                break;
            case '.svg':
                contentType = 'image/svg+xml';
                break;
        }
        
        // Read and serve file
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Server Error');
                return;
            }
            
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        });
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📁 Serving clean URLs without .html extension`);
    console.log(`🔗 Try: http://localhost:${PORT}/menu`);
    console.log(`📂 HTML files served from: public/pages/`);
    console.log(`📂 CSS/JS files served from: src/`);
});
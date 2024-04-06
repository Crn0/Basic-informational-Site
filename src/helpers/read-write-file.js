import fs from 'node:fs/promises'

class File {
    static async writeFile(html, content, ) {
        
        try {
          
            await fs.writeFile(html, content, { flag: 'wx' });


        } catch (error) {
            
            console.log(error.code)
        }
    };

    static async readFile(path, res, url) {
        try {
            const data = await fs.readFile(path);

            res.write(data);

            return res.end(`<p>path: ${url}</p>`);
        } catch (error) {
            const data = await fs.readFile('./src/html/error.html');
            const errorMessage = url === error ? `<p>path: ${url}</p>` : `<p>path: does not exist ${url} <p/>`
            res.write(data);
            
            return res.end(errorMessage);
        }
    };
};

export default File;
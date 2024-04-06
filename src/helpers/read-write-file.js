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
            console.log(error)
        }
    };
};

export default File;
const fs = require('fs');
const PATH = '../model';
function walk(path, callback) {
    let files = fs.readdirSync(path);

    files.forEach(function (file) {
        if (fs.statSync(path + '/' + file).isFile()) {
            callback(path, file);
        } else {
            walk(`${path}/${file}`, callback)
        }
    });
}

/**
 * [saveFileWithStream description]
 * @param {String} filePath [文件路径]
 * @param {Buffer} readData [Buffer 数据]
 */
function saveFileWithStream(filePath, fileData) {
    // if (!fs.existsSync(filePath)) {
    //     fs.mkdirSync(filePath);
    // }
    // if (!Buffer.isBuffer(fileData)) {
    //     // new Blob([data])
    //     fileData = Buffer.from(fileData);
    //     // console.log(Object.prototype.toString.call(fileData))
    //     // console.log(Buffer.isBuffer(fileData))
    // }
    return new Promise((resolve, reject) => {
        // 块方式写入文件
        const wstream = fs.createWriteStream(filePath);

        wstream.on('open', () => {
            const blockSize = 128;
            const nbBlocks = Math.ceil(fileData.length / (blockSize));
            for (let i = 0; i < nbBlocks; i += 1) {
                const currentBlock = fileData.slice(
                    blockSize * i,
                    Math.min(blockSize * (i + 1), fileData.length),
                );
                wstream.write(currentBlock);
            }
            wstream.end();
        });
        wstream.on('error', (err) => { reject(err); });
        wstream.on('finish', () => { resolve(true); });
    });
}




// --------------

async function main() {
    let modelPath = []
    walk(PATH, function (path, fileName) {
        if (fileName.includes('model.json')) {
            modelPath.push(`${path}/${fileName}`)
        }
    });
    console.log(modelPath)
    // fs.writeFile("test.txt", jsonData, function(err) {
    //     if (err) {
    //         console.log(err);
    //     }
    // });
    try {
        await saveFileWithStream('./data_modelPath.js', `export let name = '模型路径数组';export default ${JSON.stringify(modelPath)}`);
        await saveFileWithStream('./data_modelPath.txt', JSON.stringify(modelPath));
    } catch (err) {
        console.log(err.stack);
    }
}
main()
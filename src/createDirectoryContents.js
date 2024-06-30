import fs from 'fs';
import { join } from 'path';

function createDirectoryContents(sourceDir, targetDir) {
  return new Promise((resolve, reject) => {
    const filesToCreate = fs.readdirSync(sourceDir);
    filesToCreate.forEach(file => {
      const origFilePath = join(sourceDir, file);
      const stats = fs.statSync(origFilePath);

      if (stats.isFile()) {
        let contents = fs.readFileSync(origFilePath, 'utf8');
        const targetFile = file === '.npmignore' ? '.gitignore' : file;
        const writePath = join(targetDir, targetFile);

        fs.writeFileSync(writePath, contents);
      } else if (stats.isDirectory()) {
        const newDirPath = join(targetDir, file);
        if (!fs.existsSync(newDirPath)) {
          fs.mkdirSync(newDirPath);
        }
        createDirectoryContents(join(sourceDir, file), newDirPath);
      }
    });
    resolve();
  });
}

export default createDirectoryContents;

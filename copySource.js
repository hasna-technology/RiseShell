var fs = require('fs');
var path = require('path');
const fsExtra = require('fs-extra')


var version = "0.0.2"
var oldPath = "F:/GIT/Project/HasnaTech/RiseShell";
var newPath = "C:/wamp64/www/course/001_package/template/1/source/" + version;

var excludeArr = ['.vs', 'dist', 'node_modules', 'moveFile.js', 'copySource.js', '.gitignore', '.git']

startOperation();
async function startOperation() {
    await fsExtra.emptyDir(newPath);
    copyFolderRecursiveSync(oldPath, newPath);
    console.log("Version " + version);
}

function copyFileSync(source, target) {
    var targetFile = target;
    //if target is a directory a new file with the same name will be created
    if (fs.existsSync(target)) {
        if (fs.lstatSync(target).isDirectory()) {
            targetFile = path.join(target, path.basename(source));
        }
    }
    fs.writeFileSync(targetFile, fs.readFileSync(source));
    console.log("Copied file to " + targetFile);
}

function copyFolderRecursiveSync(source, target) {
    var files = [];
    //check if folder needs to be created or integrated
    var targetFolder = path.join(target, path.basename(source));
    if (!fs.existsSync(targetFolder)) {
        //fs.mkdirSync( targetFolder );
        fs.mkdirSync(targetFolder, { recursive: true }, err => {
            console.log(err);
        })
    }

    //copy
    if (fs.lstatSync(source).isDirectory()) {
        files = fs.readdirSync(source);
        files.forEach(function (file) {
            if (!isContain(file)) {
                //console.log(file);
                var curSource = path.join(source, file);
                if (fs.lstatSync(curSource).isDirectory()) {
                    copyFolderRecursiveSync(curSource, targetFolder);
                } else {
                    copyFileSync(curSource, targetFolder);
                }
            }
        });
    }

}

function isContain(str) {
    var contain = false;
    excludeArr.forEach(function (val) {

        if (val.toString().toLowerCase() == str.toLowerCase()) {
            //console.log(val.toString().toLowerCase()+" == "+str.toLowerCase());
            contain = true;
        }
    });
    if (contain) {
        return true;
    }
    return false;
}
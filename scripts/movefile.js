var fs = require('fs');
var path = require('path');
const fsExtra = require('fs-extra');

var version = "0.0.2"
var oldPath = "F:/GIT/Project/HasnaTech/RiseShell/dist/";
var newPath = "C:/wamp64/www/course/001_package/template/1/editor/"+version;
//var newPath = "C:/wamp64/www/course/001_package/template/1/preview/"+version;
//var newPath = "C:/wamp64/www/course/001_package/template/1/published/"+version;


var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

switch (myArgs[0]) {
case '-editor':
    newPath = "C:/wamp64/www/course/001_package/template/1/editor/"+version;
    break;
case '-published':
    newPath = "C:/wamp64/www/course/001_package/template/1/published/"+version;
    break;
default:
    newPath = "C:/wamp64/www/course/001_package/template/1/editor/"+version;
}


startOperation();
async function startOperation() {
    await fsExtra.emptyDir(newPath);
    copyFolderRecursiveSync(oldPath, newPath);
    console.log("\nVersion " + version);
}


/*
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Is it publish or editor (p/e) ? ", function (val) {
    if(val == 'e'){
        newPath = "C:/wamp64/www/course/001_package/template/1/editor/"+version;
    }else
    {
        newPath = "C:/wamp64/www/course/001_package/template/1/published/"+version;
    }
    copyFolderRecursiveSync(oldPath, newPath);
    console.log("\nVersion " + version);
    //startCreating();
    rl.close();
});*/


function copyFileSync( source, target ) {
    var targetFile = target;
    //if target is a directory a new file with the same name will be created
    if ( fs.existsSync( target ) ) {
        if ( fs.lstatSync( target ).isDirectory() ) {
            targetFile = path.join( target, path.basename( source ) );
        }
    }
    fs.writeFileSync(targetFile, fs.readFileSync(source));
    console.log("Copied file to " + targetFile);
}

function copyFolderRecursiveSync( source, target ) {
    var files = [];
    //check if folder needs to be created or integrated
    var targetFolder = path.join( target, path.basename( source ) );
    if ( !fs.existsSync( targetFolder ) ) {
        //fs.mkdirSync( targetFolder );
        fs.mkdirSync(targetFolder, {recursive: true}, err => {
            console.log(err);
        })
    }

    //copy
    if ( fs.lstatSync( source ).isDirectory() ) {
        files = fs.readdirSync( source );
        files.forEach( function ( file ) {
            var curSource = path.join( source, file );
            if ( fs.lstatSync( curSource ).isDirectory() ) {
                copyFolderRecursiveSync( curSource, targetFolder );
            } else {
                copyFileSync( curSource, targetFolder );
            }
        } );
    }
    
}
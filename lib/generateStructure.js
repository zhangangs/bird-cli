let promise = require("bluebird"),
    fsFile = promise.promisifyAll(require('fs-extra')),
    fs = require('fs'),
    root = __dirname.replace(/lib/, '');

function generateStructure(info) {
    let project = info.name,
        author = info.author,
        description = info.description,
        date = info.date;

    return fsFile.copyAsync(root + '/template', project, { clobber: true })
        .then(function (err) {
            if (err) {
                return console.error(err);
            }

            //读取文件
            fs.readdir(project, function (err, files) {
                files.forEach(function (filename) {
                    
                    var oldPath = project + '/' + filename;
                    var newPath = project + '/' + filename.replace(/template/g, project);

                    fs.rename(oldPath, newPath, function (err) {
                        if (err) {
                            return console.error(err);
                        }

                        console.log(filename + '新建成功!');

                        //读取文件，修改里面的关键字
                        fs.readFile(newPath, function (err, data) {
                            if (err) {
                                return console.error(err);
                            }

                            var result = data.toString()
                                .replace(/template/g, project)
                                .replace(/\{moduleName\}/g, description)
                                .replace(/\{author\}/g, author)
                                .replace(/\{date\}/g, date);

                            fs.writeFile(newPath, result, function (err) {
                                if (err) {
                                    return console.error(err)
                                }
                            })
                        });
                    })
                })
            })

            /*  console.log('模块新建完成！');
             console.log('-------------------------------')
             console.log('请在app.module.js中注入app.' + project + '模块');
             console.log('请在app.module.js中添加' + project + 'Service服务');
             console.log('完成之后，请重启服务，gulp serve'); */

        })
}

module.exports = generateStructure;

const fs = require("fs")

fs.readFile("./police.json", "utf8", (err, dataSrc) => {
    if (err) {
        return console.log("读取文件错误！" + err.msg)
    }
    
    const oldData = JSON.parse(dataSrc).police.map(e => {
        return {
            policeNo: e.user_no,
            policeName: e.user_name,
            policeID: e.user_id_code,
            sex: e.sex,
            policeType: e.user_type,
            phone1: e.user_phone1,
            phone2: e.user_phone2,
            policeUnitNo: e.user_unit_no,
            policeStatus: e.user_status,
            version: e.version
        }
    })

    fs.writeFile(__dirname + "/result.json", JSON.stringify(oldData), err => {
        err ? console.log("文件写入失败！" + err.message) : console.log("文件写入成功！")
    })
})

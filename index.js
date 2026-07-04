const fs=require('fs')
//read file 
async function ReadFile(){
    const data=await fs.readFileSync('todo2.txt','utf-8')
    console.log(data)
}

//create new file
async function CreateFile(){
    const data=await fs.writeFileSync('adnan.text','hello adnan')
    console.log('file created and read done')
}

//rename the file
async function RenameFile(){
    const data=await fs.renameSync('todo2.txt','rename2.txt')
    console.log('rename success!')
}

//checkout exists
async function existsFileCheckout(){
    const data=await fs.existsSync('rename2.txt')
    console.log(data)
}
(async()=>{
    await existsFileCheckout()
})()
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
//file append
async function appendFile(){
   try {
     const data=await fs.appendFileSync('rename2.txt','text2 added')
    console.log('file apend success!')
   } catch (error) {
    console.log(error)
   }
}
//delete files
async function deleteFile(){
    try {
    const data=await fs.unlinkSync('adnan.text')
    console.log('file is deleted') 
    } catch (error) {
    console.log('failed to delete files')
    }
}

(async()=>{
    await deleteFile()
})()
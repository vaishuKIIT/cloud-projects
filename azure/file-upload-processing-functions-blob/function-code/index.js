module.exports = async function (context, myBlob) {
    const fileName = context.bindingData.name;
    const fileSize = myBlob.length;
    const timestamp = new Date().toISOString();
    
    context.log(`🔥 Processing file: ${fileName}`);
    context.log(`📊 File size: ${fileSize} bytes`);
    context.log(`⏰ Processing time: ${timestamp}`);
    
    // Simulate file processing logic
    if (fileName.toLowerCase().includes('.jpg') || fileName.toLowerCase().includes('.png')) {
        context.log(`🖼️  Image file detected: ${fileName}`);
        context.log(`✅ Image processing completed successfully`);
    } else if (fileName.toLowerCase().includes('.pdf')) {
        context.log(`📄 PDF document detected: ${fileName}`);
        context.log(`✅ PDF processing completed successfully`);
    } else {
        context.log(`📁 Generic file detected: ${fileName}`);
        context.log(`✅ File processing completed successfully`);
    }
    
    context.log(`🎉 File processing workflow completed for: ${fileName}`);
};

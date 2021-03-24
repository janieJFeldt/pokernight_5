const AWS = require('aws-sdk');


AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})


module.exports ={
    getDataObject: function(message){

    return {
        'author':message.author,
        'content':message.content,
        
    }
    
    }
    ,
    saveToDynamo: function (tableName,application){
      const docClient = new AWS.DynamoDB.DocumentClient();

        const params = {
        TableName: tableName,
        Item: {
            // Use Date.now().toString() just to generate a unique value
            id: Date.now().toString(),
            // `info` is used to save the actual data
            info: application
        }
    }
  
  
    docClient.put(params, (error, data) => {
      if (!error) {
        // Finally, return a message to the user stating that the app was saved
        return;
      } else {
        throw "Unable to save record, err" + error
      }
    })
  
  }

}
const AWS = require('aws-sdk');


AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})


module.exports ={
  getFromDynamo: function (keyValue,tableName){
    const docClient = new AWS.DynamoDB.DocumentClient();

      const params = {
      Key: {"id":keyValue},
      TableName: tableName
      
  }


  docClient.get(params, (error, data) => {
    if (!error) {
      // Finally, return a message to the user stating that the app was saved
      // console.log(data);
      return data;

    } else {
      throw "Unable to save record, err" + error
    }
  }).then(data=>{
    return data;
  }).catch(err=>{
    throw err;
  })

}
    ,
    saveToDynamo: function (entryId,tableName,application){
      const docClient = new AWS.DynamoDB.DocumentClient();

        const params = {
        TableName: tableName,
        Item: {
            // Use Date.now().toString() just to generate a unique value
            id: entryId, //Date.now().toString(),
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
module.exports ={ 
    saveToDynamo: function (docClient, application){
        const params = {
        TableName: 'pokerStats',
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
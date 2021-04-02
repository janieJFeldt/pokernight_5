

module.exports ={
  scanFromDynamo: (message,docClient,tableName) => {

  var params = {
    TableName : tableName
    //FilterExpression : 'Year = :this_year',
  };


  var result = docClient.scan(params, (error, data) => {
    if (!error) {
      // Finally, return a message to the user stating that the app was saved
      console.log(data);
      message.channel.send(data.Items[0].id + " had " + data.Items[0].info[0].Hand);
      return data;

    } else {
      throw "Unable to scan records, err" + error
    }

  });
  return result;
}
    ,
    saveToDynamo: function (docClient,entryId,tableName,application){

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
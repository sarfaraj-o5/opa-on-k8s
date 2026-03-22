const https = require('https')
let url = "https://google.com"

exports.handler = async function(event) {
  const promise = new Promise(function(resolve, reject) {
    console.log("Processing URL: "url)
    https.get(url, (res) => {
        resolve(res.statusCode)
        // console for debugging / testing purpose.
        console.info("Request was successfull!!!")
      }).on('error', (e) => {
        reject(Error(e))
        // console for errors
        console.error("Error while processing:" + e)
      })
    })
  return promise
}

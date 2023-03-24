const  { generateApi } =require("swagger-typescript-api")
const  axios = require("axios");
const  path = require("path");
const  fs = require("fs");

const outputDir = path.resolve(process.cwd(), "./src/apis");


// axios.get('http://127.0.0.1:5173/oldschemas.json').then(res => {
//   axios.post('https://converter.swagger.io/api/convert',res.data).then(el => {
//     fs.writeFileSync(path.resolve(process.cwd(), "./public/schemas.json"), JSON.stringify(el.data));
//     generateApi({
//             url: "http://127.0.0.1:5173/schemas.json",
//             // unionEnums: true,
//             // enumNamesAsValues: true,
//             name: 'Apis',
//             output: outputDir,
//             basePath: '/api',
//             modular: true,
//             // moduleNameFirstTag: true,
//             // templates: path.resolve(process.cwd(), './api-templates'),
//             httpClientType: "axios"
//           });
//   })
// })


const { generateApi } = require("swagger-typescript-api");
const axios = require("axios");
const path = require("path");
const fs = require("fs");

function SwaggerToTypescriptPlugin(options) {
  return {
    name: "swagger-to-typescript-plugin",
    async buildStart() {
      const outputDir = path.resolve(process.cwd(), options.outputDir);

      try {
        const {data: sourceData} = await axios.get(options.sourceUrl);
        const {data: result} = await axios.post('https://converter.swagger.io/api/convert', sourceData);
        fs.writeFileSync(
          path.resolve(outputDir, "temp.json"),
          JSON.stringify(result)
        );
        await generateApi({
          url: options.swaggerUrl,
          output: outputDir,
          modular: options.modular,
          httpClientType: options.httpClientType,
        });
        fs.unlinkSync(path.resolve(outputDir, "temp.json"),)
      } catch (error) {
        console.error("SwaggerToTypescriptPlugin error:", error);
      }
    },
  };
}

module.exports = SwaggerToTypescriptPlugin;

import { generateApi } from "swagger-typescript-api";
import axios  from "axios"
import path from 'path'
import fs from 'fs'

function SwaggerToTypescriptPlugin(options) {
  return {
    name: "swagger-to-typescript-plugin",
    async serverStart() {
      console.log('>>>>>>>>开始处理api数据>>>>>>>>>>>>>>>')
      const outputDir = path.resolve(process.cwd(), options.outputDir || './src/apis') ;

      try {
        const {data: sourceData} = await axios.get(options.sourceUrl);
        const {data: result} = await axios.post('https://converter.swagger.io/api/convert', sourceData);
        fs.writeFileSync(
          path.resolve(outputDir, "temp.json"),
          JSON.stringify(result)
        );
        await generateApi({
          url: options.swaggerUrl || "http://127.0.0.1:5173/temp.json",
          output: outputDir,
          modular: true,
          httpClientType: 'axios',
        });
        fs.unlinkSync(path.resolve(outputDir, "temp.json"),)
      } catch (error) {
        console.error("SwaggerToTypescriptPlugin error:", error);
      }
    },
  };
}

module.exports = SwaggerToTypescriptPlugin;

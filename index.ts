import { generateApi } from "swagger-typescript-api";
import axios from "axios";
import path from "path";
import net from "net";
import fs from "fs";

import type { Plugin } from "vite";

interface SwaggerTransformOptions {
  sourceUrl: string;
  outputDir?: string;
  https?: boolean;
  host?: string;
  port?: number;
}

type SwaggerTransform = (options: SwaggerTransformOptions) => Plugin;

const SwaggerTransform: SwaggerTransform = (options) => {
  return {
    name: "swagger-transform",
    configureServer() {
      const outputDir = options.outputDir || "src/apis";
      const host = options.host || "localhost";
      const port = options.port || 5173;
      const apiUrl = `${options.https ? "https" : "http"}://${
        options.host || "localhost"
      }:${options.port || 5173}`;
      const intervalId = setInterval(() => {
        const client = new net.Socket();
        client.connect(port, host, async () => {
          console.log(`Port ${port} on ${host} is open`);
          client.destroy(); // 断开连接
          clearInterval(intervalId);
          try {
            !fs.existsSync(path.resolve(outputDir)) &&
              fs.mkdirSync(path.resolve(outputDir));
            console.log("文件目录创建成功");
            const { data: sourceData } = await axios.get(options.sourceUrl);
            const { data: result } = await axios.post(
              "https://converter.swagger.io/api/convert",
              sourceData
            );
            fs.writeFileSync(
              path.resolve(outputDir, "temp.json"),
              JSON.stringify(result)
            );
            console.log("已转换至openapi3.0");
            console.log(apiUrl);
            await generateApi({
              url: `${apiUrl}/src/apis/temp.json`,
              output: path.resolve(outputDir),
              modular: true,
              httpClientType: "axios",
            });
            fs.unlinkSync(path.resolve(outputDir, "temp.json"));
            console.log("接口文件已生成完毕");
          } catch (error) {
            console.error("SwaggerToTypescriptPlugin error:", error);
          }
        });
      }, 1000);
    },
  };
};

module.exports = SwaggerTransform;

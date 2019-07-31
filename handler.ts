import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";

import { MessagesService as messages } from "./services/messages.service";

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
        input: event
      },
      null,
      2
    )
  };
};

export const getMessages: APIGatewayProxyHandler = async (event, _context) => {
  const messageData = await messages.getMessages();
  const input = event;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        messages: messageData
      },
      null,
      2
    )
  };
};

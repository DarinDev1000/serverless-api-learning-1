import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";

import { MessagesService as messages } from "./services/messages.service";

export const getMessages: APIGatewayProxyHandler = async (event, _context) => {
  const messageData = await messages.getMessages();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        data: messageData,
        input: event
      },
      null,
      2
    )
  };
};

export const addMessage: APIGatewayProxyHandler = async (event, _context) => {
  const body = JSON.parse(event.body);
  console.log(body);
  const response = await messages.addMessages(body);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: response,
        input: event
      },
      null,
      2
    )
  };
};

import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";

import { MessagesService as messages } from "./services/messages.service";

export const getMessages: APIGatewayProxyHandler = async (event, _context) => {
  const messageData = await messages.getMessages();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        messages: messageData,
        input: event
      },
      null,
      2
    )
  };
};

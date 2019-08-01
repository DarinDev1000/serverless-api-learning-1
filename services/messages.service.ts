// import { mysql2 as mysql} from "mysql2/promise";
const mysql = require('mysql2/promise');
// import { DatabaseService as db } from "./database.service";

export class MessagesService {

  static async getMessages() {
    // const con = this.createDatabaseConnection();

    // console.log('input: ', input);

    console.log('stage: ', process.env.STAGE);
    // console.log('db host: ', process.env.MYSQL_HOST);
    // console.log('db host: ', process.env.MYSQL_USER);
    // console.log('db host: ', process.env.MYSQL_PASS);
    // console.log('db host: ', process.env.MYSQL_DATABASE);

    const databaseInfo = {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DATABASE
    };
    const con = await mysql.createConnection(databaseInfo);


    try {
      // const [rows, fields] = await con.execute('SELECT * FROM messages');
      const [messages] = await con.query('SELECT * FROM messages');
      console.log(messages);
      return messages;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  static async addMessages(data) {
    console.log('stage: ', process.env.STAGE);

    const databaseInfo = {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DATABASE
    };
    const con = await mysql.createConnection(databaseInfo);

    // console.log('Data: ', data);

    try {
      let numberAdded = 0;
      for (const id in data) {
        // console.log(data[id]);
        // const [response] = await con.query(`
        await con.query(`
          INSERT INTO messages (messageTitle, messageContent)
          VALUES (?, ?)`,
          [data[id].messageTitle, data[id].messageContent]
        );
        // console.log(response);
        numberAdded++;
      }
      const response = `Added ${numberAdded} messages!`;
      console.log(response);
      return response;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  // static async createDatabaseConnection() {
  //   try {
  //     const databaseInfo = {
  //       host: process.env.MYSQL_HOST,
  //       user: process.env.MYSQL_USER,
  //       password: process.env.MYSQL_PASS,
  //       database: process.env.MYSQL_DATABASE
  //     };
  //     return await mysql.createConnection(databaseInfo);
  //   } catch (e) {
  //     console.error(e);
  //     throw e;
  //   }
  // }
}

// export default MessagesService;
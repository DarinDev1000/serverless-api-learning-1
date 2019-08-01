// import { mysql2 as mysql} from "mysql2/promise";
// // const mysql = require('mysql2/promise');
// import { DatabaseService as db } from "./database.service";

// export class MessagesService {

//   static async getMessages() {
//     // const con = this.createDatabaseConnection();

//     // console.log('input: ', input);

//     console.log('stage: ', process.env.STAGE);
//     // console.log('db host: ', process.env.MYSQL_HOST);
//     // console.log('db host: ', process.env.MYSQL_USER);
//     // console.log('db host: ', process.env.MYSQL_PASS);
//     // console.log('db host: ', process.env.MYSQL_DATABASE);


//     const con = await db.createDatabaseConnection();


//     try {
//       // const [rows, fields] = await con.execute('SELECT * FROM messages');
//       const [messages] = await con.query('SELECT * FROM messages');
//       console.log(messages);
//       return messages;
//     } catch (e) {
//       console.error(e);
//       throw e;
//     }
//   }

//   // static async createDatabaseConnection() {
//   //   try {
//   //     const databaseInfo = {
//   //       host: process.env.MYSQL_HOST,
//   //       user: process.env.MYSQL_USER,
//   //       password: process.env.MYSQL_PASS,
//   //       database: process.env.MYSQL_DATABASE
//   //     };
//   //     const dbc = await mysql.createConnection(databaseInfo);
//   //     return dbc;
//   //   } catch (e) {
//   //     console.error(e);
//   //     throw e;
//   //   }
//   // }
// }

// // export default MessagesService;
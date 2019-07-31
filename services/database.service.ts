// import { mysql2 as mysql} from "mysql2";

// export class DatabaseService {

//   constructor() {}

//   static async createDatabaseConnection() {
//     try {
//       const databaseInfo = {
//         host: process.env.MYSQL_HOST,
//         user: process.env.MYSQL_USER,
//         password: process.env.MYSQL_PASS,
//         database: process.env.MYSQL_DATABASE
//       };
//       const databaseConnection = await mysql.createConnection(databaseInfo);
//       return databaseConnection;
//     } catch (e) {
//       console.error(e);
//       throw e;
//     }
//   }
// }

// // export DatabaseService;
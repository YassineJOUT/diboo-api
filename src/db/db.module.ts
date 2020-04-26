/*
  * @file-description : this file connects to the mongoDb altas database on the cloud
  * @author{Yassine JOUT} yassinejout@gmail.com
*/

// Import the required modules
import { MongooseModule } from '@nestjs/mongoose'
//export the database module that connects to mongoDb altas on the cloud
export const DatabaseModule = MongooseModule.forRoot('mongodb+srv://yassine:zCrWOvp9CPdPHC99@cluster0-jihfc.mongodb.net/diboo?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true  });

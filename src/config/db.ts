import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
config();

export const mongooseModule = MongooseModule.forRoot(
  'mongodb+srv://' +
  process.env.DATABASE_USER +
  ':' +
  process.env.DATABASE_PASSWORD +
  '@cluster0-jihfc.mongodb.net/diboo?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
);

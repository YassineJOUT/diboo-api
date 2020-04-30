import { MongooseModule } from '@nestjs/mongoose';

export const mongooseModule = MongooseModule.forRoot(
  'mongodb+srv://yassine:@cluster0-jihfc.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true 
  }
);

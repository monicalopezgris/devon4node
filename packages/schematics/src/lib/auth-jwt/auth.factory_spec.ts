import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import * as path from 'path';

describe('Typeorm Factory', () => {
  const runner: SchematicTestRunner = new SchematicTestRunner(
    '.',
    path.join(process.cwd(), 'src/collection.json'),
  );
  it('should set on module app', () => {
    const app: object = {
      name: 'path',
    };
    let tree: UnitTestTree = runner.runSchematic('application', app);
    const options: object = {
      path: 'path'
    };
    tree = runner.runSchematic('auth-jwt', options, tree);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/path/src/app/core/core.module.ts'),
    ).toBeDefined();
    expect(tree.readContent('/path/src/app/core/core.module.ts')).toEqual(
      "import { Global, Module } from '@nestjs/common';\n" +
      "import { ClassSerializerInterceptor } from '@devon4node/common/serializer';\n" +
      "import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';\n" +
      "import { WinstonLogger } from '../shared/logger/winston.logger';\n" +
      "import { BusinessLogicFilter } from '../shared/filters/business-logic.filter';\n" +
      "import { AuthModule } from './auth/auth.module';\n" +
      "import { UserModule } from './user/user.module';\n" +
      "\n" +
      "@Global()\n" +
      "@Module({\n" +
      "  imports: [UserModule, AuthModule],\n" +
      "  controllers: [],\n" +
      "  providers: [\n" +
      "    { provide: APP_FILTER, useClass: BusinessLogicFilter },\n" +
      "    { provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor },\n" +
      "    WinstonLogger,\n" +
      "  ],\n" +
      "  exports: [UserModule, AuthModule, WinstonLogger],\n" +
      "})\n" +
      "export class CoreModule {}\n"
    );
  });
});
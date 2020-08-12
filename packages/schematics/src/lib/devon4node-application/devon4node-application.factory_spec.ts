import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(process.cwd(), 'src/collection.json');

describe('Application Factory', () => {
  const runner: SchematicTestRunner = new SchematicTestRunner(
    '.',
    collectionPath
  );
  it('should manage name only', () => {
    const options: object = {
      name: 'project',
    };
    const tree: UnitTestTree = runner.runSchematic('application', options);
    const files: string[] = tree.files;
    expect(files).toEqual([
      '/project/.prettierrc',
      '/project/nest-cli.json',
      '/project/package.json',
      '/project/README.md',
      '/project/tsconfig.build.json',
      '/project/tsconfig.json',
      '/project/.eslintrc.js',
      '/project/src/main.ts',
      '/project/src/app/app.controller.spec.ts',
      '/project/src/app/app.controller.ts',
      '/project/src/app/app.module.ts',
      '/project/src/app/app.service.ts',
      '/project/src/app/core/core.module.ts',
      '/project/src/app/shared/exceptions/business-logic.exception.ts',
      '/project/src/app/shared/filters/business-logic.filter.spec.ts',
      '/project/src/app/shared/filters/business-logic.filter.ts',
      '/project/src/app/shared/logger/winston.logger.ts',
      '/project/test/app.e2e-spec.ts',
      '/project/test/jest-e2e.json',
      '/project/.vscode/extensions.json',
      '/project/.vscode/settings.json'
    ]);
  });
  // it('should manage name to dasherize', () => {
  //   const options: object = {
  //     name: 'awesomeProject',
  //   };
  //   const tree: UnitTestTree = runner.runSchematic('application', options);
  //   const files: string[] = tree.files;
  //   expect(files).toEqual([
  //     '/awesome-project/.eslintrc.js',
  //     '/awesome-project/README.md',
  //     '/awesome-project/.gitignore',
  //     '/awesome-project/.prettierrc',
  //     '/awesome-project/nest-cli.json',
  //     '/awesome-project/package.json',
  //     '/awesome-project/tsconfig.build.json',
  //     '/awesome-project/tsconfig.json',
  //     '/awesome-project/src/app.controller.spec.ts',
  //     '/awesome-project/src/app.controller.ts',
  //     '/awesome-project/src/app.module.ts',
  //     '/awesome-project/src/app.service.ts',
  //     '/awesome-project/src/main.ts',
  //     '/awesome-project/test/app.e2e-spec.ts',
  //     '/awesome-project/test/jest-e2e.json',
  //   ]);
  // });
  // it('should manage javascript files', () => {
  //   const options: object = {
  //     name: 'project',
  //     language: 'js',
  //   };
  //   const tree: UnitTestTree = runner.runSchematic('application', options);
  //   const files: string[] = tree.files;
  //   expect(files).toEqual([
  //     '/project/.babelrc',
  //     '/project/README.md',
  //     '/project/.gitignore',
  //     '/project/.prettierrc',
  //     '/project/index.js',
  //     '/project/jsconfig.json',
  //     '/project/nest-cli.json',
  //     '/project/nodemon.json',
  //     '/project/package.json',
  //     '/project/src/app.controller.js',
  //     '/project/src/app.controller.spec.js',
  //     '/project/src/app.module.js',
  //     '/project/src/app.service.js',
  //     '/project/src/main.js',
  //     '/project/test/app.e2e-spec.js',
  //     '/project/test/jest-e2e.json',
  //   ]);
  // });
  // it('should manage destination directory', () => {
  //   const options: object = {
  //     name: '@scope/package',
  //     directory: 'scope-package',
  //   };
  //   const tree: UnitTestTree = runner.runSchematic('application', options);
  //   const files: string[] = tree.files;
  //   expect(files).toEqual([
  //     '/scope-package/.eslintrc.js',
  //     '/scope-package/.gitignore',
  //     '/scope-package/.prettierrc',
  //     '/scope-package/README.md',
  //     '/scope-package/nest-cli.json',
  //     '/scope-package/package.json',
  //     '/scope-package/tsconfig.build.json',
  //     '/scope-package/tsconfig.json',
  //     '/scope-package/src/app.controller.spec.ts',
  //     '/scope-package/src/app.controller.ts',
  //     '/scope-package/src/app.module.ts',
  //     '/scope-package/src/app.service.ts',
  //     '/scope-package/src/main.ts',
  //     '/scope-package/test/app.e2e-spec.ts',
  //     '/scope-package/test/jest-e2e.json',
  //   ]);
  // });
});